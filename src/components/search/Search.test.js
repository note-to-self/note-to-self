import React from 'react';
import Search from './Search';
import renderer from 'react-test-renderer';
// import { shallow } from 'enzyme';

describe('Search', () => {
  it('matches a snapshot', () => {
    const tree = renderer.create(
      <Search />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
