import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helper/Helper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/action/Action";
import BackButton from "../Master/BackButton";
import TransmaBlack from "../../images/TransmaBlack.png";
import ReactCardFlip from "react-card-flip";
import truck2 from "../../images/truck2.jpg";
import loginbackimg1 from "../../images/loginbackimg1.jpg";
import { Link } from "react-router-dom";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MasterLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [backgroundImage, setBackgroundImage] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isFlipped, setIsFlipped] = useState(false); // State for flip
  const [error, setError] = useState("");
  const [loginType, setLoginType] = useState("truck");

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

      const { userType } = response.data.user;

      if (userType === "TruckStaff") {
        dispatch(login(formData.username));
        navigate("/Truck");
        toast.success("Login Successful");

      } else {
        console.error("Invalid userType");
        toast.error("Invalid user");
      }
    } catch (err) {
      console.error("Login Error :", err);
      toast.error("Invalid credentials");
    }
  };

  const CustomerhandleLogin = async (e, userType) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, formData);
      // console.log(response.data.message);

      const { userType } = response.data.user;

      // Use the userType to determine navigation
      if (userType === "CustomerStaff") {
        dispatch(login(formData.username));
        navigate("/CustomerDetailess");
        toast.success("Login Successful");
      } else {
        console.error("Invalid userType");
        toast.error("Invalid user");
      }
    } catch (err) {
      console.error("Login Error :", err);
      toast.error("Invalid credentials");
    }
  };

  const handleMasterLogin = async (e, userType) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/api/login`, formData);
      // console.log(response.data.message);

      const { userType } = response.data.user;

      // Use the userType to determine navigation
      if (userType === "Master") {
        dispatch(login(formData.username));
        navigate("/MasterTruckForm"); 
        toast.success("Login Successful");

      } else {
        console.error("Invalid userType");
        toast.error("Invalid Master");
      }
    } catch (err) {
      console.error("Login Error :", err);
      toast.error("Invalid credentials");
    }
  };

  const handleToggleLogin = () => {
    setLoginType(loginType === "truck" ? "customer" : "truck");
  };

  const getRandomBackgroundImage = () => {
    const images = [loginbackimg1];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  // Set background image when the component mounts
  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <BackButton />
      <ToastContainer />
      <div
        className="body-reg"
        // style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container-reg">
          <div className="content">
            <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
              <div key="front">
                <div className="FlipFormcontainer">
                  <div className="LogLogo">
                    <img src={TransmaBlack} alt="" />
                  </div>

                  <button
                    class="button"
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    <span class="box">
                      <span class="col">master</span> login
                    </span>
                  </button>
                </div>

                <StaffLogin
                  handleChange={handleChange}
                  handleLogin={handleLogin}
                  formData={formData}
                  CustomerhandleLogin={CustomerhandleLogin}
                  loginType={loginType}
                  setLoginType={setLoginType}
                  handleToggleLogin={handleToggleLogin}
                />
                <p className="ErrormessageLoginvik">{error}</p>
              </div>
              <div key="back">
                <div className="FlipFormcontainer">
                  <div className="LogLogo">
                    <img src={TransmaBlack} alt="" />
                  </div>

                  <button
                    class="button"
                    onClick={() => setIsFlipped(!isFlipped)}
                  >
                    <span class="box">
                      <span class="col">staff</span> login
                    </span>
                  </button>
                </div>
                <div className="title">
                  <span class="col">Master</span> Login
                </div>

                <MasterLogin123
                  handleChange={handleChange}
                  formData={formData}
                  handleMasterLogin={(e) => handleMasterLogin(e, "Master")}
                />
                <p className="ErrormessageLoginvik">{error}</p>
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
            placeholder="Enter Master Id"
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

      {/* <div className="text-center">
        Don't have account?{" "}
        <Link
          to="/register"
          style={{
            color: "red",
            borderBottom: "2px solid red",
            paddingBottom: "1px",
          }}
        >
          Register here
        </Link>
      </div> */}
    </form>
  );
};

const Login123 = ({ handleChange, formData, handleLogin }) => {
  return (
    <>
      <div>
        <div className="title">
          <span class="col">Truck Staff</span> Login
        </div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="user-details log-user-details">
          <div className="input-box">
            <span className="details">Username</span>
            <input
              type="text"
              placeholder="Enter Truck Staff Id"
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
        {/* <div className="text-center">
          Don't have account?{" "}
          <Link
            to="/register"
            style={{
              color: "red",
              borderBottom: "2px solid red",
              paddingBottom: "1px",
            }}
          >
            Register here
          </Link>
        </div> */}
      </form>
    </>
  );
};

const StaffLogin = ({
  handleChange,
  handleLogin,
  formData,
  CustomerhandleLogin,
  loginType,
  setLoginType,
  handleToggleLogin,
}) => {
  return (
    <>
      <div className="FlipFormcontainerradio">
        <div className="radio-inputs">
          <label class="radio">
            <input
              type="radio"
              name="example-radio"
              value="truck"
              checked={loginType === "truck"}
              onChange={() => setLoginType("truck")}
            />
            <span class="name"> Truck Staff Login</span>
          </label>
          <label class="radio">
            <input
              type="radio"
              name="example-radio"
              value="customer"
              checked={loginType === "customer"}
              onChange={() => setLoginType("customer")}
            />
            <span class="name"> Customer Staff Login</span>
          </label>
        </div>
      </div>

      {loginType === "truck" && (
        <Login123
          handleChange={handleChange}
          formData={formData}
          handleLogin={handleLogin}
        />
      )}
      {loginType === "customer" && (
        <CustomerLogin123
          handleChange={handleChange}
          formData={formData}
          CustomerhandleLogin={CustomerhandleLogin}
        />
      )}
    </>
  );
};

// const StaffLogin = ({
//   handleChange,
//   handleLogin,
//   formData,
//   CustomerhandleLogin,
//   loginType,
//   setLoginType,
// }) => {
//   return (
//     <>
//       <div className="FlipFormcontainerradio">
//         <button
//         id="animated-button"
//           className={loginType === "truck" ? "active" : ""}
//           onClick={() => setLoginType("truck")}
//         >

//         </button>
//         <button
//          id="animated-button"
//           className={loginType === "customer" ? "active" : ""}
//           onClick={() => setLoginType("customer")}
//         >

//         </button>
//       </div>

//       {loginType === "truck" && (
//         <Login123
//           handleChange={handleChange}
//           formData={formData}
//           handleLogin={handleLogin}
//         />
//       )}
//       {loginType === "customer" && (
//         <CustomerLogin123
//           handleChange={handleChange}
//           formData={formData}
//           CustomerhandleLogin={CustomerhandleLogin}
//         />
//       )}
//     </>
//   );
// };

const CustomerLogin123 = ({ handleChange, formData, CustomerhandleLogin }) => {
  return (
    <>
      <div>
        <div className="title">
          <span class="col">Customer Staff</span> Login
        </div>
      </div>
      <form onSubmit={CustomerhandleLogin}>
        <div className="user-details log-user-details">
          <div className="input-box">
            <span className="details">Username</span>
            <input
              type="text"
              placeholder="Enter Customer Staff Id"
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
        {/* <div className="text-center">
          Don't have account?{" "}
          <Link
            to="/register"
            style={{
              color: "red",
              borderBottom: "2px solid red",
              paddingBottom: "1px",
            }}
          >
            Register here
          </Link>
        </div> */}
      </form>
    </>
  );
};

export default MasterLogin;
