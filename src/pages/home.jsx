import React from "react";
import GoogleMap from "./maps";
import Faculties from "./faculties";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <>
   
      <div class="content-wrapper">
        <div class="content-wrapper-header">
          <div class="content-wrapper-context dep-intro">
            <h3 class="img-content" style={{ width: "300px" }}>
              <img
                width="28px"
                style={{ marginRight: "10px", borderRadius: "3px" }}
                src="/images/atrium.jpg"
              />
              Department of Ai&Ds
            </h3>
            <div class="content-text ">
              Welcome to the site of Artificial Intelligence & Data Science in
              Sikkim Manipal Institute of Technology, where Passion meets
              Technology and Algorithms shape Possibilities.
            </div>
            <a href="https://smu.edu.in/smit/dept-faculty/dept-list/dept-of-Artificial-intelligence-and-Data-science.html">
              <button class="content-button">Visit us to know more</button>
            </a>
          </div>
          <img
            class="content-wrapper-img"
            src="./images/logo.png "
            style={{ padding: "10px" }}
            alt="VR Boy"
          />
        </div>

        <Faculties/>
       
        <div class="content-section">

          <div class="content-section-title">Contact Us</div>
       
          <div class="content-section">
            
            <ul>
              
              <li class="adobe-product">
                <div class="products">
                  <MdCall/>
                  Ph. No. (IN) 
                </div>
                <span class="status">
                  <span class="status-circle green"></span>
                  HOD
                </span>
                
                <div class="button-wrapper">
                <button class="content-button status-button">
                9800408668
                  </button>
                  <div class="menu"/>
                </div>
              </li>

              <li class="adobe-product">
                <div class="products">
                  <MdCall/>
                  Ph. No. (IN) 
                </div>
                <span class="status">
                  <span class="status-circle green"></span>
                  College
                </span>
                
                <div class="button-wrapper">
                <button class="content-button status-button">
                  9083254144
                  </button>
                  <div class="menu"/>
                </div>
              </li>
              
              <li class="adobe-product">
                <div class="products">
                 <MdEmail/>
                  Email
                </div>

                <span class="status">
                    <span class="status-circle"/>
                    HOD
                </span>
                <div class="button-wrapper">
                    hod.ai@smit.smu.edu.in
                    <div class="menu"/>
                </div>
              </li>

              {/* <li class="adobe-product">
                <div class="products">
                  <svg
                    viewBox="0 0 52 52"
                    style={{ border: "1px solid #C75DEB" }}
                  >
                    <g xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M40.824 52H11.176C5.003 52 0 46.997 0 40.824V11.176C0 5.003 5.003 0 11.176 0h29.649C46.997 0 52 5.003 52 11.176v29.649C52 46.997 46.997 52 40.824 52z"
                        fill="#3a3375"
                        data-original="#3a3375"
                      />
                      <path
                        d="M27.44 39H24.2l-2.76-9.04h-8.32L10.48 39H7.36l8.24-28h3.32l8.52 28zm-6.72-12l-3.48-11.36L13.88 27h6.84zM31.48 33.48c0 2.267 1.333 3.399 4 3.399 1.653 0 3.466-.546 5.44-1.64L42 37.6c-2.054 1.254-4.2 1.881-6.44 1.881-4.64 0-6.96-1.946-6.96-5.841v-8.2c0-2.16.673-3.841 2.02-5.04 1.346-1.2 3.126-1.801 5.34-1.801s3.94.594 5.18 1.78c1.24 1.187 1.86 2.834 1.86 4.94V30.8l-11.52.6v2.08zm8.6-5.24v-3.08c0-1.413-.44-2.42-1.32-3.021-.88-.6-1.907-.899-3.08-.899-1.174 0-2.167.359-2.98 1.08-.814.72-1.22 1.773-1.22 3.16v3.199l8.6-.439z"
                        fill="#e4d1eb"
                        data-original="#e7adfb"
                      />
                    </g>
                  </svg>
                  After Effects
                </div>
                <span class="status">
                  <span class="status-circle green"></span>
                  Updated
                </span>
                <div class="button-wrapper">
                  <button class="content-button status-button open">
                    9931111589
                  </button>
                  <div class="menu" />
                </div>
              </li> */}
            </ul>
          </div>
          <GoogleMap />

        </div>
      </div>
    </>
  );
};

export default Home;
