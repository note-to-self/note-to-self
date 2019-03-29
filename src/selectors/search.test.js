import { getSearchTerm } from './search';

describe('authForm selectors', () => {
  let state = {
    search: {
      searchTerm: 'search'
    }
  };
  
  it('gets a name from state', () => {
    expect(getSearchTerm(state)).toEqual('search');
  });
});
