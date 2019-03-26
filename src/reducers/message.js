import { CREATE_MESSAGE, UPDATE_DATE, UPDATE_MESSAGE, UPDATE_TIME, UPDATE_PUBLIC } from '../actions/message';

const initialState = {
  date: '',
  time: '',
  message: '',
  public: ''
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
    case UPDATE_PUBLIC: 
      return {
        ...state,
        public: payload
      };
    default:
      return state;
  }
}
