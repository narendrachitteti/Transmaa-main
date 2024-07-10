import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaBars } from 'react-icons/fa';

import Transma1 from "../../images/Transma1.png";
import { BASE_URL } from "../../Helper/Helper";
import axios from "axios";
import Popup from "reactjs-popup";
import TransmaForm from "../Truck/TransmaForm";
import CustomerForm from "../Customer/CustomerForm";
import { fetchAdminData } from "../../Helper/FetchHelper";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/action/Action";
import { FaTruckFast } from "react-icons/fa6";


const MasterNavbar = () => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(false);
  const [userDetails, setUserDetails] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [selectedServiceCus, setselectedServiceCus] = useState(null);
  const [isAddPopupOpenCus, setAddPopupOpenCus] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleAdd = () => {
    setSelectedService(null);
    setAddPopupOpen(true);
  };

  // const usernameFromLocalStorage = localStorage.getItem("username");

  useEffect(() => {
    // Function to fetch staff details
    const fetchDetails = async () => {
      // console.log(isAuthenticated);
      // console.log("user", user);
      // Retrieve staffId from local storage
      // console.log("Fetching details for username:", usernameFromLocalStorage);
      if (user) {
        try {
          // Fetch staff details using the helper function
          const details = await fetchAdminData(user);

          // Set the details in the state
          setUserDetails(details);
          // console.log("Fetched details:", details);
        } catch (error) {
          console.error("Error fetching staff details:", error);
        }
      }
    };

    // Call the function when the component mounts
    fetchDetails();
  }, [user]);

  const handleLogout = () => {
    // localStorage.removeItem("username");
    navigate("/");
    dispatch(logout());
  };

  const handleAddOrUpdate = async (formData) => {
    try {
      if (selectedService) {
        await axios.put(
          `${BASE_URL}/api/Truck-Detail/${selectedService._id}`,
          formData
        );
      } else {
        await axios.post(`${BASE_URL}/api/Truck-Detail/`, formData);
      }

      setSelectedService(null);
      setAddPopupOpen(false);
    } catch (error) {
      console.error("Error adding/updating Truck Details:", error);
    }
  };

  const handleCancel = () => {
    setSelectedService(null);
    setAddPopupOpen(false);
  };

  const handleAddCus = () => {
    setselectedServiceCus(null);
    setAddPopupOpenCus(true);
  };

  const handleAddCusOrUpdate = async (formData) => {
    try {
      if (selectedServiceCus) {
        await axios.put(
          `${BASE_URL}/api/Customer-Detail/${selectedServiceCus._id}`,
          formData
        );
      } else {
        await axios.post(`${BASE_URL}/api/Customer-Detail/`, formData);
      }

      setselectedServiceCus(null);
      setAddPopupOpenCus(false);
    } catch (error) {
      console.error("Error adding/updating Customer Details:", error);
    }
  };

  const handleCancelCus = () => {
    setselectedServiceCus(null);
    setAddPopupOpenCus(false);
  };

  return (
    <nav className="navbar-navone">
      <div className="container-nav">
        <div className="logo">
          {/* <h1 class="text-white">
            Tran<span class="text-warning display-5 fw-bold">S</span>maa
          </h1> */}

          <img src={Transma1} alt="" />
        </div>

        <div className="menu-icon" onClick={handleShowNavbar} style={{color:"white",fontSize:"30px"}}>
        <FaBars/>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li className="Trdropdown">
              <button class="Trbutton">
                <span class="icon">
                  <FaTruckFast />
                </span>
                <span class="text">ADD</span>
              </button>

              <div className="Trbutton-dropdown">
              <Link to="/register">
              <button>
                <Link to="/register">
                 
                    <span>Add Staff</span>
                 
                </Link>
                </button>
                </Link>
                <Link to="/MasterTruckForm">
                <button onClick={handleAdd}>
                  <Link to="/MasterTruckForm">
                    <span> Add Truck Details</span>
                  </Link>
                </button>
                </Link>
                <Link to="/MasterCustomer">
                <button onClick={handleAddCus}>
                  <Link to="/MasterCustomer">
                    <span>Add Customer</span>
                  </Link>
                </button>
                 </Link>
              </div>
            </li>

            <li className="Trdropdown">
              <button type="button" className="Trcgprogile">
                <CgProfile className="Trcgprogile-icon" />
              </button>

              <div className="Trcgprogile-dropdown">
             
                <Link to="/MasterTruckForm">
                <button>
                  <Link to="/MasterTruckForm">
                    <span>
                      {userDetails && <a>Name : {userDetails.fullName}</a>}
                    </span>
                  </Link>
                </button>
                </Link>
                <Link to="/MasterTruckForm">
                <button>
                  <Link to="/MasterTruckForm">
                    <span>
                      {userDetails && <a>ID : {userDetails.username}</a>}
                    </span>
                  </Link>
                </button>
                </Link>

                <Link to="/LoginDetails">
                <button>
                <Link to="/LoginDetails">
                 
                 
                    <span>Login Details</span>
                 
                </Link>
                </button>
                </Link>
               
                <button onClick={handleLogout}>
                  <Link to="/#">
                    <span> Logout</span>
                  </Link>
                </button>
              </div>
            </li>
          </ul>
        </div>

        <Popup
          open={selectedService !== null || isAddPopupOpen}
          onClose={handleCancel}
          closeOnDocumentClick
        >
          <TransmaForm
            selectedService={selectedService}
            onSubmit={handleAddOrUpdate}
            onCancel={handleCancel}
          />
        </Popup>
        <Popup
          open={selectedServiceCus !== null || isAddPopupOpenCus}
          onClose={handleCancelCus}
          closeOnDocumentClick
        >
          <CustomerForm
            selectedServiceCus={selectedServiceCus}
            onSubmit={handleAddCusOrUpdate}
            onCancel={handleCancelCus}
          />
        </Popup>
      </div>
    </nav>
  );
};

export default MasterNavbar;
