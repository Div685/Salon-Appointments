import { combineReducers } from 'redux';
import appointmentsReducer from './appointmentsReducer';
import itemsReducers from './itemsReducers';
import singleItemsReducers from './singleItemReducer';
import userReducer from './usersReducer';
import appointmentItemsReducer from './appointmentItemsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  items: itemsReducers,
  item: singleItemsReducers,
  appointments: appointmentsReducer,
  appointmentItems: appointmentItemsReducer,
});

export default rootReducer;
