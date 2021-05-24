import { ADD_APPOINTMENTS, REMOVE_APPOINTMENTS } from '../actions/actionTypes';

const defaultAppointments = {
  appointments: [],
};

const appointmentsReducer = (state = defaultAppointments, action) => {
  switch (action.type) {
    case ADD_APPOINTMENTS:
      return {
        ...state,
        appointments: action.appointments,
      };
    case REMOVE_APPOINTMENTS:
      return {};
    default:
      return state;
  }
};

export default appointmentsReducer;
