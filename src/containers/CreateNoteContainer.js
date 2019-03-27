import { connect } from 'react-redux';
import { updateDate, updateTime, updateMessage, createMessage, updatePublicChoice } from '../actions/message';
import { getDate, getTime, getMessage } from '../selectors/message';
import CreateNote from '../components/home/CreateNote';

const mapStateToProps = state => ({
  date: getDate(state),
  time: getTime(state),
  message: getMessage(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      date: updateDate,
      time: updateTime,
      message: updateMessage
    };
    dispatch(factoryMethod[target.id](target.value));
  },
  
  handleSubmit(message, time, date, event) {
    event.preventDefault();
    dispatch(createMessage({ date, time, message }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CreateNote);
