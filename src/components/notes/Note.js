import React from 'react';
import PropTypes from 'prop-types';

export default function Note({ body, handleSubmit, schedule, buttonLabel, id }) {
  return (
    <section>
      {handleSubmit && <form onSubmit={handleSubmit.bind(null, id)}>
        <button>{buttonLabel} {id} </button>

      </form>}
      <h3>{body}</h3>
      {schedule && <p>This is a {schedule} affirmation.</p>}
    </section>
  );
}

Note.propTypes = {
  body: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  schedule: PropTypes.string,
  buttonLabel: PropTypes.string,
  id: PropTypes.string.isRequired
};
