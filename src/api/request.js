import axios from 'axios';
import apiUrl from './apiUrl';

const authAxios = (token = null) => axios.create({
  baseURL: apiUrl,
  data: {},
  headers: {
    'Content-Type': 'application/json',
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    Authorization: `Bearer ${token}`,
  },
});

export default authAxios;
