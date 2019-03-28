

import { CREATE_MESSAGE, UPDATE_DATE, UPDATE_MESSAGE, UPDATE_TIME, UPDATE_DAILY, UPDATE_IS_REPEATED, UPDATE_WEEKLY, UPDATE_PRIVATE  } from '../actions/message';

const initialState = {
  date: '',
  time: '',
  privateMessage: false,
  body: '',
  repeat: {
    daily: false,
    weekly: false
  },
  isRepeated: false,
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
    case UPDATE_IS_REPEATED:
      return {
        ...state,
        isRepeated: payload
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
    case UPDATE_DAILY: 
      return {
        ...state,
        repeat: {
          daily: payload,
          weekly: false
        }
      };
    case UPDATE_WEEKLY: 
      return {
        ...state,
        repeat: {
          daily: false,
          weekly: payload
        }
      };
    default:
      return state;
  }
}
