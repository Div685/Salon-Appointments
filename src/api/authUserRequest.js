import authAxios from './request';

export const loggedIn = async (username, password) => {
  const response = await authAxios.post('login', { user: { username, password } })
    .then((response) => response.data).catch((error) => error);
  return response;
};

export const signUp = async (username, password) => {
  const response = await authAxios.post('users', { user: { username, password } })
    .then((response) => response.data).catch((error) => error);
  return response;
};
