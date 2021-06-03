import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore(rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
