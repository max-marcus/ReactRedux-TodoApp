import React, { Component, PropTypes } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isDone: false,
      description: '',
      createdAt: '',
      taskName: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInput(e) {
    this.setState({ taskName: e.target.value });
  }

  handleKeyPress(e) {
    if (e.which === 13) {
      this.setState({ 
        tasks: this.state.tasks.concat([e.target.value]),
        taskName: '',
      });
    }
  }

  handleClick(taskIndex, e) {
    
  }

  handleDelete(taskIndex, e) {
    this.setState({
      tasks: this.state.tasks.filter((_, index) => taskIndex !== index)
    });
  }

  render() {
    return (
      <div>
        <TodoHeader handleInput={this.handleInput} handleKeyPress={this.handleKeyPress} taskName={this.state.taskName} />
        <TodoList handleClick={this.handleClick} handleDelete={this.handleDelete} tasks={this.state.tasks} />
      </div>
    );
  }
}

Todo.propTypes = {
  
};

export default Todo;