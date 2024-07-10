import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import truck2 from "../../../images/truck2.jpg";

import { FaInfoCircle, FaHome } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";

const Landingsidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onleave=()=>{
    setIsOpen(false);
  };
  const onenter=()=>{
    setIsOpen(true);
  }

  return (


    <div>
      <div className={`sidebar ${isOpen ? "sidebar--open" : ""}`    }    onMouseLeave={onleave}  onMouseEnter={onenter} >
        <div className="trigger"  >
          <Link to='/'>
          <div className="sidbarMainlogo">
            <img src={truck2} alt="" />
          </div> 
          </Link>
          <FontAwesomeIcon icon={isOpen ? '': faBars}  />
        </div>

        <Link to='/' className="sidebar-position">

<FaHome/>          
          <span>Home</span>
        </Link>

       

        <Link  to='/services' className="sidebar-position">
          <MdMiscellaneousServices />

          <span>Services</span>
        </Link>

        <Link  to='/Blog' className="sidebar-position">
          <SiBloglovin />

          <span>Blogs</span>
        </Link>

        <Link  to='/AboutUS' className="sidebar-position">
          <FaInfoCircle />

          <span>About Us</span>
        </Link>
        <Link to='/ContactUS' className="sidebar-position">
          <MdContactPhone />

          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default Landingsidebar;
