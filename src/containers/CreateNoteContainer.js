import { connect } from 'react-redux';
import { updateDate, updateTime, updateMessage, createMessage, updateRepeat, updateDaily, updateWeekly, updatePrivateMessage } from '../actions/message';
import { getDate, getTime, getMessage, getRepeat, getDaily, getPrivateMessage, getWeekly } from '../selectors/message';
import CreateNote from '../components/home/CreateNote';


const mapStateToProps = state => ({
  date: getDate(state),
  time: getTime(state),
  privateMessage: getPrivateMessage(state),
  body: getMessage(state),
  repeat: getRepeat(state),
  daily: getDaily(state),
  weekly: getWeekly(state)
});

const mapDispatchToProps = dispatch => ({
  handleChecked({ target }) {
    const checkedMethods = {
      privateMessage: updatePrivateMessage,
      repeat: updateRepeat,
      daily: updateDaily,
      weekly: updateWeekly
    };
    dispatch(checkedMethods[target.id](target.checked));
  },
  onChange({ target }) {
    const factoryMethod = {
      date: updateDate,
      time: updateTime,
      message: updateMessage
    };
    console.log('target', target.checked);
    dispatch(factoryMethod[target.id](target.value));
  },
  
  handleSubmit(body, time, date, event, repeat, repeatDay, repeatTime, privateMessage) {
    event.preventDefault();
    dispatch(createMessage({ date, time, body, repeat, repeatDay, repeatTime, privateMessage }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CreateNote);
