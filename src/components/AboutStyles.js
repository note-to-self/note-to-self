import styles from 'styled-components';
import image from '../../assets/images/rose-elena-501720-unsplash.jpg';

export const AboutHeader = styles.header `
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  padding-top: 0;
  text-align: center
  background-image: url(${image});
  height: 40vh;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-family: 'Muli', sans-serif;
    color: white;
    letter-spacing: .09em;
    text-shadow: 1pt 1.5pt grey;
  }
@media (min-width: 1000px) {
  width: 50vw;
}
`;

export const AboutMain = styles.div`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
border-radius: 10px;
margin-top: -4em;
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
@media (min-width: 700px) {
  background: #D7D6D6;
  font-family: 'Muli', sans-serif;
  color: #316f7f;
  width: 40%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  box-shadow: 1pt 1pt 1pt #9BB7C3;
  letter-spacing: .02em;
  border-radius: 10px;
  img {
    width: 50%;
    height: auto;
  }
}`;

export const StyledPhoto = styles.img`
    border-radius: 8px;
    display: block;
    margin: 0 auto;
    width: 100%;
`;
