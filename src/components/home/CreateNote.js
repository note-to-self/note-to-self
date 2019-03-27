import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';


const FormStyle = styles.form`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
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
    color: white;
  }
`;

const LabelStyle = styles.label`
  display: block;
  padding: 1em 0 1em 0;
`;

const InputStyle = styles.input`
  padding: 1em
`;

const FormContainer = styles.div`
  padding-top: 5em;
  textarea {
    position: relative;
    margin: 2em 0 0 0;
    width: 250px;
    height: 100px;
    background: transparent;
  }
`;


export default function CreateNote({ handleSubmit, onChange, time, date, message, repeat, repeatTime, repeatDay }) {
  return (
    <FormContainer className="container">
      <FormStyle onSubmit={handleSubmit.bind(null, time, date, message)}> 
        {/* <CheckboxStyle> Public
          <InputStyle type="checkbox" id="public" value={publicChoice} onChange={onChange} />
          <span></span>
        </CheckboxStyle> */}
        <section>
          <LabelStyle> Date
            <InputStyle type="date" value={date} onChange={onChange} id="date" />
          </LabelStyle>
          <LabelStyle> Time
            <InputStyle type="time" value={time} onChange={onChange} id="time"/>
          </LabelStyle> 
          <LabelStyle> Message
            <textarea value={message} onChange={onChange} id="message"/>
          </LabelStyle> 
          <LabelStyle> Reoccuring
            <input type="checkbox" value={repeat} onChange={onChange} id="repeat"/>
          </LabelStyle> 
          <LabelStyle> Repeat Time
            <input type="time" value={repeatTime} onChange={onChange} id="repeatTime"/>
          </LabelStyle> 
          <LabelStyle> Repeat Day
            <input type="date" value={repeatDay} onChange={onChange} id="repeatDay"/>
          </LabelStyle> 
        </section>
        <button onClick="submit">Create Note</button>
      </FormStyle>
    </FormContainer>
  );
}

CreateNote.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  repeat: PropTypes.bool,
  repeatTime: PropTypes.string,
  repeatDay: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired
};


