import 'normalize.css';
import React from 'react';
import {
  Link
} from 'react-router-dom';
import styles from 'styled-components';
import styled from 'styled-components';
import lotusIcon from '../../../assets/images/lotusIcon.png';
import LandingModal from '../home/HomeModal';
import QuoteContainer from '../../containers/QuoteContainer';
import homeImage from '../../../assets/images/home-image.jpg';

const HomeImage = styles.main`
@media (max-width: 414px) {
  background-image: url(${homeImage}); 
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  z-index: 10
  text-align: center;
}
@media (min-width: 415px) {
  background-image: url(${homeImage}); 
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  z-index: 10
  text-align: center;
}
@media (min-width: 1000px) {
  background-image: url(${homeImage}); 
  height: 100vh;
  background-size: 50vw 100vh;
  background-color:  #47B1CD
}

`;

const StyledLink = styled(Link)`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (max-width: 414px) {
  font-family: 'Muli', sans-serif;
  text-decoration: none;
  color: #47B1CD;
  font-size: 1.3em;
  font-weight: bold;
  border: 1px solid #47B1CD;
  border-radius: .3em;
  background-color: rgba(255, 255, 255, 0.9);
  padding: .8em .5em .5em .5em;
  width: 60%; 
  z-index: 1;
  margin: 0 auto;
}
@media (min-width: 414px) {
  font-family: 'Muli', sans-serif;
  text-decoration: none;
  color: #47B1CD;
  font-size: 1.3em;
  font-weight: bold;
  border: 1px solid #47B1CD;
  border-radius: .3em;
  background-color: rgba(255, 255, 255, 0.9);
  padding: .8em .5em .5em .5em;
  width: 60%; 
  z-index: 1;
  margin: 1em auto;
}
@media (min-width: 800px) {
  width: 50%; 
  z-index: 1;
  margin: 1em auto;
}

@media (min-width: 1000px) {
  width: 40%; 
}
@media (min-width: 1500px) {
  width: 30%; 
}
@media (min-width: 2000px) {
  font-size: 2em;
  width: 25%; 
}
`;

const StyledDiv = styles.div`
@media (max-width: 414px) {
  margin-top: 5em;
  display: grid;
  grid-row-gap: 2em;
  grid-template-rows: 1fr;
}
@media (min-width: 414px) {    
  margin-top: 5em;
  margin-left: 0;
  display: flex;
  flex-direction: column;
}
@media (min-width: 1200px) {    
  margin-top: 5em;
  margin-left: 0;
}

`;

const StyledLogo = styles.img `
@media (max-width: 414px) {
  margin-top: 2em;
  width: 20vw;
  height: 10vh;
  justify-self: center;
}
@media (min-width: 414px) {
  margin-top: 2em;
  width: 12vw;
  height: 10vh;
  justify-self: center;
}

@media (min-width: 800px) {
  margin-top: 2em;
  width: 9vw;
}
@media (min-width: 1500px) {
  margin-top: 2em;
  width: 7vw;
}
`;


export default class Landing extends React.PureComponent {
  render() {
    return (
      <>
        <LandingModal/>
        <HomeImage>
          <StyledLogo src={lotusIcon}/>
          <StyledDiv>
            <StyledLink to='/auth'> Sign-up </ StyledLink>
            <StyledLink to='/login'> Sign-in </ StyledLink> 
          </StyledDiv>
          <QuoteContainer />
        </HomeImage>
      </>
    );
  }
}
