import React, { PureComponent } from 'react';
import styles from 'styled-components';
import homeImage from '../../../assets/images/home-form-image.jpg';
import 'normalize.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import { slide as Menu } from 'react-burger-menu';


const HomeImage = styles.div`
@media (min-width: 375px) {
  background-image: url(${homeImage}); 
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
`;
export default class Home extends PureComponent {
  static propTypes = {
    logout: PropTypes.func,
    closeNav: PropTypes.func
  };

  showSettings = (event) => {
    event.preventDefault();
  };

  render() {
    return (
    <>
    <HomeImage>
      <header>
        <span> ≡ </span>
        <div id="mySidenav" className="sidenav">
          <Menu>
            <NavLink to='/home' id="home" className="menu-item"> HOME </ NavLink>
            <NavLink to='/auth' id="auth" className="menu-item"> AUTH </ NavLink>
            <NavLink to='/login' id="loginin"className="menu-item"> LOGIN </ NavLink>
            <NavLink to='/auth' id="home"><button type="button" onClick={this.props.logout}>LOGOUT</button></ NavLink>
          </Menu>
        </div>
      </header>
    </HomeImage>
    <CreateNoteContainer/>
    </>
    );
  }
}
