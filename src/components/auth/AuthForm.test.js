
import React from 'react';
import { shallow } from 'enzyme';
import AuthForm from './AuthForm';

describe('authform tests', () => {
  let wrapper;
  let createUser;
  beforeEach(() => {
    createUser = jest.fn();
    wrapper = shallow(
      <AuthForm
        email="email"
        password="password"
        name="name"
        phone="phone"
        handleAuth={createUser}
        onChange={jest.fn()}
      />
    );
  });
  it('matches a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('calls the createUser function on sumbit', () => {
    wrapper.find('form').simulate('submit', {
      preventDefault: jest.fn()
    });

    expect(createUser).toHaveBeenCalled();
  });
});
