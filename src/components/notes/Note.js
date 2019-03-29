import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const NotesContainer = styles.form`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
  background: #D7D6D6;
  font-family: 'Multi', sans-serif;
  color: #316f7f;
  display: block;
  border: 1pt solid #316f7f;
  border-radius: 10%;
  margin-right: auto;
  margin-left: auto;
  padding: 0.5em;
  button {
    color: #316f7f;
    display: block;
    margin: 0.5em;
    border: 1pt solid #316f7f;
    border-radius: 10%;
    padding: 0.5em;
  }
}
@media (min-width: 414px) {
  background: #D7D6D6;
  font-family: 'Multi', sans-serif;
  color: #316f7f;
  display: block;
  border: 1pt solid #316f7f;
  border-radius: 10%;
  margin-right: auto;
  margin-left: auto;
  padding: 0.5em;
  button {
    color: #316f7f;
    display: block;
    margin: 0.5em;
    border: 1pt solid #316f7f;
    border-radius: 10%;
    padding: 0.5em;
  }
`;

export default function Note({ body, handleSubmit, schedule, buttonLabel, id }) {
  return (
    <NotesContainer>
    <section>
      {handleSubmit && <form onSubmit={handleSubmit.bind(null, { id })}>
        <button>{buttonLabel}</button>
      </form>}
      <h3>{body}</h3>
      {schedule && <p>This is a {schedule} affirmation.</p>}
    </section>
    </NotesContainer>
  );
}

Note.propTypes = {
  body: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  schedule: PropTypes.string,
  buttonLabel: PropTypes.string,
  id: PropTypes.string.isRequired
};
