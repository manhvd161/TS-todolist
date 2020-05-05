import React from 'react';
import StyledTodoItem from './styles';
import PropTypes from 'prop-types';

interface Props {
  id: number;
  text: string;
  onDelete: Function;
}

const TodoItem = ({ id, text, onDelete }: Props) => {
  return (
    <StyledTodoItem>
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>X</button>
    </StyledTodoItem>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
