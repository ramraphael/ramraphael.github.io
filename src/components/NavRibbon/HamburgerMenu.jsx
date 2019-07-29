import React, { useState } from 'react';

const HamburgerMenu = ({toggleOpened}) => {
  return (
    <div className="hamburger" onClick={toggleOpened}>
      <div className="hamburger__line" />
      <div className="hamburger__line" />
      <div className="hamburger__line" />
      <div className="hamburger__label">Menu</div>
    </div>
  );
};

export default HamburgerMenu;
