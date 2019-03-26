import 'normalize.css';
import React from 'react';
import {
  Link
} from 'react-router-dom';
import styles from 'styled-components';
import styled from 'styled-components';
import lotusIcon from '../../../assets/images/lotusIcon.png';
import logo from '../../../assets/images/logo.png';
// import LandingModal from '../home/HomeModal';



import homeImage from '../../../assets/images/home-image.jpg';

const HomeImage = styles.main`
@media (min-width: 375px) {
  background-image: url(${homeImage}); 
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  z-index: 99
  text-align: center;
  display: grid;
  grid-row-template: 33% 33% 33%
  justify-content: center;
}`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 2em;
  font-weight: bold;
  border: 1px solid #47B1CD;
  border-radius: .3em;
  background-color: rgba(255, 255, 255, 0.57);
  margin: .6em;
  padding-right: .5em;
  padding-left: .5em;
  
`;

const StyledDiv = styles.div`
color: 47B1CD;
align-self: end;
align-self: center;
`;
const StyledImage = styles.img `
  justify-self: center;
`;

export default class Landing extends React.PureComponent {
  render() {
    return (
      <>
        {/* <LandingModal/> */}
        <HomeImage>
          <StyledImage src={lotusIcon}/>
          <StyledImage src={logo}/>
          <StyledDiv>
            <StyledLink to='/auth'> Sign-up </ StyledLink>
            <StyledLink to='/login'> Sign-in </ StyledLink>
          </StyledDiv>
        </HomeImage>
      </>
    );
  }
}
