import { DELETE_NOTE, FETCH_JOURNAL_LIST, FETCH_FAVES } from '../actions/journal';

const initialState = {
  journalList: [],
  favorites: [],
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
        favorites: payload
      };
    case DELETE_NOTE:
      return state;
    default:
      return state;
  }
}
