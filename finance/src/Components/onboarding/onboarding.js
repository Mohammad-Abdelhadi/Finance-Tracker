import React from 'react'
import './onboarding.css'
import {useParams} from 'react-router-dom'
import img from '../../Images/men.png'
import { Link } from 'react-router-dom'
const Onboarding = () => {
  const params = useParams()



  return (
    <>
    <div className='d-flex align-items-center flex-column'>
    <img src={img}  width='100%' height='600px'/>
  
 <div className='text' >
   Spend Smarter<br/> Save More     
 </div>
 <button type="button" className="btn btn-primary btn_start my-4 py-3">Get Started</button>
 <div className='mb-4  have_account'>Already Have Account? <Link to='/signin'><span className='' >Log In</span></Link></div>
    </div>
 
    </>
  )
}

export default Onboarding