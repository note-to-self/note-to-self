import React from 'react';
import PropTypes from 'prop-types';
import Note from '../notes/Note';

export default function JournalList({ journalList }) {
  const list = journalList.map(note => {
    const repeat = note.repeat.weekly ? 'weekly' : 'daily';
    <li>
      <Note 
        body={note.body}
        schedule={repeat}
        checkboxLabel="Delete Note"
        checkboxValue={false}
      />
    </li>;
  });

  return (
    <ul>{list}</ul>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array
};
