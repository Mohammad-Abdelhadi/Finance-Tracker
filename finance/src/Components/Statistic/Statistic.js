import React from "react";
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

ChartJS.register(ArcElement, Tooltip, Legend);

const Statistic = () => {
  const data = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "poll",
        data: [3, 6],
        backgroundColor: ["aqua", "black"],
        borderColor: ["aqua", "black"],
      },
    ],
  };

  const options = {};

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
              <img alt="#" src={Blackarrow} />{" "}
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
            <div className="transiction">
              <div className="left-side">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <p>Upwork</p>
                  <p>Today</p>
                </div>
              </div>
              <div>
                <p style={{ color: "red" }}>-$800</p>
              </div>
            </div>
            <div className="transiction">
              <div className="left-side">
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <p>Upwork</p>
                  <p>Today</p>
                </div>
              </div>
              <div>
                <p style={{ color: "red" }}>-$800</p>
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
                <p style={{ color: "red" }}>-$800</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Statistic;
