import { connect } from 'react-redux';
import { logOutUser } from '../actions/session';
import Home from '../components/home/Home';

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logOutUser());
  }
});

export default connect(
  mapDispatchToProps
)(Home);
