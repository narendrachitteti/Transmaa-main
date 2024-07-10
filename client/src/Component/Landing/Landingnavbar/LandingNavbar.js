import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Transma1 from "../../../images/Transma1.png";

function NavBar() {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };

  const redirectToCardSwiperPage = () => {
    navigate("/cardswiperlan");

    // After 15 seconds, navigate back to "/"
    setTimeout(() => {
      navigate("/");
    }, 9000);
  };
 
  return (
    <div>
      <Navbar expand="lg" className="py-3">
        <Container>
          <div className="d-flex align-items-center ">
            <div className="me-lg-5">
              <div className="Mainlogo"  onClick={redirectToCardSwiperPage} >
                <img src={Transma1} alt="" />
              </div>
            </div>
          </div>

          {/* <div className="d-flex align-items-center ">
            <Button
              onClick={toLogin}
              variant="primary"
              className="btn-primary d-none d-lg-inline-block"
            >
              Login &#8594;
            </Button>
          </div> */}
        </Container>
      </Navbar>
      {/* {showConfetti && (
        <ConfettiExplosion
          style={{ zIndex: 99099, position: "relative", left: "0", top: "0" }} // Set a high z-index here
          config={{
            force: 0.6,
            duration: 2500,
            particleCount: 80,
            width: 1000,
          }}
        />
      )} */}
    </div>
  );
}

export default NavBar;
