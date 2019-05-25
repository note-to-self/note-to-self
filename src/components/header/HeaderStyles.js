import styles from 'styled-components';
import { Link } from 'react-router-dom';

export const OpenIcon = styles.img`
  @media (max-width: 414px) {
    height: 8vh;
    padding: 1em;
    display: flex;
    width: 50%;
  }

  @media (min-width: 414px) {
    height: 8vh;
    padding: 1em;
    display: flex;
    width: 20%;
  }
`;

export const NavStyles = styles(Link)`
  @import url('https://fonts.googleapis.com/css?family=Muli:300,700');
  font-family: 'Muli', sans-serif;
  outline: transparent auto 0px;
  color: white;
  display: block;
  margin-right: auto;
  margin-left: 28%;
  text-decoration: none;
  width: 60%;
  font-size: 1.4em;
  font-weight: 700;
  padding-top: 2em;
  text-align: center;

  button {
    color: white;
    font-weight: 700;
  }

  @media (min-width: 414px) {
    width: 40%;
    font-size: 1.6em;
  }

  @media (min-width: 760px) {
    width: 50%;
    font-size: 2em;

    button {
      border-style: none;
      background: none;
    }
  }

  @media (min-width: 1240px) {
    width: 100%;
    margin-right: 0;
    margin-left: 1em;
  }
`;

export const DivStyle = styles.div`
  height: 10vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  outline: transparent auto 0px;

  .bm-burger-button {
    button {
      color: black;
    }
  }

  @media (min-width: 700px) {
    height: 15vh;
  }
`;

export const Lotus = styles.img`
  height: 6vh;
  width: 12vw;
  padding: 1em;
`;

export const ProfilePic = styles.img`
  width: 4em;
  padding: 1em;

  @media (min-width: 700px) {
    padding: 1.5em;
  }

  @media (min-width: 1400px) {
    padding: 1.5em 4em 2em 2em;
  }
`;

export const HeaderStyle = styles.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
