import React from 'react'
import './onboarding.css'
// import {useParams} from 'react-router-dom'
import newman from '../../Images/newman.png'
import onbarding from "../../Images/onbarding.svg"
import { Link } from 'react-router-dom'
const Onboarding = () => {
  // const params = useParams()



  return (
    <>
    <div className='d-flex align-items-center flex-column onboarding-container'
    style={{
      backgroundImage: `url(${onbarding})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
     >
    <img src={newman} className='man__img'  alt=''/>
  
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