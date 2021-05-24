import cookie from 'react-cookies';
import store from '../redux/store';
import {
  addItems,
  addSingleItem,
  addAppointmentItems, removeSingleItem, removeItems, removeAppointmentItems,
} from '../redux/actions';
import authAxios from './request';

export const fetchItemList = async () => {
  store.dispatch(removeItems());
  const response = await authAxios().get('items')
    .then((response) => store.dispatch(addItems(response.data))).catch((error) => error);
  return response;
};

export const fetchItemDetail = async (id) => {
  store.dispatch(removeSingleItem());
  const response = await authAxios(cookie.load('token')).get(`items/${id}`)
    .then((response) => store.dispatch(addSingleItem(response.data))).catch((error) => error);
  return response;
};

export const fetchUserAppointments = async () => {
  store.dispatch(removeAppointmentItems());
  const response = await authAxios(cookie.load('token')).get('appointments')
    .then((response) => store.dispatch(addAppointmentItems(response.data))).catch((error) => error);
  return response;
};
