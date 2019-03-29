import { fetchRandomQuote } from './quote';

describe('authForm selectors', () => {
  let state = {
    quote: {
      quote: {}
    }
  };
  
  it('gets a name from state', () => {
    expect(fetchRandomQuote(state)).toEqual({});
  });
});
