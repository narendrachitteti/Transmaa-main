import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Transma1 from "../../images/Transma1.png";
import ScrollButton from "./ScrollButton";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  const emailAddress = "info@transmaa.com";

  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <>
      <footer>
        <Container>
          <div className="LandingFootercontainer">
            <div>
              <motion.div
                initial={{ y: 200 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="Mainlogo">
                  <img src={Transma1} alt="" />
                </div>
                <p className="gray-100">
                  Transmaa Logistics Services is a global supplier of transport
                  and logistics solutions.
                </p>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ y: 150 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h6> Quick Links</h6>
                  <ul className="p-0">
                    <a href="/">
                      {" "}
                      <li>Home</li>
                    </a>

                    <a href="/Services">
                      <li>Services</li>
                    </a>
                    <a href="/blog">
                      {" "}
                      <li>Blogs</li>
                    </a>
                    <a href="/AboutUS">
                      {" "}
                      <li>About</li>
                    </a>
                    <a href="/ContactUS">
                      {" "}
                      <li>Contact</li>
                    </a>
                  </ul>
                </div>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ y: 150 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h6> Our Services</h6>
                  <ul className="p-0">
                    <a href="/Services">
                      {" "}
                      <li>Load</li>
                    </a>
                    <a href="/Services">
                      {" "}
                      <li>Vehicle buy & sell</li>
                    </a>
                    <a href="/Services">
                      {" "}
                      <li>Insurance</li>
                    </a>
                    <a href="/Services">
                      {" "}
                      <li>Finance</li>
                    </a>
                    <a href="/Services">
                      {" "}
                      <li>Fuel</li>
                    </a>
                  </ul>
                </div>
              </motion.div>
            </div>
            {/* <div>
              <motion.div
                initial={{ y: 150 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h6>Industry Sectors</h6>
                  <ul className="p-0">
                    <a
                      href="https://modinatheme.com/transland/services/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <li>What We Do</li>
                    </a>

                    <a
                      href="https://modinatheme.com/transland/contact/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <li>Track & Trace</li>
                    </a>

                    <a
                      href="https://modinatheme.com/transland/team/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <li>Our Team</li>
                    </a>

                    <a
                      href="https://modinatheme.com/transland/contact/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <li>Contact us</li>
                    </a>
                  </ul>
                </div>
              </motion.div>
            </div> */}

            <div>
              <motion.div
                initial={{ y: 150 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div>
                  <h6>Get in touch</h6>
                  <ul className="p-0">
                    <li>
                      <span>⌖</span>
                      <span>
                        <a
                          href="https://maps.google.com/maps?q=278/14+parimala+nagara,+opp+SBI+Bank,+Arishinakunte,+kasaba+Hobli,+nelamangala+Taluk,+Bangalore+Rural-562123"
                          target="_blank"
                          style={{color:'white'}}
                        >
                          278/14 parimala nagara,opp SBI Bank,
                          Arishinakunte,kasaba Hobli, nelamangala Taluk,
                          Bangalore Rural-562123
                        </a>
                      </span>
                    </li>
                    <li>
                      {" "}
                      <FaPhoneAlt color="#c3c5ce" size={15} />
                      +91 9108883777
                    </li>
                    <li onClick={handleClick}>
                      {" "}
                      <MdEmail color="#c3c5ce" size={18} /> {emailAddress}
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-3"
          >
            <p>
              Copyright © 2024 Transmaa | Developed by
              <a href={"https://www.matrical.in"} target="blank">
                {" "}
                Matrical Technologies Pvt.Ltd
              </a>
            </p>
          </motion.div>
        </Container>
      </footer>
      <ScrollButton />
    </>
  );
}

export default Footer;
