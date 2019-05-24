import styles from 'styled-components';

export const FormStyle = styles.form`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
  background: #D7D6D6;
  font-family: 'Muli', sans-serif;
  color: #135a6c;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  box-shadow: 1pt 1pt 1pt #9BB7C3;
  letter-spacing: .02em;
  border-radius: 10px;
  button {
    color: #135a6c;
    display: block;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
    border: 1pt solid #135a6c;
    border-radius: 10%;
    padding: .5em;
  }
  input, textarea {
    margin-left: 1em;
    color: black;
    border: 1pt solid #135a6c;
  }
}
@media (min-width: 414px) {
  border-radius: 10px;
  margin-top: 3em
  background: #D7D6D6;
  font-family: 'Muli', sans-serif;
  color: #135a6c;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  box-shadow: 1pt 1pt 1pt #9BB7C3;
  letter-spacing: .02em;
  button {
    color: #135a6c;
    display: block;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
    border: 1pt solid #135a6c;
    border-radius: 10%;
    padding: .5em;
  }
  input, textarea {
    margin-left: 1em;
    color: black;
    border: 1pt solid #135a6c;
  }
}
@media (min-width: 700px) {
    height: 80vh;
    margin-top: 4em
    background: #D7D6D6;
    font-family: 'Muli', sans-serif;
    letter-spacing: .02em;
    button {
      margin-top: 2em;
      color: #135a6c;
      display: block;
      background-color: white;
      margin-right: auto;
      margin-left: auto;
      border: 1pt solid #135a6c;
      border-radius: 10%;
      padding: .5em;
    }
  input, textarea {
    margin-left: 1em;
    color: black;
    border: 1pt solid #135a6c;
  }
}
@media (min-width: 925px) {
  height: 120vh;
  button {
    font-size: 2em;
    padding: 1.5;
  }
}
@media (min-width: 1500px) {
  height: 150vh;
  button {
    font-size: 2em;
    padding: 1.5;
  }
}
`;

export const LabelStyle = styles.label`
@media (max-width: 414px) {
  display: block;
  padding: 1em 0 1em 0;
}
@media (min-width: 414px) {
  display: block;
  padding: 1em 0 1em 0;
}
@media (min-width: 925px) {
  font-size: 1.2em;
}
@media (min-width: 1500px) {
  font-size: 2em;
}
`;

export const InputStyle = styles.input`
@media (max-width: 414px) {
  padding: 1em
}
@media (min-width: 414px) {
  padding: 1em
}
`;

export const FormContainer = styles.div`
@media (max-width: 414px) {
  padding-top: 4em;
  textarea {
    position: relative;
    margin: 2em 0 0 0;
    width: 250px;
    height: 100px;
    background: transparent;
  }
}
@media (min-width: 414px) {
  padding-top: 2em;
  textarea {
    position: relative;
    margin: 2em 0 0 0;
    width: 250px;
    height: 100px;
    background: transparent;
  }
}
@media (min-width: 925px) {
  padding-top: 0;
  box-shadow: 1pt 1pt 1pt grey;
  textarea {
    position: relative;
    margin: 2em 0 0 1.5em;
    width: 300px;
    height: 200px;
    background: transparent;
  }
  }
@media (min-width: 1500px) {
    textarea {
      width: 80%;
      height: 30vh;
  }
}
`;

export const InputLabel = styles.input`
  zoom: 1.5;
  transform: scale(1);
  -ms-transform: scale(2);
  -webkit-transform: scale(2);
  -o-transform: scale(2);
  -moz-transform: scale(2);
  transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  -o-transform-origin: 0 0;
  -moz-transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
`;
