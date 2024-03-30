import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




import React from 'react';

function TopNav() {
  return (
    <nav className="top-nav">
      <ul className="top-nav-items">
        <li className="top-nav-item-left">
          <p className="top-nav-icon-star">*</p>
          <p className="top-nav-icon-text">JXWT</p>
        </li>
        <li className="top-nav-item-center">
          <a href="/home" className="top-nav-links">Home</a>
          <a href="/products" className="top-nav-links">Products</a>
          <a href="/services" className="top-nav-links">Services</a>
          <a href="/company" className="top-nav-links">Company</a>
        </li>
        <li className="top-nav-item-right">
          <a href="/cart" className="link">
            <span className="material-symbols-rounded top-shopping-cart-icon" style={{ fontSize: '29px' }}>
              shopping_cart
            </span>
          </a>
          <a href="/account" className="link">
            <span className="material-symbols-rounded top-account-icon" style={{ fontSize: '29px' }}>
              person
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function LandingSection() {
  return (
    <section className="landing-section">
      <div className="noise"></div>
      <div className="landing-hero-image"></div>
      <div className="landing-text-top-section">
        <div className="landing-text-top-left">
          WE COMBINE TRADITIONAL CRAFTSMANSHIP WITH MODERN DESIGN
        </div>
        <div className="landing-text-top-right">
          <h1>
            <sup>01</sup> DISCOVER <i>OUR</i>
            <sub className="landing-text-top-right-sub">Jewelry</sub> COLLECTION
          </h1>
        </div>
      </div>
      <div className="landing-text-bottom"></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="ending-section"></footer>
  );
}

function App() {
  return (
    <div>
      <TopNav />
      <LandingSection />
      <Footer />
    </div>
  );
}

export default App;

