import React, { PureComponent } from 'react';
import { slide as Menu } from 'react-burger-menu';
import openIcon from '../../../assets/images/hamburger-icon.png';
import lotus from '../../../assets/images/lotus.png';
import PropTypes from 'prop-types';
import { HeaderStyle, DivStyle, OpenIcon, NavStyles, ProfilePic, Lotus } from './HeaderStyles';
export default class Header extends PureComponent {
  static propTypes = {
    logout: PropTypes.func,
    profilePicture: PropTypes.string
  };

  render() {
    return (
      <>  
      <HeaderStyle>
        <DivStyle>
          <Menu customBurgerIcon={ <OpenIcon src={openIcon} alt="menu icon"/> }>
            <NavStyles id="home" className="menu-item" to='/home'> HOME </NavStyles>
            <NavStyles id="journal" className="menu-item" to='/journal'> JOURNAL </NavStyles>
            <NavStyles id="community" className="menu-item" to='/community'> COMMUNITY </NavStyles>
            <NavStyles id="about" className="menu-item" to='/about'> ABOUT US </NavStyles>
            <NavStyles id="loginin" className="menu-item" to='/loginin'> LOGIN </NavStyles>
            <NavStyles id="auth" className="menu-item" to='/auth'><button type="button" onClick={this.props.logout}>LOGOUT</button></NavStyles>
          </Menu>
        </DivStyle>
        {this.props.profilePicture ? <a href="/home"><ProfilePic src={this.props.profilePicture} alt="user's profile Picture"/></a>  : <Lotus src={lotus} alt="lotus icon picture in blue background" /> }
      </HeaderStyle>
      </>
    );
  }
}
