import { FETCH_QUOTE } from '../actions/quote';

const initialState =  {
  quote: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_QUOTE:
      return {
        ...state,
        quote: payload
      };
    default:
      return state;
  }
}
