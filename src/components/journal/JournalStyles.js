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

  h1 {
    font-family: 'Muli', sans-serif;
    color: white;
    letter-spacing: .09em;
    text-shadow: 1pt 1.5pt grey;
  }

  h2 {
    font-family: 'Muli', sans-serif;
    color: white;
    font-size: 1em;
    letter-spacing: .04em;
    text-shadow: 1pt 1pt grey;
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
