import { connect } from 'react-redux';
import AuthForm from '../components/auth/AuthForm';
import { getEmail, getPassword, getName, getPhone } from '../selectors/session';
import { updateEmail, updatePassword, updatePhone, updateName } from '../actions/session';
import { createUser } from '../actions/session';

const mapStateToProps = state => ({
  email: getEmail(state),
  password: getPassword(state),
  name: getName(state),
  phone: getPhone(state)
});
// fire an action that fires that signup function from auth
const mapDispatchToProps = dispatch => ({
  handleAuth(email, password, name, phone, event) {
    event.preventDefault();
    dispatch(createUser({ email, password, name, phone }));
  },
  onChange({ target }) {
    const factoryMethod = {
      name: updateName,
      email: updateEmail,
      password: updatePassword,
      phone: updatePhone
    };
    dispatch(factoryMethod[target.id](target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
