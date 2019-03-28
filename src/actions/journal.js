import { createAction } from 'promise-middleware-redux';
import { deleteRequest } from '../services/herokuApi';

export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const updateCheckbox = status => ({
  type: UPDATE_CHECKBOX,
  payload: status
});

export const [
  deleteNote,
  DELETE_NOTE,
  DELETE_NOTE_PENDING,
  DELETE_NOTE_FULFILLED,
  DELETE_NOTE_REJECTED
] = createAction('DELETE_NOTE', deleteRequest);
