import React from 'react';
import Mobile from '../../Images/Mobile.svg'
import Arrow from '../../Images/ArrowBack.svg'
import bell from "../../Images/bell.svg"
import Add from "../../Images/Add.svg"
import Pay from "../../Images/Pay.svg"
import Income from "../../Images/income.svg"
import "./Wallet.css";
import YouTube from "../../Images/YouTubeIcon.svg";
import Paypal from "../../Images/paypal.svg"
import upwork from "../../Images/upwork.svg"

import { Link } from 'react-router-dom';

function Wallet() {
  return (
    <div className="wallet-container">
      <img src={Mobile} alt="" className='phoneBar'/>
<div className='buttons'> 
<Link to="/HomePage"> <img src={Arrow} alt="" /></Link>
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
 <div className='transictions-details'>
  Transiciotns
 </div>
 {/* <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
 <p>jsaoidjiosajd</p>
<p>jsaoidjiosajd</p> */}
<div className="transiction-scroll">
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={YouTube} alt="" />
                </div>
                <div>
                  <h6>YouTube</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='loss' >-$800</p>
              </div>
            </div>
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={YouTube} alt="" />
                </div>
                <div>
                  <h6>YouTube</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='loss' >-$800</p>
              </div>
            </div>
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={Paypal} alt="" />
                </div>
                <div>
                  <h6>Paypal</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='loss' >-$800</p>
              </div>
            </div>
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={Paypal} alt="" />
                </div>
                <div>
                  <h6>Paypal</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='green' >+800$</p>
              </div>
            </div>
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={Paypal} alt="" />
                </div>
                <div>
                  <h6>Paypal</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='green' >+800$</p>
              </div>
            </div>
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={YouTube} alt="" />
                </div>
                <div>
                  <h6>YouTube</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='green' >+800$</p>
              </div>
            </div>
            {/* start transictions */}
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={upwork} alt="" />
                </div>
                <div>
                  <h6>upwork</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='green' >+800$</p>
              </div>
            </div>
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={upwork} alt="" />
                </div>
                <div>
                  <h6>upwork</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='green' >-$800</p>
              </div>
            </div>
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={YouTube} alt="" />
                </div>
                <div>
                  <h6>YouTube</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='loss' >-$800</p>
              </div>
            </div>
<div className="transiction">
              <div className="left-side">
                <div>
                  <img src={YouTube} alt="" />
                </div>
                <div>
                  <h6>YouTube</h6>
                  <h6>Today</h6>
                </div>
              </div>
              <div>
                <p className='loss' >-$800</p>
              </div>
            </div>
            {/* end transiction */}
            </div>
        </div>
          
      </div>
    </div>
  );
}

export default Wallet;
