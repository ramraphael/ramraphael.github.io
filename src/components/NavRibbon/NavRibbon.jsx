import React, {useState, useEffect} from 'react';
import HamburgerMenu from './HamburgerMenu';
import NavLabel from './NavLabel';

const NavRibbon = props => {
  const [revealed, setRevealed] = useState(false);
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened(!opened);

  useEffect(() => setRevealed(true), [])

  const NavLabelComponents = ['About', 'Work', 'Home'].map((label, index) => (
    <NavLabel
      label={label}
      route={label === 'Home' ? '/' : '/' + label.toLowerCase()}
      toggleOpened={toggleOpened}
      key={`${index}-navlabel`}
    />
  ))

  return (
    <nav className={`navribbon ${revealed ? 'revealed' : ''} ${opened ? 'opened' : ''}`}>
      <HamburgerMenu toggleOpened={toggleOpened} />
      {NavLabelComponents}
    </nav>
  );
};

export default NavRibbon;