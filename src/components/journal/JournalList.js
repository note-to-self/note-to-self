import React from 'react';
import PropTypes from 'prop-types';
import Note from '../notes/Note';
import styles from 'styled-components';

const UlStyle = styles.ul`
  list-style: none;
  padding: 0;
`;


export default function JournalList({ journalList, handleDelete }) {

  const list = journalList.map(note => {

    const check = () => {
      if(note.isRepeated) {
        return note.repeat.weekly ? 'weekly' : 'daily';
      } else {
        return 'one time';
      }
    };

    return (
      <li key={note._id}>
        <Note 
          id={note._id}
          body={note.body}
          schedule={check()}
          handleSubmit={handleDelete}
          buttonLabel='delete'
        />
      </li>
    );
  });

  return (
    <>
    <UlStyle>{list}</UlStyle>
    </>
  );
}

JournalList.propTypes = {
  journalList: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
