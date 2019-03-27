import { combineReducers } from 'redux';
import session from './session';
import message from './message';

import quote from './quote';

export default combineReducers({
  session,
  message,
  quote
});
