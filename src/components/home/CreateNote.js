import React from 'react';
import PropTypes from 'prop-types';
import { 
  FormContainer, 
  FormStyle, 
  LabelStyle, 
  InputLabel, 
  InputStyle 
} from './CreateNoteStyles';

export default function CreateNote({ handleSubmit, onChange, time, date, body, isRepeated, weekly, daily, privateMessage, handleChecked }) {
  return (
    <FormContainer className="container">
      <FormStyle onSubmit={handleSubmit.bind(null, body, time, date, isRepeated, weekly, daily, privateMessage)}>
        <section>

          <LabelStyle> Private Message
            <InputLabel 
              type="checkbox" 
              value={privateMessage} 
              onChange={handleChecked} 
              id="privateMessage"/>
          </LabelStyle>

          <LabelStyle> Date
            <InputStyle 
              type="date" 
              value={date} 
              onChange={onChange} 
              id="date" />
          </LabelStyle>

          <LabelStyle> Time
            <InputStyle 
              type="time" 
              value={time} 
              onChange={onChange} 
              id="time"/>
          </LabelStyle> 

          <LabelStyle> Message
            <textarea 
              value={body} 
              onChange={onChange} 
              id="body"/>
          </LabelStyle> 

          <LabelStyle> Reoccuring
            <InputLabel 
              type="checkbox" 
              value={isRepeated} 
              onChange={handleChecked} 
              id="isRepeated"/>
          </LabelStyle>

          {isRepeated && <LabelStyle> Daily
            <InputLabel 
              type="checkbox" 
              value={daily} 
              onChange={handleChecked}  
              id="daily"/>
          </LabelStyle>}

          {isRepeated && <LabelStyle> Weekly
            <InputLabel 
              type="checkbox" 
              value={weekly} 
              onChange={handleChecked}  
              id="weekly"/>
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
  privateMessage: PropTypes.bool,
  body: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleChecked: PropTypes.func,
  isRepeated: PropTypes.bool,
  weekly: PropTypes.bool,
  daily: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired
};
