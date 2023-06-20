import React from 'react'
import facebook from '../../Images/facebook.png'
import apple from '../../Images/apple.png'
import google from '../../Images/google.png'
// import {Link} from 'react-router-dom'
import './signup.css'
import { useState } from 'react'
const Signup = () => {
  const [email, setEmail] = useState("");
  const [labelEmail, setLabelEmail] = useState("");
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    setEmail(e.target.value);
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValid(regex.test(email));
    console.log(isValid)
    if(isValid==false){
      document.getElementById('label_email').style.color='red'
      setLabelEmail("farah")
    }
    else{
      document.getElementById('label_email').style.color='green'
      setLabelEmail("correct")
    }
  };
  return (
    <>
    <div className='container'>
     <div>your Logo</div>
    <div className='d-flex  flex-column align-items-center  input_up'>
     <div className='sign_up'>
     <h1>Sign in up</h1>
     <h3>Lorem Ipsum is simply</h3>
     </div>
     <form  >
      <div>
        <input type='text' placeholder='Enter Email' id='email'    onChange={handleChange}></input>
        <label id='label_email'>{labelEmail}</label>
        </div>
     <div><input type='text' placeholder='Create User name' id='user_name'></input>
     
        <label >a</label>
     </div>
     <div><input type='number' placeholder='Contact number'></input>
        <label >a</label>
     
     </div>
     <div><input type='password' placeholder='Password' id='pas'></input>
        <label >a</label>
     
     </div>
     <div><input type='password' placeholder='Confrim Password'></input>
        <label >a</label>
     
     </div>
     <div>
  
       <button type="submit" className="btn btn-primary  py-3 btn_Register ">
       Register
       </button>
    
       </div>
     </form>
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

export default Signup