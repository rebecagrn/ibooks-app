import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../pages/Main';
import Details from '../pages/Details';
import Favorites from '../pages/Favorites';
import NoMatch from '../pages/NoMatch';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/details/:id" component={Details} />
        <Route path="/favorites" component={Favorites} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
