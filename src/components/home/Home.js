import React, { PureComponent } from 'react';
import styles from 'styled-components';
import homeImage from '../../../assets/images/home-form-image.jpg';
import 'normalize.css';
import PropTypes from 'prop-types';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import HeaderContainer from '../../containers/HeaderContainer';


const HomeMain = styles.div`
@media (min-width: 700px) {
  height: 100vh;
  width: 100vw;
  background-size: 50vw 100vh;
  background-color: rgba(255, 255, 255, 0.9);
}
`;

const HomeImage = styles.div`
@media (max-width: 414px) {
  background-image: url(${homeImage}); 
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width: 414px) {
  background-image: url(${homeImage}); 
  height: 40vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media (min-width: 700px) {
  background-image: url(${homeImage}); 
  height: 40vh;
  width: 50vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
`;

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
        <CreateNoteContainer/>
      </HomeImage>
    </HomeMain>
    </>
    );
  }
}

