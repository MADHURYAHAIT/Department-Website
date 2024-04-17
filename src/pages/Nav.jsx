import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className="main-header">
        <div className="menu-link-main">
          Ai&Ds
        </div>
        <div className="header-menu nv">
          <NavLink exact className="main-header-link" activeClassName="is-active" to="/">
            Intro
          </NavLink>
          <NavLink className="main-header-link" activeClassName="is-active" to="/events">
            Events
          </NavLink>
          <NavLink className="main-header-link" activeClassName="is-active" to="/council">
            Council
          </NavLink>
          <NavLink className="main-header-link" activeClassName="is-active" to="/gallery">
            Gallery
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
