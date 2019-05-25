import styles from 'styled-components';
import homeImage from '../../../assets/images/home-image.jpg';

export const HomeImage = styles.div`
@media (max-width: 414px) {
  background-image: url(${homeImage}); 
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

@media (min-width: 1000px) {
  overflow: scroll;
  background-image: url(${homeImage}); 
  height: 100%;
  background-size: 50% 100%;
  background-color:  #47B1CD
}
`;

export const FormStyles = styles.form`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');

@media (min-width: 414px) {
  font-family: 'Muli', sans-serif;
  font-size: 1.3em;
  text-align: left;
  padding-top: 5em;
}
@media (min-width: 1500px) {
  font-family: 'Muli', sans-serif;
  font-size: 1.6em;
  text-align: left;
  padding-top: 3em;
}
`;

export const LabelAuth = styles.label`
@media (max-width: 414px) {
  margin-bottom: 1em;
  padding-top: 1em;
  display: inline-block;
  text-align: left;
  vertical-align: 10px;
  margin-left: 1em;
  width: 50%
}
@media (min-width: 414px) {
  margin-bottom: 1em;
  padding-top: 1em;
  display: inline-block;
  text-align: left;
  vertical-align: 10px;
  margin-left: 1em;
  width: 50%
}
`;

export const FormDiv = styles.div`
@media (max-width: 414px) {
  color: #568697;
  background-color: rgba(255, 255, 255, 0.9);
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 1em;
}
@media (min-width: 414px) {
  color: #568697;
  background-color: rgba(255, 255, 255, 0.9);
  width: 80%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 1em;
}
@media (min-width: 700px) {
  width: 60%;
}
@media (min-width: 1000px) {
  width: 40%;
}
@media (min-width: 1500px) {
  width: 32%;
}
`;

export const InputAuth = styles.input`
@media (max-width: 414px) {
  margin-left: .2em;
  vertical-align: 10px;
  background: none;
  border-style: none;
  border-bottom: 1pt solid #568697;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  color: #568697;
}
@media (min-width: 414px) {
  margin-left: .2em;
  vertical-align: 10px;
  background: none;
  border-style: none;
  border-bottom: 1pt solid #568697;
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 80%;
  color: #568697;
}
@media (min-width: 700px) 
  width: 60%;
}

`;

export const StyledLogo = styles.img `

@media (min-width: 414px) {
  padding-top: 1em;
  width: 4em;
  height: 4em;
  margin-right: auto;
  margin-left: auto;
  display: block
}

@media (min-width: 760px) {
  padding-top: 3em;
}

@media (min-width: 1240px) {
  width: 5rem;
  height: 5rem;
}
`;

export const AuthButton = styles.button`
@media (max-width: 414px) {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  margin-top: 1em;
  background-color: rgba(255, 255, 255, 0.9);
  border-style: none;
  padding: .5em;
  border-radius: 10px;
  font-family: 'Muli', sans-serif;
  color: #568697;
}
@media (min-width: 414px) {
  display: block;
  margin-right: auto;
  margin-left: auto;
  width: 50%;
  margin-top: 1em;
  background-color: rgba(255, 255, 255, 0.9);
  border-style: none;
  padding: .5em;
  border-radius: 10px;
  font-family: 'Muli', sans-serif;
  color: #568697;
}
@media (min-width: 700px) {
  margin-top: 4em;
  font-size: 1.2em;
  width: 60%;
}
@media (min-width: 1000px) {
  margin-top: 4em;
  font-size: 1.2em;
  width: 40%;
}
@media (min-width: 1500px) {
  margin-top: 1em;
  font-size: 1.2em;
  width: 32%;
  padding: .2em;
  margin-bottom: 2em;
}
`;
