import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/signup",
        {
          ...inputValue,
          createdAt: new Date(),  // Ensure createdAt is included
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
            navigate("/dashboard");
        // window.location.href = "/dashboard"; // or full URL if hosted separately
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="form_container p-5 mb-5 mt-5">
      <h2 className="mt-5 d-flex justify-content-center">Signup Account</h2>

      {/* ********************************************************************************************************** */}
      {/* <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter your email"
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Enter your username"
                        onChange={handleOnChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={handleOnChange}
                    />
                </div>
                <button
                    type="submit"
                    className="d-flex p-2 btn btn-primary fs-5 mb-5 justify-content-center"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Submit
                </button>
                <span>
                    Already have an account? <Link to={"/login"}>Login</Link>
                </span>
            </form> */}
      {/* ********************************************************************************************************** */}

      <form onSubmit={handleSubmit} className="form">
        <div class="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="email" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username}
            className="form-control"
            id="exampleInputPassword1"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            className="form-control"
            id="exampleInputUsername1"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit" className="d-flex p-2 btn btn-primary fs-5 mb-5 justify-content-center" style={{ width: "20%", margin: "0 auto" }}>
          Submit
        </button>
        <span>
            Already have an account? <Link to={"/login"}>Login</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Signup;
