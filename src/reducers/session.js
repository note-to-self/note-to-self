import { SET_SESSION, CREATE_USER, UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_NAME, UPDATE_PHONE } from '../actions/session';

const initialState = {
  token: '',
  id: '', 
  name: '',
  profilePicture:'',
  password: '',
  phone: '',
  email: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SET_SESSION: 
      return {
        ...payload
      };
    case CREATE_USER:
      return {
        ...state,
        name: payload.name,
        password: payload.password,
        phone: payload.phone,
        email: payload.email
      };
    case UPDATE_EMAIL:
      return {
        ...state,
        email: payload
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: payload
      };
    case UPDATE_NAME: 
      return {
        ...state,
        name: payload
      };
    case UPDATE_PHONE: 
      return {
        ...state,
        phone: payload
      };
    default:
      return state;
  }
}
