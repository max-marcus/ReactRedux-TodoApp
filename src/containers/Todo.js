import React, { Component, PropTypes } from 'react';
import TodoHeader from '../components/TodoHeader';
import TodoList from '../components/TodoList';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  render() {
    return (
      <div>
        <TodoHeader />
        <TodoList />
      </div>
    );
  }
}

Todo.propTypes = {
  
};

export default Todo;