import React from 'react';
import styles from 'styled-components';
import homeImage from '../../../assets/images/home-image.jpg';
import logo from '../../../assets/images/logo.png';

const HomeContainer = styles.div`
position: fixed;
top: 0; 
left: 0;
height: 100vh;
width: 100vw;
display: flex;
background-image: url(${homeImage});
height: 100vh; 
background-position: center;
background-repeat: no-repeat;
background-size: 100vw 100vh;
z-index: 99;
justify-content: center;
align-items: center;
background-color: white;
opacity: 1;
transition: 1s opacity;
animation-fill-mode: both;
animation-delay: 0;
animation-duration: 2s;
-webkit-animation-name: fadeOut;
animation-name: fadeOut;

.logo {
  padding-bottom: 70%;
  width: 40%;
}

@-webkit-keyframes fadeOut {
  80% {opacity: 1;}
  100% {opacity: 0;
        z-index:-1}
}
@keyframes fadeOut {
  80% {opacity: 1;}
  100% {opacity: 0;
        z-index:-1}
  }
`;

export default function HomeModal() {
  return (
    <>
    <HomeContainer>
      <img className="logo" src={logo} />
    </HomeContainer>
    </>
  );
}
