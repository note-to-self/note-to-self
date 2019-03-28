import React from 'react';
import PropTypes from 'prop-types';
import styles from 'styled-components';



const OpenIcon = styles.img`
@media (max-width: 414px) {
  height: 8vh;
  padding: 1em;
  display: flex;
  width: 50%;
}
@media (min-width: 414px) {
  height: 8vh;
  padding: 1em;
  display: flex;
  width: 20%;
}
`;

const NavStyles = styles.a`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
 color: white;
 display: block;
 font-family: 'Muli', sans-serif;
 margin-right: auto;
 margin-left: 28%;
 text-decoration: none;
 width: 50%;
 font-size: 2em;
 font-weight: 700;
 padding: 2em 1em .3em 1em;
 text-align: center;
  button {
   color: white;
   font-weight: 700;
 }
}
@media (min-width: 414px) {
  color: white;
  display: block;
  font-family: 'Muli', sans-serif;
  margin-right: auto;
  margin-left: 28%;
  text-decoration: none;
  width: 50%;
  font-size: 2em;
  font-weight: 700;
  padding: 2em 1em .3em 1em;
  text-align: center;
   button {
    color: white;
    font-weight: 700;
  }
 }
 @media (min-width: 700px) {
  color: white;
  display: block;
  width: 50%;
  font-family: 'Muli', sans-serif;
  margin-right: auto;
  margin-left: 45%;
  text-decoration: none;
  font-size: 2em;
  font-weight: 700;
  padding: 2em 1em .3em 1em;
  text-align: center;
   button {
    color: white;
    font-weight: 700;
    font-weight: 700;
    border-style: none;
    background: none;
  }
}
@media (min-width: 1600px) {
  color: white;
  display: block;
  margin: 0 auto;
  width: 100%;
  font-family: 'Muli', sans-serif;
  margin-right: 0;
  margin-left: 0;
  text-decoration: none;
  font-size: 2em;
  font-weight: 700;
  padding: 2em 1em .3em 1em;
  text-align: center;
   button {
    color: white;
    font-weight: 700;
    border-style: none;
    background: none;
  }
}
`;
const DivStyle = styles.div`
@media (max-width: 414px) {
  height: 10vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
}
@media (min-width: 414px) {
  height: 10vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
}

@media (min-width: 700px) {
  height: 15vh;
}
@media (min-width: 920px) {
  height: 20vh;
}
`;

const Lotus = styles.img`
@media (max-width: 414px) {
  height: 6vh;
  width: 12vw;
  padding: 1em;
}
@media (min-width: 414px) {
  height: 6vh;
  width: 8vw;
  padding: 1em;
}
`;

const ProfilePic = styles.img`
@media (max-width: 414px) {
  height: 6vh;
  width: 12vw;
  padding: 1em;
}
@media (min-width: 414px) {
  height: 6vh;
  width: 12vw;
  padding: 1em;
}
@media (min-width: 700px) {
  height: 10vh;
  width: 10vw;
  padding: 1.5em;
}
@media (min-width: 925px) {
  height: 8vh;
  width: 8vw;
  padding: 1.5em;
}
@media (min-width: 1600px) {
  height: 5rem;
  width: 5rem;
  padding: 1.5em 4em 2em 2em;
}
`;

const HeaderStyle = styles.header`
@media (max-width: 414px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media (min-width: 414px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
@media (min-width: 700px) {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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


