import * as types from './../actions/actionTypes';

const initialState = {
  tasks: [],
  taskName: '',
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_INPUT:
      return Object.assign({}, state, { taskName: action.taskName });
    case types.ADD_TASK:
      return Object.assign({}, state, { tasks: [...state.tasks, action.task], taskName: '' });
    case types.DELETE_TASK:
      return Object.assign({}, state, { tasks: state.tasks.slice(0, action.index).concat(state.tasks.slice(action.index + 1)) });
    case types.MARK_COMPLETED:
      return Object.assign({}, state, {
        tasks: state.tasks.map((task, i) => {
          if (i === action.index) {
            return Object.assign({}, task, {
              isDone: !task.isDone,
            });
          }
          return task;
        }),
      });
    default:
      return state;
  }
}

export default todoReducer;
