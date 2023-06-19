import React from 'react';
import Mobile from '../../Images/Mobile.svg'
import Arrow from '../../Images/ArrowBack.svg'

import "./Wallet.css";

function Wallet() {
  return (
    <div className="wallet-container">
      <img src={Mobile} alt="" className='phoneBar'/>
<div className='buttons'> 
<p><img src={Arrow} alt="" /></p>
<p id='wallet'>Wallet</p>
<p>o</p>
</div>
      {/* First Background */}
      <div className="first-background">
        {/* Second Background */}
        <div className="second-background">
          <p className="text">Total Balance</p>
          <p className="text">Some text here</p>
          <p className="text">Some text here</p>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
