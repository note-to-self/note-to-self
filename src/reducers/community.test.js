import { FETCH_NOTES } from '../actions/community';
import reducer from './community';

jest.mock('../services/community');

describe('Quote reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      notes: []
    };
  });
  it('can handle the FETCH_NOTES action', () => {
    const updatedState = reducer(state, {
      type: FETCH_NOTES,
      payload: ['quote', 'banana']
    });
    expect(updatedState.notes).toEqual(['quote', 'banana']);
  });
});
