import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import kate from '../../assets/images/kate.jpg';
import marcy from '../../assets/images/marcy.jpg';
import lance from '../../assets/images/021319_LM_Headshot_01.jpg';
import carmen from '../../assets/images/IMG_20190329_090257.jpg';
import { AboutHeader, AboutMain, StyledPhoto } from './AboutStyles';

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
          <h2>Title: Passionate Developer </h2>
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
