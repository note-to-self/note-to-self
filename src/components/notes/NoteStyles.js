import styles from 'styled-components';

export const NoteTitle = styles.h3`
  @import url(‘https://fonts.googleapis.com/css?family=Muli:300,700’);
  font-family: ‘Muli’, sans-serif;
  color: #023B50;
`;

export const NoteButton = styles.button`
  font-size: .8em;
`;

export const NoteCard = styles.section`
  border: 1pt solid #8BCBC8;
  border-radius: 10px
  margin-bottom: 1em;
  padding: .3em;
  border: 1pt solid #8BCBC8;
  margin: 1em;

ul {
  list-style: none;
  padding: 0;
}

@media (min-width: 1000px) {
  width: 50%;
  margin: 1em auto;
  li {
    margin: 1em;
  }
} 
`;
