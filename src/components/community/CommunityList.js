import React from 'react';
import Note from '../notes/Note';
import PropTypes from 'prop-types';

export default function CommunityList({ communityList, handleCheckbox }) {
  const noteList = communityList.map(note => {
    <li>
      <Note 
        key={note._id}
        id={note._id}
        body={note.body}
        checkboxLabel="Save to Favorites"
        checkboxValue={false}
        handleCheckbox={handleCheckbox}
      />
    </li>;
  });
  return (
    <ul>
      {noteList}
    </ul>
  );
}

CommunityList.propTypes = {
  communityList: PropTypes.array.isRequired,
  handleCheckbox: PropTypes.func.isRequired
};
