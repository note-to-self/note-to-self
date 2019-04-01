import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getToken } from '../selectors/session';
import AuthContainer from './AuthContainer';
import { login } from '../services/auth';

export const withSession = Component => {
  class WithSession extends React.PureComponent {
    static propTypes = {
      token: PropTypes.string,
      history: PropTypes.object
    }

    componentDidMount() {
      if(!this.props.token) {
        login();
      }
    }

    render() {
      if(!this.props.token) return <AuthContainer/>;
      return <Component {...this.props}/>;
    }
  }

  const mapStateToProps = state => ({
    token: getToken(state)
  });

  return connect(mapStateToProps)(WithSession);
};
