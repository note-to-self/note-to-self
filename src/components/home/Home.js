import React, { PureComponent } from 'react';
// import styles from 'styled-components';
// import homeImage from '../../../assets/images/home-image.jpg';
import 'normalize.css';
import PropTypes from 'prop-types';
import {
  Link
} from 'react-router-dom';
import CreateNoteContainer from '../../containers/CreateNoteContainer';

// const HomeImage = styles.body`
// @media (min-width: 375px) {
//   background-image: url(${homeImage}); 
//   height: 100vh; 
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 100vw 100vh;
// }
// `;
export default class Home extends PureComponent {
  static propTypes = {
    logout: PropTypes.func,
  };

  render() {
    return (
    <>
    <header>
      <nav>
        <Link to='/home'> HOME </ Link>
        <Link to='/auth'> AUTH </ Link>
        <Link to='/login'> LOGIN </ Link>
        <Link to='/auth'><button type="button" onClick={this.props.logout}>LOGOUT</button></ Link>
      </nav>
    </header>
    <CreateNoteContainer/>
    </>
    );
  }
}
