import React from 'react'

export default function Project({  
  title,
  liveLink,
  sourceLink,
  id,
  technologies,
  description,
  round
}) {
  return (
    <div className="project fadein">
      <a href={liveLink || sourceLink} target="_blank"><img src={`dist/img/${id}.png`} alt={id} style={{borderRadius: round ? '100%' : 'inherit'}} className="project__image"/></a>      
      <div className="project__copy">
        <h2 className="project__title">{title}</h2>
        <h3 className="project__links">
          {liveLink ? <a href={liveLink} target="_blank" className="project__links-live">Live</a> : ''}
          {sourceLink ? <a href={sourceLink} target="_blank" className="project__links-source">Source</a> : ''}
        </h3>
        <h3 className="project__languages">{technologies.join(', ')}</h3>
        <p className="project__description">
          {description}
        </p>
      </div>
    </div>
  )
}