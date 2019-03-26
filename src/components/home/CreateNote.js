import React from 'react';
import PropTypes from 'prop-types';

export default function CreateNote({ handleSubmit, onChange, time, date, message, publicChoice }) {
  return (
    <section>
      <form onSubmit={handleSubmit.bind(null, time, date, message, publicChoice)}> 
        <label> Public
          <input type="checkbox" value={publicChoice} onChange={onChange} id="public"/>
        </label>
        <section>
          <label> Date
            <input type="date" value={date} onChange={onChange} id="date" />
          </label>
          <label> Time
            <input type="time" value={time} onChange={onChange} id="time"/>
          </label> 
          <label> Message
            <textarea rows="8" cols="50" value={message} onChange={onChange} id="message"/>
          </label> 
        </section>
        <button onClick={handleSubmit}>Create Note</button>
      </form>
    </section>
  );
}

CreateNote.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  publicChoice: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};


