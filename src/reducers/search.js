import { UPDATE_SEARCHTERM } from '../actions/search';

const initialState = {
  searchTerm: 'search'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_SEARCHTERM:
      return {
        searchTerm: payload
      };
    default: 
      return state;
  }
}
