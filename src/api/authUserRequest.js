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
