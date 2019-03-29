import React from 'react';
import styles from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import kate from '../../assets/images/kate.jpg';
import marcy from '../../assets/images/marcy.jpg';
import lance from '../../assets/images/021319_LM_Headshot_01.jpg';
import image from '../../assets/images/rose-elena-501720-unsplash.jpg';
import carmen from '../../assets/images/IMG_20190329_090257.jpg';

const AboutHeader = styles.header `
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  padding-top: 0;
  text-align: center
  background-image: url(${image});
  height: 40vh;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-family: 'Muli', sans-serif;
    color: white;
    letter-spacing: .09em;
    text-shadow: 1pt 1.5pt grey;
  }
`;

const AboutMain = styles.div`
@import url('https://fonts.googleapis.com/css?family=Muli:300,700');
@media (min-width: 700px) {
  background: #D7D6D6;
  font-family: 'Muli', sans-serif;
  color: #316f7f;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  box-shadow: 1pt 1pt 1pt #9BB7C3;
  letter-spacing: .02em;
  border-radius: 10px;
}
@media (min-width: 414px) {
  border-radius: 10px;
  margin-top: -4em;
  background: #D7D6D6;
  font-family: 'Muli', sans-serif;
  color: #316f7f;
  width: 70%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding: 1em;
  box-shadow: 1pt 1pt 1pt #9BB7C3;
  letter-spacing: .02em;
`;
const StyledPhoto = styles.img`
    border-radius: 8px;
    display: block;
    margin: 0 auto;
    width: 100%;
`;

export default function About() {
  return (
    <>
    <AboutHeader>
      <HeaderContainer />
      <h1>About Us</h1>
    </AboutHeader>
    <AboutMain>
      <main>
        <section>
          <StyledPhoto src={kate} alt="logo" />
          <h1>Kate Dameron</h1>
          <h2>Title: Full-stack Developer</h2>
          <p>As a Full-stack Developer with a background in arts education Kate enjoys making accessible tools that improve our community. When she’s not building components and working on her debugging superpowers - Kate enjoys hiking with her philosophical pup and husband, baking and making art.</p>
        </section>
        <section>
          <StyledPhoto src={marcy} alt="logo" />
          <h1>Marcy Silverman</h1>
          <h2>Title: Developer Extraordinaire</h2>
          <p>Endlessly curious developer with a flare for the front-end. Absolutely enjoyed collaborating with this team and would definitely choose them to fight against a zombie apocalypse! One of my favorite aspects of this project was working with the Twilio API and seeing the front-end and back-end communicate. When I’am not developing you can find me petting dogs, napping, working out, and snacking!</p>
        </section>
        <section>
          <StyledPhoto src={lance} alt="logo" />
          <h1>Lance Merrill</h1>
          <h2>Title: Full-stack Developer</h2>
          <p>Developer. Cyclist. Foodie.</p>
        </section>
        <section>
          <StyledPhoto src={carmen} alt="logo" />
          <h1>Carmen Perezchica</h1>
          <h2>Title: Consumer Centric Full-stack Developer</h2>
          <p>Full-stack developer who enjoys being at the intersection of consumers and technology. Focused on creating experiences that meet both our diverse consumer and business needs. Finds inspiration when spending time with her loved ones! </p>
        </section>
      </main>
    </AboutMain>
    </>
  );
}
