import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';

const QuoteStyle = styles.div`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {  
  font-family: 'Muli', sans-serif;
  font-size: 1em;
  letter-spacing: .04em;
}
@media (min-width: 800px) {  
  font-size: 1.5em;
  width: 100%;
}
@media (min-width: 1000px) {  
  font-size: 1.5em;
}
@media (min-width: 1500px) {  
  font-size: 1.7em;
}
@media (min-width: 1500px) {  
  font-size: 2em;
}
`;

const QuoteContainer = styles.div`
@media (min-width: 414px) {
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  width: 100%;
  position: absolute;
  color: #47B1CD;
  line-height: 2em;
  bottom: 10%;
  background-color: rgba(255, 255, 255, 0.8);
  padding-top: 1.3em;
}
@media (min-width: 1000px) {
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  width: 50vw;
  height: 10vh;
  position: absolute;
  left: 25%;
}
@media (min-width: 1500px) {
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  width: 50vw;
  height: 15vh;
  position: absolute;
  left: 25%;
}
@media (min-width: 700px) {
  position: absolute;
  color: #47B1CD;
  line-height: 1em;
  bottom: 10%;
  background-color: rgba(255, 255, 255, 0.8);
  display: block
  margin-right: auto;
  margin-left: 25%;
  width: 50%;
}
`;

const QuoteAuthor = styles.div`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
  font-family: 'Muli', sans-serif;
  font-weight: 300;
  color: #47B1CD;
}
@media (min-width: 1000px) {
  font-family: 'Muli', sans-serif;
  font-weight: 300;
  color: #47B1CD;
}
@media (min-width: 1000px) {
  font-size: 1.2em;
  font-weight: 300;
}
@media (min-width: 2000px) {
  font-size: 1.8em;
  margin-top: 1em;
  font-weight: 300;
}
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



