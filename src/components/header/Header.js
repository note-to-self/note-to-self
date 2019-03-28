import React, { PureComponent } from 'react';
import styles from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import openIcon from '../../../assets/images/menu.png';
import lotus from '../../../assets/images/lotus.png';
import PropTypes from 'prop-types';

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

export default class Header extends PureComponent {
  static propTypes = {
    logout: PropTypes.func,
    profilePicture: PropTypes.string
  };

  render() {
    console.log(this.props, 'picture');
    return (
      <>  
      <HeaderStyle>
        <DivStyle>
          <Menu customBurgerIcon={ <OpenIcon style="width: 0" src={openIcon}/> }>
            <NavStyles id="home" className="menu-item" href='/home'> HOME </NavStyles>
            <NavStyles id="auth" className="menu-item" href='/auth'> AUTH </NavStyles>
            <NavStyles id="login" className="menu-item" href='/login'> LOGIN </NavStyles>
            <NavStyles id="auth" className="menu-item" href='/auth'><button type="button" onClick={this.props.logout}>LOGOUT</button></NavStyles>
          </Menu>
        </DivStyle>
        {this.props.profilePicture ? <a href="/home"><ProfilePic src={this.props.profilePicture} /></a>  : <Lotus src={lotus} /> }
      </HeaderStyle>
      </>
    );
  }
}
