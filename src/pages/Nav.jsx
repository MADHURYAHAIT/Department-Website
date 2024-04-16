import React from 'react'
import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <>
      <div class="main-header">
        <div class="menu-link-main" >
          Ai&Ds
        </div>
        <div class="header-menu">
          <NavLink class="main-header-link is-active" to="/">
            Intro
          </NavLink>
          <NavLink class="main-header-link" to="/events">
            Events
          </NavLink>
          <NavLink class="main-header-link" to="/council">
            Council
          </NavLink>
          <NavLink class="main-header-link" to="/gallery">
            Gallery
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Nav