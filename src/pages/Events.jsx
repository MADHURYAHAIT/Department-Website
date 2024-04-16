import React from 'react'

const Events = () => {
  return (
   <>
    <div class="main-header">
    <a class="menu-link-main" href="#">Ai&Ds</a>
    <div class="header-menu">
        <a class="main-header-link " href="/">Intro</a>
        <a class="main-header-link is-active" href="/events">Events</a>
        <a class="main-header-link " href="/council">Council</a>
        <a class="main-header-link" href="/gallery">Gallery</a>
    </div>
   </div>
   
    <div class="content-wrapper">
    <div class="content-wrapper-header">
     <div class="content-wrapper-context dep-intro">
        <h3 class="img-content" style={{ width: "300px" }}>

       <img width="28px" style={{marginRight:'10px',borderRadius:'3px'}}  src='/images/atrium.jpg'/>

         Department of Ai&Ds
      </h3>
      <div class="content-text ">Contact Us : Dr. Om Prakash Singh (Head Department of AI&DS, Sikkim Manipal Institute of Technology)Mobile: (+91) 9800408668, Email: hod.ai@smit.smu.edu.in</div>
      <a href="https://smu.edu.in/smit/dept-faculty/dept-list/dept-of-Artificial-intelligence-and-Data-science.html"><button class="content-button">Visit us to know more</button></a>
     </div>
     <img class="content-wrapper-img" src="./images/vr boy.png" alt=""/>
    </div>
   
    <div class="content-section">
     <div class="content-section-title">Upcoming Events</div>

              No Upcoming Events...


    
    </div>

    <div class="content-section">
     <div class="content-section-title">Past Events</div>

     <section id="team" class="team">
            <div class="container">
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="member" data-aos="fade-up">
                    <div class="pic">
                      <img src="./images/talk1.jpeg" class="img-fluid" alt="" />
                    </div>
                    <div class="member-info">
                      <h4>Unlocking the Secrets of ML</h4>
                      <span>Date : 02-03-2024</span>
                      <div class="social">
                      Are you curious about the inner workings of Machine Learning models? Eager to unravel the mysteries behind predictions and decisions made by algorithms? Look no further! Join us for an engaging session as we delve into the fascinating realm of Explainable Machine Learning.
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6">
                  <div class="member" data-aos="fade-up">
                    <div class="pic">
                      <img
                        src="./images/talk2.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="member-info">
                      <h4>Introduction to 3D Printing</h4>
                      <span>Date : 16-03-2024</span>
                      <div class="social">
                      On March 16th, the AI&DS and Mechanical Engineering Depts. are collaborating to host a seminar entitled "Introduction to 3D Printing". 
                      </div>
                    </div>
                  </div>
                </div>

           

                
              </div>
            </div>
          </section>


    
    </div>

    </div>
   </>
  )
}

export default Events