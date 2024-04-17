import React from 'react'

const Faculties = () => {
  return (
    <>
         <div class="content-section">
          <div class="content-section-title">Our Amazing Faculties</div>

          <div class="apps-card">
            <div class="app-card crd">
              <span>
                <img
                  width="100px"
                  className="CouncilPic"
                  src="./images/opSir.jpeg"
                />
                Dr. Om Prakash Singh (HOD)
              </span>
              <div class="app-card__subtext">
                Dr. Om Prakash Singh is Associate Professor & HOD in the
                Department of Artificial Intelligence and Data Science at Sikkim
                Manipal Institute of Technology (SMIT), Sikkim.
              </div>
              <div class="app-card-buttons">
                <a href="https://smu.edu.in/smit/dept-faculty/faculty-list/om-prakash-singh.html">
                  <button class="content-button status-button">Info</button>
                </a>
                <div class="menu"></div>
              </div>
            </div>

            <div class="app-card crd">
              <span>
                <img
                  width="100px"
                  className="CouncilPic"
                  src="./images/swarupSir.jpg"
                />
                Dr. Swarup Sarkar (Associate Professor)
              </span>
              <div class="app-card__subtext">
                {" "}
                Dr. Swarup Sarkar is the Associate Professor of Ai & Ds, Lab in
                Charge, VLSI Lab, chairman of different Institutional and
                Departmental Committee at (SMIT), Sikkim.
              </div>
              <div class="app-card-buttons">
                <a href="https://smu.edu.in/smit/dept-faculty/faculty-list/swarup-sarkar.html">
                  <button class="content-button status-button">Info</button>
                </a>
                <div class="menu"></div>
              </div>
            </div>

            <div class="app-card crd">
              <span>
                <img
                  width="100px"
                  className="CouncilPic"
                  src="./images/himangshuSir.jpg"
                />
                Himangshu Pal
                <br /> (Assistant Professor)
              </span>
              <div class="app-card__subtext">
                Himangshu Pal is an Assistant Professor - I in the Department of
                AI & DS at SMIT. He is the Deputy Chairman, Admission Cell
                Alumni Engagement Cell Member.
              </div>
              <div class="app-card-buttons">
                <a href="https://smu.edu.in/smit/dept-faculty/faculty-list/himangshu-pal.html">
                  <button class="content-button status-button">Info</button>
                </a>
                <div class="menu"></div>
              </div>
            </div>

            <div class="app-card crd">
              <span>
                <img
                  width="100px"
                  className="CouncilPic"
                  src="./images/sitalSir.jpeg"
                />
                Mr. Sital Sharma
                <br /> (Assistant Professor)
              </span>
              <div class="app-card__subtext">
                Mr. Sital Sharma is Associate Professor in the Department of
                Artificial Intelligence and Data Science at Sikkim Manipal
                Institute of Technology (SMIT), Sikkim.
              </div>
              <div class="app-card-buttons">
                <a href="https://smu.edu.in/smit/dept-faculty/faculty-list/sital-sharma.html">
                  <button class="content-button status-button">Info</button>
                </a>
                <div class="menu"></div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Faculties