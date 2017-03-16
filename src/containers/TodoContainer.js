import React, { PropTypes } from 'react';
import TodoHeader from './../components/TodoHeader';
import TodoList from './../components/TodoList';

const TodoContainer = (props) => (
  <div>
    <TodoHeader
      updateTask={props.changeTaskName}
      addTask={props.addTask}
      taskName={props.taskName}
    />
    <TodoList
      tasks={props.tasks}
      deleteTask={props.deleteTask}
      toggleDone={props.toggleDone}
    />
  </div>
);

  // toggleDone(task) {
  //   const tasks = [].concat(this.state.tasks);
  //   const index = tasks.indexOf(task);
  //   tasks[index].isDone = !tasks[index].isDone;
  //   this.setState({ tasks });
  // }

  // deleteTask(task) {
  //   const tasks = [].concat(this.state.tasks);
  //   const index = tasks.indexOf(task);
  //   tasks.splice(index, 1);
  //   this.setState({ tasks });
  // }

TodoContainer.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.object),
  taskName: React.PropTypes.string,
  changeTaskName: React.PropTypes.func,
  addTask: React.PropTypes.func,
  toggleDone: React.PropTypes.func,
  deleteTask: React.PropTypes.func,
};

export default TodoContainer;
