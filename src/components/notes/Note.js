import React from 'react';
import PropTypes from 'prop-types';

export default function Note({ body, handleDelete, schedule, buttonLabel, _id }) {
  return (
    <section>
      {handleDelete && <form onSubmit={handleDelete.bind(null, _id)}>
        <button>{buttonLabel}</button>
      </form>}
      <h3>{body}</h3>
      {schedule && <p>This is a {schedule} affirmation.</p>}
    </section>
  );
}

Note.propTypes = {
  body: PropTypes.string.isRequired,
  handleDelete: PropTypes.func,
  schedule: PropTypes.string,
  buttonLabel: PropTypes.string,
  _id: PropTypes.string.isRequired
};
