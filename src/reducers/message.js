

import { CREATE_MESSAGE, UPDATE_DATE, UPDATE_MESSAGE, UPDATE_TIME, UPDATE_REPEAT, UPDATE_REPEAT_DAY, UPDATE_REPEAT_TIME, UPDATE_PRIVATE  } from '../actions/message';

const initialState = {
  date: '',
  time: '',
  privateMessage: true,
  message: '',
  repeat: false,
  repeatTime: '',
  repeatDay: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_MESSAGE:
      return {
        ...state,
        message: payload.message,
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
        private: payload
      };
    case UPDATE_MESSAGE:
      return {
        ...state,
        message: payload
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
    case UPDATE_REPEAT_DAY: 
      return {
        ...state,
        repeatDay: payload
      };
    case UPDATE_REPEAT_TIME: 
      return {
        ...state,
        repeatTime: payload
      };
    default:
      return state;
  }
}
