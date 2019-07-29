import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavRibbon from './components/NavRibbon/NavRibbon';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';

const App = () => {
  return (
    <Fragment>
      <Router>
      <NavRibbon />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;