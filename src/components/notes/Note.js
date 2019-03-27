import React from 'react';
import PropTypes from 'prop-types';

function Note({ body, schedule, checkboxLabel }) {
  return (
    <section>
      <form>
        <label htmlFor={checkboxLabel}>{checkboxLabel}</label>
        <input type="checkbox" name={checkboxLabel} value={checkboxLabel}/>
      </form>
      <h3>{body}</h3>
      <p>This is a {schedule} affirmation.</p>
    </section>
  );
}

Note.propTypes = {
  body: PropTypes.string.isRequired,
  schedule: PropTypes.string,
  checkboxLabel: PropTypes.string
};

export default Note;
