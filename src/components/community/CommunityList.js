import React from 'react';
import Note from '../notes/Note';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';

import styles from 'styled-components';

const UlStyle = styles.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  li {
    text-align: center;
  }
`;

const FilledHeart = styles(FaHeart)`
  color: red;
`;

const HollowHeart = styles(FaHeart)`
  color: white;
`;

export default function CommunityList({ communityList, favorites, handleFavorite }) {
  const listOfNotes = communityList.map(note => {
    const buttonLabel = favorites.some(f => f._id === note._id) ?
      FilledHeart :
      HollowHeart;
    return (
      <li key={note._id}>
        <Note
          id={note._id}
          body={note.body}
          buttonLabel={buttonLabel}
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
  favorites: PropTypes.array.isRequired,
  communityList: PropTypes.array.isRequired,
  handleFavorite: PropTypes.func.isRequired
};
