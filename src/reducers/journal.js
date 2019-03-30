import { DELETE_NOTE, FETCH_JOURNAL_LIST, UPDATE_TOGGLE } from '../actions/journal';
import { FETCH_FAVES, ADD_FAVES, REMOVE_FAVES } from '../actions/favorites';

const initialState = {
  journalList: [],
  favorites: [],
  toggle: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_JOURNAL_LIST:
      return {
        ...state,
        journalList: payload
      };
    case FETCH_FAVES:
      return {
        ...state,
        favorites: payload.notes
      };
    case REMOVE_FAVES:
    case ADD_FAVES:
      return {
        ...state,
        favorites: payload.notes
      };
    case UPDATE_TOGGLE:
      return {
        ...state,
        toggle: payload
      };
    case DELETE_NOTE:
      return state;
    default:
      return state;
  }
}
