import React, { PropTypes } from 'react';
import Task from './Task';

const TodoList = (props) => {
  console.log('todo list props: ', props);
  const tasks = props.tasks.map((task, i) => (
    <Task
      key={i}
      task={task}
      toggleDone={props.toggleDone}
      deleteTask={props.deleteTask}
    />
  ));

  return (
    <div>
      {tasks}
    </div>
  );
};

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(React.PropTypes.object),
  deleteTask: PropTypes.func,
  toggleDone: PropTypes.func,
};

export default TodoList;
