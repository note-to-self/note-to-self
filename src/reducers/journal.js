import { UPDATE_CHECKBOX, DELETE_NOTE, FETCH_JOURNAL_LIST, FETCH_FAVES } from '../actions/journal';

const initialState = {
  journalList: [],
  favorites: [],
  isChecked: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_CHECKBOX:
      return {
        ...state,
        isChecked: payload
      };
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
