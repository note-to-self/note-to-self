import { connect } from 'react-redux';
import { getProfilePicture } from '../selectors/session';
import Header from '../components/header/Header';


const mapStateToProps = state => ({
  profilePicture: getProfilePicture(state)
});


export default connect(
  mapStateToProps, 
  null,
)(Header);
