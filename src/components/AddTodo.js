import React, { PropTypes } from 'react';

const AddTodo = (props) => (
  <form onSubmit={(e) => { props.addTask(e); }}>
    <input
      value={props.taskName}
      onChange={(e) => { props.updateTask(e); }}
    />
  </form>
);

AddTodo.propTypes = {
  taskName: PropTypes.string,
  updateTask: PropTypes.func,
  addTask: PropTypes.func,
};

export default AddTodo;
