import React from 'react';
import HomeModal from '../home/HomeModal';
import homeImage from '../../../assets/images/home-image.jpg';
import styles from 'styled-components';

// const HomeImage = styles.body`
// @media (min-width: 375px) {
//   background-image: url(${homeImage}); 
//   height: 100vh; 
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: 100vw 100vh;
// }
// `;



export default function App() {
  return (
    <>
    <HomeModal/>
    </>
  );
}
