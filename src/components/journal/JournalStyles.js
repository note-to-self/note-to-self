import styles from 'styled-components';
import image from '../../../assets/images/journal2.jpg';

export const Header = styles.header `
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  padding-top: 0;
  text-align: center
  background-image: url(${image});
  height: 40%;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1, h2 {
    font-family: 'Muli', sans-serif;
    text-align: center;
    letter-spacing: .09em;
    padding: 10px;
    color: #4d5c3f;
  }

  h2 {
    font-size: 1em;
    width: 85%;
    margin: 10px auto;
    -webkit-letter-spacing: .04em;
    -moz-letter-spacing: .04em;
    -ms-letter-spacing: .04em;
    letter-spacing: .04em;
    background-color: #4d5c3fa3;
    border-radius: 30%;
    color: whitesmoke;
  }

  @media (min-width: 960px) {
    width: 60%;
  }
`;

export const Main = styles.main`
  height: 100%;
  background-size: 50vw 100%;
`;

export const SearchContainer = styles.section`
  width: 50%;
  padding: -1em 1em 1em 1em;
  display: block;
  margin: 0 auto;
  border-radius: 10px;
`;


export const SectionContainer = styles.section`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  list-style: none;
  padding: 0;
  font-size: 1.4em;

  li {
    text-align: center;
    font-family: 'Muli', sans-serif; 
    list-style: none;
  }

  h3 {
      border-bottom: black solid 1px;
  }
}
`;

export const NotesContainer = styles.section`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  list-style: none;
  padding: 0;
  font-size: 1.4em;
`;
