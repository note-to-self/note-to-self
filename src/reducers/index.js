import { combineReducers } from 'redux';
import session from './session';
import message from './message';
import journal from './journal';
import search from './search';

export default combineReducers({
  session,
  message,
  journal,
  search
});
