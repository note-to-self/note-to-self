import { FETCH_NOTES, UPDATE_CHECKBOX } from '../actions/community';

const initialState = {
  notes: [],
  isChecked: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_NOTES: 
      return { 
        ...state, 
        notes: payload
      };
    case UPDATE_CHECKBOX:
      return {
        ...state,
        isChecked: payload
      };
    default: 
      return state;
  }
}
