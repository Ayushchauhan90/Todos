import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const history = useNavigate();

  let [start, setstart] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    number: "",
  });
  console.log(start);
  // let [data,setdata]=useState([])
  const handleChange = (event) => {
    const { value, name } = event.target;

    setstart(() => {
      return {
        ...start,
        [name]: value,
      };
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, repassword, number } = start;
    if (name === "") {
      toast.error("Name is required", {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error("Email field is required", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("Enter a valid email", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("Please set a strong pass", {
        position: "top-center",
      });
    } else if (password !== repassword) {
      toast.error("Renter the correct pass", {
        position: "top-center",
      });
    } else if (number.length < 10) {
      toast.error("Enter a valid number", {
        position: "top-center",
      });
    } else {
      //   toast.success("Data add succesfully", {
      //     position: "top-center",
      // });
      history("/Login");
      localStorage.setItem("UserDeatils", JSON.stringify(start));
      console.log(start);
    }
  };
  return (
    <>
      <div className="container form-status">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5 col-12">
            <div className="form-data">
              <div className="fron-handel">
                <h1>Sign Up Form</h1>
                <form className="input-form" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">Enter Name</label>
                    <br />
                    <input
                      type={"text"}
                      name="name"
                      onChange={handleChange}
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Enter Email</label>
                    <br />
                    <input
                      type={"email"}
                      name="email"
                      onChange={handleChange}
                      placeholder="Enter Emial"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Enter Password</label>
                    <br />
                    <input
                      type={"password"}
                      name="password"
                      onChange={handleChange}
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Renter Password</label>
                    <br />
                    <input
                      type={"password"}
                      name="repassword"
                      onChange={handleChange}
                      placeholder="Renter Password "
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Enter Number</label>
                    <br />
                    <input
                      type={"number"}
                      name="number"
                      onChange={handleChange}
                      placeholder="Enter Number"
                    />
                  </div>
                  <input
                    type={"submit"}
                    style={{
                      margin: "10px 0",
                      padding: "6px 16px",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "limegreen",
                      border: "none",
                      borderRadius: "10px",
                    }}/>
                    <NavLink to={"/Login"} className="btn-login">Login</NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Signup;
