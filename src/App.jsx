import { useEffect,useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./pages/Footer";
import Gallery from "./pages/Gallery";
import Home from "./pages/home";
import React from "react";
import Events from "./pages/Events";
import Council from "./pages/Council";
import Nav from "./pages/Nav";
import { NavLink } from "react-router-dom";
import PreLoader from "./pages/PreLoader";

function App() {
  const [isPageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const simulatePageLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 3900); // Change this timeout to match your actual loading time
    };

    simulatePageLoad();
  }, []);

  useEffect(() => {
    const setupEventListeners = () => {
      // Menu link click event handler
      const handleMenuLinkClick = () => {
        const menuLinks = document.querySelectorAll(".menu-link");
        menuLinks.forEach((link) => link.classList.remove("is-active"));
        link.classList.add("is-active");
      };

      // Main header link click event handler
      const handleMainHeaderLinkClick = () => {
        const headerLinks = document.querySelectorAll(".main-header-link");
        headerLinks.forEach((link) => link.classList.remove("is-active"));
        link.classList.add("is-active");
      };

      // Dropdown click event handler
      const handleDropdownClick = (e) => {
        e.stopPropagation();
        const dropdowns = document.querySelectorAll(".dropdown");
        dropdowns.forEach((dropdown) => dropdown.classList.remove("is-active"));
        dropdown.classList.add("is-active");
      };

      // Search bar focus and blur event handler
      const handleSearchBarFocus = () => {
        const header = document.querySelector(".header");
        if (header) header.classList.add("wide");
      };

      const handleSearchBarBlur = () => {
        const header = document.querySelector(".header");
        if (header) header.classList.remove("wide");
      };

      // Document click event handler
      const handleDocumentClick = (e) => {
        const container = document.querySelector(".status-button");
        const dropdown = document.querySelector(".dropdown");
        if (!container.contains(e.target) && !container.isSameNode(e.target)) {
          dropdown.classList.remove("is-active");
        }
      };

      // Dropdown click and document click event handlers
      const handleDropdownClickOverlay = (e) => {
        const contentWrapper = document.querySelector(".content-wrapper");
        if (contentWrapper) {
          contentWrapper.classList.add("overlay");
          e.stopPropagation();
        }
      };

      const handleDocumentClickOverlay = (e) => {
        if (!e.target.classList.contains("dropdown")) {
          const contentWrapper = document.querySelector(".content-wrapper");
          if (contentWrapper) contentWrapper.classList.remove("overlay");
        }
      };

      // Status button click event handlers
      const handleStatusButtonClick = () => {
        const overlayApp = document.querySelector(".overlay-app");
        if (overlayApp) overlayApp.classList.add("is-active");
      };

      const handleCloseButtonClick = () => {
        const overlayApp = document.querySelector(".overlay-app");
        if (overlayApp) overlayApp.classList.remove("is-active");
      };

      // Dark/light mode toggle event handler
      const handleToggleButtonClick = () => {
        document.body.classList.toggle("light-mode");
      };

      // Event listeners setup
      const setupListeners = () => {
        document
          .querySelectorAll(".menu-link")
          .forEach((link) =>
            link.addEventListener("click", handleMenuLinkClick)
          );
        document
          .querySelectorAll(".main-header-link")
          .forEach((link) =>
            link.addEventListener("click", handleMainHeaderLinkClick)
          );
        document
          .querySelectorAll(".dropdown")
          .forEach((dropdown) =>
            dropdown.addEventListener("click", handleDropdownClick)
          );
        const searchBarInput = document.querySelector(".search-bar input");
        if (searchBarInput) {
          searchBarInput.addEventListener("focus", handleSearchBarFocus);
          searchBarInput.addEventListener("blur", handleSearchBarBlur);
        }
        document.addEventListener("click", handleDocumentClick);
        document
          .querySelectorAll(".dropdown")
          .forEach((dropdown) =>
            dropdown.addEventListener("click", handleDropdownClickOverlay)
          );
        document.addEventListener("click", handleDocumentClickOverlay);
        document
          .querySelectorAll(".status-button:not(.open)")
          .forEach((button) =>
            button.addEventListener("click", handleStatusButtonClick)
          );
        document
          .querySelectorAll(".pop-up .close")
          .forEach((button) =>
            button.addEventListener("click", handleCloseButtonClick)
          );
        const darkLightButton = document.querySelector(".dark-light");
        if (darkLightButton) {
          darkLightButton.addEventListener(
            "click",
            handleToggleButtonClick
          );
        }
      };

      setupListeners();

      // Cleanup function
      return () => {
        document
          .querySelectorAll(
            ".menu-link, .main-header-link, .dropdown, .status-button:not(.open), .pop-up .close"
          )
          .forEach((element) =>
            element.removeEventListener("click", handleMenuLinkClick)
          );
        const searchBarInput = document.querySelector(".search-bar input");
        if (searchBarInput) {
          searchBarInput.removeEventListener("focus", handleSearchBarFocus);
          searchBarInput.removeEventListener("blur", handleSearchBarBlur);
        }
        document.removeEventListener("click", handleDocumentClick);
        document.removeEventListener("click", handleDocumentClickOverlay);
        const darkLightButton = document.querySelector(".dark-light");
        if (darkLightButton) {
          darkLightButton.removeEventListener(
            "click",
            handleToggleButtonClick
          );
        }
      };
    };

    setupEventListeners();
  }, [isPageLoaded]);

  return (
    <>
    {!isPageLoaded && <PreLoader />}
      {isPageLoaded && (
           <div className="App">
           <div className="video-bg">
             <video width="320" height="240" autoPlay loop muted>
               <source
                 src="https://assets.codepen.io/3364143/7btrrd.mp4"
                 type="video/mp4"
               />
               Your browser does not support the video tag.
             </video>
           </div>
     
           <div className="dark-light">
             <svg
               viewBox="0 0 24 24"
               stroke="currentColor"
               strokeWidth="1.5"
               fill="none"
               strokeLinecap="round"
               strokeLinejoin="round"
             >
               <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
             </svg>
           </div>
     
           <div className="app">
             <div className="header">
               <div className="menu-circle"></div>
     
               <div className="header-menu">
                 <NavLink className="menu-link notify is-active" to="#">
                   SMIT
                 </NavLink>
                 <NavLink className="menu-link notify" to="#">
                   Your work
                 </NavLink>
                 <NavLink className="menu-link" to="#">
                   Discover
                 </NavLink>
               </div>
               <div className="search-bar">
                 <input type="text" placeholder="Search" />
               </div>
     
               <div className="header-profile">
                 <div className="notification">
                   <span className="notification-number">3</span>
                   <svg
                     viewBox="0 0 24 24"
                     fill="currentColor"
                     stroke="currentColor"
                     strokeWidth="2"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     className="feather feather-bell"
                   >
                     <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
                   </svg>
                 </div>
                 <svg viewBox="0 0 512 512" fill="currentColor">
                   <path d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z" />
                 </svg>
                 <a href="https://www.linkedin.com/in/madhuryahait/">
                   <img
                     className="profile-img"
                     src="./images/profilepic.png"
                     alt="Madhurya Hait"
                   />
                 </a>
               </div>
             </div>
     
             <div class="wrapper">
               <div class="left-side">
                 <div class="side-wrapper">
                   <div class="side-title">Apps</div>
                   <div class="side-menu">
                     <a href="#">
                       <svg viewBox="0 0 512 512">
                         <g xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                           <path
                             d="M0 0h128v128H0zm0 0M192 0h128v128H192zm0 0M384 0h128v128H384zm0 0M0 192h128v128H0zm0 0"
                             data-original="#bfc9d1"
                           />
                         </g>
                         <path
                           xmlns="http://www.w3.org/2000/svg"
                           d="M192 192h128v128H192zm0 0"
                           fill="currentColor"
                           data-original="#82b1ff"
                         />
                         <path
                           xmlns="http://www.w3.org/2000/svg"
                           d="M384 192h128v128H384zm0 0M0 384h128v128H0zm0 0M192 384h128v128H192zm0 0M384 384h128v128H384zm0 0"
                           fill="currentColor"
                           data-original="#bfc9d1"
                         />
                       </svg>
                       All Apps
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 488.932 488.932" fill="currentColor">
                         <path d="M243.158 61.361v-57.6c0-3.2 4-4.9 6.7-2.9l118.4 87c2 1.5 2 4.4 0 5.9l-118.4 87c-2.7 2-6.7.2-6.7-2.9v-57.5c-87.8 1.4-158.1 76-152.1 165.4 5.1 76.8 67.7 139.1 144.5 144 81.4 5.2 150.6-53 163-129.9 2.3-14.3 14.7-24.7 29.2-24.7 17.9 0 31.8 15.9 29 33.5-17.4 109.7-118.5 192-235.7 178.9-98-11-176.7-89.4-187.8-187.4-14.7-128.2 84.9-237.4 209.9-238.8z" />
                       </svg>
                       New Apps
                       <span class="notification-number updates">3</span>
                     </a>
                   </div>
                 </div>
                 <div class="side-wrapper">
                   <div class="side-title">Categories</div>
                   <div class="side-menu">
                     <a href="#">
                       <svg viewBox="0 0 488.455 488.455" fill="currentColor">
                         <path d="M287.396 216.317c23.845 23.845 23.845 62.505 0 86.35s-62.505 23.845-86.35 0-23.845-62.505 0-86.35 62.505-23.845 86.35 0" />
                         <path d="M427.397 91.581H385.21l-30.544-61.059H133.76l-30.515 61.089-42.127.075C27.533 91.746.193 119.115.164 152.715L0 396.86c0 33.675 27.384 61.074 61.059 61.074h366.338c33.675 0 61.059-27.384 61.059-61.059V152.639c-.001-33.674-27.385-61.058-61.059-61.058zM244.22 381.61c-67.335 0-122.118-54.783-122.118-122.118s54.783-122.118 122.118-122.118 122.118 54.783 122.118 122.118S311.555 381.61 244.22 381.61z" />
                       </svg>
                       Photography
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 512 512" fill="currentColor">
                         <circle
                           cx="295.099"
                           cy="327.254"
                           r="110.96"
                           transform="rotate(-45 295.062 327.332)"
                         />
                         <path d="M471.854 338.281V163.146H296.72v41.169a123.1 123.1 0 01121.339 122.939c0 3.717-.176 7.393-.5 11.027zM172.14 327.254a123.16 123.16 0 01100.59-120.915L195.082 73.786 40.146 338.281H172.64c-.325-3.634-.5-7.31-.5-11.027z" />
                       </svg>
                       Graphic Design
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 58 58" fill="currentColor">
                         <path d="M57 6H1a1 1 0 00-1 1v44a1 1 0 001 1h56a1 1 0 001-1V7a1 1 0 00-1-1zM10 50H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2v-9h8v9zm0-11H2V8h8v9zm26.537 12.844l-11 7a1.007 1.007 0 01-1.018.033A1.001 1.001 0 0124 36V22a1.001 1.001 0 011.538-.844l11 7a1.003 1.003 0 01-.001 1.688zM56 50h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8v-9h8v9zm0-11h-8V8h8v9z" />
                       </svg>
                       Video
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 512 512" fill="currentColor">
                         <path d="M499.377 46.402c-8.014-8.006-18.662-12.485-29.985-12.613a41.13 41.13 0 00-.496-.003c-11.142 0-21.698 4.229-29.771 11.945L198.872 275.458c25.716 6.555 47.683 23.057 62.044 47.196a113.544 113.544 0 0110.453 23.179L500.06 106.661C507.759 98.604 512 88.031 512 76.89c0-11.507-4.478-22.33-12.623-30.488zM176.588 302.344a86.035 86.035 0 00-3.626-.076c-20.273 0-40.381 7.05-56.784 18.851-19.772 14.225-27.656 34.656-42.174 53.27C55.8 397.728 27.795 409.14 0 416.923c16.187 42.781 76.32 60.297 115.752 61.24 1.416.034 2.839.051 4.273.051 44.646 0 97.233-16.594 118.755-60.522 23.628-48.224-5.496-112.975-62.192-115.348z" />
                       </svg>
                       Illustrations
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 512 512" fill="currentColor">
                         <path d="M497 151H316c-8.401 0-15 6.599-15 15v300c0 8.401 6.599 15 15 15h181c8.401 0 15-6.599 15-15V166c0-8.401-6.599-15-15-15zm-76 270h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15zm0-180h-30c-8.401 0-15-6.599-15-15s6.599-15 15-15h30c8.401 0 15 6.599 15 15s-6.599 15-15 15z" />
                         <path d="M15 331h196v60h-75c-8.291 0-15 6.709-15 15s6.709 15 15 15h135v-30h-30v-60h30V166c0-24.814 20.186-45 45-45h135V46c0-8.284-6.716-15-15-15H15C6.716 31 0 37.716 0 46v270c0 8.284 6.716 15 15 15z" />
                       </svg>
                       UI/UX
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 512 512" fill="currentColor">
                         <path d="M0 331v112.295a14.996 14.996 0 007.559 13.023L106 512V391L0 331zM136 391v121l105-60V331zM271 331v121l105 60V391zM406 391v121l98.441-55.682A14.995 14.995 0 00512 443.296V331l-106 60zM391 241l-115.754 57.876L391 365.026l116.754-66.15zM262.709 1.583a15.006 15.006 0 00-13.418 0L140.246 57.876 256 124.026l115.754-66.151L262.709 1.583zM136 90v124.955l105 52.5V150zM121 241L4.246 298.876 121 365.026l115.754-66.15zM271 150v117.455l105-52.5V90z" />
                       </svg>
                       3D/AR
                     </a>
                   </div>
                 </div>
                 <div class="side-wrapper">
                   <div class="side-title">Fonts</div>
                   <div class="side-menu">
                     <a href="#">
                       <svg viewBox="0 0 332 332" fill="currentColor">
                         <path d="M282.341 8.283C275.765 2.705 266.211 0 253.103 0c-18.951 0-36.359 5.634-51.756 16.743-14.972 10.794-29.274 28.637-42.482 53.028-4.358 7.993-7.428 11.041-8.973 12.179h-26.255c-10.84 0-19.626 8.786-19.626 19.626 0 8.989 6.077 16.486 14.323 18.809l-.05.165h.589c1.531.385 3.109.651 4.757.651h18.833l-32.688 128.001c-7.208 27.848-10.323 37.782-11.666 41.24-1.445 3.711-3.266 7.062-5.542 10.135-.42-5.39-2.637-10.143-6.508-13.854-4.264-4.079-10.109-6.136-17.364-6.136-8.227 0-15.08 2.433-20.37 7.229-5.416 4.93-8.283 11.193-8.283 18.134 0 5.157 1.701 12.712 9.828 19.348 6.139 4.97 14.845 7.382 26.621 7.382 17.096 0 32.541-4.568 45.891-13.577 13.112-8.845 24.612-22.489 34.166-40.522 9.391-17.678 18.696-45.124 28.427-83.9l18.598-73.479h30.016c10.841 0 19.625-8.785 19.625-19.625s-8.784-19.626-19.625-19.626h-19.628c6.34-21.62 14.175-37.948 23.443-48.578 2.284-2.695 5.246-5.692 8.412-7.678-1.543 3.392-2.325 6.767-2.325 10.055 0 6.164 2.409 11.714 6.909 16.03 4.484 4.336 10.167 6.54 16.888 6.54 7.085 0 13.373-2.667 18.17-7.716 4.76-5.005 7.185-11.633 7.185-19.703.017-9.079-3.554-16.899-10.302-22.618z" />
                       </svg>
                       Manage Fonts
                     </a>
                   </div>
                 </div>
                 <div class="side-wrapper">
                   <div class="side-title">Resource Links</div>
                   <div class="side-menu">
                     <a href="#">
                       <svg viewBox="0 0 512 512" fill="currentColor">
                         <path d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM181 241c41.353 0 75 33.647 75 75s-33.647 75-75 75-75-33.647-75-75c0-8.291 6.709-15 15-15s15 6.709 15 15c0 24.814 20.186 45 45 45s45-20.186 45-45-20.186-45-45-45c-41.353 0-75-33.647-75-75s33.647-75 75-75 75 33.647 75 75c0 8.291-6.709 15-15 15s-15-6.709-15-15c0-24.814-20.186-45-45-45s-45 20.186-45 45 20.186 45 45 45zm180 120h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-24.814 0-45-20.186-45-45V211h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-8.291 6.709-15 15-15s15 6.709 15 15v45h45c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.276 6.724 15 15 15z" />
                       </svg>
                       Stock
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 511.441 511.441" fill="currentColor">
                         <path d="M255.721 347.484L90.22 266.751v106.57l165.51 73.503 165.509-73.503V266.742z" />
                         <path d="M511.441 189.361L255.721 64.617 0 189.361l255.721 124.744 195.522-95.378v111.032h30V204.092z" />
                       </svg>
                       Tutorials
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 512 512" fill="currentColor">
                         <path d="M196 151h-75v90h75c24.814 0 45-20.186 45-45s-20.186-45-45-45z" />
                         <path d="M467 0H45C20.186 0 0 20.186 0 45v422c0 24.814 20.186 45 45 45h422c24.814 0 45-20.186 45-45V45c0-24.814-20.186-45-45-45zM196 271h-75v105c0 8.291-6.709 15-15 15s-15-6.709-15-15V136c0-8.291 6.709-15 15-15h90c41.353 0 75 33.647 75 75s-33.647 75-75 75zm210-60c8.291 0 15 6.709 15 15s-6.709 15-15 15h-45v135c0 8.291-6.709 15-15 15s-15-6.709-15-15V241h-15c-8.291 0-15-6.709-15-15s6.709-15 15-15h15v-45c0-24.814 20.186-45 45-45h30c8.291 0 15 6.709 15 15s-6.709 15-15 15h-30c-8.276 0-15 6.724-15 15v45h45z" />
                       </svg>
                       Portfolio
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 512 512" fill="currentColor">
                         <path d="M181 181h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M181 271h-60v60h60c16.54 0 30-13.46 30-30s-13.46-30-30-30zm0 0M346 241c-19.555 0-36.238 12.54-42.438 30h84.875c-6.199-17.46-22.882-30-42.437-30zm0 0" />
                         <path d="M436 0H75C33.648 0 0 33.648 0 75v362c0 41.352 33.648 75 75 75h361c41.352 0 76-33.648 76-75V75c0-41.352-34.648-75-76-75zM286 151h120v30H286zm-45 150c0 33.09-26.91 60-60 60H91V151h90c33.09 0 60 26.91 60 60 0 18.008-8.133 33.996-20.73 45 12.597 11.004 20.73 26.992 20.73 45zm180 0H303.562c6.196 17.46 22.883 30 42.438 30 16.012 0 30.953-8.629 38.992-22.516l25.957 15.032C397.58 346.629 372.687 361 346 361c-41.352 0-75-33.648-75-75s33.648-75 75-75 75 33.648 75 75zm0 0" />
                       </svg>
                       Behance
                     </a>
                     <a href="#">
                       <svg viewBox="0 0 512 512" fill="currentColor">
                         <path d="M352 0H64C28.704 0 0 28.704 0 64v320a16.02 16.02 0 009.216 14.496A16.232 16.232 0 0016 400c3.68 0 7.328-1.248 10.24-3.712L117.792 320H352c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z" />
                         <path d="M464 128h-16v128c0 52.928-43.072 96-96 96H129.376L128 353.152V400c0 26.464 21.536 48 48 48h234.368l75.616 60.512A16.158 16.158 0 00496 512c2.336 0 4.704-.544 6.944-1.6A15.968 15.968 0 00512 496V176c0-26.464-21.536-48-48-48z" />
                       </svg>
                       Social Forum
                     </a>
                   </div>
                 </div>
               </div>
               <div class="main-container">
                 <Nav/>
                 <Routes>
                   <Route exact path="/" element={<Home />} />
                   <Route path="/events" element={<Events />} />
                   <Route path="/council" element={<Council />} />
                   <Route path="/gallery" element={<Gallery />} />
                 </Routes>
                 <Footer />
               </div>
             </div>
           </div>
         </div>
      )}
    </>
   
  );
}

export default App;
