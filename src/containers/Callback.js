import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSession } from '../actions/session';
import { getToken } from '../selectors/session';
import { ROUTES } from '../routes';
import lotus from '../../assets/images/lotus.png';
import styles from 'styled-components';

const Lotus = styles.img`
@media (min-width: 375px) {
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  top: 35%;
  left: 22%;
}
@media (min-width: 700px) {
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  top: 30%;
  left: 42%;
}
@media (min-width: 1400px) {
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  top: 30%;
  left: 42%;
}
@media (min-width: 2000px) {
  display: block;
  margin-left: auto;
  margin-right: auto
  position: fixed;
  height: 30%;
  width: 15%;
  top: 30%;
  left: 45%;
}`;
class Callback extends React.PureComponent{
    static propTypes = {
      token: PropTypes.string.isRequired,
      handleAuth: PropTypes.func.isRequired
    }
    componentDidMount() {
      this.props.handleAuth();
    }
    render() {
      if(this.props.token) {
        return <Redirect to={ROUTES.HOME.linkTo()} />;
      }
      return <Lotus src={lotus} />;
    }
}
const mapStateToProps = state => ({
  token: getToken(state)
});
  
const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
