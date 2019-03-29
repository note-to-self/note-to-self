import React from 'react';
import styles from 'styled-components';
import homeImage from '../../../assets/images/home-image.jpg';
import logo from '../../../assets/images/logo.png';

const HomeContainer = styles.section`
@media (min-width: 0px) {
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
z-index: 10;
justify-content: center;
align-items: center;
background-color: white;
opacity: 1;
transition: 2s opacity;
animation-fill-mode: both;
animation-delay: 2s;
animation-duration: 4s;
-webkit-animation-name: fadeOut;
animation-name: fadeOut;
.logo {
  padding-bottom: 70%;
  width: 40%;
}
@keyframes fadeOut {
  0% {opacity: 1;}
  100% {opacity: 0;
        z-index:-1}
  }
}
@media (min-width: 414px) {
  height: 100vh;
  .logo {
    padding-top: 10%;
    width: 20%;
  }
}
@media (min-width: 1000px) {
  height: 100vh;
  background-size: 50vw 100vh;
  background-color:  #47B1CD
  .logo {
    padding-top: 30%;
    width: 14%;
  }
}
`;

export default function HomeModal() {
  return (
    <>
    <HomeContainer>
      <img className="logo" src={logo} alt="note to self logo"/>
    </HomeContainer>
    </>
  );
}