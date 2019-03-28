
import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';


describe('Note snapshot', () => {
  it('matches a snapshot', () => {
    const handleSubmit = jest.fn();
    const handleCheckbox = jest.fn();
    const wrapper = shallow(
      <Note 
        _id="1234"
        body="You got this!"
        onSubmit={handleSubmit}
        schedule="daily"
        checkboxLabel="delete"
        checkboxValue={false}
        onChange={handleCheckbox}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
