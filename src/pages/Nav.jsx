import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className="main-header">
        <div className="menu-link-main">
          Ai&Ds
        </div>
        <div className="header-menu">
          <NavLink exact to="/" isActive={(match, location) => {
            // Return true if the location pathname starts with the NavLink's "to" prop
            return match || location.pathname.startsWith('/');
          }} activeClassName="is-active">
            Intro
          </NavLink>
          <NavLink to="/events" isActive={(match, location) => {
            // Return true if the location pathname starts with the NavLink's "to" prop
            return match || location.pathname.startsWith('/events');
          }} activeClassName="is-active">
            Events
          </NavLink>
          <NavLink to="/council" isActive={(match, location) => {
            // Return true if the location pathname starts with the NavLink's "to" prop
            return match || location.pathname.startsWith('/council');
          }} activeClassName="is-active">
            Council
          </NavLink>
          <NavLink to="/gallery" isActive={(match, location) => {
            // Return true if the location pathname starts with the NavLink's "to" prop
            return match || location.pathname.startsWith('/gallery');
          }} activeClassName="is-active">
            Gallery
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Nav;
