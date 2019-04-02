import { FETCH_QUOTE } from '../actions/quote';
import reducer from './quote';

jest.mock('../services/quoteApi');

describe('Quote reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      quote: {}
    };
  });
  it('can handle the FETCH_QUOTE action', () => {
    const updatedState = reducer(state, {
      type: FETCH_QUOTE,
      payload: 'quote'
    });
    expect(updatedState.quote).toEqual('quote');
  });
});

