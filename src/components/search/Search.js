/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const Label = styles.label`
display: none;
`;

const Input = styles.input`
@media (min-width: 375px) {
  width: 90%;
  padding: 0.4rem;
  vertical-align: 10px;
  border-bottom: 1pt solid #568697;
  display: block;
  color: #568697;
  background-color: rgba(255,255,255,0.9);
  border-radius: 10px;
  box-shadow: 1pt 1pt grey;
}
`;

export default function Search({ onChange, searchTerm }) {
  return (
    <>
      <Label for="search">search</Label>
      <Input type="text" placeholder="search" name="searchTerm" value={searchTerm} onChange={onChange} ></Input>
      {/* <Button>Search</Button> */}
    </>
  );

}

Search.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func
};
