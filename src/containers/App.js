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
        <TodoContainer />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    tasks: store.tasks,
    taskName: store.taskName,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    changeTaskName: (target) => {
      dispatch(actions.updateTaskActionCreator(target));
    },
    addTask: ()
  }
}

App.propTypes = {

};

export default App;
