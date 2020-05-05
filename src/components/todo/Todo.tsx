import React, { useState } from 'react';
import StyledTodo from './styles';
import TodoItem from '../TodoItem/TodoItem';

interface Item {
  id: number;
  text: string;
}

const DEFAULT_ITEMS: Item[] = [
  { id: 1, text: 'Convert my App to TypeScript' },
  { id: 2, text: 'Get a coffee' },
];

const Todo = () => {
  const [items, setItems] = useState(DEFAULT_ITEMS);
  const [inputVal, setInputVal] = useState('');

  const deleteItem = (id: number) =>
    setItems([...items.filter((i) => i.id !== id)]);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };

  return (
    <StyledTodo>
      <div className='todo__add'>
        <input type='text' value={inputVal} onChange={onChangeHandler} />
        <button
          onClick={(e) =>
            setItems([...items, { id: items.length + 1, text: inputVal }])
          }
        >
          Add stuff
        </button>
      </div>
      <div className='todo__items'>
        {items.map((t: Item) => (
          <TodoItem key={t.id} id={t.id} text={t.text} onDelete={deleteItem} />
        ))}
      </div>
    </StyledTodo>
  );
};

export default Todo;
