import React from 'react';
import PropTypes from 'prop-types';
import Note from '../notes/Note';


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
