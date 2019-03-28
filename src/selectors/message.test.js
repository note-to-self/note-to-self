import { getDate, getTime, getPrivateMessage, getMessage } from './message';


describe('authForm selectors', () => {
  let state = {
    message: {
      date: 'date',
      time: 'time',
      privateMessage: false,
      body: 'somebody',
      repeat: {
        daily: false,
        weekly: false
      },
      isRepeated: false,
    },
  };
    
  it('gets a date from state', () => {
    expect(getDate(state)).toEqual('date');
  });
  it('gets a time from state', () => {
    expect(getTime(state)).toEqual('time');
  });
  it('gets a bool from state for public v private', () => {
    expect(getPrivateMessage(state)).toEqual(false);
  });
  it('gets a body from state', () => {
    expect(getMessage(state)).toEqual('somebody');
  });
  it('gets a repeat boolean from state', () => {
    expect(getPrivateMessage(state)).toEqual(false);
  });
});
