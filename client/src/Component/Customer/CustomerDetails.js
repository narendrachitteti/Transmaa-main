import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import { AiOutlineSearch } from "react-icons/ai";
import ReactJsPagination from "react-js-pagination";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeft from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRight from "@mui/icons-material/KeyboardDoubleArrowRight";
import { BASE_URL } from "../../Helper/Helper";
import { FaDownload } from "react-icons/fa6";
import TransmaBlack from "../../images/TransmaBlack.png";
import { IoLogoWhatsapp } from "react-icons/io";
import ReactWhatsapp from "react-whatsapp";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuView } from "react-icons/lu";
import CustomerNavbar from "./CustomerNavbar";
import { fetchAdminData } from "../../Helper/FetchHelper";
import { useDispatch, useSelector } from "react-redux";

const CustomerDetails = () => {
  const isAuthenticated = useSelector((state)=>state.isAuthenticated);
  const user = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState("");
  const [customerServicesCus, setcustomerServicesCus] = useState([]);
  const [searchTextCus, setsearchTextCus] = useState("");
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 5; 
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [showUploadPopup, setShowUploadPopup] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showUploadfilesPopup, setShowUploadfilesPopup] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const fetchcustomerServicesCus = async () => {
    try {
      
      const response = await axios.get(`${BASE_URL}/api/Customer-Detail`);
      setcustomerServicesCus(response.data);
    } catch (error) {
      console.error("Error fetching Customer Details:", error);
    }
  };

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

    // Call the function when the component mounts
    fetchDetails();
  }, [user]);

  const fetchUploadedFiles = async (uniqueID) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/upload/${uniqueID}`); // Update URL to include uniqueID
      setUploadedFiles(response.data.files);
    } catch (error) {
      console.error("Error fetching uploaded files:", error);
    }
  };

  useEffect(() => {
    fetchcustomerServicesCus();
    fetchUploadedFiles(selectedServiceId);
  }, []);

  useEffect(() => {
    if (showUploadfilesPopup && selectedServiceId) {
      fetchUploadedFiles(selectedServiceId);
    }
  }, [showUploadfilesPopup, selectedServiceId]);

  const formatDate = (dateString) => {
    const parts = dateString.split("-");

    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };

  const formatTime12Hours = (timeString) => {
    const [hours, minutes] = timeString.split(":");

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

    return `${formattedHours}:${minutes} ${meridiem}`;
  };

  const handlesearchTextCusChange = (newValue) => {
    setsearchTextCus(newValue);
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
  
  const filteredData = customerServicesCus.filter((item) => {
    return (
      item.donebyid === userDetails.username &&
      (filterByField(item, "uniqueID", searchTextCus) ||
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
        filterByField(item, "paidstatus", searchTextCus) ||
        filterByField(item, "donebyid", searchTextCus) ||
        filterByField(item, "donebyname", searchTextCus))
    );
  });
  
  const generateWhatsappMessage = (service) => {
    return `
      Customer Name: ${service.prefix}${service.customername}
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

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleDownloadPDF = (service) => {
    const pdf = new jsPDF();

    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");

    const imgWidth = 70;
    const imgHeight = 50;
    const imgX = pdf.internal.pageSize.getWidth() - imgWidth - 135; // Adjust X position if needed
    const imgY = 5;
    pdf.addImage(TransmaBlack, "PNG", imgX, imgY, imgWidth, imgHeight);

    const billingDateTime = new Date().toLocaleString();
    pdf.text(`Customer Details           Date : ${billingDateTime}`, 20, 45);
    pdf.rect(
      10,
      10,
      pdf.internal.pageSize.getWidth() - 20,
      pdf.internal.pageSize.getHeight() - 20,
      "S"
    );

    pdf.line(20, 55, 190, 55);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");

   
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

    let yPos = 65; 
    tableRows.forEach(([label, value]) => {
      pdf.text(label, 20, yPos);
      pdf.text(value, 80, yPos);
      yPos += 10; 
    });

    const signature = "Signature Or Stamp"; // Change to your desired signature text
    const signatureX = 150; // Adjust X position for signature
    const signatureY = yPos + 20; // Adjust Y position for signature
    pdf.text(signature, signatureX, signatureY);

    pdf.save(`customer_details_${service._id}`.pdf);
  };

  const openUploadPopup = (uniqueID) => {
    setSelectedServiceId(uniqueID);
    setShowUploadPopup(true);
  };

  const openUploadfilePopup = (uniqueID) => {
    setSelectedServiceId(uniqueID);
    setShowUploadfilesPopup(true);
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
      < CustomerNavbar />

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
            {/* <Link to="/CustomerDetailess">
              <button className="add-button_5">
                <Link to="/CustomerDetailess"> Customer Details</Link>
              </button>
            </Link>
            <Link to="/Truck">
              <button className="add-button_5">
                <Link to="/Truck">Truck Details</Link>
              </button>
            </Link> */}
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
              <th className="product-ooi">Total</th>
              <th className="product-ooi">Paid</th>
              {/* <th className="product-ooi">Commission</th> */}
              <th className="product-ooi">Remaining</th>
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
                        onClick={() => handleDownloadPDF(service)}
                      >
                        <FaDownload title="download" />
                      </button>

                      <ReactWhatsapp
                        number={service.customerphno}
                        message={generateWhatsappMessage(service)}
                        className="edit-button_5"
                        style={{
                          backgroundColor: "transparent",
                          border: "none",
                          color: "green",
                        }}
                      >
                        <IoLogoWhatsapp title="whats app" style={{ fontSize: "x-large" }} />
                      </ReactWhatsapp>

                      <button
                        className="edit-button_5"
                        onClick={() => openUploadPopup(service.uniqueID)}
                      >
                     <FaCloudUploadAlt  title="P.O.D upload"/>
                      </button>
                      {showUploadPopup && (
                        <div className="upload-dialogpopup">
                          <h2>Upload File </h2>
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
                      <button
                        className="edit-button_5"
                        onClick={() => openUploadfilePopup(service.uniqueID)}
                      >
                       <LuView  title="file view" />
                      </button>
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
      </div>
    </>
  );
};

export default CustomerDetails;
