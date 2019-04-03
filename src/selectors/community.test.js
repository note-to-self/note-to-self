import { getPublicNotes } from './community';

describe('community selectors', () => {
  let state = {
    community: {
      notes: []
    }
  };
  
  it('gets a name from state', () => {
    expect(getPublicNotes(state)).toEqual([]);
  });
});
