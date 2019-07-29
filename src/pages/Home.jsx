import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = props => (
  <div className="home fadein">
    <h1 className="home__name">
      <span className="red">Raphael </span>Ram
    </h1>
    <h1 className="home__elevatorpitch">
      <span className="red home__first">writes </span>
      <span className="home__second">poetry, prose, and</span>
      <span className="red home__first"> code.</span>
    </h1>
  </div>
);

export default Home;
