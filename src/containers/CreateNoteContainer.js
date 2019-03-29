import { connect } from 'react-redux';
import { updateDate, updateTime, updateMessage, createMessage, updateDaily, updateWeekly, updatePrivateMessage, updateIsRepeated } from '../actions/message';
import { getDate, getTime, getMessage, getDaily, getPrivateMessage, getWeekly, getIsRepeat } from '../selectors/message';
import CreateNote from '../components/home/CreateNote';

const mapStateToProps = state => ({
  date: getDate(state),
  time: getTime(state),
  privateMessage: getPrivateMessage(state),
  body: getMessage(state),
  isRepeated: getIsRepeat(state),
  daily: getDaily(state),
  weekly: getWeekly(state)
});

const mapDispatchToProps = dispatch => ({
  handleChecked({ target }) {
    const checkedMethods = {
      privateMessage: updatePrivateMessage,
      isRepeated: updateIsRepeated,
      daily: updateDaily,
      weekly: updateWeekly
    };
    dispatch(checkedMethods[target.id](target.checked));
  },
  onChange({ target }) {
    const factoryMethod = {
      date: updateDate,
      time: updateTime,
      body: updateMessage
    };
    dispatch(factoryMethod[target.id](target.value));
  },
  
  handleSubmit(body, time, date, isRepeated, weekly, daily, privateMessage, event) {
    const repeat = {
      daily,
      weekly
    };
    event.preventDefault();
    dispatch(createMessage({ date, time, body, isRepeated, repeat, privateMessage }));
  }
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CreateNote);
