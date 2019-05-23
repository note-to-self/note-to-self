/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from './SearchStyles';

export default function Search({ onChange, searchTerm }) {
  return (
    <>
      <Label htmlFor="search">search</Label>
      <Input type="text" placeholder="search" name="searchTerm" value={searchTerm} onChange={onChange} ></Input>
      {/* <Button>Search</Button> */}
    </>
  );

}

Search.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func
};
