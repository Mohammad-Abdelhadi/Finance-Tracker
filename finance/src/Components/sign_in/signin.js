import React from 'react'
import facebook from '../../Images/facebook.png'
import apple from '../../Images/apple.png'
import google from '../../Images/google.png'
import {Link} from 'react-router-dom'
import './signin.css'
const Signin = () => {
  return (
   <>
   <div className='contain'>
    <div>your Logo</div>
   <div className='d-flex align-items-center flex-column  input'>
    <div className='sign_mono'>
    <h1>Sign in to</h1>
    <h3>mono</h3>
    </div>
    <div><input type='text' placeholder='Enter email or user name'></input></div>
    <div><input type='password' placeholder='Password'></input></div>
    <div className='forgot_pas'>Forgot password ?</div>
    <div className='have_account'>If you don't have an account 
     <Link to='/signup'>  
     <span>
     &nbsp;Register here !
     </span>
   </Link>
     </div>
    </div> 
    <div>
    <Link to='/HomePage'>  
      <button type="button" className="btn btn-primary btn_sign_in  py-3">
   Sign In
      </button>
   </Link>
      </div>
    <div className='continue_with mt-3'>or continue with</div>
    <div className='d-flex justify-content-center gap-3 my-5'>
      <img src={facebook} width='10%'/>
      <img src={apple} width='10%'/>
      <img src={google} width='10%'/>
    </div>
   </div>
   </>
  )
}

export default Signin