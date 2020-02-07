import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Reviews from './components/pages/Reviews';
import Search from './components/pages/Search';

export default function App() {
  return (
    <Switch>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/reviews">
        <Reviews />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
