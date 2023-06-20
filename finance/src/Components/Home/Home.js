import React from "react";
import topBackground from "./Home.css";
import "./Home.css";
import ring from "../../Images/ring.svg";
import charge from "../../Images/charge.svg";
import dots from "../../Images/dots.svg";
import whitearrow from "../../Images/whitearrow.svg";
import incomeArrow from "../../Images/incomeArrow.svg";
import expensesArrow from "../../Images/expensesArrow.svg";
import upwork from "../../Images/upwork.svg";




const Home = () => {
 
  return (
    <>
      <div className="home-container">
        <div
          className="top"
          style={{
            backgroundImage: `url(${topBackground})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div>
            <div className="charge-container">
              <p>9:41</p>
              <img src={charge} alt="" />
            </div>

            <div className="name-container">
              <div>
              <p>Welcome</p>
              <p>Angela Jone</p>
              </div>
              <img src={ring} alt="" />
            </div>
            
          </div>
          <div className="warpper">
          <div className="profile-info-container">
           
            <div className="balance-container">
           <div className="total-balance">
            <p>Total Balance</p>
            <img src={whitearrow} alt="" />
           </div>
           <div>
           <img src={dots} alt="" />
           </div>
           </div>
           <p className="balance">$2985.00</p>
           <div  className="expense-container">
              <div className="income">
              <img src={incomeArrow} alt="" />
              <p>Income</p>
              </div>
              <div className="expenses">
              <img src={expensesArrow} alt="" />
              <p>expenses</p>
              </div>
           </div>
            <div className="expenses-values">
              <div className="income-value">
                <p>$1840.00</p>
              </div>
              <div className="expense-value">
                <p>$284.00</p>
              </div>
            </div>
          </div>
          </div>
        </div>
          <div className="transiction-container">
            <div className="Transiction-history">
            <p>Transiction history</p>
            <p>see all</p>
            </div>
        <div className="transiction">
          <div className="left-side">
          <div><img src={upwork} alt="" /></div>
          <div>
            <p>Upwork</p>
            <p>Today</p>
          </div>
          </div>
          <div>
            <p>-$800</p>
          </div>
        </div>
        <div className="transiction">
          <div className="left-side">
          <div><img src={upwork} alt="" /></div>
          <div>
            <p>Upwork</p>
            <p>Today</p>
          </div>
          </div>
          <div>
            <p>-$800</p>
          </div>
        </div>
        <div className="transiction">
          <div className="left-side">
          <div><img src={upwork} alt="" /></div>
          <div>
            <p>Upwork</p>
            <p>Today</p>
          </div>
          </div>
          <div>
            <p>-$800</p>
          </div>
        </div>
        <div className="transiction">
          <div className="left-side">
          <div><img src={upwork} alt="" /></div>
          <div>
            <p>Upwork</p>
            <p>Today</p>
          </div>
          </div>
          <div>
            <p>-$800</p>
          </div>
        </div>
        <div className="transiction">
          <div className="left-side">
          <div><img src={upwork} alt="" /></div>
          <div>
            <p>Upwork</p>
            <p>Today</p>
          </div>
          </div>
          <div>
            <p>-$800</p>
          </div>
        </div>
        <div className="transiction">
          <div className="left-side">
          <div><img src={upwork} alt="" /></div>
          <div>
            <p>Upwork</p>
            <p>Today</p>
          </div>
          </div>
          <div>
            <p>-$800</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
