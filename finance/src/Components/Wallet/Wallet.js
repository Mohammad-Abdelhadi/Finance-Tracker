import React, { useEffect, useState } from "react";
import Mobile from "../../Images/Mobile.svg";
import Arrow from "../../Images/ArrowBack.svg";
import bell from "../../Images/bell.svg";
import Add from "../../Images/Add.svg";
import Pay from "../../Images/Pay.svg";
import Income from "../../Images/income.svg";
import "./Wallet.css";
import upwork from "../../Images/upwork.svg";
import { Link } from "react-router-dom";
// import from firebase to get data
import { getDocs, collection } from "firebase/firestore";
import { db } from "./../expense/config/firebase";

function Wallet() {
  // Function that get the data from FirBase
  const [categoriesList, setCategoriesList] = useState([]);
  const expenseCollectionRef = collection(db, "expenses");
  const getCategoriesList = async () => {
    const data = await getDocs(expenseCollectionRef);
    const filterData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(filterData);
    setCategoriesList(filterData);
  };
  useEffect(() => {
    getCategoriesList();
  }, []);

  // End code of Function that get the data from FirBase

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="wallet-container">
      <img src={Mobile} alt="" className="phoneBar" />
      <div className="buttons">
        <Link to="/HomePage">
          <img src={Arrow} alt="" />
        </Link>
        <p id="wallet">Wallet</p>
        <p>
          <img src={bell} alt="" />
        </p>
      </div>
      {/* First Background */}
      <div className="first-background">
        {/* Second Background */}
        <div className="second-background">
          <div className="Content">
            <p className="normal-text">Total Balance</p>
            <p className="wallet-balance">$2,549.00</p>
          </div>
          <div className="Transictions">
            <div className="internal-content">
              <Link to="/expense">
                <img src={Add} alt="" />
              </Link>
              <Link to="/expense">
                <img src={Pay} alt="" />
              </Link>
              <Link to="/expense">
                <img src={Income} alt="" />
              </Link>
            </div>
            <div className="internal-titles">
              <span>Add</span>
              <span>Pay</span>
              <span>Income</span>
            </div>
          </div>
          <div className="transictions-details">Transactions</div>
        
            <div className="transiction-scroll">
              {/* start transictions */}
              {categoriesList
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((card) => (
                  <div className="transiction" key={card.id}>
                    <div className="left-side">
                      <div>
                        <img src={upwork} alt="" />
                      </div>
                      <div>
                        <h6>{card.categories}</h6>
                        <h6>{card.date}</h6>
                      </div>
                    </div>
                    <div className="rigth-side">
                      <p style={{ color: "red" }}>-{card.expense}$</p>
                    </div>
                  </div>
                ))}
              {/* end transiction */}
            </div>

           
        </div>
      </div>
    </div>
  );
}

export default Wallet;
