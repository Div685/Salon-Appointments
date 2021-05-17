import store from '../redux/store';
import { addItems, addSingleItem, addAppointmentItems } from '../redux/actions';
import authAxios from './request';

export const fetchItemList = async () => {
  const response = await authAxios.get('items')
    .then((response) => store.dispatch(addItems(response.data))).catch((error) => error);
  return response;
};

export const fetchItemDetail = async (id) => {
  const response = await authAxios.get(`items/${id}`)
    .then((response) => store.dispatch(addSingleItem(response.data))).catch((error) => error);
  return response;
};

export const fetchUserAppointments = async () => {
  const response = await authAxios.get('appointments')
    .then((response) => store.dispatch(addAppointmentItems(response.data))).catch((error) => error);
  return response;
};
