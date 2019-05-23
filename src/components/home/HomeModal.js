import React from 'react';
import logo from '../../../assets/images/logo.png';
import { HomeContainer } from './HomeStyles';

export default function HomeModal() {
  return (
    <>
    <HomeContainer>
      <img className="logo" src={logo} alt="note to self logo"/>
    </HomeContainer>
    </>
  );
}
