import { 
  CREATE_MESSAGE, 
  UPDATE_DATE,
  UPDATE_PRIVATE,
  UPDATE_TIME, 
  UPDATE_MESSAGE,
  UPDATE_IS_REPEATED,
  UPDATE_DAILY,
  UPDATE_WEEKLY,  
} from '../actions/message';
import reducer from './message';

jest.mock('../services/message.js');
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

  it('can handle the UPDATE_DATE action', () => {
    const updatedState = reducer(state, {
      type: UPDATE_DATE,
      payload: '03/31/2019'
    });
    expect(updatedState.date).toEqual('03/31/2019');
  });

  it('can handle UPDATE_PRIVATE action', () => {
    const updatedState = reducer(state, {
      type: UPDATE_PRIVATE,
      payload: true
    });
    expect(updatedState.privateMessage).toBeTruthy();
  });

  it('can handle UPDATE_TIME', () => {
    const updatedState = reducer(state, {
      type: UPDATE_TIME,
      payload: '01:00 PM'
    });
    expect(updatedState.time).toEqual('01:00 PM');
  });

  it('can handle UPDATE_MESSAGE action', () => {
    const updatedState = reducer(state, {
      type: UPDATE_MESSAGE,
      payload: 'banana'
    });
    expect(updatedState.body).toEqual('banana');
  });

  it('can handle UPDATE_IS_REPEATED', () => {
    const updatedState = reducer(state, {
      type: UPDATE_IS_REPEATED,
      payload: true
    });
    expect(updatedState.isRepeated).toBeTruthy();
  });

  it('can handle UPDATE_DAILY', () => {
    const updatedState = reducer(state, {
      type: UPDATE_DAILY,
      payload: true
    });
    expect(updatedState.repeat.daily).toBeTruthy();
  });

  it('can handle UPDATE_WEEKLY', () => {
    const updatedState = reducer(state, {
      type: UPDATE_WEEKLY,
      payload: true
    });
    expect(updatedState.repeat.weekly).toBeTruthy();
  });
});
