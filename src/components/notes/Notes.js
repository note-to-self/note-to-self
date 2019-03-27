import React from 'react';
import Note from './Note';
import PropTypes from 'prop-types';

export default function Notes({ notes }) {
  const noteList = notes.map(note => {
    return (
      <Note key={note.id} note={note} />
    );
  });
  return (
    <ul>
      {noteList}
    </ul>
  );
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired
};
