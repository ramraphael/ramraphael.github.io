import React from 'react';

const Home = props => (
  <div className="home fadein" style={{margin: 0, padding: 0}}>
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
