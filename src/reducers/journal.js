import { UPDATE_CHECKBOX, DELETE_NOTE } from '../actions/journal';

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
    case DELETE_NOTE:
      return state;
    default:
      return state;
  }
}
