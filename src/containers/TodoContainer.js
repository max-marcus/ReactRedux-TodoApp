import React, { Component, PropTypes } from 'react';
import TodoHeader from './../components/TodoHeader';
import TodoList from './../components/TodoList';

class TodoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: '',
      tasks: [],
    };

    this.changeTaskName = this.changeTaskName.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
  }

  changeTaskName(e) {
    const taskName = e.target.value;
    this.setState({ taskName });
  }

  addTask(e) {
    e.preventDefault();
    if (this.state.taskName !== '') {
      const tasks = [].concat(this.state.tasks);
      tasks.push({
        description: this.state.taskName,
        isDone: false,
        createdAt: Date.now().toString(),
      });
      this.setState({ tasks, taskName: '' });
    }
  }

  toggleDone(task) {
    const tasks = [].concat(this.state.tasks);
    const index = tasks.indexOf(task);
    tasks[index].isDone = !tasks[index].isDone;
    this.setState({ tasks });
  }

  deleteTask(task) {
    const tasks = [].concat(this.state.tasks);
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    this.setState({ tasks });
  }

  render() {
    return (
      <div>
        <TodoHeader
          updateTask={this.changeTaskName}
          addTask={this.addTask}
          taskName={this.state.taskName}
        />
        <TodoList
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          toggleDone={this.toggleDone}
        />
      </div>
    );
  }
}

TodoContainer.propTypes = {
  
};

export default TodoContainer;
