import React, { PropTypes } from 'react';

const Task = (props) => {
  const { task, deleteTask, toggleDone, index } = props;

  return (
    <article>
      <span className={task.isDone ? 'strike' : ''} onClick={() => { toggleDone(index); }}>{task.description}</span>
      <button onClick={() => { deleteTask(index); }}>Delete</button>
    </article>
  );
};

Task.propTypes = {
  index: PropTypes.number,
  task: PropTypes.objectOf({
    description: PropTypes.string,
    isDone: PropTypes.bool,
    createdAt: PropTypes.string,
  }),
  deleteTask: PropTypes.func,
  toggleDone: PropTypes.func,
};

export default Task;
