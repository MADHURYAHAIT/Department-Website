import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="main-header">
      <div className="menu-link-main">
        Ai&Ds
      </div>
      <div className="header-menu nv">
        <NavLink exact to="/" className={activeLink === '/' ? 'is-active' : ''} onClick={() => handleNavLinkClick('/')}>
          Intro
        </NavLink>
        <NavLink to="/events" className={activeLink === '/events' ? 'is-active' : ''} onClick={() => handleNavLinkClick('/events')}>
          Events
        </NavLink>
        <NavLink to="/council" className={activeLink === '/council' ? 'is-active' : ''} onClick={() => handleNavLinkClick('/council')}>
          Council
        </NavLink>
        <NavLink to="/gallery" className={activeLink === '/gallery' ? 'is-active' : ''} onClick={() => handleNavLinkClick('/gallery')}>
          Gallery
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
