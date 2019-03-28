import { getJournalList, getFavorites } from './journal';

describe('authForm selectors', () => {
  let state = {
    journal:{
      journalList: [],
      favorites: [],
    },
  };
      
  it('gets a journalList from state', () => {
    expect(getJournalList(state)).toEqual([]);
  });
  it('gets a favorites from state', () => {
    expect(getFavorites(state)).toEqual([]);
  });
});
