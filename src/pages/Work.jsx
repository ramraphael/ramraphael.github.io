import React from 'react';
import projectData from '../data/ProjectData';
import Project from '../components/Projects/Project';

const Work = props => {
  const ProjectComponents = Object.entries(projectData).map(
    ([id, props], index) => {
      return <Project 
        id={id}
        {...props}
        key={`${index}-${id}`}
      />
    }
  );
  return (
    <div className="work section fadein">
      <h1 className="section__heading">Projects</h1>
      <div className="project-grid">
        {ProjectComponents}
      </div>

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
};

export default Work;
