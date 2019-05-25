import styles from 'styled-components';
import homeImage from '../../../assets/images/home-form-image.jpg';

export const HomeMain = styles.main`
@media (min-width: 700px) {
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  background-color: white;
}
`;

export const HomeImage = styles.header`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  background-image: url(${homeImage}); 
  height: 40vh;
  margin: 0 auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 870px;
  
  h1 {
    margin: 0 auto;
    text-align: center;
    font-family: 'Muli', sans-serif;
    color: white;
    letter-spacing: .09em;
    text-shadow: 1pt 1.5pt grey;
  }

  @media (min-width: 760px) {
    width: 100vw;
  }

  @media (min-width: 1240px) {
    width: 65vw;
  }

`;

export const HomeContainer = styles.section`
@media (min-width: 0px) {
position: fixed;
top: 0; 
left: 0;
height: 100vh;
width: 100vw;
display: flex;
background-image: url(${homeImage});
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
    padding-top: 0;
    width: 40%;
  }
}
@media (min-width: 1000px) {
  height: 100vh;
  background-size: 50vw 100vh;
  background-color:  #47B1CD
  .logo {
    padding-top: 40%;
    width: 14%;
  }
}
`;
