import styles from 'styled-components';

export const QuoteStyle = styles.div`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
    font-family: 'Muli', sans-serif;
    font-size: 1em;
    letter-spacing: .04em;
    padding: .5em;

  @media (min-width: 700px) {  
    line-height: 1.3em;
  }
`;

export const QuoteContainer = styles.div`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  position: absolute;
  color: #307b8f;
  line-height: 2em;
  bottom: 10%;
  background-color: rgba(255, 255, 255, 0.8);
  padding-top: 1.3em;
  width: 100%;
  margin-left: 50%;
  transform: translateX(-50%);

  @media (min-width: 700px) {
    font-size: 1em;
  } 
  @media (min-width: 1000px) {
    font-size: .8em;
  }
`;

export const QuoteAuthor = styles.div`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  @media (min-width: 414px) {
    font-family: 'Muli', sans-serif;
    font-weight: 300;
    color: #307b8f;
  }
  @media (min-width: 1000px) {
    margin-top: 1em;
  }
`;
