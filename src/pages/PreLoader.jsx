import { useState,useEffect } from "react";
import React from 'react'

const PreLoader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    // Simulate loading time
    const timeout = setTimeout(() => {
      setFadeOut(true); // Set fadeOut to true after some time
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timeout); // Cleanup function
  }, []);
  return (
    <div className={`Preloader ${fadeOut ? 'fadeOut' : ''}`}>

        <img src='./images/Launch.jpg'/>
        <p>
        Loading Ai&Ds options...
        </p>
       
  </div>
  )
}

export default PreLoader