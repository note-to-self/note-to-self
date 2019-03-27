
import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

describe('Note snapshot', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(
      <Note 
        body="You got this!"
        schedule="daily"
        checkboxLabel="delete"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
