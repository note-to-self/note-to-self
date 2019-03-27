import { connect } from 'react-redux';
import { updateDate, updateTime, updateMessage, createMessage, updateRepeat, updateRepeatDay, updateRepeatTime, updatePrivateMessage } from '../actions/message';
import { getDate, getTime, getMessage, getRepeat, getRepeatDay, getRepeatTime, getPrivateMessage } from '../selectors/message';
import CreateNote from '../components/home/CreateNote';


const mapStateToProps = state => ({
  date: getDate(state),
  time: getTime(state),
  privateMessage: getPrivateMessage(state),
  message: getMessage(state),
  repeat: getRepeat(state),
  repeatDay: getRepeatDay(state),
  repeatTime: getRepeatTime(state)
});

const mapDispatchToProps = dispatch => ({
  handleChecked({ target }) {
    const checkedMethods = {
      privateMessage: updatePrivateMessage,
      repeat: updateRepeat,
    };
    dispatch(checkedMethods[target.id](target.checked));
  },
  onChange({ target }) {
    const factoryMethod = {
      date: updateDate,
      time: updateTime,
      message: updateMessage,
      repeatDay: updateRepeatDay,
      repeatTime: updateRepeatTime
    };
    console.log('target', target.checked);
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
