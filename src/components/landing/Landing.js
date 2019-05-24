import 'normalize.css';
import React from 'react';
import lotusIcon from '../../../assets/images/lotusIcon.png';
import LandingModal from '../home/HomeModal';
import QuoteContainer from '../../containers/QuoteContainer';
import { HomeImage, StyledDiv, StyledLogo, StyledLink } from './LandingStyles';

export default class Landing extends React.PureComponent {
  render() {
    return (
      <>
        <LandingModal/>
        <HomeImage>
          <StyledLogo src={lotusIcon} alt="lotus icon picture in blue background"/>
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
