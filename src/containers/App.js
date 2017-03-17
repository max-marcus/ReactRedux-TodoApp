import { connect } from 'react-redux';
import TodoContainer from './TodoContainer';
import * as actions from './../actions/todoActions';

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

const App = connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

export default App;
