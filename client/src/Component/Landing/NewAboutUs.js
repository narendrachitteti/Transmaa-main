import React from "react";
import NavBar from "./Landingnavbar/LandingNavbar.js";
import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "./functions/AnimationTitles";
import Footer from "./Footer.js";
import Landingsidebar from "./Landingnavbar/Landingsidebar.js";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import Developers from "./Developers.js";
import Subscribe from "./Subscribe.js";
import Partners from "./Partners.js";

const NewAboutUs = () => {
  return (
    <div className="Landingsidebarpage">
      <div className="body-opening">
        <NavBar />
        <h1 style={{ textAlign: "center", color: "white" }}>About Us</h1>
        <div className="about">
          <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
            <motion.div
              initial={{ x: -200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AnimationTitles title="What is TranSmaa?" className="title" />
              <p className="gray-50 mb-5">
                Transmaa specializes in a wide range of transportation services
                and offers bespoke solutions to meet the different demands of
                its clients. Transmaa offers itself as a partner who understands
                the complexities of the supply chain, from guaranteeing timely
                and secure transportation of goods to developing tailored
                logistics solutions.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="d-flex flex-column"
            >
              <div className="d-flex">
                <div>
                  <img
                    src={require("../../images/Mumbai.jpeg")}
                    className="p-0 me-2 img"
                    alt="img"
                  />
                </div>
                <div>
                  <img
                    src={require("../../images/Banglore.jpeg")}
                    className="p-0 img"
                    alt="img"
                  />
                </div>
              </div>
              <div className="d-flex">
                <div>
                  <img
                    src={require("../../images/Manglore.jpeg")}
                    className="p-0 me-2 img"
                    alt="img"
                  />
                </div>
                <div>
                  <img
                    src={require("../../images/Mysore.jpeg")}
                    className="p-0 img"
                    alt="img"
                  />
                </div>
              </div>
            </motion.div>
          </Container>
        </div>
        <h1 style={{ textAlign: "center", color: "orange" }}>
          Company Overview
        </h1>
        <div className="abouttext">
          <div>
            <img
              src="https://img.freepik.com/free-photo/truck-with-white-trailer-that-says-scania-side_123827-23486.jpg?size=626&ext=jpg&ga=GA1.1.1108439072.1703323631&semt=sph"
              alt=""
            />

            <p>
            Transmaa, founded in 1990, is a dynamic and innovative operator in
            the transportation and logistics sector .All transport names
            included as Sudha Groups . Now we had updated As Transmaa . And we
            are adding extra benefits for the transporters like loads insurance
            diesels vechicle buy and sale and finance .
            </p>
            <p>
              Transmaa, a creative force in the logistics sector, is leading the
              way in transportation service innovation. Transmaa, founded with a
              clear purpose to improve the transportation industry, quickly
              establishes itself as a reliable and efficient partner for
              businesses seeking seamless freight solutions.
            </p>
            <p>
              Transmaa specializes in a wide range of transportation services
              and offers bespoke solutions to meet the different demands of its
              clients.
            </p>
          </div>

          <div className="abouttext">
            <div>
              <p>
                Transmaa’s culture is based on a commitment to innovation,
                client happiness, and sustainability, which positions it as a
                key player in the evolving environment of truck logistics.
                Transmaa intends to make a long-term impact on the
                transportation business, in line with its goal and vision.
              </p>
              <p>
                In addition to its innovative strategy, Transmaa’s management
                highlights the importance of warehousing as a critical component
                in optimizing freight and logistics operations.Transmaa offers
                itself as a partner who understands the complexities of the
                supply chain, from guaranteeing timely and secure transportation
                of goods to developing tailored logistics solutions.
              </p>

              <p>
                {" "}
                In conclusion, Transmaa, guided by its goal and vision, managed
                by proactive management, and using new warehousing techniques,
                is well-positioned to alter the landscape of transportation,
                freight, and logistics with a focus on excellence and
                sustainability.
              </p>

              <img
                src="https://img.freepik.com/free-photo/container-truck-ship-port-ai-generated-image_511042-612.jpg?size=626&ext=jpg&ga=GA1.1.1108439072.1703323631&semt=sph"
                alt=""
              />
            </div>
          </div>
        </div>
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

        {/* <Partners /> */}

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

        {/* <Developers /> */}

        <Footer />
      </div>
      <div>
        <Landingsidebar />
      </div>
    </div>
  );
};

export default NewAboutUs;
