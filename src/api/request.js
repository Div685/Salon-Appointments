import axios from 'axios';
import apiUrl from './apiUrl';

const token = localStorage.getItem('token');

// const authHeaders = () => {
//   const token = localStorage.getItem('token');

//   return {
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

export const authAxios = axios.create({
  baseURL: apiUrl,
  data: {},
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export const loggedIn = async (username, password) => {
  const response = await authAxios.post('login', { user: { username, password } })
    .then((response) => response.data).catch((error) => error);
  console.log(response);
  return response;
};

export const getappointment = async () => {
  const response = await authAxios.get('appointments')
    .then((response) => response.data).catch((error) => error);
  console.log(response);
  return response;
};

export const requestData = async (username, password) => {
  try {
    const respon = await loggedIn(username, password);
    console.log('asas: ', respon.logged_in);
    // if (respon.logged_in === true) {
    localStorage.setItem('token', respon.token);
    // }
  } catch (error) {
    console.error(error);
  }
};

requestData('klaus', 'originals');
getappointment();
