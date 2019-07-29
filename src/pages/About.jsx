import React from 'react';

const About = props => (
  <div className="about section fadein">
    <h1 className="section__heading">{title}</h1>

    <p className="about__description">
      {greetings.map(greeting => (<span className="about__greeting">{greeting}</span>))}
    </p>

    <p className="about__description">
      My name is <span className="red">Raphael Ram</span>, and I’m a software engineer 
      and writer based in New York City.
    </p>

    <p className="about__description">
      When I was a teenager in Myanmar, my uncle lent me his install CD for 
      Ubuntu 10.04. It was love at first install, and Linux and Open Source 
      software have since led me to pursue a career in software engineering, 
      with a focus on all things web.
    </p>

    <p className="about__description">
      Aside from coding, I enjoy immersing myself in music, especially through 
      audiophile headphones, and getting my soul’s fill of beautiful film and 
      anime. You can read my thoughts on these and other things on my personal 
      blog (coming soon to a browser near you).
    </p>

    <div className="cta">
      <a href="mailto:ramraphael@gmail.com" className="cta__button email">
        Send Me An Email
      </a>
      <a
        href="https://www.linkedin.com/in/raphaelram/"
        target="_blank"
        className="cta__button linkedin"
      >
        Connect on LinkedIn
      </a>
    </div>
  </div>
);

export default About;
