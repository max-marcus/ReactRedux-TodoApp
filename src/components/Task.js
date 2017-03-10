import React, { PropTypes } from 'react';

const Task = (props) => {
  const { task, deleteTask, toggleDone } = props;

  return (
    <article>
      <span className={task.isDone ? 'strike' : ''} onClick={() => { toggleDone(task); }}>{task.description}</span>
      <button onClick={() => { deleteTask(task); }}>Delete</button>
    </article>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  deleteTask: PropTypes.func,
  toggleDone: PropTypes.func,
};

export default Task;
