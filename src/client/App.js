import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.css';

import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Reviews from './components/pages/Reviews';
import Questions from './components/pages/Questions';
import Search from './components/pages/Search';
import Signup from './components/pages/Signup';
import WriteReview from './components/pages/WriteReview';
import Profile from './components/pages/Profile';

import UserContext from './utils/UserContext';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={user}>
      <Switch>
        <Route path="/profile_experiment/:userId">
          <Profile isExperiment />
        </Route>
        <Route path="/profile/:userId">
          <Profile />
        </Route>
        <Route path="/write/:classId">
          <WriteReview />
        </Route>
        <Route path="/write">
          <Search isWritingReview />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/questions/:classId">
          <Questions />
        </Route>
        <Route path="/reviews/:classId">
          <Reviews />
        </Route>
        <Route path="/">
          <Home setUser={setUser} />
        </Route>
      </Switch>
    </UserContext.Provider>
  );
}
