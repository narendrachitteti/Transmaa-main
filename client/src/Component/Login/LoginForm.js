import React, { useState, useEffect } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';

const LoginForm = ({ selectedService, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    sno: "",
    fullName: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (selectedService) {
      setFormData({
        sno: selectedService.sno,
        fullName: selectedService.fullName,
        username: selectedService.username,
        phoneNumber: selectedService.phoneNumber,
        email: selectedService.email,
        password: selectedService.password,
      });
    } else {
      setFormData({
        sno: "",
        fullName: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: "",
      });
    }
  }, [selectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Calculate Remaining Amount based on Total Amount and Paid Amount
    if (name === "totalamount" || name === "paidamount") {
      const totalAmount = parseFloat(formData.totalamount) || 0;
      const paidAmount = parseFloat(value) || 0;
      const remainingAmount = (totalAmount - paidAmount).toFixed(2);
      setFormData((prevData) => ({
        ...prevData,
        remainingamount: remainingAmount,
      }));
    }
  };
  const handleCancelCus = (e) => {
    e.preventDefault(); // Prevent default form submission
    onCancel();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/; // Regular expression for a 10-digit phone number

    if (!passwordRegex.test(formData.password)) {
      toast.error("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character");
      return;
    }
    if (!phoneRegex.test(formData.phoneNumber)) {
      toast.error("Please enter a valid phone number");
      return;
    }

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      onSubmit(formData);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <>
      <ToastContainer />

      <div className="userdeatailsform">
        <div class="Details-popupcon">
          <div class="title">Edit User Details</div>
          <div class="content">
            <form onSubmit={handleSubmit}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Full Name</span>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* <div class="input-box">
                  <span class="details">Username</span>
                  <input
                    type="text"
                    placeholder="Enter driver phno"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div> */}
                <div class="input-box">
                  <span class="details">Phone Number</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/, ""))
                    }
                    placeholder="Enter Phone no"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Email </span>
                  <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Password</span>
                  <input
                    type="text"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="button-con">
                <button class="button  " type="submit">
                  <span class="text">{selectedService ? "Update" : "Add"}</span>
                </button>

                <button
                  class="button "
                  type="submit"
                  onClick={handleCancelCus}
                >
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
