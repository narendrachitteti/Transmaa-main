//this code for the Drug Master
import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import LoginForm from "./LoginForm.js";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import ReactJsPagination from "react-js-pagination";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import { BASE_URL } from "../../Helper/Helper.js";
import { MdOutlineRestore } from "react-icons/md";

import { IoArrowBackCircle } from "react-icons/io5";

import MasterNavbar from "../Master/MasterNavbar.js";

const DeleteLoginDetails = () => {
  const [customerServicesCus, setcustomerServicesCus] = useState([]);
  const [selectedServiceCus, setselectedServiceCus] = useState(null);
  const [isAddPopupOpenCus, setAddPopupOpenCus] = useState(false);
  const [searchTextCus, setsearchTextCus] = useState("");
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const [confirmed, setConfirmed] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [confirmedres, setConfirmedres] = useState(false);


  useEffect(() => {
    fetchcustomerServicesCus();
  }, []);

  const fetchcustomerServicesCus = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/delregister`);
      setcustomerServicesCus(response.data);
    } catch (error) {
      console.error("Error fetching User Details:", error);
    }
  };

  const handleEditCus = (service) => {
    setselectedServiceCus(service);
  };

  const handleAddCus = () => {
    setselectedServiceCus(null);
    setAddPopupOpenCus(true);
  };

  const handleAddCusOrUpdate = async (formData) => {
    try {
      if (selectedServiceCus) {
        await axios.put(
          `${BASE_URL}/api/delregister/${selectedServiceCus._id}`,
          formData
        );
      } else {
        await axios.post(`${BASE_URL}/api/delregister/`, formData);
      }
      fetchcustomerServicesCus();
      setselectedServiceCus(null);
      setAddPopupOpenCus(false);
    } catch (error) {
      console.error("Error adding/updating User Details:", error);
    }
  };

  const handlesearchTextCusChange = (newValue) => {
    setsearchTextCus(newValue);
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const calculateSerialNumber = (index) => {
    return index + 1 + (activePage - 1) * itemsPerPage;
  };

  const filteredData = customerServicesCus.filter((item) => {
    return (
      (item.sno && item.sno.toString().includes(searchTextCus)) ||
      (item.fullName &&
        item.fullName.toLowerCase().includes(searchTextCus.toLowerCase())) ||
      (item.phoneNumber &&
        item.phoneNumber.toString().includes(searchTextCus)) ||
      (item.email &&
        item.email.toLowerCase().includes(searchTextCus.toLowerCase())) ||
      (item.username &&
        item.username.toLowerCase().includes(searchTextCus.toLowerCase())) ||
      (item.password && item.password.toString().includes(searchTextCus)) ||
      (item.userType &&
        item.userType.toLowerCase().includes(searchTextCus.toLowerCase()))
    );
  });

  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleCancelCus = () => {
    setselectedServiceCus(null);
    setAddPopupOpenCus(false);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleDeleteCus = (id) => {
    setDeleteItemId(id);
    setConfirmed(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (deleteItemId) {
        await axios.delete(`${BASE_URL}/api/delregister/${deleteItemId}`);
        fetchcustomerServicesCus();
      }
    } catch (error) {
      console.error("Error deleting User Details:", error);
    } finally {
      setDeleteItemId(null);
      setConfirmed(false);
    }
  };

  const handleShowDeleteConfirmation = () => {
    setConfirmed(true);
  };

  const handleCancelDelete = () => {
    setConfirmed(false);
    setselectedServiceCus(null);
  };


  const handleRestore = (id) => {
    setDeleteItemId(id);
    setConfirmedres(true);
  };

  const handleConfirmRestore = async () => {
    try {
      if (deleteItemId) {
        await axios.put(`${BASE_URL}/api/delrestore/${deleteItemId}`);
        fetchcustomerServicesCus();
      }
    } catch (error) {
      console.error("Error deleting User Details:", error);
    } finally {
      setDeleteItemId(null);
      setConfirmedres(false);
    }
  };

  const handleCancelRestore = () => {
    setConfirmedres(false);
    setcustomerServicesCus(null);
  };





  const goBack = () => {
    window.history.back();
  };

  const handleToggleActive = async (id, newActiveStatus) => {
    try {
      await axios.put(`${BASE_URL}/api/delregister/${id}`, {
        isActive: newActiveStatus,
      });
      fetchcustomerServicesCus(); // Refresh the list after update
    } catch (error) {
      console.error("Error toggling active status:", error);
    }
  };

  return (
    <>
      <MasterNavbar />
      <div className="lab-service-table-container_5">
        <div className="float-log-backButton">
          <button onClick={goBack} className="button">
            <IoArrowBackCircle className="icon" /> Back
          </button>
        </div>
        <h3 className="lab-ser-subheadding-arun5">Deleted User Details Management</h3>
        <div className="search-add_5">
          <div className="search-bar_5">
            <div className="search-input_5">
              <AiOutlineSearch className="search-icon_5" />
              <input
                type="text"
                placeholder="Search"
                value={searchTextCus}
                onChange={(e) => handlesearchTextCusChange(e.target.value)}
                className="input-field_1"
              />
            </div>
          </div>
           {/* <div className="add-button_5container">
            <Link to="/LoginDetails">
              <button className="add-button_5">
                <Link to="/LoginDetails">&larr; User Details </Link>
              </button>
            </Link>
          </div> */}
        </div>


        <table className="lab-service-table_5">
          <thead>
            <tr className="product-ooi">
              <th className="product-ooi">S.No</th>
              <th className="product-ooi">Full Name</th>

              <th className="product-ooi">Phone Number</th>
              <th className="product-ooi">Email</th>
              <th className="product-ooi">Department</th>
              <th className="product-ooi">User Id</th>
              <th className="product-ooi">Password</th>
              <th className="product-ooi">Active/InActive</th>
              <th className="product-ooi">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((service, index) => (
              <tr key={service._id}>
                <td>{calculateSerialNumber(index)}</td>
                <td>{service.fullName}</td>

                <td>{service.phoneNumber}</td>
                <td>{service.email}</td>

                <td
                  className={
                    service.userType === "Master" ? "mastervik" : "uservik"
                  }
                >
                  {service.userType}
                </td>
                <td
                  className={
                    service.userType === "Master" ? "mastervik" : "uservik"
                  }
                >
                  {service.username}
                </td>
                <td
                  className={
                    service.userType === "Master" ? "mastervik" : "uservik"
                  }
                >
                  {service.password}
                </td>
                <td className="toggle-switch-container">
                  {/* <input
                    type="checkbox"
                    id={`toggle-${service._id}`}
                    checked={service.isActive}
                    onChange={() =>
                      handleToggleActive(service._id, !service.isActive)
                    }
                    className="toggle-switch-checkbox"
                  />
                  <label
                    htmlFor={`toggle-${service._id}`}
                    className="toggle-switch-label"
                  >
                    <span className="toggle-switch-inner"></span>
                    <span className="toggle-switch-switch"></span>
                  </label> */}
                 {
                    service.isActive === true ? "Active" : "Inactive"
                  }
                </td>

                <td>
                  <div className="asd_dsfet005">
                    <button
                      className="edit-button_5"
                      onClick={() => handleRestore(service._id)}
                    >
                      <MdOutlineRestore />
                    </button>

                    {confirmedres && (
                        <div className="confirmation-dialog">
                          <p>Are you sure you want to Restore this item?</p>
                          <button
                            className="confirm"
                            onClick={handleCancelRestore}
                          >
                            Cancel
                          </button>
                          <button
                            className="cancel"
                            onClick={handleConfirmRestore}
                          >
                            Confirm
                          </button>
                        </div>
                      )}

                    <button
                      className="edit-button_5"
                      onClick={() => handleDeleteCus(service._id)}
                    >
                      &#128465;
                    </button>
                    {confirmed && (
                      <div className="confirmation-dialog">
                        <p>Are you sure you want to delete this item?</p>
                        <button className="cancel" onClick={handleCancelDelete}>
                          Cancel
                        </button>
                        <button
                          className="confirm"
                          onClick={handleConfirmDelete}
                        >
                          Confirm
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-container">
          <ReactJsPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={customerServicesCus.length}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
            prevPageText={
              <span className="custom-pagination-arrow">
                <KeyboardArrowLeft />
              </span>
            }
            nextPageText={
              <span className="custom-pagination-arrow">
                <KeyboardArrowRight />
              </span>
            }
            firstPageText={
              <span className="custom-pagination-arrow">
                <KeyboardDoubleArrowLeft />
              </span>
            }
            lastPageText={
              <span className="custom-pagination-arrow">
                <KeyboardDoubleArrowRight />
              </span>
            }
            activeClass="active-page"
          />
        </div>
        {/* <Popup
          open={selectedServiceCus !== null || isAddPopupOpenCus}
          onClose={handleCancelCus}
          closeOnDocumentClick
        >
          <LoginForm
            selectedService={selectedServiceCus}
            onSubmit={handleAddCusOrUpdate}
            onCancel={handleCancelCus}
          />
        </Popup> */}
      </div>
    </>
  );
};

export default DeleteLoginDetails;
