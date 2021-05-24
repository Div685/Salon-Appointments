import { ADD_APPOINTMENT_ITEMS, REMOVE_APPOINTMENT_ITEMS } from '../actions/actionTypes';

const defaultAppointments = {
  appointmentItems: {},
};

const appointmentItemsReducer = (state = defaultAppointments, action) => {
  switch (action.type) {
    case ADD_APPOINTMENT_ITEMS:
      return {
        ...state,
        appointmentItems: action.appointmentItems,
      };
    case REMOVE_APPOINTMENT_ITEMS:
      return {};
    default:
      return state;
  }
};

export default appointmentItemsReducer;
