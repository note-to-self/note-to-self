import React from 'react';
import PropTypes from 'prop-types';
import { NoteButton, NoteCard, NoteTitle } from './NoteStyles';

export default function Note({ body, handleSubmit, schedule, buttonLabel, id }) {
  return (
    <NoteCard>
      <NoteTitle>{body}</NoteTitle>
      {schedule && 
        <p>This is a {schedule} affirmation.</p>}
      {handleSubmit && 
        <form onSubmit={handleSubmit.bind(null, id)}>
          {buttonLabel && <NoteButton>
            {buttonLabel} 
          </NoteButton>}
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
