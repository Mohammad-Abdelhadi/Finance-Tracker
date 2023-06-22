import React, { useEffect } from "react";
import facebook from "../../Images/facebook.png";
import apple from "../../Images/apple.png";
import google from "../../Images/google.png";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [userName, setuserName] = useState("");
  const [con_pass, setcon_pass] = useState("");
  const [isValid, setIsValid] = useState();
  const [isValidPass, setIsValidPass] = useState();
  const [isValidcon_Pass, setIsValidcon_Pass] = useState();

  const handleChange = (e) => {
    setEmail(e.target.value);
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    setIsValid(regex.test(e.target.value));
  };
  const handleChange_pass = (e) => {
    setpass(e.target.value);
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!#$%&?]).{8,}$/;
    setIsValidPass(regex.test(e.target.value));
  };
  const handleChange_con_pass = (e) => {
    setcon_pass(e.target.value);

    setIsValidcon_Pass(pass === e.target.value);
  };
  const handleChange_user_name = (e) => {
    setuserName(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    let Email;
    let Pass;
    let name;

    if (localStorage.getItem("gmail") == null) {
      Email = [];
      Pass = [];
      name = [];
    } else {
      Email = JSON.parse(localStorage.getItem("gmail"));
      Pass = JSON.parse(localStorage.getItem("Pass"));
      name = JSON.parse(localStorage.getItem("user name"));
    }
    Pass.push(pass);
    name.push(userName);
    Email.push(email);

    localStorage.setItem("gmail", JSON.stringify(Email));
    localStorage.setItem("Pass", JSON.stringify(Pass));
    localStorage.setItem("user name", JSON.stringify(name));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container">
        <div>your Logo</div>
        <div className="d-flex  flex-column align-items-center  input_up">
          <div className="sign_up ">
            <h1>Sign in up</h1>
            <h3>Lorem Ipsum is simply</h3>
          </div>
          <form className="signUp_form d-flex  flex-column align-items-center">
            <div>
              <input
                type="text"
                placeholder="Enter Email"
                id="email"
                onChange={handleChange}
                required
              ></input>
              <label
                id="label_email"
                style={{ color: isValid ? "green" : "red" }}
              >
                {isValid
                  ? ""
                  : email == ""
                  ? ""
                  : "Please enter the valid email format (e.g.example@email.com)"}
              </label>
            </div>
            <div>
              <input
                type="text"
                placeholder="Create User name"
                id="user_name"
                required
                onChange={handleChange_user_name}
              ></input>

              <label></label>
            </div>
            <div>
              <input
                type="number"
                placeholder="Contact number"
                required
              ></input>
              <label></label>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                id="pas"
                onChange={handleChange_pass}
                required
              ></input>
              <label style={{ color: isValidPass ? "green" : "red" }}>
                {isValidPass
                  ? ""
                  : pass == ""
                  ? ""
                  : "Your password must have 8+ characters, a number, a capital letter and a special character."}{" "}
              </label>
            </div>
            <div>
              <input
                type="password"
                placeholder="Confrim Password"
                onChange={handleChange_con_pass}
                required
              ></input>
              <label style={{ color: isValidcon_Pass ? "green" : "red" }}>
                {isValidcon_Pass
                  ? ""
                  : con_pass == ""
                  ? ""
                  : "Those passwords didn't match. Try again"}
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary  py-3 btn_Register "
                disabled={!(isValid && isValidPass && isValidcon_Pass)}
                onClick={onClick}
              >
                <Link to="/signin">Register</Link>
              </button>
            </div>
          </form>
        </div>
        <div className="continue_with mt-3">or continue with</div>
        <div className="d-flex justify-content-center gap-3 my-5">
          <img src={facebook} width="10%" />
          <img src={apple} width="10%" />
          <img src={google} width="10%" />
        </div>
      </div>
    </>
  );
};

export default Signup;
