import React from 'react';
import PropTypes from 'prop-types';
import Note from '../notes/Note';

export default function Favorites({ favorites, handleUnfavorite }) {
  const favesList = favorites.map((note, i) => {
    return <li key={i}>
      <Note 
        handleUnfavorite={handleUnfavorite}
      />
    </li>;
  });
  
  return (
    <section>
      <ul>
        {favesList}
      </ul>
    </section>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  handleSubmit: PropTypes.func,
  handleUnfavorite: PropTypes.func
};
