import React from 'react';
import Note from '../notes/Note';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const UlStyle = styles.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
`;

export default function CommunityList({ communityList, handleFavorite }) {
  const listOfNotes = communityList.map(note => {
    return (
      <li key={note._id}>
        <Note 
          id={note._id}
          body={note.body}
          buttonLabel='<3'
          handleSubmit={handleFavorite}
        />
      </li>
    );
  });
  return (
    <UlStyle>
      {listOfNotes}
    </UlStyle>
  );
}

CommunityList.propTypes = {
  communityList: PropTypes.array.isRequired,
  handleFavorite: PropTypes.func.isRequired
};
