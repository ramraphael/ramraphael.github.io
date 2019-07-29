import React, { useEffect, useState } from 'react';
import {Link, withRouter} from 'react-router-dom';

const NavLabel = ({ label, route, toggleOpened, location }) => {
  const [isCurrentPage, setIsCurrentPage] = useState(false);
  useEffect(() => {
    if (location.pathname === '/' && label === 'Home') setIsCurrentPage(true);
    else if (location.pathname.slice(1) === label.toLowerCase()) setIsCurrentPage(true);
    else setIsCurrentPage(false);
  }, [location]);
  
  const labelClass = label.toLowerCase() + `button`;
  
  return (<div className={`navribbon__label ${labelClass} ${isCurrentPage ? 'current' : ''}`}>
    <Link to={route} onClick={toggleOpened}>{label}</Link>
  </div>);
};

export default withRouter(NavLabel);