import { createAction } from 'promise-middleware-redux';
import { getPublicNotes } from '../services/community';

export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const updateCheckbox = status => ({
  type: UPDATE_CHECKBOX,
  payload: status
});

export const [
  fetchNotes, 
  FETCH_NOTES,
  FETCH_NOTES_PENDING,
  FETCH_NOTES_FULFILLED,
  FETCH_NOTES_ERROR
] = createAction('FETCH_NOTES', getPublicNotes);
