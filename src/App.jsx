import { useState } from 'react'
import './App.css'

import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="video-bg">
        <video width="320" height="240" autoPlay loop muted>
          <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="dark-light">
        <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      </div>
      <div className="app">
        <div className="header">
          <div className="menu-circle"></div>
          <div className="header-menu">
            <a className="menu-link is-active" href="#">Apps</a>
            <a className="menu-link notify" href="#">Your work</a>
            <a className="menu-link" href="#">Discover</a>
            <a className="menu-link notify" href="#">Market</a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-profile">
            <div className="notification">
              <span className="notification-number">3</span>
              <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell">
                <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
              </svg>
            </div>
            <svg viewBox="0 0 512 512" fill="currentColor">
              <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
            </svg>
            <img className="profile-img" src="https://images.unsplash.com/photo-1600353068440-6361ef3a86e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" />
          </div>
        </div>
        <div className="wrapper">
          <div className="left-side">
            <div className="side-wrapper">
              <div className="side-title">Apps</div>
              <div className="side-menu">
                <a href="#">
                  <svg viewBox="0 0 512 512">
                    <g fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1" />
                    </g>
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" data-original="#82b1ff" />
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0" data-original="#f4d35e" />
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M0 384h128v128H0zm0 0" data-original="#ff8966" />
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M192 384h128v128H192zm0 0" data-original="#8acdea" />
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M384 384h128v128H384zm0 0" data-original="#ffce55" />
                  </svg>
                  <span className="app-name">Demos</span>
                </a>
                <a href="#">
                  <svg viewBox="0 0 512 512">
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M256 0C114.641 0 0 114.641 0 256s114.641 256 256 256 256-114.641 256-256S397.359 0 256 0zm0 480c-123.514 0-224-100.486-224-224S132.486 32 256 32s224 100.486 224 224-100.486 224-224 224z" />
                  </svg>
                  <span className="app-name">Music</span>
                </a>
                <a href="#">
                  <svg viewBox="0 0 512 512">
                    <g fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0" data-original="#bfc9d1" />
                    </g>
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M192 192h128v128H192zm0 0" data-original="#82b1ff" />
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M384 192h128v128H384zm0 0" data-original="#f4d35e" />
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M0 384h128v128H0zm0 0" data-original="#ff8966" />
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M192 384h128v128H192zm0 0" data-original="#8acdea" />
                    <path fill="currentColor" xmlns="http://www.w3.org/2000/svg" d="M384 384h128v128H384zm0 0" data-original="#ffce55" />
                  </svg>
                  <span className="app-name">Books</span>
                </a>
              </div>
            </div>
          </div>
          <div className="right-side">
            <div className="carousel-wrapper">
              <div className="carousel-title">Top Charts</div>
              <div className="carousel">
                {/* Add your carousel items here */}
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/200" alt="carousel-item" />
                  <div className="carousel-item-title">Item 1</div>
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/200" alt="carousel-item" />
                  <div className="carousel-item-title">Item 2</div>
                </div>
                <div className="carousel-item">
                  <img src="https://via.placeholder.com/200" alt="carousel-item" />
                  <div className="carousel-item-title">Item 3</div>
                </div>
                {/* End of carousel items */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


