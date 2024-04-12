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
      <h3 class="img-content">

       <img width="28px" style={{marginRight:'10px',borderRadius:'3px'}}  src='/images/atrium.jpg'/>

         Department of Ai&Ds
      </h3>
      <div class="content-text ">Welcome to the site of Artificial Intelligence & Data Science in Sikkim Manipal Institute of Technology, where Passion meets Technology and Algorithms shape Possibilities.</div>
      <a href="https://smu.edu.in/smit/dept-faculty/dept-list/dept-of-Artificial-intelligence-and-Data-science.html"><button class="content-button">Visit us to know more</button></a>
     </div>
     <img class="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt=""/>
    </div>
   
    <div class="content-section">
     <div class="content-section-title">Atrium Council Members</div>
        
    <div class="apps-card">

        <div class="app-card crd" >
        <span>
            <img width="100px" className="CouncilPic"  src='./images/akhil.jpeg'/>
            Akhil Madhu Menon <br/>(President)
        </span>
        <div class="app-card__subtext" >I'm Akhil Menon, President of the ATRIUM Council and I hope to be outstanding in mine! Reading books, programming, and building projects captivate me greatly. Calisthenics, playing badminton & volleyball, are my favourite sport activities. Believing in my moto of making the world a better place to live in. I've always worked towards the same. </div>
        <div class="app-card-buttons">
            <button class="content-button status-button">info</button>
            <div class="menu"></div>
        </div>
        </div>

        <div class="app-card crd">
        <span>
            <img width="100px" className="CouncilPic"  src='./images/ahana.jpeg'/>
        
            Ahana Sadh <br/> (Representative Girls)
        </span>
        <div class="app-card__subtext">I'm Ahana Sadh, the Department representative(Girls). My whole personality revolves around whoever my current favourite fictional character is. Other than using cleaning and organising as a way to procastinate, my day is usually spent reading, watching shows, and spending time with my friends. </div>
        <div class="app-card-buttons">
            <button class="content-button status-button">Info</button>
            <div class="menu"></div>
        </div>
        </div>

        <div class="app-card crd">
        <span>
        <img width="100px" className="CouncilPic"  src='./images/nithin.jpeg'/>
            M. Nithin Reddy<br/> (Representative Boys)
        </span>
        <div class="app-card__subtext">I'm Nithin reddy , Department representative of the ATRIUM Council. reading lots of graphic novel and non-fiction books, playing cricket, irritating my favourite person are my hobbies.I had a dream for the future…To Become A Cricketer and now never really thought about it, I'm sick of following my dreams, I'm just going to ask where they're going and hook up with "em later."</div>
        <div class="app-card-buttons">
            <button class="content-button status-button">Info</button>
            <div class="menu"></div>
        </div>
        </div>
    </div>
    <div class="apps-card">

        <div class="app-card crd">
        <span>
        <img width="100px" className="CouncilPic"  src='/images/aniket.jpeg'/>
        Aniket Rai <br/> (Technical Secretary)
        </span>
        <div class="app-card__subtext">Hey there I'm Aniket Rai, if there is any query related to technicalities you can approach me either through WhatsApp or personally so that I can solve your issues myself or with some help. Thank you.</div>
        <div class="app-card-buttons">
            <button class="content-button status-button">Info</button>
            <div class="menu"></div>
        </div>
        </div>

        <div class="app-card crd">
        <span>
        <img width="100px" className="CouncilPic"  src='/images/shivam.jpeg'/>
        Shivam Saurav <br/> (T&P Coordinator)
        </span>
        <div class="app-card__subtext">Hi, my name is Shivam Sourav, the training and placement coordinator. If any question arises regarding the training and placement then you can approach me anyday if not in the campus then in the old boys hostel. My hobbies are playing cricket and Bgmi.</div>
        <div class="app-card-buttons">
            <button class="content-button status-button">Info</button>
            <div class="menu"></div>
        </div>
        </div>

        <div class="app-card crd">
        <span>
        <img width="100px" className="CouncilPic"  src='/images/shubham.jpeg'/>
        Shubham Raj Satyam <br/> (Sports Secretary)
        </span>
        <div class="app-card__subtext" style={{width: "200px;"}}>One man practicing sportsmanship is far better than 50 preaching it". I’m Shubham Raj Satyam, Sports secretary of ATRIUM council ,SMIT. My strengths are self-motivated person, a quick learner, easy to adapt to any situation, a Positive thinker. Hobbies are Playing Cricket, Web Series,Driving,Swimming.I hope you all are doing well.</div>
        <div class="app-card-buttons">
            <button class="content-button status-button">Info</button>
            <div class="menu"></div>
        </div>
        </div>

    </div>

    
    </div>
    </div>
   </>
  )
}

export default Events