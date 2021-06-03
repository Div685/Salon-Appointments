import authAxios from '../../api/request';

test('should return axios request headers', () => {
  expect(authAxios().defaults.headers['Content-Type']).toEqual('application/json');
});

test('should return axios request data', () => {
  const item = {};
  expect(authAxios().defaults.data).toEqual(item);
});
