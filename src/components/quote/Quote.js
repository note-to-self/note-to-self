import React from 'react';
import PropTypes from 'prop-types';
import { QuoteContainer, QuoteStyle, QuoteAuthor } from './QuoteStyles';

export default function Quote({ quote }) {
  return (
    <QuoteContainer>
      <QuoteStyle>{quote.quoteText}</QuoteStyle>
      <QuoteAuthor>~{quote.quoteAuthor}</QuoteAuthor>
    </QuoteContainer>
  );
}

Quote.propTypes = {
  quote: PropTypes.object
};



