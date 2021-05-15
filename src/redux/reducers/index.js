import { combineReducers } from 'redux';
import appointmentsReducer from './appointmentsReducer';
import itemsReducers from './itemsReducers';
import userReducer from './usersReducer';

const rootReducer = combineReducers({
  user: userReducer,
  items: itemsReducers,
  appointments: appointmentsReducer,
});

export default rootReducer;
