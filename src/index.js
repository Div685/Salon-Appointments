import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import decode from 'jwt-decode';
import cookie from 'react-cookies';
import { logIn, signUp } from './redux/actions';
import { redirectToHome } from './api/authUserRequest';
import App from './components/App';
import './index.css';
import store from './redux/store';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

const redirectLogin = async (userId) => {
  const response = await redirectToHome(userId);
  if (response.logged_in) {
    store.dispatch(signUp(response.user));
    store.dispatch(logIn(true));
  } else {
    store.dispatch(logIn(false));
    store.dispatch(signUp({}));
    cookie.remove('token');
  }
};

if (cookie.load('token')) {
  const decodedToken = decode(cookie.load('token'));
  if (Date.now() >= decodedToken.exp * 1000) {
    store.dispatch(logIn(false));
    store.dispatch(signUp({}));
    cookie.remove('token');
  }
  redirectLogin(decodedToken.user_id);
} else {
  store.dispatch(logIn(false));
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
