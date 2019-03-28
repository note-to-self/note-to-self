import { createAction } from 'promise-middleware-redux';
import { deleteRequest, getUserNotes, getUserFaves } from '../services/herokuApi';

export const [
  deleteNote,
  DELETE_NOTE,
  DELETE_NOTE_PENDING,
  DELETE_NOTE_FULFILLED,
  DELETE_NOTE_REJECTED
] = createAction('DELETE_NOTE', deleteRequest);

export const [
  fetchJournalList,
  FETCH_JOURNAL_LIST,
  FETCH_JOURNAL_LIST_PENDING,
  FETCH_JOURNAL_LIST_FULFILLED,
  FETCH_JOURNAL_LIST_REJECTED
] = createAction('FETCH_JOURNAL_LIST', getUserNotes);

export const [
  fetchFaves,
  FETCH_FAVES,
  FETCH_FAVES_PENDING,
  FETCH_FAVES_FULFILLED,
  FETCH_FAVES_REJECTED
] = createAction('FETCH_FAVES', getUserFaves);
