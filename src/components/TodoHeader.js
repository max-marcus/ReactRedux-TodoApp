import React, { PropTypes } from 'react';
import AddTodo from './AddTodo';


const TodoHeader = (props) => (
  <header>
    <h1>Todo List</h1>
    <AddTodo
      updateTask={props.updateTask}
      addTask={props.addTask}
      taskName={props.taskName}
    />
  </header>
);

TodoHeader.propTypes = {
  taskName: PropTypes.string,
  updateTask: PropTypes.func,
  addTask: PropTypes.func,
};

export default TodoHeader;
