import React from "react";
import "./expense.css";
import Mobile from '../../Images/Mobile.svg'
import ArrowBack from '../../Images/ArrowBack.svg'
import { Link } from "react-router-dom";



const Expense = () => {
  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col-12 "><img alt="#" src={Mobile} id="mobile__icon"/></div>
          <div className="col-12">
            <div className=""> <img alt="#" src={ArrowBack} className="" /> </div>
            <div className=""><Link className="text-decoration-none" to="#">Add Expense or Income</Link></div>
            <div className=""></div>
            </div>
        </div>
      </main>
    </>
  );
};

export default Expense;
