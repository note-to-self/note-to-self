import { connect } from 'react-redux';
import { updateDate, updateTime, updateMessage, createMessage, updateRepeat, updateRepeatDay, updateRepeatTime, updatePrivate } from '../actions/message';
import { getDate, getTime, getMessage, getRepeat, getRepeatDay, getRepeatTime, getPrivate } from '../selectors/message';
import CreateNote from '../components/home/CreateNote';


const mapStateToProps = state => ({
  date: getDate(state),
  time: getTime(state),
  privateMessage: getPrivate(state),
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
      repeatTime: updateRepeatTime,
      privateMessage: updatePrivate
    };
    dispatch(factoryMethod[target.id](target.value));
  },
  
  handleSubmit(message, time, date, event, repeat, repeatDay, repeatTime, privateMessage) {
    event.preventDefault();
    dispatch(createMessage({ date, time, message, repeat, repeatDay, repeatTime, privateMessage }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CreateNote);
