import { ADD_APPOINTMENTS } from '../redux/actions/actionTypes';
import AppointmentReducer from '../redux/reducers/appointmentsReducer';

const exampleItems = [{
  itemName: 'dagger',
  date: '2021-05-05',
}];

const initialState = {
  appointments: [],
};

const itemAction = {
  type: ADD_APPOINTMENTS,
  appointments: exampleItems,
};

describe('AppointmentItemsReducer', () => {
  it('it shoud check initialState', () => {
    expect(AppointmentReducer(undefined, {})).toEqual(initialState);
  });

  it('should check all appointment for the user', () => {
    const result = AppointmentReducer(initialState, itemAction);
    expect(result.appointments).toEqual(exampleItems);
  });
});
