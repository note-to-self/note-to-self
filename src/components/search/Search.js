import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ onChange, searchTerm }) {
  return (
    <>
      <label htmlFor="searchField">
        <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} ></input>
      </label>
    </>
  );

}

Search.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
};
