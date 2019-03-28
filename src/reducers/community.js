import { FETCH_NOTES } from '../actions/community';

const initialState = {
  notes: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_NOTES: 
      return { 
        ...state, 
        notes: payload
      };
    default: 
      return state;
  }
}
