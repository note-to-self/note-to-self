import { SET_SESSION, CREATE_USER } from '../actions/session';

const initialState = {
  token: '',
  id: '', 
  name: '',
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
    default:
      return state;
  }
}
