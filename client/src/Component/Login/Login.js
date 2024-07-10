import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helper/Helper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/action/Action"; 
import BackButton from "../Master/BackButton";
import TransmaBlack from "../images/TransmaBlack.png";

const Login = () => {
  const dispatch = useDispatch()
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, formData);
     
      dispatch(login(formData.username))
      navigate('/Truck')
    } catch (err) {
      console.error("Login Error :", err);
    }
  };
  return (
    <>
      {/* <Navbar /> */}
      <BackButton/>
      <div className="body-reg">

        <div className="LogLogo">

<img src={TransmaBlack} alt="" />

        </div>
        <div className="container-reg">
          <div className="title">Login</div>
          <div className="content">
            <form onSubmit={handleLogin}>
              <div className="user-details log-user-details">
                <div className="input-box">
                  <span className="details">Username</span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
