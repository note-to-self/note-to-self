import { createAction } from 'promise-middleware-redux';
import { postNote } from '../services/herokuApi';

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

export const UPDATE_REPEAT_TIME = 'UPDATE_REPEAT_TIME';
export const updateRepeatTime = repeatTime => ({
  type: UPDATE_REPEAT_TIME,
  payload: repeatTime
});

export const UPDATE_REPEAT_DAY = 'UPDATE_REPEAT_DAY';
export const updateRepeatDay = repeatDay => ({
  type: UPDATE_REPEAT_DAY,
  payload: repeatDay
});
