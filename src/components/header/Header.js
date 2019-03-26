import React, { PureComponent } from 'react';
import styles from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import openIcon from '../../../assets/images/menu.png';
import PropTypes from 'prop-types';

const OpenIcon = styles.img`
@media (min-width: 375px) {
  height: 8vh;
  padding: 1em;
  display: flex;
  width: 50%;
}`;

const NavStyles = styles.a`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (min-width: 375px) {
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
}`;
const DivStyle = styles.div`
  height: 10vh;
  width: 10vw;
  position: relative;
  display: flex;
  justify-content: flex-end;
`;



export default class Header extends PureComponent {
  static propTypes = {
    logout: PropTypes.func,
  };

  render() {
    return (
      <header>
        <DivStyle>
          <Menu customBurgerIcon={ <OpenIcon src={openIcon}/> }>
            <NavStyles id="home" className="menu-item" href='/home'> HOME </NavStyles>
            <NavStyles id="auth" className="menu-item" href='/auth'> AUTH </NavStyles>
            <NavStyles id="loginin" className="menu-item" href='/loginin'> LOGIN </NavStyles>
            <NavStyles id="auth" className="menu-item" href='/auth'><button type="button" onClick={this.props.logout}>LOGOUT</button></NavStyles>
          </Menu>
        </DivStyle>
      </header>
    );
  }
}
