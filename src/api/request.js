import axios from 'axios';
import apiUrl from './apiUrl';

const token = localStorage.getItem('token');

const authAxios = axios.create({
  baseURL: apiUrl,
  data: {},
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default authAxios;
