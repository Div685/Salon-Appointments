import { createStore, combineReducers } from 'redux';
import appointmentsReducer from '../../redux/reducers/appointmentsReducer';
import itemsReducers from '../../redux/reducers/itemsReducers';
import singleItemsReducers from '../../redux/reducers/singleItemReducer';
import userReducer from '../../redux/reducers/usersReducer';
import appointmentItemsReducer from '../../redux/reducers/appointmentItemsReducer';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      user: userReducer,
      items: itemsReducers,
      item: singleItemsReducers,
      appointments: appointmentsReducer,
      appointmentItems: appointmentItemsReducer,
    }),
  );
  return store;
};

export default configureStore;
