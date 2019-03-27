import React from 'react';
import { connect } from 'react-redux';
import { login } from '../services/auth';
import lotus from '../../assets/images/lotus.png';
import styles from 'styled-components';
import {
  Link
} from 'react-router-dom';

const Lotus = styles.img`
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  top: 35%;
  left: 22%;
`;
export class LoginContainer extends React.PureComponent {

  componentDidMount() {
    login();
  }

  render() {
    return (
      <>
      <Lotus src={lotus} /><Link to='/auth'> </Link>
      </>
    );
  }
}

export default connect()(LoginContainer);
