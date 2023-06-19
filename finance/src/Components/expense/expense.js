import React from "react";
import "./expense.css";
import Time from "../../Images/Time.svg";
import Battery from "../../Images/Battery.svg";
import ArrowBack from "../../Images/ArrowBack.svg";
import ThreeDot from "../../Images/ThreeDot.svg";

import { Link } from "react-router-dom";

const Expense = () => {
  return (
    <>
      <main id="expense__page" className="container">
        <div className="row position-relative">
          {/* Mobile Info In top */}
          <div className="col-12 center__battery">
            <div className="d-flex justify-content-between">
              <div>
                <img alt="#" src={Time} />
              </div>
              <div>
                <img alt="#" src={Battery} />
              </div>
            </div>
          </div>
          {/* Arrow Back and Three dot and page name */}
          <div className="col-12">
            <div className="d-flex justify-content-around mt-5">
              <div>
                <img alt="#" src={ArrowBack} />{" "}
              </div>
              <div>
                <Link className="text__edit" to="#">
                  Add Expense or Income
                </Link>
              </div>
              <div>
                <img alt="#" src={ThreeDot} />
              </div>
            </div>
          </div>
        </div>
        {/* Cards that includes Form and input */}
        <form className="position-absolute z-1 center__cards p-4">
          <div className="my-3">
            <label for="process">Process:</label>
            <select
              id="process"
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Choose Your Process</option>
              <option value="1">Income</option>
              <option value="2">Expense</option>
            </select>
          </div>
          <div className="my-3">
            <label for="name">Name:</label>
            <input
              id="name"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="my-3">
            <label for="amount">Amount:</label>
            <input
              id="amount"
              type="number"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="my-3">
            <label for="date">Date:</label>
            <input
              id="date"
              type="date"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </form>
        {/* Button Add  */}
        <div className="container position-absolute add__btn">
          <div className="my-3">
            <button className="btn w-100">Add</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Expense;
