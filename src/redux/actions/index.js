import {
  LOG_IN,
  SIGN_UP,
  ADD_ITEMS,
  ADD_SINGLE_ITEM,
  ADD_APPOINTMENTS,
  ADD_APPOINTMENT_ITEMS,
  REMOVE_APPOINTMENT_DATES,
} from './actionTypes';

export const logIn = (logIn = true) => ({
  type: LOG_IN,
  logIn,
});

export const signUp = (user = {}) => ({
  type: SIGN_UP,
  user,
});

export const addItems = (items = []) => ({
  type: ADD_ITEMS,
  items,
});

export const addSingleItem = (item = {}) => ({
  type: ADD_SINGLE_ITEM,
  item,
});

export const addAppointments = (appointments = []) => ({
  type: ADD_APPOINTMENTS,
  appointments,
});

export const addAppointmentItems = (appointmentItems = []) => ({
  type: ADD_APPOINTMENT_ITEMS,
  appointmentItems,
});

export const removeAppointmentDates = () => ({
  type: REMOVE_APPOINTMENT_DATES,
});
