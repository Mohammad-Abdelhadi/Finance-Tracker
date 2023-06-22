import React, { useEffect, useState } from "react";
import BlackTime from "../../Images/BlackTime.svg";
import BlackBattery from "../../Images/BlackBattery.svg";
import ThreeDot from "../../Images/BlackThreeDot.svg";
import Blackarrow from "../../Images/Blackarrow.svg";
import Filter from "../../Images/Filter.svg";
import YouTube from "../../Images/YouTubeIcon.svg";
import "./Statistic.css";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import from firebase to get data
import { collection, getDocs } from "firebase/firestore";
import { db } from "../expense/config/firebase";









const Statistic = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

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


// Charts code

const topSpendingData = categoriesList
.sort((a, b) => b.expense - a.expense) 
.slice(0, 3) 
.map((card) => card.expense); 

const topSpendingDataName = categoriesList
.sort((a, b) => b.expense - a.expense) 
.slice(0, 3) 
.map((card) => card.categories); 

const data = {
labels: [...topSpendingDataName], 
datasets: [
  {
    label: "poll",
    data: [ ...topSpendingData], 
    backgroundColor: ["orange", "black", "red"], 
    borderColor: ["orange", "black", "red"], 
  },
],
};

  const options = {};
// End Charts code

  return (
    <>
      <main className="container">
        {/* Mobile Info In top  Statistic page*/}
        <div className="col-12 center__battery">
          <div className="d-flex justify-content-between">
            <div>
              <img alt="#" src={BlackTime} />
            </div>
            <div>
              <img alt="#" src={BlackBattery} />
            </div>
          </div>
        </div>
        {/* Arrow Back and Three dot and page Name */}
        <div className="col-12">
          <div className="d-flex justify-content-around mt-5">
            <div>
              <Link to="/HomePage">
                <img alt="#" src={Blackarrow} />
              </Link>
            </div>
            <div>
              <Link
                className="text-decoration-none text-color-black"
                style={{ color: "black" }}
                to="#"
              >
                Statistic
              </Link>
            </div>
            <div>
              <img alt="#" src={ThreeDot} />
            </div>
          </div>
        </div>
        {/* Choose The Time btn*/}
        <div
          class="btn-group-horizontal mx-2 my-5"
          role="group"
          aria-label="Options"
        >
          <button
            type="button"
            class="btn btn-outline-primary border-0 btn-radio mx-3"
            style={{ color: "black" }}
          >
            Day
          </button>
          <button
            type="button"
            class="btn btn-outline-primary border-0 btn-radio mx-3"
            style={{ color: "black" }}
          >
            Week
          </button>
          <button
            type="button"
            class="btn btn-outline-primary border-0 btn-radio mx-3"
            style={{ color: "black" }}
          >
            Month
          </button>
          <button
            type="button"
            class="btn btn-outline-primary border-0 btn-radio mx-3"
            style={{ color: "black" }}
          >
            Year
          </button>
        </div>
        {/* Choose the data of charts */}
        <div className="d-flex justify-content-end me-4">
          <select
            class="form-select form-select-lg mb-3  w-50"
            aria-label=".form-select-lg example"
          >
            <option value="1">Expense</option>
            <option value="2">Income</option>
          </select>
        </div>
        {/* Charts Container */}
        <div className="container d-flex justify-content-center mt-5">
          <Doughnut data={data} options={options}></Doughnut>
        </div>
        {/* Top spending  */}
        <div className="container">
          <div className="transiction-container">
            <div className="Transiction-history">
              <p>Top Spending</p>
              <img alt="#" src={Filter} />
            </div>
            <div className="transiction-scroll">
  {/* start transictions */}
  {categoriesList
    .sort((a, b) => b.expense - a.expense) // Sort the transactions in descending order based on expense
    .map((card) => (
      <div className="transiction" key={card.id}>
        <div className="left-side">
          <div>
          </div>
          <div>
            <h6>{card.categories}</h6>
            <h6>{card.date}</h6>
          </div>
        </div>
        <div>
          <p style={{ color: "red" }}>-{card.expense}$</p>
        </div>
      </div>
    ))
    .slice(0, 3) // Take only the first three transactions after sorting
  }
  {/* end transiction */}
</div>
           
          </div>
        </div>
      </main>
    </>
  );
};


export default Statistic;





