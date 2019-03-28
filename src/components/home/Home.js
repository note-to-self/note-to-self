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
  background-size: 50vw 100vh;
  background-color:  white;
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
@media (min-width: 700px) {
  background-image: url(${homeImage}); 
  height: 30vh;
  width: 40vw;
  display: block;
  margin-right: auto;
  margin-left: auto;
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

