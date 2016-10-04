import React, { PropTypes } from 'react';

const Task = (props) => (
  <div>
    <h1 onClick={props.handleClick}>{props.description} <button onClick={props.handleDelete}> X </button></h1>
  </div>
);

Task.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Task;