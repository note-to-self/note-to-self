import { createAction } from 'promise-middleware-redux';
import { getQuote } from '../services/quoteApi';

export const [
  fetchQuote,
  FETCH_QUOTE,
  FETCH_QUOTE_PENDING, 
  FETCH_QUOTE_FULFILLED,
  FETCH_QUOTE_REJECTED
] = createAction('FETCH_QUOTE', getQuote);

