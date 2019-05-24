import React, { PureComponent } from 'react';
import 'normalize.css';
import PropTypes from 'prop-types';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import { HomeMain, HomeImage } from './HomeStyles';
export default class Home extends PureComponent {
  static propTypes = {
    logout: PropTypes.func,
  };

  showSettings = (event) => {
    event.preventDefault();
  };

  render() {
    return (  
    <>
    <HomeMain>
      <HomeImage>
        <HeaderContainer />
        <h1>I AM...</h1>
        <CreateNoteContainer/>
      </HomeImage>
    </HomeMain>
    </>
    );
  }
}
