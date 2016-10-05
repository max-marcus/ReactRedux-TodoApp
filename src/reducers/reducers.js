import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const reducers = combineReducers({
  // if you have multiple reducers you can add them below todo
  todo: todoReducer,
});

export default reducers;
