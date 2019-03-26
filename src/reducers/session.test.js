import {
  CREATE_USER,
  CREATE_USER_PENDING,
  CREATE_USER_ERROR,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_PHONE
} from '../reducers/session';

import reducer from './session';

jest.mock('../services/auth.js');

describe('authForm reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      loading: false,
      error: null,
      name: 'name',
      password: 'password',
      email: 'email',
      phone: 'phone'
    };
  });

  it('handles the CREATE_USER action', () => {
    const updatedState = reducer(state, {
      type: CREATE_USER,
    });

    expect(updatedState).toEqual({
      error: null,
      name: 'name',
      password: 'password',
      email: 'email',
      phone: 'phone',
      loading: false,
    });
  });

  it('handles the CREATE_USER_PENDING action', () => {
    const updatedState = reducer(state, {
      type: CREATE_USER_PENDING
    });

    expect(updatedState).toEqual({
      ...state,
    });
  });

  it('handles the CREATE_USER_ERROR', () => {
    const updatedState = reducer(state, {
      type: CREATE_USER_ERROR,
      payload: 'error'
    });

    expect(updatedState).toEqual({
      ...state,
      error: null,
    });
  });

  it('handles the UPDATE_EMAIL', () => {
    const updatedState = reducer(state, {
      type: UPDATE_EMAIL,
      payload: 'email'
    });

    expect(updatedState).toEqual({
      ...state,
      email: 'email'
    });
  });

  it('handles the UPDATE_PHONE', () => {
    const updatedState = reducer(state, {
      type: UPDATE_PHONE,
      payload: 'phone'
    });

    expect(updatedState).toEqual({
      ...state,
      phone: 'phone'
    });
  });

  it('handles the UPDATE_PASSWORD', () => {
    const updatedState = reducer(state, {
      type: UPDATE_PASSWORD,
      payload: 'password'
    });

    expect(updatedState).toEqual({
      ...state,
      password: 'password'
    });
  });
});
