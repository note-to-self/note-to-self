import React from 'react';
import PropTypes from 'prop-types';
import Note from '../notes/Note';
import styles from 'styled-components';

const UlStyle = styles.ul`
  list-style: none;
  padding: 0;
`;

export default function Favorites({ favorites, handleUnfavorite }) {
  const favesList = favorites.map(note => {
    return <li key={note._id}>
      <Note 
        _id={note._id}
        body={note.body}
        handleUnfavorite={handleUnfavorite}
        buttonLabel="delete"
      />
    </li>;
  });

  return (
    <section>
      <UlStyle>
        {favesList}
      </UlStyle>
    </section>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleUnfavorite: PropTypes.func
};
