import { createAction } from 'promise-middleware-redux';
import { getUserFaves, updateUserFaves } from '../services/favorites';

export const [
  fetchFaves,
  FETCH_FAVES,
  FETCH_FAVES_PENDING,
  FETCH_FAVES_FULFILLED,
  FETCH_FAVES_REJECTED
] = createAction('FETCH_FAVES', getUserFaves);

export const [
  updateFaves,
  UPDATE_FAVES,
  UPDATE_FAVES_PENDING,
  UPDATE_FAVES_FULFILLED,
  UPDATE_FAVES_REJECTED
] = createAction('UPDATE_FAVES', updateUserFaves);
