import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const QuoteStyle = styles.div`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  font-size: 1em;
  padding: 1em;
  letter-spacing: .04em;
`;

const QuoteContainer = styles.div`
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  position: absolute;
  color: #47B1CD;
  line-height: 1em;
  bottom: 20%;
  background-color: rgba(255, 255, 255, 0.8);
`;

const QuoteAuthor = styles.div`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  font-weight: 300;
  color: #47B1CD;
`;
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



