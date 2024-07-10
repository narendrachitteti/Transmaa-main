import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBar from "./Landingnavbar/LandingNavbar.js";
import Footer from "./Footer.js";
import { FaArrowRight } from "react-icons/fa";
import Landingsidebar from "./Landingnavbar/Landingsidebar.js";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import insure from "../../images/Truckinsurance.png";
import load from "../../images/truckload1.avif";
import buysell from "../../images/truckbuysell.avif";
import fuel from "../../images/truckfuel.avif";
import finance from "../../images/truckfinance.avif";



const Services2 = () => {
  return (
    <div className="Landingsidebarpage">
      <div className="body-opening">
        <NavBar />

        <h1 style={{ textAlign: "center", color: "white" }}>Our Services</h1>

        <div>
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <section class="container pt-3 mb-3">
            <div class="row mt-30">
              <div class="col-lg-4 col-sm-6 mb-30 pb-5">
              
                <div class="cardservice2">
                  <img
                  src={load}
                    alt=""
                  />
                  <div class="cardservice2__content">
                    <p class="cardservice2__description">
                      Transmaa is an expert in load management, making sure that
                      cargo transportation is a dependable and smooth operation.
                      Our wide range of services, which include logistical
                      planning, real-time tracking, and exact delivery,
                      Regardless of the complexity of the supply chain.
                    </p>
                  </div>
                </div>
                <h3 style={{color:'white'}}>1. Load</h3>
              </div>

              <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            

                <div class="cardservice2">
                  <img
                  src={buysell}       alt=""
                  />

                  <div class="cardservice2__content">
                    <p class="cardservice2__description">
                      Transmaa services specifically designed for the trucking
                      business are revolutionizing the buying and selling of
                      vehicles. Truck buyers and sellers can transact in an open
                      and effective market with our all-inclusive vehicle buying
                      and selling services. Transmaa makes it easy to interact
                      with people in a fair and competitive atmosphere.
                    </p>
                  </div>
                </div>
                <h3 style={{color:'white'}}>2. Vehicle Buy & Sell</h3>
              </div>
              <div class="col-lg-4 col-sm-6 mb-30 pb-5">
             

                <div class="cardservice2">
                  <img
src={fuel}                    alt=""
                  />

                  <div class="cardservice2__content">
                    <p class="cardservice2__description">
                      Discover Transmaa's innovative "Fuel Services," poised to
                      revolutionize transportation. Recognizing fuel's pivotal
                      role, we streamline procurement and expertly manage
                      expenses, enhancing our trusted logistics solutions.
                      Transmaa stands as your reliable partner.
                    </p>
                  </div>
                </div>
                <h3 style={{color:'white'}}>3. Fuel</h3>
              </div>

              <div class="col-lg-4 col-sm-6 mb-30 pb-5">
            
                <div class="cardservice2">
                  <img src={insure} alt="" />

                  <div class="cardservice2__content">
                    <p class="cardservice2__description">
                      Transmaa takes delight in providing a complete range of
                      insurance services to meet every need of the
                      transportation business. whether they are individual
                      vehicles or a fleet. With an emphasis on risk reduction,
                      our insurance solutions give you peace of mind by covering.
                    </p>
                  </div>
                </div>
                <h3 style={{color:'white'}}>4. Insurance</h3>

              </div>

              <div class="col-lg-4 col-sm-6 mb-30 pb-5">
             

                <div class="cardservice2">
                  <img
                  src={finance}
                    alt=""
                  />

                  <div class="cardservice2__content">
                    <p class="cardservice2__description">
                      Transmaa is your trusted financial services partner,
                      providing a variety of options to help you navigate your
                      financial path. Our Financial Planning Services offer
                      specialized methods to people and organizations to ensure
                      good financial health. Transmaa provides experienced
                      personal finance advice and complete investment solutions.
                     
                    </p>
                  </div>
                </div>
                <h3 style={{color:'white'}}>5. Finance</h3>
              </div>
            </div>
          </section>
        </div>

        <div style={{ textAlign: "center" }} className="aboutpagereasons">
          <h6 style={{ color: "#c3c5ce" }}>Why Choose Us</h6>
          <h2 style={{ color: "orange" }}>6 Reasons Why Choose</h2>

          <Row xs={1} md={2} lg={3} className="g-4">
            <Col>
              <Card>
                <MdOutlineAccessTime
                  style={{
                    color: "#e95d08",
                    fontSize: "3rem",
                    marginTop: "2rem",
                    marginLeft: "2rem",
                  }}
                />

                <Card.Body>
                  <h3>Real Time Tracking</h3>
                  <h6>
                    Experience excellence in real-time tracking with Transmaa,
                    ensuring precision and reliability in transportation,
                    logistics, and freight management.
                  </h6>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <FaDollarSign
                  style={{
                    color: "#e95d08",
                    fontSize: "3rem",
                    marginTop: "2rem",
                    marginLeft: "2rem",
                  }}
                />
                <Card.Body>
                  <h3>Transparent Pricing</h3>
                  <h6>
                    Transmaa's clear pricing will give you peace of mind. For
                    all of your logistics needs, there are clear-cut, reasonable
                    charges with no additional costs.
                  </h6>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <FaTruckFast
                  style={{
                    color: "#e95d08",
                    fontSize: "3rem",
                    marginTop: "2rem",
                    marginLeft: "2rem",
                  }}
                />
                <Card.Body>
                  <h3>On - Time Delivery</h3>
                  <h6>
                    Transmaa is dependable and effective, fulfilling deadlines
                    and going above and above in logistics solutions to
                    guarantee your goods arrive on time.
                  </h6>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <SlEarphonesAlt
                  style={{
                    color: "#e95d08",
                    fontSize: "3rem",
                    marginTop: "2rem",
                    marginLeft: "2rem",
                  }}
                />
                <Card.Body>
                  <h3>24/7 Online Support</h3>
                  <h6>
                    Transmaa's 24/7 online support provides immediate
                    assistance, providing seamless communication and outstanding
                    service in logistics solutions.
                  </h6>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <FaEarthAmericas
                  style={{
                    color: "#e95d08",
                    fontSize: "3rem",
                    marginTop: "2rem",
                    marginLeft: "2rem",
                  }}
                />
                <Card.Body>
                  <h3>Global Logistics Partner</h3>
                  <h6>
                    Transmaa, your global logistics partner, delivers excellence
                    in freight management worldwide, ensuring efficiency,
                    reliability, and seamless global connectivity.
                  </h6>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <FaShieldHalved
                  style={{
                    color: "#e95d08",
                    fontSize: "3rem",
                    marginTop: "2rem",
                    marginLeft: "2rem",
                  }}
                />
                <Card.Body>
                  <h3>Insurance & guarantee</h3>
                  <h6>
                    Transmaa provides insurance and guarantees for your peace of
                    mind, ensuring secure and reliable logistics solutions for
                    your shipments.With high Security
                  </h6>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        <Footer />
      </div>
      <div>
        <Landingsidebar />
      </div>
    </div>
  );
};

export default Services2;
