import React from 'react';
import { connect } from 'react-redux';
import { login } from '../services/auth';
import {
  Link
} from 'react-router-dom';


export class LoginContainer extends React.PureComponent {

  componentDidMount() {
    login();
  }

  render() {
    return (
      <h1>Don`t have an account? Sign up <Link to='/auth'> </Link></h1>
    );
  }
}

export default connect()(LoginContainer);
