import React, { useState, useEffect } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import CustomerForm from "../Customer/CustomerForm";
import { AiOutlineSearch } from "react-icons/ai";
import ReactJsPagination from "react-js-pagination";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import { BASE_URL } from "../../Helper/Helper";
import MasterNavbar from "./MasterNavbar";
import { FaDownload } from "react-icons/fa6";
import TransmaBlack from "../../images/TransmaBlack.png";
import { MdOutlineWifiCalling3 } from "react-icons/md";

const MasterCustomer = () => {
  //   console.log("hi" + BASE_URL)
  const [customerServicesCus, setcustomerServicesCus] = useState([]);
  const [selectedServiceCus, setselectedServiceCus] = useState(null);
  const [isAddPopupOpenCus, setAddPopupOpenCus] = useState(false);
  const [searchTextCus, setsearchTextCus] = useState("");
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5; // Number of items to display per page
  const [confirmed, setConfirmed] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showUploadfilesPopup, setShowUploadfilesPopup] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    // console.log("Before API call");
    fetchcustomerServicesCus();
    fetchUploadedFiles(selectedServiceId);
  }, []);

  const fetchcustomerServicesCus = async () => {
    try {
      // console.log("Fetching Customer Details"); 
      const response = await axios.get(`${BASE_URL}/api/Customer-Detail`);
      setcustomerServicesCus(response.data);
      // console.log(customerServicesCus);
    } catch (error) {
      console.error("Error fetching Customer Details:", error);
    }
  };

  const fetchUploadedFiles = async (uniqueID) => {
    // Change parameter name to uniqueID
    try {
      const response = await axios.get(`${BASE_URL}/api/upload/${uniqueID}`); // Update URL to include uniqueID
      setUploadedFiles(response.data.files);
      // console.log(response);
    } catch (error) {
      console.error("Error fetching uploaded files:", error);
    }
  };

  useEffect(() => {
    if (showUploadfilesPopup && selectedServiceId) {
      fetchUploadedFiles(selectedServiceId);
    }
  }, [showUploadfilesPopup, selectedServiceId]);

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
          `${BASE_URL}/api/Customer-Detail/${selectedServiceCus._id}`,
          formData
        );
      } else {
        await axios.post(`${BASE_URL}/api/Customer-Detail/`, formData);
      }
      fetchcustomerServicesCus();
      setselectedServiceCus(null);
      setAddPopupOpenCus(false);
    } catch (error) {
      console.error("Error adding/updating Customer Details:", error);
    }
  };

  const handlesearchTextCusChange = (newValue) => {
    setsearchTextCus(newValue);
  };

  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filterByField = (item, field, searchText) => {
    if (field === "date") {
      const formattedDate = formatDate(item[field]);
      return formattedDate.includes(searchText);
    }

    if (field === "time") {
      const formattedTime = formatTime12Hours(item[field]);
      return formattedTime.includes(searchText);
    }

    return (
      item[field] &&
      item[field].toString().toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const filteredData = customerServicesCus.filter((item) => {
    return (
      filterByField(item, "uniqueID", searchTextCus) ||
      filterByField(item, "customername", searchTextCus) ||
      filterByField(item, "customerphno", searchTextCus) ||
      filterByField(item, "truckno", searchTextCus) ||
      filterByField(item, "date", searchTextCus) ||
      filterByField(item, "time", searchTextCus) ||
      filterByField(item, "fromaddress", searchTextCus) ||
      filterByField(item, "toaddress", searchTextCus) ||
      filterByField(item, "totalamount", searchTextCus) ||
      filterByField(item, "paidamount", searchTextCus) ||
      filterByField(item, "remainingamount", searchTextCus) ||
      filterByField(item, "paidstatus", searchTextCus)
    );
  });

  const handleCancelCus = () => {
    setselectedServiceCus(null);
    setAddPopupOpenCus(false);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const generateWhatsappMessage = (service) => {
    return `
      Customer Name: ${service.customername}
      Customer Phone Number: ${service.customerphno}
      Truck Number: ${service.truckno}
      Date: ${service.date}
      Time: ${formatTime12Hours(service.time)}
      From Address: ${service.fromaddress}
      To Address: ${service.toaddress}
      Total Amount: ${service.totalamount}
      Paid Amount: ${service.paidamount}
      Remaining Amount: ${service.remainingamount}
      Paid Status: ${service.remainingamount === "0" ? "paid" : "unpaid"}
      Vehical Status:${service.vehicalstatus}
    `;
  };

  const handleDownloadPDF = (service) => {
    const pdf = new jsPDF();

    // Set font size and style
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");

    const imgWidth = 70;
    const imgHeight = 50;
    const imgX = pdf.internal.pageSize.getWidth() - imgWidth - 135; // Adjust X position if needed
    const imgY = 5; // Adjust Y position if needed
    pdf.addImage(TransmaBlack, "PNG", imgX, imgY, imgWidth, imgHeight);

    const billingDateTime = new Date().toLocaleString();
    pdf.text(
      `CustomerDetails Details          Date : ${billingDateTime}`,
      20,
      45
    );
    pdf.rect(
      10,
      10,
      pdf.internal.pageSize.getWidth() - 20,
      pdf.internal.pageSize.getHeight() - 20,
      "S"
    );

    pdf.line(20, 55, 190, 55); // Add a horizontal line under the billingDateTime text

    // Set font size and style for the table
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");

    // Create a table-like structure
    const tableRows = [
      ["Customer Name", service.customername],
      ["Customer Phone Number", service.customerphno],
      ["Truck Number", service.truckno],
      ["Date", service.date],
      ["Time",  formatTime12Hours(service.time)],
      ["From Address", service.fromaddress],
      ["To Address", service.toaddress],
      ["Total Amount", service.totalamount],
      ["Paid Amount", service.paidamount],
      ["Remaining Amount", service.remainingamount],
      ["Paid Status", service.remainingamount === "0" ? "paid" : "unpaid"],
    ];

    // Set the initial y position for the table
    let yPos = 65; // Adjust Y position based on image height and other content

    // Loop through rows and add them to the PDF
    tableRows.forEach(([label, value]) => {
      pdf.text(label, 20, yPos);
      pdf.text(value, 80, yPos);
      yPos += 10; // Increase y position for the next row
    });

    const signature = "Signature Or Stamp"; // Change to your desired signature text
    const signatureX = 150; // Adjust X position for signature
    const signatureY = yPos + 20; // Adjust Y position for signature
    pdf.text(signature, signatureX, signatureY);

    // Save the PDF
    pdf.save(`customer_details_${service._id}.pdf`);
  };

  const handleDeleteCus = async () => {
    // Your existing delete logic
    try {
      await axios.delete(
        `${BASE_URL}/api/Customer-Detail/${selectedServiceCus._id}`
      );
      fetchcustomerServicesCus();
    } catch (error) {
      console.error("Error deleting Customer Details:", error);
    }
  };


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setUploading(true);
      const fileformData = new FormData();
      fileformData.append("file", file);
      fileformData.append("uniqueID", selectedServiceId);
      // Post formData to server endpoint for file upload to different collection
      await axios.post(`${BASE_URL}/api/upload`, fileformData);
      setShowUploadPopup(false);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploading(false);
    }
  };

  return (
    <>
      <MasterNavbar />

      <div className="lab-service-table-container_5">
        <h2 className="lab-ser-subheadding-arun5">Customer Details</h2>
        <br></br>

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

          <div className="add-button_5container">
            <Link to="/MasterCustomer">
              <button className="add-button_5">
                <Link to="/MasterCustomer">Customer Details</Link>
              </button>
            </Link>
            <Link to="/MasterTruckForm">
              <button className="add-button_5">
                <Link to="/MasterTruckForm">Truck Details</Link>
              </button>
            </Link>
            <Link to="/TruckDelete">
              <button className="add-button_5">
                <Link to="/TruckDelete"> Deleted Details</Link>
              </button>
            </Link>
          </div>
        </div>
        <table className="lab-service-table_5">
          <thead>
            <tr className="product-ooi">
              <th className="product-ooi">S.No</th>
              <th className="product-ooi">Customer Name</th>
              <th className="product-ooi">
                Customer <MdOutlineWifiCalling3 />
              </th>
              <th className="product-ooi">Truck No</th>
              <th className="product-ooi">Date</th>
              <th className="product-ooi">Time</th>
              <th className="product-ooi">From </th>
              <th className="product-ooi">To </th>
              <th className="product-ooi">Total </th>
              <th className="product-ooi">Paid </th>
              {/* <th className="product-ooi">Commission </th> */}
              <th className="product-ooi">Remaining </th>
              <th className="product-ooi">Vehical Status </th>

              <th className="product-ooi">Done By</th>
              <th className="product-ooi">Status</th>
              <th className="product-ooi">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData
              .slice(indexOfFirstItem, indexOfLastItem)
              .map((service) => (
                <tr key={service._id}>
                  <td>{service.uniqueID}</td>
                  <td>
                    {service.prefix}
                    {service.customername}
                  </td>

                  <td>{service.customerphno}</td>
                  <td>{service.truckno}</td>
                  <td>{formatDate(service.date)}</td>
                  <td>{formatTime12Hours(service.time)}</td>
                  <td>{service.fromaddress}</td>
                  <td>{service.toaddress}</td>
                  <td className="totalamount">₹ {service.totalamount}</td>
                  <td className="paidamount">₹ {service.paidamount}</td>
                  {/* <td>₹ {service.commissionamount}</td> */}

                  <td className={service.remainingamount === "0" ? "paid" : "unpaid"}>
                    ₹ {service.remainingamount}
                  </td>
                  <td>{service.vehicalstatus}</td>

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
                        onClick={() => handleEditCus(service)}
                      >
                        Edit
                      </button>
                      <button
                        className="edit-button_5"
                        onClick={() => handleDownloadPDF(service)}
                      >
                        <FaDownload title="download" />
                      </button>
                      {/* <ReactWhatsapp
                        number={service.customerphno}
                        message={generateWhatsappMessage(service)}
                        className="edit-button_5"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "green",
                        }}
                      >
                        <IoLogoWhatsapp
                          title="whats app"
                          style={{ fontSize: "x-large" }}
                        />
                      </ReactWhatsapp> */}

                      {confirmed && (
                        <div className="confirmation-dialog">
                          <p>Are you sure you want to delete this item?</p>
                          <button
                            className="cancel"
                            onClick={() => setConfirmed(false)}
                          >
                            Cancel
                          </button>
                          <button
                            className="confirm"
                            onClick={() => handleDeleteCus(service._id)}
                          >
                            Confirm
                          </button>
                        </div>
                      )}
                      {/* <button
                        className="edit-button_5"
                        onClick={() => openUploadPopup(service.uniqueID)}
                      >
                        <FaCloudUploadAlt title="P.O.D upload" />
                      </button> */}
                      {showUploadPopup && (
                        <div className="upload-dialogpopup">
                          <h2>Upload File</h2>
                          <input
                            className="uploadfileinp"
                            type="file"
                            onChange={handleFileChange}
                          />
                          <div className="uploadfilebuttoncon">
                            <button
                              className="confirm"
                              onClick={handleUpload}
                              disabled={!file || uploading}
                            >
                              {uploading ? "Uploading..." : "Upload"}
                            </button>

                            <button
                              className="cancel"
                              onClick={() => setShowUploadPopup(false)}
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      )}
                      {/* <button
                        className="edit-button_5"
                        onClick={() => openUploadfilePopup(service.uniqueID)}
                      >
                        <LuView title="file view" />
                      </button> */}
                      {showUploadfilesPopup && (
                        <div className="upload-dialogpopup">
                          <h2>Uploaded Files</h2>
                          <span>{selectedServiceId}</span>
                          <ol>
                            {uploadedFiles.map((file, index) => (
                              <li key={index}>
                                <a
                                  href={`${BASE_URL}/api/download/${file.filename}`}
                                  download
                                >
                                  {file.filename}
                                </a>
                              </li>
                            ))}
                          </ol>
                          <div className="uploadfilebuttoncon">
                            <button
                              className="cancel"
                              onClick={() => setShowUploadfilesPopup(false)}
                            >
                              Cancel
                            </button>
                          </div>
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
        <Popup
          open={selectedServiceCus !== null || isAddPopupOpenCus}
          onClose={handleCancelCus}
          closeOnDocumentClick
        >
          <CustomerForm
            selectedServiceCus={selectedServiceCus}
            onSubmit={handleAddCusOrUpdate}
            onCancel={handleCancelCus}
            onDelete={handleDeleteCus}
          />
        </Popup>
      </div>
    </>
  );
};

export default MasterCustomer;
