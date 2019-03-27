import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote }) {
  return (
    <h3>{quote.quoteText}</h3>
  );
}

Quote.propTypes = {
  quote: PropTypes.string
};



