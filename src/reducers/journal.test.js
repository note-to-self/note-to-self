import reducer from './journal';
import { FETCH_JOURNAL_LIST, DELETE_NOTE } from '../actions/journal';

jest.mock('../services/journal.js');
jest.mock('../services/auth.js');


describe('can handle Journal actions', () => {
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
    const state = {
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
    };
    const updatedState = reducer(state, {
      type: DELETE_NOTE,
      payload: { _id: '1235', body: 'banana' }
    });

    expect(updatedState).toEqual({ 
      journalList: [
        { 
          body: 'banana',
          isRepeated: true,
          repeat: expect.any(Object),
          _id: '1234' 
        },
        { 
          body: 'banana',
          isRepeated: true,
          repeat: expect.any(Object),
          _id: '1235' 
        }] 
    });
  });
});
