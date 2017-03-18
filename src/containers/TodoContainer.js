import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TodoHeader from './../components/TodoHeader';
import TodoList from './../components/TodoList';
import * as actions from './../actions/todoActions';

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

const mapStateToProps = (state) => {
  return {
    tasks: state.todo.tasks,
    taskName: state.todo.taskName,
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

TodoContainer.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  taskName: PropTypes.string,
  changeTaskName: PropTypes.func,
  addTask: PropTypes.func,
  toggleDone: PropTypes.func,
  deleteTask: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
