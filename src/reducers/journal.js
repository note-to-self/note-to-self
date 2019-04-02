import { DELETE_NOTE, FETCH_JOURNAL_LIST } from '../actions/journal';
// import { UPDATE_FAVES, FETCH_FAVES } from '../actions/favorites';

const initialState = {
  journalList: [],
  favorites: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_JOURNAL_LIST:
      return {
        ...state,
        journalList: payload
      };
    case DELETE_NOTE:
      return state;
    // case FETCH_FAVES:
    //   return {
    //     ...state,
    //     favorites: payload
    //   };
    // case UPDATE_FAVES:
    //   return {
    //     ...state,
    //     favorites: payload
    //   };
    default:
      return state;
  }
}
