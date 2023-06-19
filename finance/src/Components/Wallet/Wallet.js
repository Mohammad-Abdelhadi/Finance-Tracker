import React from 'react';
import Mobile from '../../Images/Mobile.svg'
import Arrow from '../../Images/ArrowBack.svg'
import bell from "../../Images/bell.svg"
import Add from "../../Images/Add.svg"
import Pay from "../../Images/Pay.svg"
import Income from "../../Images/income.svg"
import "./Wallet.css";
import { Link } from 'react-router-dom';

function Wallet() {
  return (
    <div className="wallet-container">
      <img src={Mobile} alt="" className='phoneBar'/>
<div className='buttons'> 
<p><img src={Arrow} alt="" /></p>
<p id='wallet'>Wallet</p>
<p><img src={bell} alt="" /></p>
</div>
      {/* First Background */}
      <div className="first-background">
        {/* Second Background */}
        <div className="second-background">
          <div className='Content'
          >
            <p className="normal-text">Total Balance</p>
            <p className="text">$2,549.00</p>

                </div>
        <div className='Transictions'>
       <div className='internal-content'>
       <Link to="/expense">     <img src={Add} alt="" /></Link>
        <Link to="/expense">          <img src={Pay} alt="" />
 </Link>
        <Link to="/expense"> 
        <img src={Income} alt="" />
        
        </Link>
     
      
   

 
        </div>
        <div className='internal-titles'>
        <span>Add</span>
        <span>Pay</span>
        <span>Income</span>
      

        </div>
 

        </div>
        </div>
          
      </div>
    </div>
  );
}

export default Wallet;
