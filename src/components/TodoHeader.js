import React, { PropTypes } from 'react';
import AddTodo from './AddTodo';

const TodoHeader = (props) => (
  <div>
    <h1>Todo List</h1>
      <AddTodo handleInput={props.handleInput} handleKeyPress={props.handleKeyPress} taskName={props.taskName} />
  </div>
);

TodoHeader.propTypes = {

};

export default TodoHeader;