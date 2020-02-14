import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Reviews from './components/pages/Reviews';
import Questions from './components/pages/Questions';
import Search from './components/pages/Search';
import Signup from './components/pages/Signup';
import WriteReview from './components/pages/WriteReview';

export default function App() {
  return (
    <Switch>
      <Route path="/write">
        <WriteReview />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/questions">
        <Questions />
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
