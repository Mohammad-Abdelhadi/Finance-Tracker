import React, { useEffect, useState } from "react";
import topBackground from "./Home.css";
import "./Home.css";
import ring from "../../Images/ring.svg";
import charge from "../../Images/charge.svg";
import dots from "../../Images/dots.svg";
import whitearrow from "../../Images/whitearrow.svg";
import incomeArrow from "../../Images/incomeArrow.svg";
import expensesArrow from "../../Images/expensesArrow.svg";
import upwork from "../../Images/upwork.svg";
// import from firebase to get data
import { getDocs, collection } from "firebase/firestore";
import { db } from "./../expense/config/firebase";

const Home = () => {
  let index = localStorage.getItem("index");
  let name = JSON.parse(localStorage.getItem("user name"));
  let user_name = name[index];
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

  let sumExpense = 0;
  categoriesList.forEach((card) => {
    sumExpense += card.expense;
  });

  // End code of Function that get the data from FirBase

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
                <p>{user_name}</p>
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
              <p className="balance">${sumExpense}</p>
              <div className="expense-container">
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
        <div className="home__transiction-container">
          <div className="home__Transiction-history">
            <p>Transiction history</p>
            <p>see all</p>
          </div>
          {categoriesList
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((value) => {
              return (
                <div className="transiction__homepage" key={value.id}>
                  <div className="home__left-side">
                    <div>
                      <img src={upwork} alt="" />
                    </div>
                    <div>
                      <p>{value.categories}</p>
                      <p>{value.date}</p>
                    </div>
                  </div>
                  <div>
                    <p style={{ color: "red" }}>-${value.expense}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
