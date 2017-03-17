import React, { PropTypes } from 'react';

const AddTodo = (props) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      if (props.taskName !== '') {
        props.addTask({
          description: props.taskName,
          isDone: false,
          createdAt: Date.now().toString(),
        });
      }
    }}
  >
    <input
      value={props.taskName}
      onChange={e => { props.updateTask(e.target.value); }}
    />
  </form>
);

AddTodo.propTypes = {
  taskName: PropTypes.string,
  updateTask: PropTypes.func,
  addTask: PropTypes.func,
};

export default AddTodo;
