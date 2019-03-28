import React from 'react';
import PropTypes from 'prop-types';
import Note from '../notes/Note';

export default function Favorites({ favorites, handleUnfavorite }) {
  const favesList = favorites.map((note, i) => {
    return <li key={i}>
      <Note 
        body={note.body}
        handleUnfavorite={handleUnfavorite}
        buttonLabel="X"
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
