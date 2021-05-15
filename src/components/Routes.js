import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import SalonItemList from '../container/SalonItemList';
import Login from '../container/Login';
import Home from './Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
