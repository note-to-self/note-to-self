import { createAction } from 'promise-middleware-redux';
import { handleAuth } from '../services/auth';

export const [
  setSession,
  SET_SESSION,
  SET_SESSION_PENDING,
  SET_SESSION_FULFILLED,
  SET_SESSION_REJECTED
] = createAction('SET_SESSION', handleAuth);

export const CREATE_USER = 'CREATE_USER';
export const createUser = (user) => ({
  type: CREATE_USER,
  payload: user
});

export const UPDATE_NAME = 'UPDATE_NAME';
export const updateName = name => ({
  type: UPDATE_NAME,
  payload: name
});

export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const updateEmail = email => ({
  type: UPDATE_EMAIL,
  payload: email
});

export const UPDATE_PHONE = 'UPDATE_PHONE';
export const updatePhone = phone => ({
  type: UPDATE_PHONE,
  payload: phone
});

export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const updatePassword = password => ({
  type: UPDATE_PASSWORD,
  payload: password
});
