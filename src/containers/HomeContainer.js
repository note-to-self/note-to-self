import { connect } from 'react-redux';
import { logOutUser } from '../actions/session';
import Home from '../components/home/Home';
import { updateDate, updateTime, updateMessage, createMessage, updatePublic } from '../actions/message';
import { getDate, getTime, getMessage, getPublic } from '../selectors/message';

const mapStateToProps = state => ({
  date: getDate(state),
  time: getTime(state),
  message: getMessage(state),
  public: getPublic(state)
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logOutUser());
  }
});

export default connect(
  null, 
  },
  onChange({ target }) {
    const factoryMethod = {
      date: updateDate,
      time: updateTime,
      message: updateMessage,
      public: updatePublic
    };
    dispatch(factoryMethod[target.id](target.value));
  },
  handleSubmit(message, time, date, event) {
    event.preventDefault();
    dispatch(createMessage({ date, time, message }));
  },
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Home);
