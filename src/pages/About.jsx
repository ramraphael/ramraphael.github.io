import React, { Fragment } from 'react';
import aboutData from '../data/AboutData';
const {title, greetings, paragraphs} = aboutData;

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

    {paragraphs.map(paragraph => (
      <p className="about__description">
        {paragraph}
      </p>
    ))}

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
