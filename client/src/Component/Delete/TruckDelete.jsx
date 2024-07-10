import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import ReactJsPagination from "react-js-pagination";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import { BASE_URL } from "../../Helper/Helper";
import MasterNavbar from "../Master/MasterNavbar";
import { MdOutlineWifiCalling3 } from "react-icons/md";

import { MdOutlineRestore } from "react-icons/md";
import { IoArrowBackCircle } from "react-icons/io5";

const TruckDelete = () => {
  const [truckServices, setTruckServices] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedres, setConfirmedres] = useState(false);

  const [deleteItemId, setDeleteItemId] = useState(null);

  useEffect(() => {
    fetchTruckServices();
  }, []);

  const fetchTruckServices = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/Truck-Delete-Details`);
      setTruckServices(response.data);
    } catch (error) {
      console.error("Error fetching Truck Details:", error);
    }
  };

  const formatDate = (dateString) => {
    // Split the date string into parts
    const parts = dateString.split("-");

    // Rearrange the parts to get the desired format
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };
  const formatTime12Hours = (timeString) => {
    // Split the time string into hours and minutes
    const [hours, minutes] = timeString.split(":");

    // Convert hours to 12-hour format
    let formattedHours = parseInt(hours, 10);
    let meridiem = "AM";
    if (formattedHours > 12) {
      formattedHours -= 12;
      meridiem = "PM";
    } else if (formattedHours === 12) {
      meridiem = "PM";
    } else if (formattedHours === 0) {
      formattedHours = 12;
    }

    // Return the formatted time string
    return `${formattedHours}:${minutes} ${meridiem}`;
  };

  const handleSearchTextChange = (newValue) => {
    setSearchText(newValue);
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filterByField = (item, field, searchText) => {
    if (field === 'date') {
      const formattedDate = formatDate(item[field]);
      return formattedDate.includes(searchText);
    }
  
    if (field === 'time') {
      const formattedTime = formatTime12Hours(item[field]);
      return formattedTime.includes(searchText);
    }
  
    return item[field] && item[field].toString().toLowerCase().includes(searchText.toLowerCase());
  };
  
  
  const filteredData = truckServices.filter((item) => {
    return (
      filterByField(item, 'uniqueID', searchText) ||
      filterByField(item, 'prefix', searchText) ||
      filterByField(item, 'truckdrivername', searchText) ||
      filterByField(item, 'driverphno', searchText) ||
      filterByField(item, 'truckno', searchText) ||
      filterByField(item, 'date', searchText) ||
      filterByField(item, 'time', searchText) ||
      filterByField(item, 'fromaddress', searchText) ||
      filterByField(item, 'toaddress', searchText) ||
      filterByField(item, 'totalamount', searchText) ||
      filterByField(item, 'paidamount', searchText) ||
      filterByField(item, 'commissionamount', searchText) ||
      filterByField(item, 'remainingamount', searchText) ||
      filterByField(item, 'paidstatus', searchText)||
      filterByField(item, "donebyid", searchText)||
      filterByField(item, "donebyname", searchText)

    );
  });

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleDelete = (id) => {
    setDeleteItemId(id);
    setConfirmed(true);
  };

  const handleConfirmDelete = async () => {
    try {
      if (deleteItemId) {
        await axios.delete(`${BASE_URL}/api/Truck-Delete/${deleteItemId}`);
        fetchTruckServices();
      }
    } catch (error) {
      console.error("Error deleting User Details:", error);
    } finally {
      setDeleteItemId(null);
      setConfirmed(false);
    }
  };

  const handleCancelDelete = () => {
    setConfirmed(false);
  };

  const handleRestore = (id) => {
    setDeleteItemId(id);
    setConfirmedres(true);
  };

  const handleConfirmRestore = async () => {
    try {
      if (deleteItemId) {
        await axios.put(`${BASE_URL}/api/Truck-Restore/${deleteItemId}`);
        fetchTruckServices();
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
  };

  return (
    <>
      <MasterNavbar />

      <div className="lab-service-table-container_5">
        <Link to="/MasterTruckForm">
          <button className="backbuttonvik">
            <p class="button">
              <IoArrowBackCircle className="icon" /> Back
            </p>
          </button>
        </Link>
        <h2 className="lab-ser-subheadding-arun5">Deleted Truck Details</h2>
        <br></br>
          
        <div></div>
        <div className="search-add_5">
          <div className="search-bar_5">
            <div className="search-input_5">
              <AiOutlineSearch className="search-icon_5" />
              <input
                type="text"
                placeholder="Search"
                value={searchText}
                onChange={(e) => handleSearchTextChange(e.target.value)}
                className="input-field_1"
              />
            </div>
          </div>

          <div className="add-button_5container">
          <Link to="/deleteusers">
              <button className="add-button_5">
                <Link to="/deleteusers">Deleted Users  </Link>
              </button>
            </Link>
            <Link to="/CustomerDelete">
              <button className="add-button_5">
                <Link to="/CustomerDelete"> Deleted Customer</Link>
              </button>
            </Link>
            <Link to="/TruckDelete">
              <button className="add-button_5">
                <Link to="/TruckDelete"> Deleted Truck </Link>
              </button>
            </Link>
          </div>
        </div>
        <table className="lab-service-table_5">
          <thead>
            <tr className="product-ooi">
              <th className="product-ooi">S.No</th>
              <th className="product-ooi">Driver Name</th>
              <th className="product-ooi">Driver <MdOutlineWifiCalling3 /> </th>
              <th className="product-ooi">Truck No</th>
              <th className="product-ooi">Date</th>
              <th className="product-ooi">Time</th>
              <th className="product-ooi">From </th>
              <th className="product-ooi">To </th>
              <th className="product-ooi">Total</th>
              <th className="product-ooi">Paid</th>
              <th className="product-ooi">Commission</th>
              <th className="product-ooi">Remaining</th>
              <th className="product-ooi">Present Status</th>

              <th className="product-ooi">Done By</th>
              <th className="product-ooi">Paid Status</th>
              <th className="product-ooi">Actions</th>
            </tr>
          </thead>
          <tbody>
          {filteredData.length === 0 ? (
      <tr>
        <td colSpan="22" style={{ textAlign: "center" ,color:"red"}}>
          No deleted data available.
        </td>
      </tr>
    ) : (
      filteredData
        .slice(indexOfFirstItem, indexOfLastItem)
        .map((service) => (
          <tr key={service._id}>
            <td>{service.uniqueID}</td>
                  <td>{service.prefix}{service.truckdrivername}</td>

                  <td>{service.driverphno}</td>
                  <td>{service.truckno}</td>
                  <td>{formatDate(service.date)}</td>
                  <td>{formatTime12Hours(service.time)}</td>

                  <td>{service.fromaddress}</td>
                  <td>{service.toaddress}</td>
                  <td className="totalamount">₹ {service.totalamount}</td>
                  <td className="paidamount" >₹ {service.paidamount}</td>
                  <td>₹ {service.commissionamount}</td>
                  <td className={service.remainingamount === "0" ? "paid" : "unpaid"}>
                    ₹ {service.remainingamount}
                  </td>
                  <td>{service.presentstatus}</td>

                  <td>{service.donebyid}<br/>{service.donebyname}</td>

                  <td
                    className={
                      service.remainingamount === "0" ? "paid" : "unpaid"
                    }
                  >
                 {service.remainingamount === "0" ? "paid" : "unpaid"}
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
                        onClick={() => handleDelete(service._id)}
                      >
                        &#128465;
                      </button>
                      {confirmed && (
                        <div className="confirmation-dialog">
                          <p>Are you sure you want to delete this item?</p>
                          <button
                            className="cancel"
                            onClick={handleCancelDelete}
                          >
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
              )))}
          </tbody>
        </table>
        <div className="pagination-container">
          <ReactJsPagination
            activePage={activePage}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={truckServices.length}
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
      </div>
    </>
  );
};

export default TruckDelete;
