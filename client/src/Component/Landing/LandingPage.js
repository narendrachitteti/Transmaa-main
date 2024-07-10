import React, { useState } from "react";
import NavBar from "./Landingnavbar/LandingNavbar.js";
import Loading from "./Loading.js";
import Properties from "./Properties.js";
import AboutUs from "./AboutUs.js";
import Developers from "./Developers.js";
import Join from "./Join.js";
import Footer from "./Footer.js";
import Landingsidebar from "./Landingnavbar/Landingsidebar.js";
import '../../Styles/all.css'


const LandingPage = () => {
  return (
    <>
      <div className="Landingsidebarpage">
        <div className="body-opening ">
          <NavBar />
          <Loading />
          {/* <Partners/> */}
          <Properties />
          <AboutUs />
          <Join />
          <div className="headofideacon">
       <div className="headofidea" >
          <div>
            <img
              src={require("../../images/developers/headidea.png")}
              alt=""
              style={{ height: "225px", width: "225px" }}
            />
          </div>
          <div>
            <h1 style={{ color: "orange" }}>Sugam S.G</h1>
            <h3 style={{ color: "#c3c5ce" }}>Head Of Idea</h3>
          </div>
        </div>
       </div>
        
          {/* <Subscribe/> */}
          <Footer />
        </div>
        <div>
          <Landingsidebar />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
