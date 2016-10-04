import React, { PropTypes } from 'react';

const AddTodo = (props) => (
  <div>
    <input onChange={props.handleInput} onKeyPress={props.handleKeyPress} value={props.taskName} />
  </div>
);

AddTodo.propTypes = {

};

export default AddTodo;