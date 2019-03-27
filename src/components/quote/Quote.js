import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote }) {
  return (
    <h3>{quote}</h3>
  );
}

Quote.propTypes = {
  quote: PropTypes.string
};



