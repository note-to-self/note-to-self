import { connect } from 'react-redux';
import { updateDate, updateTime, updateMessage, createMessage, updateRepeat, updateRepeatDay, updateRepeatTime } from '../actions/message';
import { getDate, getTime, getMessage, getRepeat, getRepeatDay, getRepeatTime } from '../selectors/message';
import CreateNote from '../components/home/CreateNote';

const mapStateToProps = state => ({
  date: getDate(state),
  time: getTime(state),
  message: getMessage(state),
  repeat: getRepeat(state),
  repeatDay: getRepeatDay(state),
  repeatTime: getRepeatTime(state)
});

const mapDispatchToProps = dispatch => ({
  onChange({ target }) {
    const factoryMethod = {
      date: updateDate,
      time: updateTime,
      message: updateMessage,
      repeat: updateRepeat,
      repeatDay: updateRepeatDay,
      repeatTime: updateRepeatTime
    };
    dispatch(factoryMethod[target.id](target.value));
  },
  
  handleSubmit(message, time, date, event, repeat, repeatDay, repeatTime) {
    event.preventDefault();
    dispatch(createMessage({ date, time, message, repeat, repeatDay, repeatTime }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CreateNote);
