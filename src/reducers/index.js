import { combineReducers } from 'redux';
import session from './session';
import message from './message';
import journal from './journal';

export default combineReducers({
  session,
  message,
  journal
});
