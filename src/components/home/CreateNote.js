import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';



const FormStyle = styles.form`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
  background: #D7D6D6;
  font-family: 'Muli', sans-serif;
  color: #316f7f;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  box-shadow: 1pt 1pt 1pt #9BB7C3;
  letter-spacing: .02em;
  border-radius: 10px;
  button {
    color: #316f7f;
    display: block;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
    border: 1pt solid #316f7f;
    border-radius: 10px;
    padding: .5em;
  }
  input, textarea {
    margin-left: 1em;
    color: black;
    border: 1pt solid #316f7f;
  }
}
@media (min-width: 414px) {
  border-radius: 10px;
  margin-top: 6em
  background: #D7D6D6;
  font-family: 'Muli', sans-serif;
  color: #316f7f;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  box-shadow: 1pt 1pt 1pt #9BB7C3;
  letter-spacing: .02em;
  button {
    color: #316f7f;
    display: block;
    background-color: white;
    margin-right: auto;
    margin-left: auto;
    border: 1pt solid #316f7f;
    border-radius: 10%;
    padding: .5em;
  }
  input, textarea {
    margin-left: 1em;
    color: black;
    border: 1pt solid #316f7f;
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
      color: #316f7f;
      display: block;
      background-color: white;
      margin-right: auto;
      margin-left: auto;
      border: 1pt solid #316f7f;
      border-radius: 10%;
      padding: .5em;
    }
  input, textarea {
    margin-left: 1em;
    color: black;
    border: 1pt solid #316f7f;
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

const LabelStyle = styles.label`
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

const InputStyle = styles.input`
@media (max-width: 414px) {
  padding: 1em
}
@media (min-width: 414px) {
  padding: 1em
}
`;

const FormContainer = styles.div`
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


const InputLabel = styles.input`
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
export default function CreateNote({ handleSubmit, onChange, time, date, body, isRepeated, weekly, daily, privateMessage, handleChecked }) {
  console.log(daily, weekly, privateMessage);
  return (

    <FormContainer className="container">
      <FormStyle onSubmit={handleSubmit.bind(null, body, time, date, isRepeated, weekly, daily, privateMessage)}>
        <section>
          <LabelStyle> Private Message
            <InputLabel type="checkbox" value={privateMessage} onChange={handleChecked} id="privateMessage"/>
            <label className="checkboxOne"></label>
          </LabelStyle>
          <LabelStyle> Date
            <InputStyle type="date" value={date} onChange={onChange} id="date" />
          </LabelStyle>
          <LabelStyle> Time
            <InputStyle type="time" value={time} onChange={onChange} id="time"/>
          </LabelStyle> 
          <LabelStyle> Message
            <textarea value={body} onChange={onChange} id="body"/>
          </LabelStyle> 
          <LabelStyle> Reoccuring
            <InputLabel type="checkbox" value={isRepeated} onChange={handleChecked} id="isRepeated"/>
          </LabelStyle>
          {isRepeated && <LabelStyle> Daily
            <InputLabel type="checkbox" value={daily} onChange={handleChecked}  id="daily"/>
          </LabelStyle>}
          {isRepeated && <LabelStyle> Weekly
            <InputLabel type="checkbox" value={weekly} onChange={handleChecked}  id="weekly"/>
          </LabelStyle> }
          <button type="submit">Create Note</button>
        </section>
      </FormStyle>
    </FormContainer>
  );
}

CreateNote.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  privateMessage: PropTypes.string,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleChecked: PropTypes.func,
  isRepeated: PropTypes.bool,
  weekly: PropTypes.bool,
  daily: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired
};


