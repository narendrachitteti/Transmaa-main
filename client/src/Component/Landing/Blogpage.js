import React from "react";
import NavBar from "./Landingnavbar/LandingNavbar.js";
import Footer from "./Footer.js";
import { motion } from "framer-motion";

import { IoChatbubblesOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import shipwork from "../../images/shipwork.avif";
import ashok from "../../images/properties/ashok-leyland-ecomet-star-1915-he.webp";
import blogwork3 from "../../images/blogwork3.jpg";
import loginbackimg1 from "../../images/loginbackimg1.jpg";
import blogttruck5 from "../../images/blogttruck5.jpg";
import blogtyard6 from "../../images/blogtyard6.jpg";

import Landingsidebar from "./Landingnavbar/Landingsidebar.js";

const Blogpage = () => {
  return (
    <div className="Landingsidebarpage">
      <div className="body-opening">
        <NavBar />

        <h1 style={{ textAlign: "center", color: "white" }}>Our Blogs</h1>

        <div className="blogrightleftcon">
          <div className="blogright">
            <motion.div
              class="blogcard"
              initial={{ x: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div class="blogcard-image">
                <img src={shipwork} alt="" />
              </div>
              <div className="blogcommentdate">
                {/* <p class="blogcard-body123">
                  <IoChatbubblesOutline /> <span>one comments</span>
                </p> */}
                <p class="blogcard-body123">
                  <FaCalendarAlt /> <span>February 26, 2022</span>
                </p>
              </div>
              <p class="blogcard-title">
                Be Smart About Packaging, Product Design
              </p>
              <p class="blogcard-body">
                I recently used transmaa for a long-distance move, and I was
                impressed with their promptness and professionalism. The team
                was punctual, efficient, and took great care in handling my
                belongings. I highly recommend them.
              </p>
              <p class="blogfooter">
                Written by
                <span class="blogby-name">pavanrampur8@gmail.com</span>
              </p>
            </motion.div>

            <motion.div
              class="blogcard"
              initial={{ x: -200, opacity: 0, scale: 0.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div class="blogcard-image">
                <img src={blogwork3} alt="" />
              </div>
              <div className="blogcommentdate">
                {/* <p class="blogcard-body123">
                  <IoChatbubblesOutline /> <span>one comments</span>
                </p> */}
                <p class="blogcard-body123">
                  <FaCalendarAlt /> <span>March 2, 2021</span>
                </p>
              </div>
              <p class="blogcard-title">
                Tips to Lowering Freight Shipping Costs
              </p>
              <p class="blogcard-body">
                I have been commuting with transmaa for years and I am always
                pleased with their service. The buses are always on time, clean,
                and the drivers are courteous. I wouldn't choose any other
                company for my daily commute.
              </p>
              <p class="blogfooter">
                Written by
                <span class="blogby-name">shivakumar6@gmail.com</span>
              </p>
            </motion.div>

            <motion.div
              class="blogcard"
              initial={{ x: -200, opacity: 0, scale: 0.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div class="blogcard-image">
                <img src={ashok} alt="" />
              </div>
              <div className="blogcommentdate">
                {/* <p class="blogcard-body123">
                  <IoChatbubblesOutline /> <span>Two comments</span>
                </p> */}
                <p class="blogcard-body123">
                  <FaCalendarAlt /> <span>November 14, 2021</span>
                </p>
              </div>
              <p class="blogcard-title">
                Drivers Deliver Much More Than Products
              </p>
              <p class="blogcard-body">
                I was nervous about traveling with transmaa at first, but they
                quickly put my mind at ease. The staff was friendly, helpful,
                and went above and beyond to ensure that I had a comfortable and
                enjoyable trip. I would definitely use their services again.
              </p>
              <p class="blogfooter">
                Written by
                <span class="blogby-name">rangarampur99@gmail.com</span>
              </p>
            </motion.div>

            <motion.div
              class="blogcard"
              initial={{ x: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div class="blogcard-image">
                <img src={loginbackimg1} alt="" />
              </div>
              <div className="blogcommentdate">
                {/* <p class="blogcard-body123">
                  <IoChatbubblesOutline /> <span>one comments</span>
                </p> */}
                <p class="blogcard-body123">
                  <FaCalendarAlt /> <span>February 6, 2021</span>
                </p>
              </div>
              <p class="blogcard-title">The 10 Most Used Maintenance Trucks</p>
              <p class="blogcard-body">
                As a frequent traveler, I am always on the lookout for reliable
                and affordable transportation options. transmaa has exceeded my
                expectations! The drivers are friendly and knowledgeable, and
                the vehicles are comfortable and well-maintained.
              </p>
              <p class="blogfooter">
                Written by
                <span class="blogby-name">Giridharkumar78@gmail.com</span>
              </p>
            </motion.div>

            <motion.div
              class="blogcard"
              initial={{ x: 50, opacity: 0, scale: 0.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div class="blogcard-image">
                <img src={blogttruck5} alt="" />
              </div>
              <div className="blogcommentdate">
                {/* <p class="blogcard-body123">
                  <IoChatbubblesOutline /> <span>No Responses</span>
                </p> */}
                <p class="blogcard-body123">
                  <FaCalendarAlt /> <span>september 26, 2020</span>
                </p>
              </div>
              <p class="blogcard-title">
                Your Guide to Becoming a Preferred Shipper
              </p>
              <p class="blogcard-body">
                I'm very impressed with the transmaa team's responsiveness to
                customer inquiries. They've been quick to answer my questions
                and provide helpful information. Thank you!
              </p>
              <p class="blogfooter">
                Written by
                <span class="blogby-name">sreelekha24@gmail.com</span>
              </p>
            </motion.div>

            <motion.div
              class="blogcard"
              initial={{ x: -200, opacity: 0, scale: 0.5 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div class="blogcard-image">
                <img src={blogtyard6} alt="" />
              </div>
              <div className="blogcommentdate">
                {/* <p class="blogcard-body123">
                  <IoChatbubblesOutline /> <span>one comments</span>
                </p> */}
                <p class="blogcard-body123">
                  <FaCalendarAlt /> <span>February 26, 2020</span>
                </p>
              </div>
              <p class="blogcard-title">
                Helping Companies in Their Green Transition
              </p>
              <p class="blogcard-body">
                I was able to easily book a trip on transmaa
                website, and I appreciate the streamlined process. It's a great
                user experience from start to finish. Thank you!
              </p>
              <p class="blogfooter">
                Written by
                <span class="blogby-name">sandeepkumar99@gmail.com</span>
              </p>
            </motion.div>
          </div>

          <div className="blogleft">
            <motion.div
              class="blogcardbodyleft"
              initial={{ x: -50, opacity: 0, scale: 0.7 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span class="blogtitle">Recent Comments</span>

              <ul class="bloglists">
                <li>
                  <span>Traveller Commented on Transmaa!</span>
                </li>

                <li>
                  <h6>Transmaa</h6>
                  <span>on Be Smart About Packaging, Product Design</span>
                </li>
                <li>
                  <h6>Transmaa</h6>
                  <span>on Be Smart About Packaging, Product Design</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              class="blogcardbodyleft"
              initial={{ x: -50, opacity: 0, scale: 0.7 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span class="blogtitle">Recent Posts</span>

              <ul class="bloglists">
                <li>
                  <span>Tips To Lowering Freight Shipping Costs</span>
                </li>
                <li>
                  <span>on Be Smart About Packaging, Product Design</span>
                </li>
                <li>
                  <span>An Airborne Crisis on Two Fronts</span>
                </li>
                <li>
                  <span>Drivers Deliver Much More Than Products</span>
                </li>
                <li>
                  <span>Helping Companies in Their Green Transition</span>
                </li>
                <li>
                  <span>Drivers Deliver Much More Than Products</span>
                </li>
                <li>
                  <span>The 10 Most Used Maintenance Trucks</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              class="blogcardbodyleft"
              initial={{ x: -50, opacity: 0, scale: 0.7 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span class="blogtitle">All Comments</span>

              <ul class="bloglists">
                <li>
                  <h6>on Transmaa!</h6>
                  <span>
                    Hi, this is a comment. To get started with moderating,
                    editing, and deleting comments, please visit the Comments
                    screen in…
                  </span>
                </li>

                <li>
                  <h6>Transmaa</h6>
                  <h6>on Be Smart About Packaging, Product Design</h6>
                  <span>
                    This is a useful post for finding broken links within the
                    website, what about links pointing outwards that are
                    broken?…
                  </span>
                </li>
                <li>
                  <h6>Transmaa</h6>
                  <h6>
                    on And The Day Came When The Risk To Remain Tight In A Bud
                    Was More Painful Than The Risk It Took To Blossom
                  </h6>
                  <span>
                    Great tool! I am using a redirect plugin to send all my
                    404’s to my home page but I think…
                  </span>
                </li>
              </ul>
            </motion.div>
            {/* <div class="blogcardbodyleft">
              <span class="blogtitle">Recent Comments</span>

              <ul class="bloglists">
                <li>
                  <span>A WordPress Commenter on Hello World!</span>

                  <h6>Translandwp</h6>

                  <span>on Be Smart About Packaging, Product Design</span>
                  <h6>Translandwp</h6>

                  <span>on Be Smart About Packaging, Product Design</span>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        <Footer />
      </div>
      <div>
        <Landingsidebar />
      </div>
    </div>
  );
};

export default Blogpage;
