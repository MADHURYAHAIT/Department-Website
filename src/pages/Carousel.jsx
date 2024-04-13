import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './PhotoGallery.css'; // Import your custom CSS file for additional styling

const PhotoGallery = () => {
  useEffect(() => {
    // Initialize Bootstrap Carousel when component mounts
    const carousel = document.querySelector('#carouselExampleControls');
    if (carousel) {
      new window.bootstrap.Carousel(carousel, {
        interval: 3000 // Set the interval to 2 seconds (2000 milliseconds)
      });
    }
  }, []);

  return (
    <div id="carouselExampleControls" className="carousel slide align-items-center" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
            <div className='PhotoCont'>
                 <img src="./gallery/1.jpg" className="d-block w-100 phomto" alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/2.jpg" className="d-block w-100 phomto" alt="First slide" />
            </div>

        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/3.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        {/* Add more carousel items as needed */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default PhotoGallery;
