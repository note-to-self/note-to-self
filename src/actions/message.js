import { createAction } from 'promise-middleware-redux';
import { postNote } from '../services/notesApi';

export const [
  createMessage,
  CREATE_MESSAGE,
  CREATE_MESSAGE_PENDING,
  CREATE_MESSAGE_FULFILLED,
  CREATE_MESSAGE_REJECTED
] = createAction('CREATE_MESSAGE', postNote);
  

export const UPDATE_DATE = 'UPDATE_DATE';
export const updateDate = date => ({
  type: UPDATE_DATE,
  payload: date
});

export const UPDATE_PRIVATE = 'UPDATE_PRIVATE';
export const updatePrivateMessage = value => ({
  type: UPDATE_PRIVATE,
  payload: value
});

export const UPDATE_TIME = 'UPDATE_TIME';
export const updateTime = time => ({
  type: UPDATE_TIME,
  payload: time
});

export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const updateMessage = message => ({
  type: UPDATE_MESSAGE,
  payload: message
});

export const UPDATE_REPEAT = 'UPDATE_REPEAT';
export const updateRepeat = value => ({
  type: UPDATE_REPEAT,
  payload: value
});

export const UPDATE_DAILY = 'UPDATE_DAILY';
export const updateDaily = value => ({
  type: UPDATE_DAILY,
  payload: value
});

export const UPDATE_WEEKLY = 'UPDATE_WEEKLY';
export const updateWeekly = value => ({
  type: UPDATE_WEEKLY,
  payload: value
});

