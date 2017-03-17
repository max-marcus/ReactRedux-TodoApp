import React, { PropTypes } from 'react';
import TodoHeader from './../components/TodoHeader';
import TodoList from './../components/TodoList';

const TodoContainer = (props) => (
  <div>
    <TodoHeader
      updateTask={props.changeTaskName}
      addTask={props.addTask}
      taskName={props.taskName}
    />
    <TodoList
      tasks={props.tasks}
      deleteTask={props.deleteTask}
      toggleDone={props.toggleDone}
    />
  </div>
);

TodoContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskName: PropTypes.string,
  changeTaskName: PropTypes.func,
  addTask: PropTypes.func,
  toggleDone: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default TodoContainer;
