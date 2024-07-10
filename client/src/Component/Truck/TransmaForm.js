import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../Helper/Helper";
import { FaTruckFast } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import TimePicker1 from "../../Pages/TimePicker1"; // Import the TimePicker component
import { fetchAdminData } from "../../Helper/FetchHelper";
import { useDispatch, useSelector } from "react-redux";

const TransmaForm = ({
  selectedService,
  onSubmit,
  onCancel,
  onDelete,
  onRefresh,
}) => {
  const [formData, setFormData] = useState({
    uniqueID: "",
    truckdrivername: "",
    driverphno: "",
    truckno: "",
    date: "",
    time: "",
    fromaddress: "",
    toaddress: "",
    totalamount: "",
    paidamount: "",
    commissionamount: "",
    remainingamount: "",
    paidstatus: "",
    donebyid:"",
    donebyname:"",
    presentstatus:"",
  });
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(false);
  const [userDetails, setUserDetails] = useState("");

  
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
    fetchDetails();
  }, [user]);



  useEffect(() => {
    if (selectedService) {
      setFormData({
        uniqueID: selectedService.uniqueID,
        truckdrivername: selectedService.truckdrivername,
        driverphno: selectedService.driverphno,
        truckno: selectedService.truckno,
        date: selectedService.date,
        time: selectedService.time,
        fromaddress: selectedService.fromaddress,
        toaddress: selectedService.toaddress,
        totalamount: selectedService.totalamount,
        paidamount: selectedService.paidamount,
        commissionamount: selectedService.commissionamount,
        remainingamount: selectedService.remainingamount,
        paidstatus: selectedService.paidstatus,
        donebyid:selectedService.donebyid,
        donebyname:selectedService.donebyname,
        presentstatus:selectedService.presentstatus,
      });
    } else {
      setFormData({
        uniqueID: "",
        truckdrivername: "",
        driverphno: "",
        truckno: "",
        date: "",
        time: "",
        fromaddress: "",
        toaddress: "",
        totalamount: "",
        paidamount: "",
        commissionamount: "",
        remainingamount: "",
        paidstatus: "",
        donebyid:"",
        donebyname:"",
        presentstatus:"",
      });
    }
  }, [selectedService]);

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));

  // Calculate Remaining Amount based on Total Amount, Paid Amount, and Commission Amount
  if (
    name === "totalamount" ||
    name === "paidamount" ||
    name === "commissionamount"
  ) {
    const totalAmount = parseInt(e.target.form.totalamount.value) || 0;
    const paidAmount = parseInt(e.target.form.paidamount.value) || 0;
    const commissionAmount =
      parseInt(e.target.form.commissionamount.value) || 0;
    const remainingAmount = (
      totalAmount -
      paidAmount -
      commissionAmount
    ).toFixed(0);
    setFormData((prevData) => ({
      ...prevData,
      remainingamount: remainingAmount,
    }));
  }

  // Set paidstatus based on radio button selection
  if (name === "paidstatus") {
    setFormData((prevData) => ({ ...prevData, paidstatus: value }));
  }
  
  // Update donebyid and donebyname if user changes it
 
};


  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  const handleDeleteConfirmation = () => {
    setDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
  };

  const handleConfirmDelete = async () => {
    try {
      await onDelete();
    } catch (error) {
      console.error("Error deleting Truck Details:", error);
    } finally {
      setDeleteConfirmation(false);
    }
  };
  const handleCancelCus = (e) => {
    e.preventDefault(); // Prevent default form submission
    onCancel();
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!formData.uniqueID) {
        // Fetch the latest count from the server
        fetch(`${BASE_URL}/api/getLatestuniqueID`)
          .then((response) => response.json())
          .then((data) => {
            const newCount = parseInt(data.latestuniqueID) + 1;
            setFormData((prevData) => ({
              ...prevData,
              uniqueID: newCount.toString(),
            }));
          })
          .catch((error) =>
            console.error("Error fetching latest S.No:", error)
          );
      }
  
      // Set default values for donebyid and donebyname if they are empty
      const updatedFormData = {
        ...formData,
        donebyid: formData.donebyid || userDetails.username,
        donebyname: formData.donebyname || userDetails.fullName,
      };
  
      await onSubmit(updatedFormData);
      window.location.reload();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  



  return (
    <>
      <div className="Main-Details-popupcon">
        <div class="Details-popupcon">
          <h2>Add Truck Details</h2>
          <div class="content">
            <form onSubmit={handleSubmit}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Prefix</span>
                  <select
                    name="prefix"
                    value={formData.prefix}
                    onChange={handleChange}
                    required
                  >
                    <option>Select</option>
                    <option value="Mr.">Mr</option>
                    <option value="Mrs.">Mrs</option>
                    <option value="Miss.">Miss</option>
                    <option value="Others.">Others</option>
                  </select>
                </div>
                <div class="input-box">
                  <span class="details">Truck Driver Name</span>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="truckdrivername"
                    value={formData.truckdrivername}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">DL.no</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/, ""))
                    }
                    placeholder="Enter DL no"
                    name="driverphno"
                    value={formData.driverphno}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Driver Ph.no</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/, ""))
                    }
                    placeholder="Enter driver phno"
                    name="driverphno"
                    value={formData.driverphno}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Alternative Ph.no</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/, ""))
                    }
                    placeholder="Alternative phno"
                    name="driverphno"
                    value={formData.driverphno}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">DL Photo</span>
                  <input
                    type="file"
                    pattern="[0-9]*"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/, ""))
                    }
                    placeholder="upload DL photo"
                    name="driverphno"
                    value={formData.driverphno}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Vehicle No</span>
                  <input
                    type="text"
                    placeholder="Enter vehicle no"
                    name="truckno"
                    value={formData.truckno}
                    onChange={handleChange}
                    required
                  />
                </div>
{/* 
                <div class="input-box">
                  <span class="details">From</span>
                  <input
                    type="text"
                    placeholder="Enter from address"
                    name="fromaddress"
                    value={formData.fromaddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                 */}
                {/* <div class="input-box">
                  <span class="details">Date </span>
                  <input
                    type="date"
                    placeholder="Enter date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div> */}
                {/* <div class="input-box">
                  <span class="details">Time</span>
                  <TimePicker1
                    value={formData.time}
                    onChange={(value) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        time: value,
                      }))
                    }
                  />
                </div> */}
                <div class="input-box">
                  <span class="details">Starting Kms</span>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    onInput={(e) => (e.target.value = e.target.value)}
                    required
                    name="totalamount"
                    value={formData.totalamount}
                    onChange={handleChange}
                  />
                </div>
                <div class="input-box">
                  <span class="details">Started location</span>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    onInput={(e) => (e.target.value = e.target.value)}
                    required
                    name="totalamount"
                    value={formData.totalamount}
                    onChange={handleChange}
                  />
                </div>
                <div class="input-box">
                  <span class="details">End location</span>
                  <input
                    type="text"
                    placeholder="Enter to address"
                    name="toaddress"
                    value={formData.toaddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Paid amount</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    onInput={(e) => (e.target.value = e.target.value)}
                    required
                    name="paidamount"
                    value={formData.paidamount}
                    onChange={handleChange}
                  />
                </div>
                <div class="input-box">
                  <span class="details">Commission amount</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    onInput={(e) => (e.target.value = e.target.value)}
                    required
                    name="commissionamount"
                    value={formData.commissionamount}
                    onChange={handleChange}
                  />
                </div>
                <div class="input-box">
                  <span class="details">Remaining amount</span>
                  <input
                    onInput={(e) => (e.target.value = e.target.value)}
                    name="remainingamount"
                    value={formData.remainingamount}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
                <div class="input-box">
                  <span class="details">Present status</span>
                  <input
                    type="text"
                    placeholder="Enter present status"
                    name="presentstatus"
                    value={formData.presentstatus}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* <div class="input-box">
                  <span class="details">Paid Status</span>
                  <div class="radio-button-container">
                    <div class="radio-button">
                      <input
                        type="radio"
                        class="radio-button__input"
                        id="radio1"
                        name="paidstatus"
                        value="Paid"
                        onChange={handleChange}
                        checked={formData.paidstatus === "Paid"}
                      />
                      <label class="radio-button__label" for="radio1">
                        <span class="radio-button__custom"></span>
                        Paid
                      </label>
                    </div>
                    <div class="radio-button">
                      <input
                        type="radio"
                        class="radio-button__input"
                        id="radio2"
                        name="paidstatus"
                        value="Unpaid"
                        onChange={handleChange}
                        checked={formData.paidstatus === "Unpaid"}
                      />
                      <label class="radio-button__label" for="radio2">
                        <span class="radio-button__custom"></span>
                        Unpaid
                      </label>
                    </div>
                  </div>
                </div> */}
              </div>
              <div className="button-con">
                {/* <button className="button" type="submit">
              {selectedService ? 'Update' : 'Add'}
              </button> */}

                <button class="button btn-123-abc" type="submit">
                  <span class="text">{selectedService ? "Update" : "Add"}</span>
                  <span aria-hidden="" class="marquee">
                    <FaTruckFast />
                  </span>
                </button>

                <button
                  class="button buttoncd "
                  type="button"
                  onClick={handleCancelCus}
                >
                  <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                      <GiCancel />
                    </div>
                  </div>
                  <span>Cancel</span>
                </button>

                {selectedService && (
                  <>
                    <button
                      class="button  buttoncd"
                      type="button"
                      onClick={handleDeleteConfirmation}
                    >
                      <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                          <MdDelete />
                        </div>
                      </div>
                      <span>Delete</span>
                    </button>

                    {deleteConfirmation && (
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
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransmaForm;
