import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../Helper/Helper";
import { FaTruckFast } from "react-icons/fa6";
import { GiCancel } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import TimePicker1 from "../../Pages/TimePicker1"; // Import the TimePicker component
import { fetchAdminData } from "../../Helper/FetchHelper";
import { useDispatch, useSelector } from "react-redux";


const CustomerForm = ({ selectedServiceCus, onSubmit, onCancel, onDelete }) => {
  const [formData, setFormData] = useState({
    uniqueID: "",
    prefix: "",
    customername: "",
    customerphno: "",
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
    vehicalstatus:"",
  });

  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showNavbar, setShowNavbar] = useState(false);
  const [userDetails, setUserDetails] = useState("");


  useEffect(() => {
    // Function to fetch staff details
    const fetchDetails = async () => {
      
      if (user) {
        try {
          // Fetch staff details using the helper function
          const details = await fetchAdminData(user);

          // Set the details in the state
          setUserDetails(details);
        } catch (error) {
          console.error("Error fetching staff details:", error);
        }
      }
    };
    fetchDetails();
  }, [user]);





  useEffect(() => {
    if (selectedServiceCus) {
      setFormData({
        uniqueID: selectedServiceCus.uniqueID,
        prefix: selectedServiceCus.prefix,
        customername: selectedServiceCus.customername,
        customerphno: selectedServiceCus.customerphno,
        truckno: selectedServiceCus.truckno,
        date: selectedServiceCus.date,
        time: selectedServiceCus.time,
        fromaddress: selectedServiceCus.fromaddress,
        toaddress: selectedServiceCus.toaddress,
        totalamount: selectedServiceCus.totalamount,
        paidamount: selectedServiceCus.paidamount,
        commissionamount: selectedServiceCus.commissionamount,
        remainingamount: selectedServiceCus.remainingamount,
        paidstatus: selectedServiceCus.paidstatus,
        donebyid:selectedServiceCus.donebyid,
        donebyname:selectedServiceCus.donebyname,
        vehicalstatus:selectedServiceCus.vehicalstatus,

      });
    } else {
      setFormData({
        uniqueID: "",
        prefix: "",
        customername: "",
        customerphno: "",
        truckno: "",
        date: "",
        time: "",
        fromaddress: "",
        toaddress: "",
        totalamount: "",
        paidamount: "",
        // commissionamount: "",
        remainingamount: "",
        paidstatus: "",
        donebyid:"",
        donebyname:"",
        vehicalstatus:"",
      });
    }
  }, [selectedServiceCus]);

  const handleChangeCus = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Calculate Remaining Amount based on Total Amount, Paid Amount, and Commission Amount
    if (
      name === "totalamount" ||
      name === "paidamount" 
    ) {
      const totalAmount = parseInt(e.target.form.totalamount.value) || 0;
      const paidAmount = parseInt(e.target.form.paidamount.value) || 0;
      // const commissionAmount =
      //   parseInt(e.target.form.commissionamount.value) || 0;
      const remainingAmount = (
        totalAmount -
        paidAmount 
        // commissionAmount
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
      console.error("Error deleting Customer Details:", error);
    } finally {
      setDeleteConfirmation(false);
    }
  };
  const handleCancelCus = (e) => {
    e.preventDefault(); // Prevent default form submission
    onCancel();
  };

  const handleSubmitCus = async (e) => {
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
          <div class="title">Add Customer Details</div>
          <div class="content">
            <form onSubmit={handleSubmitCus}>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Prefix</span>
                  <select
                    name="prefix"
                    value={formData.prefix}
                    onChange={handleChangeCus}
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
                  <span class="details">Customer Name</span>
                  <input
                    type="text"
                    placeholder="Enter name"
                    name="customername"
                    value={formData.customername}
                    onChange={handleChangeCus}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Customer Ph.no</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/, ""))
                    }
                    placeholder="Enter customer phno"
                    name="customerphno"
                    value={formData.customerphno}
                    onChange={handleChangeCus}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Truck no</span>
                  <input
                    type="text"
                    placeholder="Enter truck no"
                    name="truckno"
                    value={formData.truckno}
                    onChange={handleChangeCus}
                    required
                  />
                </div>

                <div class="input-box">
                  <span class="details">From</span>
                  <input
                    type="text"
                    placeholder="Enter from address"
                    name="fromaddress"
                    value={formData.fromaddress}
                    onChange={handleChangeCus}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">To</span>
                  <input
                    type="text"
                    placeholder="Enter to address"
                    name="toaddress"
                    value={formData.toaddress}
                    onChange={handleChangeCus}
                    required
                  />
                </div>
                <div class="input-box">
                  <span class="details">Date </span>
                  <input
                    type="date"
                    placeholder="Enter date"
                    name="date"
                    value={formData.date}
                    onChange={handleChangeCus}
                    required
                  />
                </div>

                <div class="input-box">
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
                </div>
                <div class="input-box">
                  <span class="details">Total amount</span>
                  <input
                    type="text"
                    pattern="[0-9]*"
                    required
                    name="totalamount"
                    value={formData.totalamount}
                    onChange={handleChangeCus}
                  />
                </div>
                <div class="input-box">
                  <span class="details">Paid amount</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    required
                    name="paidamount"
                    value={formData.paidamount}
                    onChange={handleChangeCus}
                  />
                </div>
                {/* <div class="input-box">
                  <span class="details">Commission amount</span>
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    required
                    name="commissionamount"
                    value={formData.commissionamount}
                    onChange={handleChangeCus}
                  />
                </div> */}
                <div class="input-box">
                  <span class="details">Remaining amount</span>
                  <input
                    // type="tel"
                    // pattern="[0-9]*"
                    name="remainingamount"
                    value={formData.remainingamount}
                    onChange={handleChangeCus}
                    readOnly
                  />
                </div>
                <div class="input-box">
                  <span class="details">Present status</span>
                  <input
                    type="text"
                    placeholder="Enter present status"
                    name="vehicalstatus"
                    value={formData.vehicalstatus}
                    onChange={handleChangeCus}
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
                        onChange={handleChangeCus}
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
                        onChange={handleChangeCus}
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
                <button class="button btn-123-abc" type="submit">
                  <span class="text">
                    {selectedServiceCus ? "Update" : "Add"}
                  </span>
                  <span class="marquee">
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
                {selectedServiceCus && (
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

export default CustomerForm;
