import React, { PropTypes } from 'react';
import Task from './Task';

const TodoList = (props) => (
  <div>
    { 
      props.tasks.map((task, index) => 
        <Task key={index} id={index} handleClick={props.handleClick.bind(this, index)} handleDelete={props.handleDelete.bind(this, index)} description={task}/>
      ) 
    }
  </div>
);

TodoList.propTypes = {

};

export default TodoList;