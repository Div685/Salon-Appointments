import { addAppointments } from '../redux/actions';
import store from '../redux/store';
import authAxios from './request';

export const loggedIn = async (username, password) => {
  const response = await authAxios.post('login', { user: { username, password } })
    .then((response) => response.data).catch((error) => error);
  return response;
};

export const signedUp = async (username, password) => {
  const response = await authAxios.post('users', { user: { username, password } })
    .then((response) => response.data).catch((error) => error);
  return response;
};

export const redirectToHome = async (userId) => {
  const response = await authAxios.post('login/autoLogin', { user: { user_id: userId } })
    .then((response) => response.data).catch((error) => error);
  return response;
};

export const bookAppointment = async (date, id, userId, branch) => {
  const response = await authAxios.post('appointments', {
    appointment: {
      date, branch, item_id: id, user_id: userId,
    },
  })
    .then((response) => store.dispatch(addAppointments(response.data))).catch((error) => error);
  return response;
};
