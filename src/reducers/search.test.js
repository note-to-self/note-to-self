import reducer from './search';
import { UPDATE_SEARCHTERM } from '../actions/search';

describe('can handle search actions', () => {
  let state;

  beforeEach(() => {
    state = {
      searchTerm: ''
    };
  });

  it('can handle the action UPDATE_SEARCH', () => {
    const updatedState = reducer(state, {
      type: UPDATE_SEARCHTERM,
      payload: 'chill'
    });

    expect(updatedState).toEqual({
      searchTerm: 'chill'
    });
  });
});
