import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Details from './pages/Details';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/details/:book.id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
