import React from 'react';
import Note from '../notes/Note';
import PropTypes from 'prop-types';


export default function CommunityList({ communityList, handleFavorite }) {
  const listOfNotes = communityList.map(note => {
    return (
      <li key={note._id}>
        <Note 
          id={note._id}
          body={note.body}
          handleSubmit={handleFavorite}
        />
      </li>
    );
  });
  return (
    <ul>
      {listOfNotes}
    </ul>
  );
}

CommunityList.propTypes = {
  communityList: PropTypes.array.isRequired,
  handleFavorite: PropTypes.func.isRequired
};
