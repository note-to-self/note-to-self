import React, { PureComponent } from 'react';
import styles from 'styled-components';
import homeImage from '../../../assets/images/home-form-image.jpg';
import 'normalize.css';
import PropTypes from 'prop-types';
import CreateNoteContainer from '../../containers/CreateNoteContainer';
import HeaderContainer from '../../containers/HeaderContainer';



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
  };

  showSettings = (event) => {
    event.preventDefault();
  };

  render() {
    return (  
    <>
    <HomeImage>
      <HeaderContainer />
      {/* <header>
        <DivStyle>
          <Menu customBurgerIcon={ <OpenIcon src={openIcon}/> }>
            <NavStyles id="home" className="menu-item" href='/home'> HOME </NavStyles>
            <NavStyles id="auth" className="menu-item" href='/auth'> AUTH </NavStyles>
            <NavStyles id="loginin" className="menu-item" href='/loginin'> LOGIN </NavStyles>
            <NavStyles id="auth" className="menu-item" href='/auth'><button type="button" onClick={this.props.logout}>LOGOUT</button></NavStyles>
          </Menu>
        </DivStyle>
      </header> */}
      <CreateNoteContainer/>
    </HomeImage>
    </>
    );
  }
}

