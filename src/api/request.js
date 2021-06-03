import axios from 'axios';
import apiUrl from './apiUrl';

const authAxios = (token = null) => axios.create({
  baseURL: apiUrl,
  data: {},
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default authAxios;
