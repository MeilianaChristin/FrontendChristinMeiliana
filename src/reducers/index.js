import {combineReducers} from 'redux';

import {
  contacts,
  contactById,
  savedContact,
  deletedContactById,
} from './contacts';

export default combineReducers({
  contacts,
  contactById,
  savedContact,
  deletedContactById,
});
