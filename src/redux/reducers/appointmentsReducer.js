import { ADD_APPOINTMENTS } from '../actions/actionTypes';

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
    default:
      return state;
  }
};

export default appointmentsReducer;
