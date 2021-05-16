import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import SalonItemList from '../container/SalonItemList';
import Login from '../container/Login';
import SignUp from '../container/SignUp';
import NavBar from './NavBar';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/" component={SalonItemList} />
      <Route exact path="/login" render={(props) => (<Login history={props.history} />)} />
      <Route exact path="/signup" render={(props) => (<SignUp history={props.history} />)} />
      <Route exact path="/items" component={SalonItemList} />
    </Switch>
  </BrowserRouter>
);

Routes.propTypes = {
  history: PropTypes.instanceOf(Object),
};

Routes.defaultProps = {
  history: null,
};

export default Routes;
