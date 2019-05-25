import styles from 'styled-components';
import styled from 'styled-components';
import homeImage from '../../../assets/images/home-image.jpg';
import { Link } from 'react-router-dom';

export const HomeImage = styles.main`
  background-image: url(${homeImage}); 
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  z-index: 10
  text-align: center;
  margin-left: 50%;
  transform: translateX(-50%);

@media (min-width: 700px) {
  width: 60%;
}

@media (min-width: 1000px) {
  background-color:  #47B1CD
}
`;

export const StyledLink = styled(Link)`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  text-decoration: none;
  color: #47B1CD;
  font-size: 1.3em;
  font-weight: bold;
  border: 1px solid #47B1CD;
  border-radius: .3em;
  background-color: rgba(255, 255, 255, 0.9);
  padding: .8em .5em .5em .5em;
  width: 50%; 
  z-index: 1;
  margin: 10px auto;

@media (min-width: 800px) {
  margin: 1em auto;
} 
`;

export const StyledDiv = styles.div`
  margin-top: 5em;
  display: grid;
  grid-row-gap: 2em;
  grid-template-rows: 1fr;

@media (min-width: 414px) {    
  margin-left: 0;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1200px) {    
  margin-top: 5em;
  margin-left: 0;
}
`;

export const StyledLogo = styles.img `
  margin-top: 2em;
  width: 5em;
  height: 5em;
  justify-self: center;

@media (min-width: 1000px) {
  margin-top: 2em;
  width: 5rem;
}
@media (min-width: 1500px) {
  margin-top: 2em;
}
`;
