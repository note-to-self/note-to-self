import { createAction } from 'promise-middleware-redux';
import { getUserFaves, updateUserFaves, addUserFaves, removeUserFaves } from '../services/notesApi';

export const [
  fetchFaves,
  FETCH_FAVES,
  FETCH_FAVES_PENDING,
  FETCH_FAVES_FULFILLED,
  FETCH_FAVES_REJECTED
] = createAction('FETCH_FAVES', getUserFaves);

export const [
  addFaves,
  ADD_FAVES,
  ADD_FAVES_PENDING,
  ADD_FAVES_FULFILLED,
  ADD_FAVES_REJECTED
] = createAction('ADD_FAVES', addUserFaves);

export const [
  removeFaves,
  REMOVE_FAVES,
  REMOVE_FAVES_PENDING,
  REMOVE_FAVES_FULFILLED,
  REMOVE_FAVES_REJECTED
] = createAction('REMOVE_FAVES', removeUserFaves);
