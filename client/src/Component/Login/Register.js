import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helper/Helper";
import BackButton from "../Master/BackButton";
import { useNavigate } from "react-router-dom";
import truck2 from "../../images/truck2.jpg";
import loginbackimg1 from "../../images/loginbackimg1.jpg";
import TransmaBlack from "../../images/TransmaBlack.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const navigate = useNavigate();

  const [backgroundImage, setBackgroundImage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
    userType: "User", // Added userType field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "phoneNumber" && value.length > 10) {
      toast.error("Phone number should be 10 digits long");
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    if (!passwordRegex.test(formData.password)) {
      
      toast.error("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      
      toast.error("Please enter a valid email address");
      return;
    }
  if (formData.userType === "User") {
    
    toast.error("Please select a user type");
    return;
  }
  if (!formData.gender) {
    toast.error("Please select a gender");
    return;
  }
  try {
    const usernameExists = await axios.get(`${BASE_URL}/api/userget/${formData.username}`);
    if (usernameExists.data.exists) {
      toast.error("Username already exists. Please choose a different username.");
      return;
    }
  } catch (err) {
    console.error("Error checking username:", err);
    toast.error("An error occurred. Please try again.");
    return;
  }

    // console.log("Form Data:", formData);
    try {
      const response = await axios.post(`${BASE_URL}/api/register`, formData);
      console.log(response.data.message);
      
      toast.success("Registration successful!");
      setTimeout(() => {
        setRegistrationSuccess(true);
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error("Register Err :", err);
    }
  };

  const getRandomBackgroundImage = () => {
    const images = [loginbackimg1];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  useEffect(() => {
    setBackgroundImage(getRandomBackgroundImage());
  }, []); 

  return (
    <>
      <BackButton />
      <ToastContainer />
      <div
        className="body-reg"
      >
        <div class="container-reg">
          <div>
            <img
              src={TransmaBlack}  className="responsive-image"
              alt=""
            />
          </div>
          <div class="content" style={{ marginTop: "-40px" }}>
            <form onSubmit={handleSubmit}>
              <div class="user-details">
                <div class="title">Registration</div>

                <div class="input-box">
                  <span class="details">User Type</span>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    required
                  >
                    <option>Select Users</option>
                    <option value="TruckStaff">TruckStaff</option>
                    <option value="CustomerStaff">CustomerStaff</option>
                    <option value="Master">Master</option>
                  </select>
                </div>

                <div class="input-box">
                  <span class="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">User name</span>
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/, ""))
                    }
                    placeholder="Enter your number"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Password</span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Confirm Password</span>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    required
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="gender-details">
                <input
                  type="radio"
                  name="gender"
                  id="dot-1"
                  value="Male"
                  onChange={handleChange}
                  checked={formData.gender === "Male"}
                />
                <input
                  type="radio"
                  name="gender"
                  id="dot-2"
                  value="Female"
                  onChange={handleChange}
                  checked={formData.gender === "Female"}
                />
                <input
                  type="radio"
                  name="gender"
                  id="dot-3"
                  value="Prefer not to say"
                  onChange={handleChange}
                  checked={formData.gender === "Prefer not to say"}
                />
                <span class="gender-title">Gender</span>
                <div class="category">
                  <label for="dot-1">
                    <span class="dot one"></span>
                    <span class="gender">Male</span>
                  </label>
                  <label for="dot-2">
                    <span class="dot two"></span>
                    <span class="gender">Female</span>
                  </label>
                </div>
              </div>
              <div>
                <button className="TruckButton" type="submit" value="Register">
                  Register
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
                Already have account?{" "}
                <Link to="/login" style={{ color: "red",borderBottom:'2px solid red',paddingBottom:'1px' }}>
                  Login here
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
