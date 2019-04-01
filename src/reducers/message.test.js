import { 
  CREATE_MESSAGE, 
  // UPDATE_DATE, 
  // UPDATE_MESSAGE, 
  // UPDATE_TIME, 
  // UPDATE_DAILY, 
  // UPDATE_IS_REPEATED, 
  // UPDATE_WEEKLY, 
  // UPDATE_PRIVATE  
} from '../actions/message';
import reducer from './message';

jest.mock('../services/herokuApi.js');
jest.mock('../services/auth.js');

describe('message reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      date: '',
      time: '',
      privateMessage: false,
      body: '',
      repeat: {
        daily: false,
        weekly: false
      },
      isRepeated: false,
    };
  });

  it('can handle CREATE_MESSAGE action', () => {
    const updatedState = reducer(state, {
      type: CREATE_MESSAGE,
      payload: {
        date: '03/31/2019',
        time: '01:00 PM',
        privateMessage: false,
        body: 'message',
        repeat: {
          daily: false,
          weekly: false
        },
        isRepeated: false,
      }
    });
    expect(updatedState).toEqual({
      date: '03/31/2019',
      time: '01:00 PM',
      privateMessage: false,
      body: 'message',
      repeat: {
        daily: false,
        weekly: false
      },
      isRepeated: false,
    });
  });
});
