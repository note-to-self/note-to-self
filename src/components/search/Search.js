import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const FormStyles = styles.form`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (min-width: 375px) {
  font-family: 'Muli', sans-serif;
  font-size: 1.3em;
  text-align: left;
  padding-top: 2em;
}
`;

const Label = styles.label`
@media (min-width: 375px) {
  margin-bottom: 1em;
  padding-top: 1em;
  display: block;
  text-align: center;
  vertical-align: 10px;
  margin-left: 1em;
  width: 50%
}
`;

export const Input = styles.input`
@media (min-width: 375px) {
  margin-left: 4em;
  vertical-align: 10px;
  background: none;
  border-style: none;
  border-bottom: 1pt solid #568697;
  display: block;
  width: 100%
  color: #568697;
}
`;

const Button = styles.button`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  margin-top: 1em;
  background-color: rgba(255, 255, 255, 0.9);
  border-style: none;
  padding: .5em;
  border-radius: 10px;
  font-family: 'Muli', sans-serif;
  color: #568697;
`;

export default function Search({ onChange, searchTerm, handleSubmit }) {
  return (
    <>
      <FormStyles onSubmit={handleSubmit}>
        <Label>
          <Input type="text" name="searchTerm" value={searchTerm} onChange={onChange} ></Input>
        </Label>
        <Button>Search</Button>
      </FormStyles>
    </>
  );

}

Search.propTypes = {
  searchTerm: PropTypes.string,
  onChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};
