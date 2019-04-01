import reducer from './journal';
import { FETCH_JOURNAL_LIST, DELETE_NOTE } from '../actions/journal';

jest.mock('../services/herokuApi.js');
jest.mock('../services/auth.js');


describe('can handle Journal actios', () => {
  let state;

  beforeEach(() => {
    state = {
      journalList: []
    };
  });

  it('can handle FETCH_JOURNAL_LIST', () => {
    const updatedState = reducer(state, {
      type: FETCH_JOURNAL_LIST,
      payload: [{
        body: 'banana',
        isRepeated: true,
        repeat: {
          daily: true,
          weekly: false
        },
        _id: '1234'
      }, 
      {
        body: 'banana',
        isRepeated: true,
        repeat: {
          daily: true,
          weekly: false
        },
        _id: '1235'
      }]
    });

    expect(updatedState).toEqual({
      journalList: [{
        body: 'banana',
        isRepeated: true,
        repeat: {
          daily: true,
          weekly: false
        },
        _id: '1234'
      },
      {
        body: 'banana',
        isRepeated: true,
        repeat: {
          daily: true,
          weekly: false
        },
        _id: '1235'
      }]
    });
  });

  it('handles the action DELETE_NOTE', () => {
    const updatedState = reducer(state, {
      type: DELETE_NOTE,
    });

    // eslint-disable-next-line no-console
    console.log(updatedState);
  });
});
