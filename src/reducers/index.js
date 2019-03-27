import { combineReducers } from 'redux';
import session from './session';
import message from './message';

export default combineReducers({
  session,
  message
});
