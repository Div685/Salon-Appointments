import { ADD_APPOINTMENT_ITEMS } from '../redux/actions/actionTypes';
import AppointmentReducer from '../redux/reducers/appointmentItemsReducer';

const exampleItems = [{
  itemName: 'dagger',
  date: '2021-05-05',
}];

const initialState = {
  appointmentItems: {},
};

const itemAction = {
  type: ADD_APPOINTMENT_ITEMS,
  appointmentItems: exampleItems,
};

describe('AppointmentItemsReducer', () => {
  it('it shoud check initialState', () => {
    expect(AppointmentReducer(undefined, {})).toEqual(initialState);
  });

  it('should check all appointment for the user', () => {
    const result = AppointmentReducer(initialState, itemAction);
    expect(result.appointmentItems).toEqual(exampleItems);
  });
});
