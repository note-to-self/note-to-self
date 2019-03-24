import React from 'react';
import styles from 'styled-components';
import homeImage from '../../../assets/images/home-image.jpg';
import 'normalize.css';

const HomeImage = styles.body`
@media (min-width: 375px) {
  background-image: url(${homeImage}); 
  height: 100vh; 
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
}
`;

export default function Home() {
  return (
    <HomeImage>
    </HomeImage>
  );
}
