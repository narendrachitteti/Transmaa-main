import React from "react";
import { IoArrowBackCircle } from "react-icons/io5";
const BackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <button onClick={goBack} className="float-left-top-backButton">
      <p class="button">
        <IoArrowBackCircle className="icon" /> Back
      </p>
    </button>
  );
};

export default BackButton;
