

import { CREATE_MESSAGE, UPDATE_DATE, UPDATE_MESSAGE, UPDATE_TIME, UPDATE_REPEAT, UPDATE_DAILY, UPDATE_WEEKLY, UPDATE_PRIVATE  } from '../actions/message';

const initialState = {
  date: '',
  time: '',
  privateMessage: false,
  body: '',
  repeat: false,
  daily: false,
  weekly: false,
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        body: payload.body,
        date: payload.date,
        time: payload.time,
      };
    case UPDATE_DATE:
      return {
        ...state,
        date: payload
      };
    case UPDATE_PRIVATE:
      return {
        ...state,
        privateMessage: payload
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        body: payload
      };
    case UPDATE_TIME: 
      return {
        ...state,
        time: payload
      };
    case UPDATE_REPEAT: 
      return {
        ...state,
        repeat: payload
      };
    case UPDATE_DAILY: 
      return {
        ...state,
        daily: payload
      };
    case UPDATE_WEEKLY: 
      return {
        ...state,
        weekly: payload
      };
    default:
      return state;
  }
}
