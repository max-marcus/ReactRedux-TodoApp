import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoContainer from './TodoContainer';
import store from './../store';
import * as types from './../actions/actionTypes';
import * as actions from './../actions/todoActions';

class App extends Component {
  render() {
    return (
      <div>
        <TodoContainer
          tasks={this.props.tasks}
          taskName={this.props.taskName}
          changeTaskName={this.props.changeTaskName}
          addTask={this.props.addTask}
          toggleDone={this.props.toggleDone}
          deleteTask={this.props.deleteTask}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    taskName: state.taskName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTaskName: (taskName) => {
      dispatch(actions.updateTaskActionCreator(taskName));
    },
    addTask: (task) => {
      dispatch(actions.addTaskActionCreator(task));
    },
    toggleDone: (index) => {
      dispatch(actions.markTaskActionCreator(index));
    },
    deleteTask: (index) => {
      dispatch(actions.deleteTaskActionCreator(index));
    },
  };
};

App.propTypes = {
  tasks: React.PropTypes.arrayOf(React.PropTypes.object),
  taskName: React.PropTypes.string,
  changeTaskName: React.PropTypes.func,
  addTask: React.PropTypes.func,
  toggleDone: React.PropTypes.func,
  deleteTask: React.PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
