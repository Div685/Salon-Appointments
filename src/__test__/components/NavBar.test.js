import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import '@testing-library/jest-dom';
import configureStore from '../helper/createStore';

let store;

describe('NavBar Component', () => {
  beforeEach(() => {
    store = configureStore();
  });
  it('renders NavBar page correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Test for NavBar component', () => {
  it('test the heading of nav component', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByRole('heading')).toHaveTextContent('BookMySalon');
  });
});
