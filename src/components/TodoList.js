import React, { PropTypes } from 'react';
import Task from './Task';

const TodoList = (props) => {
  const tasks = props.tasks.map((task, i) => {
    return (
      <Task
        key={i}
        task={task}
        deleteTask={props.deleteTask}
        toggleDone={props.toggleDone}
      />
    );
  });

  return (
    <div>
      {tasks}
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.array,
  deleteTask: PropTypes.func,
  toggleDone: PropTypes.func,
};

export default TodoList;
