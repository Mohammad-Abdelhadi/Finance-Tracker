import React from 'react'
import './splash.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {

    const navigate = useNavigate();
  
    useEffect(() => {
      const redirectTimeout = setTimeout(() => {
        navigate('/homepage'); // Replace '/home' with your home page URL
      }, 3000);
  
      return () => clearTimeout(redirectTimeout);
    }, [navigate]);
  
  return (
      <div className="container">
      <div className='logo'>MONO</div>
    </div>
  )
}

export default Splash

