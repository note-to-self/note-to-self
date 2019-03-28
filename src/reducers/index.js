import { combineReducers } from 'redux';
import session from './session';
import message from './message';
import journal from './journal';
import search from './search';
import community from './community';

import quote from './quote';


export default combineReducers({
  session,
  message,
  journal,
  search,
  quote,
  community
});
