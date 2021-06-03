import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import UserForm from '../../components/UserForm';
import configureStore from '../helper/createStore';

describe('UsersForm', () => {
  let store;
  beforeEach(() => {
    store = configureStore();
  });
  test('should match with snapshot', () => {
    const handleSubmit = jest.fn();
    const tree = renderer
      .create(
        <Provider store={store}>
          <MemoryRouter>
            <UserForm handleSubmit={handleSubmit} btnName="Signup" />
          </MemoryRouter>
        </Provider>,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
