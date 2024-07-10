import React from "react";
import { useRef } from "react";
import NavBar from "./Landingnavbar/LandingNavbar.js";
import Footer from "./Footer.js";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Landingsidebar from "./Landingnavbar/Landingsidebar.js";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();
  const emailAddress = "info@transmaa.com";

  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c5pykrr",
        "template_7th34ls",
        form.current,
        "WBLl-Oej4T6-pM3vn"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    e.target.reset();
  }
  return (
    <div className="Landingsidebarpage">
      <div className="body-opening">
        <NavBar />

        <div class="container-conatctus">
          <h1 className="header-contact">Contact Information</h1>
          <p className="gray-50 header-contact-p">
            Make your supply chain more efficient. Contact us right now for
            excellent logistics and transportation!
          </p>
          <div class="content-contactus">
            <div class="left-side">
              <div class="address details">
                <IoLocationSharp color="#c3c5ce" size={30} />
                <div class="topic gray-50">Address</div>
                <div class="text-one">
                  278/14 parimala nagara, opp SBI Bank, Arishinakunte,
                </div>
                <div class="text-two">
                  kasaba Hobli, Nelamangala Taluk, Bangalore Rural-562123
                </div>
              </div>
              <div class="phone details">
                <FaPhoneAlt color="#c3c5ce" size={30} />
                <div class="topic gray-50">Phone</div>
                <div class="text-two">+91 91088 83777</div>
              </div>
              <div class="email details">
                <MdEmail color="#c3c5ce" size={30} />
                <div class="topic gray-50">Email</div>
                <div  onClick={handleClick} class="text-one">{emailAddress}</div>
                {/* <div class="text-two">info.codinglab@gmail.com</div> */}
              </div>
            </div>
            <div class="right-side">
              <div class="topic-text">Send us a message</div>
              <p className="gray-50">
                Have a question or need assistance? Feel free to reach out to us
                using the form below.
              </p>
              <form
                ref={form}
                style={{ marginRight: "15px" }}
                onSubmit={sendEmail}
              >
                <div
                  className="contactformland"
                >
                  <div>
                    <label className="labelss">Name &nbsp;<span>*</span></label>
                    <div className="flex-gap">
                      <div class="input-box">
                        <input
                          type="text"
                          name="user_name"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="labelss">Email &nbsp;<span>*</span></label>

                    <div className="flex-gap">
                      <div class="input-box">
                        <input
                          type="email"
                          name="user_email"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <label className="labelss">Message &nbsp;<span>*</span></label>
                <div class="input-box message-box">
                  <textarea
                    placeholder="Type your Message"
                    name="message"
                    rows={5}
                    required
                  ></textarea>
                </div>
                <div class="button">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7769.931406086052!2d77.40406793453467!3d13.164562495605773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2642fc242509%3A0x8b6c37ae936e8ff1!2sKasaba%20Hobli%2C%20Byrashettihalli%2C%20Karnataka%20562132!5e0!3m2!1sen!2sin!4v1707453621792!5m2!1sen!2sin"
            width="600"
            height="500"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Footer />
      </div>
      <div>
        <Landingsidebar />
      </div>
    </div>
  );
};

export default ContactUs;
