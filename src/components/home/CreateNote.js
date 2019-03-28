import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';


const FormStyle = styles.form`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
  background: #D7D6D6;
  font-family: 'Muli', sans-serif;
  color: white;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  box-shadow: 1pt 1pt 1pt #9BB7C3;
  button {
    color: white;
  }
  input, textarea {
    color: black;
  }
}
@media (min-width: 700px) {
  width: 70%;
  margin-top: 0;
  button {
    color: black;
    border-style: none;
  }
  input, textarea {
    color: black;
  }
}
`;

const LabelStyle = styles.label`
@media (max-width: 414px) {
  display: block;
  padding: 1em 0 1em 0;
]
`;

const InputStyle = styles.input`
@media (max-width: 414px) {
  padding: 1em
}
`;

const FormContainer = styles.div`
@media (max-width: 414px) {
  padding-top: 5em;
  textarea {
    position: relative;
    margin: 2em 0 0 0;
    width: 250px;
    height: 100px;
    background: transparent;
  }
}
@media (min-width: 700px) {
  box-shadow: 1pt 1pt 1pt grey;
  }
`;

export default function CreateNote({ handleSubmit, onChange, time, date, body, isRepeated, weekly, daily, privateMessage, handleChecked }) {
  console.log(daily, weekly, privateMessage);
  return (

    <FormContainer className="container">
      <FormStyle onSubmit={handleSubmit.bind(null, body, time, date, isRepeated, weekly, daily, privateMessage)}>
        <section>
          <LabelStyle> Private Message
            <InputStyle type="checkbox" value={privateMessage} onChange={handleChecked} id="privateMessage"/>
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
            <input type="checkbox" value={isRepeated} onChange={handleChecked} id="isRepeated"/>
          </LabelStyle>
          {isRepeated && <LabelStyle> Daily
            <input type="checkbox" value={daily} onChange={handleChecked}  id="daily"/>
          </LabelStyle>}
          {isRepeated && <LabelStyle> Weekly
            <input type="checkbox" value={weekly} onChange={handleChecked}  id="weekly"/>
          </LabelStyle> }
        </section>
        <button type="submit">Create Note</button>
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


