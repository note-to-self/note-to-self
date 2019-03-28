import React from 'react';
import PropTypes from 'prop-types';

function Note({ body, handleSubmit, schedule, buttonLabel, _id }) {
  return (
    <section>
      {handleSubmit && <form onSubmit={handleSubmit.bind(null, _id)}>
        <button>{buttonLabel}</button>
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
  _id: PropTypes.string.isRequired
};

export default Note;
