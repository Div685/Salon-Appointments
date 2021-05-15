import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import SalonItemList from '../container/SalonItemList';
import Login from '../container/Login';
import SignUp from '../container/SignUp';
import Home from './Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
