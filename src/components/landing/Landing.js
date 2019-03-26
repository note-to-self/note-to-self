import React from 'react';
import {
  Link
} from 'react-router-dom';


export default class Landing extends React.PureComponent {
  render() {
    return (
            <>
            <h1>
                NOTE TO SELF LANDING PAGE

            </h1>
            <h3>
              <Link to='/auth'> SIGN UP</ Link>
            </h3>
            <h3>
              <Link to='/login'> SIGN IN</ Link>
            </h3>
            </>
    );
  }
}
