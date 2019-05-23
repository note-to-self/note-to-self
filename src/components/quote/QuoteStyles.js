import styles from 'styled-components';

export const QuoteStyle = styles.div`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {  
  font-family: 'Muli', sans-serif;
  font-size: .8em;
  letter-spacing: .04em;
  padding: .5em;
}
@media (min-width: 800px) {  
  font-size: 1.5em;
  width: 100%;
}
@media (min-width: 1000px) {  
  font-size: 1.5em;
  line-height: .9;
}
@media (min-width: 1500px) {  
  font-size: 1.5em;
  line-height: 1em;
}
@media (min-width: 1800px) {  
  font-size: 1.8em;
}
`;

export const QuoteContainer = styles.div`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  position: absolute;
  color: #47B1CD;
  line-height: 2em;
  bottom: 10%;
  background-color: rgba(255, 255, 255, 0.8);
  padding-top: 1.3em;
@media (min-width: 700px) {
    line-height: 1em;
    display: block
    margin-right: auto;
  }
@media (min-width: 1000px) {
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  width: 50%;
  height: 15vh;
  font-size: .8em;
  position: absolute;
  margin-left: 25%;
}
@media (min-width: 1500px) {
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  width: 50vw;
  height: 15vh;
  position: absolute;
}

`;

export const QuoteAuthor = styles.div`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
  font-family: 'Muli', sans-serif;
  font-weight: 300;
  color: #47B1CD;
}
@media (min-width: 1000px) {
  font-family: 'Muli', sans-serif;
  font-weight: 300;
  margin-top: 1em;
  color: #47B1CD;
}
@media (min-width: 1500px) {
  font-size: 1.2em;
  font-weight: 300;
}
`;
