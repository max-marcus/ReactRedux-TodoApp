import React, { PropTypes } from 'react';

const TodoHeader = (props) => (
  <div>
    <h1>Todo List</h1>
  </div>
);

TodoHeader.propTypes = {
  taskName: PropTypes.string,
};

export default TodoHeader;