import {
  getName,
  getEmail,
  getPassword,
  getPhone,
} from './session';

describe('authForm selectors', () => {
  let state = {
    session: {
      name: 'name',
      email: 'email',
      password: 'password',
      phone: '12345',
      error: { error: 'My Error' },
      loading: true
    }
  };

  it('gets a name from state', () => {
    expect(getName(state)).toEqual('name');
  });

  it('gets a email from state', () => {
    expect(getEmail(state)).toEqual('email');
  });
  
  it('gets a password from state', () => {
    expect(getPassword(state)).toEqual('password');
  });
  
  it('gets a phone from state', () => {
    expect(getPhone(state)).toEqual('12345');
  });
});
