import React, { useEffect } from 'react';
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

          <div className="carousel-item">
              <div className='PhotoCont'>
                  <img src="./gallery/4.jpg" className="d-block w-100 phomto"  alt="First slide" />
              </div>
          </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/5.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/6.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/7.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/8.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/9.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/10.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/11.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/12.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/13.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/14.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/15.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/16.jpg" className="d-block w-100 phomto"  alt="First slide" />
            </div>
        </div>
        <div className="carousel-item">
            <div className='PhotoCont'>
                 <img src="./gallery/17.jpg" className="d-block w-100 phomto"  alt="First slide" />
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
