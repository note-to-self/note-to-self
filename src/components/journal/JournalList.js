import React from 'react';
import PropTypes from 'prop-types';
import Note from '../notes/Note';

export default function JournalList({ journalList, handleDelete }) {
  const list = journalList.map(note => {
    const repeat = note.repeat.weekly ? 'weekly' : 'daily';
    <li key={note._id}>
      <Note 
        _id={note._id}
        body={note.body}
        schedule={repeat}
        handleDelete={handleDelete}
      />
    </li>;
  });

  return (
    <ul>{list}</ul>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
