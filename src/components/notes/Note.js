import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const NoteTitle = styles.h3`
@import url(‘https://fonts.googleapis.com/css?family=Muli:300,700’);
 font-family: ‘Muli’, sans-serif;
 color: #023B50;
`;

const NoteButton = styles.button`
 font-size: .8em;
`;

const NoteCard = styles.section`
 border: 1pt solid #8BCBC8;
 border-radius: 10px
 margin-bottom: 1em;
 padding: .3em;
 border: 1pt solid #8BCBC8;
 margin: 1em;

ul {
  list-style: none;
  padding: 0;
}
`;

export default function Note({ body, handleSubmit, schedule, buttonLabel, id }) {
  return (
    <NoteCard>
      <NoteTitle>{body}</NoteTitle>
      {schedule && <p>This is a {schedule} affirmation.</p>}
      {handleSubmit && <form onSubmit={handleSubmit.bind(null, id)}>
        <NoteButton>{buttonLabel} </NoteButton>
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
