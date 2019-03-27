import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ handleSubmit, onChange, searchTerm }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="searchTerm" value={searchTerm} onChange={onChange} ></input>
        </label>
        <button>Search</button>
      </form>
    </>
  );

}

Search.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
  handleSubmit: PropTypes.func
};
