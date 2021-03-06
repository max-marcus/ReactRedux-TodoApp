import * as types from './actionTypes';

export function addTaskActionCreator(task) {
  return {
    type: types.ADD_TASK,
    task,
  };
}

export function updateTaskActionCreator(taskName) {
  return {
    type: types.UPDATE_INPUT,
    taskName,
  };
}

export function deleteTaskActionCreator(taskIndex) {
  return {
    type: types.DELETE_TASK,
    index: taskIndex,
  };
}

export function markTaskActionCreator(taskIndex) {
  return {
    type: types.MARK_COMPLETED,
    index: taskIndex,
  };
}
