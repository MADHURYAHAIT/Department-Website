import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import data from "../constants/data2024";
import OldData from "../constants/data2023";
const Council = () => {
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
            Atrium is the only Council of Artificial Intelligence & Data Science at Sikkim Manipal Institute of Technology, which stands by its motto: 'one heart | one dream | infinite possibilities.
            </div>
            <a href="https://smu.edu.in/smit/dept-faculty/dept-list/dept-of-Artificial-intelligence-and-Data-science.html">
              <button class="content-button">Visit us to know more</button>
            </a>
          </div>
          <img
            class="content-wrapper-img"
            src="./images/atrium.png"
            alt=""
          />
        </div>
        <div className="Abc"></div>

        <div class="content-section">
          <div class="content-section-title">Council Members</div>
          <section id="team" class="team">
            <div class="container">
              <div class="row">
                {
                    data.map((member, index) => (
                        <div key={index} class="col-lg-4 col-md-6">
                        <div class="member" data-aos="fade-up">
                          <div class="pic">
                            <img src={member.img} class="img-fluid" alt="" />
                          </div>
                          <div class="member-info">
                            <h4>{member.name}</h4>
                            <span>{member.position}</span>
                            <div class="social">
                              <a href="">
                                <i class="bi bi-twitter"></i>
                              </a>
                              <a href="">
                                <i class="bi bi-facebook"></i>
                              </a>
                              <a href="">
                                <i class="bi bi-instagram"></i>
                              </a>
                              <a href="">
                                <i class="bi bi-linkedin"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                }
              </div>
            </div>
          </section>
        </div>
        {/* Old Council */}

        <div class="content-section">
          <div class="content-section-title">X-Council Members</div>
          <section id="team" class="team">
          <div class="container">
              <div class="row">
                {
                     OldData.map((member, index) => (
                        <div key={index} class="col-lg-4 col-md-6">
                        <div class="member" data-aos="fade-up">
                          <div class="pic">
                            <img src={member.img} class="img-fluid" alt="" />
                          </div>
                          <div class="member-info">
                            <h4>{member.name}</h4>
                            <span>{member.position}</span>
                            <div class="social">
                              <a href="">
                                <i class="bi bi-twitter"></i>
                              </a>
                              <a href="">
                                <i class="bi bi-facebook"></i>
                              </a>
                              <a href="">
                                <i class="bi bi-instagram"></i>
                              </a>
                              <a href="">
                                <i class="bi bi-linkedin"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))

                }
            </div>
        </div>

          </section>
        </div>
      </div>
    </>
  );
};

export default Council;
