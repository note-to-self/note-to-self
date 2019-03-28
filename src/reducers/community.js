import { FETCH_NOTES, UPDATE_CHECKBOX } from '../actions/community';

const initialState = {
  list: [],
  isChecked: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_NOTES: 
      return {
        ...state, 
        list: payload
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
