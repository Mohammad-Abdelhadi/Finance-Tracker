import React from 'react'
import './onboarding.css'
import {useParams} from 'react-router-dom'
import img from './img/Screenshot 2023-06-18 141203.png'
const Onboarding = () => {
  const params = useParams()
  return (
    <>
    <div className='d-flex align-items-center flex-column'>
    <img src={img}  width='100%' height='500px'/>
  
 <div className='text' >
   Spend Smarter<br/> Save More     
 </div>
 <button type="button" className="btn btn-primary btn_start my-4 py-3">Get Started</button>
 <div className='mb-4'>Already Have Account? <span>Log In</span></div>
    </div>
 
    </>
  )
}

export default Onboarding