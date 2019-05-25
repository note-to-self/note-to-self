import styles from 'styled-components';

export const FormStyle = styles.form`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  background-color: whitesmoke;
  overflow: scroll;
  width: 100%;
  max-width: 870px;
  height: 75vh;
  margin: 0 auto;
  padding: 2em;
  box-sizing: border-box;
  letter-spacing: .02em;

  button {
    color: #135a6c;
    display: block;
    background-color: white;
    padding: .5em;
    margin: 0 auto;
    border: 2px solid #135a6c;
    1px 1px 3px #767676;    
    padding: .5em;
  }

  input, textarea {
    margin-left: 1em;
    color: black;
    border: 1pt solid #135a6c;
  }

  textarea {
    margin-left: 0;
    margin-top: 2em;
    position: relative;
    width: 90%;
    display: block;
    background: white;
  }

  @media (min-width: 700px) {
    height: 75vh;
    letter-spacing: .02em;
  }

  @media (min-width: 925px) {
    height: 120vh;
    button {
      font-size: 2em;
      padding: 1.5;
    }
  }
  @media (min-width: 1240px) {
    height: 150vh;
  }
`;

export const LabelStyle = styles.label`
  display: block;
  padding: 1em 0;

  @media (min-width: 925px) {
    font-size: 1.2em;
  }
  @media (min-width: 1500px) {
    font-size: 1.3em;
  }
`;



export const InputStyle = styles.input`
  padding: 1em

`;

export const FormContainer = styles.div`
  background-color: whitesmoke;
  height: 100vh;
  overflow: scroll;
  margin-top: 4em;
  max-width: 870px;

  @media (min-width: 925px) {
    padding-top: 0;
  }
    
`;

export const InputLabel = styles.input`
  transform: scale(1);
  transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
`;
