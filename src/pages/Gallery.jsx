import React from 'react'
import PhotoGallery from './Carousel'

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
           

            <PhotoGallery/>
        
        </div>

   
    </>
  )
}

export default Gallery