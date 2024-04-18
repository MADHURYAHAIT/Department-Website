import React from "react";
import GoogleMap from "./maps";
import Faculties from "./faculties";
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
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
                  <RiInstagramFill/>
                  Instgram
                </div>
                <span class="status">
                  <span class="status-circle green"></span>
                  Atrium
                </span>
                <div class="button-wrapper">
                  <a href="https://www.instagram.com/atrium_council.smit/">
                    <button class="content-button status-button open">
                      Open
                    </button>
                  </a>
                  <div class="menu" />
                </div>
              </li>
              <li class="adobe-product">
                <div class="products">
                  <MdCall/>
                  Ph. No. (IN) 
                </div>
                <span class="status">
                  <span class="status-circle green"></span>
                  Ai&Ds HOD
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

             

            </ul>
          </div>
          <GoogleMap />

        </div>
      </div>
    </>
  );
};

export default Home;
