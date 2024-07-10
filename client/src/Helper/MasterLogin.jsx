import React, { useState } from "react";
import "../Styles/Register.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import { BASE_URL } from "../Helper/Helper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../Redux/action/Action";
import BackButton from "./BackButton";
import TransmaBlack from "../components/TransmaBlack.png";
import ReactCardFlip from 'react-card-flip';
import truck2 from './truck2.jpg'


const MasterLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isFlipped, setIsFlipped] = useState(false); // State for flip
  const [error,setError]=useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e, userType) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, formData);
      // console.log(response.data.message);

      // Assuming the response from the server includes userType
      const { userType } = response.data.user;

      // Use the userType to determine navigation
      if (userType === 'User') {
        dispatch(login(formData.username));
        navigate('/Truck'); // Replace with the actual User Dashboard route
      } else {
        console.error("Invalid userType");
        setError("Invalid user")
      }
    } catch (err) {
      console.error("Login Error :", err);
      setError("Invalid credentials")
    }
  };

  const handleMasterLogin = async (e, userType) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, formData);
      // console.log(response.data.message);

      // Assuming the response from the server includes userType
      const { userType } = response.data.user;

      // Use the userType to determine navigation
      if (userType === 'Master') {
        dispatch(login(formData.username));
        navigate('/MasterTruckForm'); // Replace with the actual Master Dashboard route
      }  else {
        console.error("Invalid userType");
        setError("Invalid Master")
      }
    } catch (err) {
      console.error("Login Error :", err);
      setError("Invalid credentials")
    }
  };

  return (
    <>
     
      <BackButton />
      <div className="body-reg">
        
        <div className="container-reg">
        
          <div className="content">


            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div key="front" >



             <div className="FlipFormcontainer">


             <div className="LogLogo">
          <img src={TransmaBlack} alt="" />
        </div>
        

            
             
                <button class="button" onClick={() => setIsFlipped(!isFlipped)}><span class="box">
              <span class="col">master</span> login
    </span></button>
             </div>
             <div className="title"><span class="col">Staff</span> Login</div>
                <Login123 handleChange={handleChange} formData={formData} handleLogin={(e) => handleLogin(e, 'User')} />
              <p  className="ErrormessageLoginvik">{error}</p>
              </div>
              <div key="back">

              <div className="FlipFormcontainer">

              <div className="LogLogo">
          <img src={TransmaBlack} alt="" />
        </div>

                <button class="button" onClick={() => setIsFlipped(!isFlipped)}><span class="box">
                <span class="col">staff</span> login
    </span></button>
             </div>
             <div className="title"><span class="col">Master</span> Login</div>

                <MasterLogin123 handleChange={handleChange} formData={formData} handleMasterLogin={(e) => handleMasterLogin(e, 'Master')} />
                <p  className="ErrormessageLoginvik">{error}</p>

              </div>
            </ReactCardFlip>
          </div>
        </div>
      </div>
    </>
  );
};

const MasterLogin123 = ({ handleChange, formData, handleMasterLogin }) => {
  return (
    <form onSubmit={handleMasterLogin}>
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
      <div>
        
                <button className="TruckButton" type="submit" value="Login">
                  Login
                  <div className="icon-1">
                    <img
                      src={truck2}
                      alt="Icon"
                      style={{ height: "55%", width: "400%" }}
                    />
                  </div>
                </button>
              </div>
    </form>
  );
};

const Login123 = ({ handleChange, formData, handleLogin }) => {
  return (
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
      <div>
                <button className="TruckButton" type="submit" value="Login">
                  Login
                  <div className="icon-1">
                    <img
                      src={truck2}
                      alt="Icon"
                      style={{ height: "55%", width: "400%" }}
                    />
                  </div>
                </button>
              </div>
    </form>
  );
};

export default MasterLogin;
