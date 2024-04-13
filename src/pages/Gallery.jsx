import React from 'react'

const Gallery = () => {
  return (
    <>
    <div class="main-header">
    <a class="menu-link-main" href="#">Ai&Ds</a>
    <div class="header-menu">
        <a class="main-header-link " href="/">Intro</a>
        <a class="main-header-link " href="/events">Events</a>
        <a class="main-header-link " href="/council">Council</a>
        <a class="main-header-link is-active" href="/gallery">Gallery</a>

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
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src="./gallery/1.jpg" alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="./gallery/2.jpg" alt="Second slide" /> 
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src="./gallery/3.jpg" alt="Third slide" />
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>





        
        </div>

   
    </>
  )
}

export default Gallery