import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const NoteSection = styles.h3`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  font-size: 1.5em;
`;

const NoteTitle = styles.h3`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
`;

const NoteButton = styles.button`
  font-size: .5em;
`;

const NoteCard = styles.section`
  border: 1pt solid black;
  margin-bottom: 1em;
  border-radius: 10px;
  li {
    list-style: none;
  }
`;
export default function Note({ body, handleSubmit, schedule, buttonLabel, id }) {
  return (
    <NoteCard>
      <NoteSection>{body}</NoteSection>
      {schedule && <NoteTitle>This is a {schedule} affirmation.</NoteTitle>}
      {handleSubmit && <form onSubmit={handleSubmit.bind(null, id)}>
        <NoteButton>{buttonLabel}</NoteButton>
      </form>}
    </NoteCard>
  );
}

Note.propTypes = {
  body: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  schedule: PropTypes.string,
  buttonLabel: PropTypes.string,
  id: PropTypes.string.isRequired
};
