import React, { PureComponent } from 'react';
import styles from 'styled-components';
import homeImage from '../../../assets/images/home-image.jpg';
import menu from '../../../assets/images/menu.png';
import 'normalize.css';
import PropTypes from 'prop-types';

const HomeImage = styles.body`
@media (min-width: 375px) {
  background-image: url(${homeImage}); 
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
`;
export default class Home extends PureComponent {
  static propTypes = {
    logOut: PropTypes.func
  };

  render() {
  return (
    <>
    <header>
      <button type="button" onClick={logOut}> LOGOUT </button>
    </header>
    </>
  );
  }
}
