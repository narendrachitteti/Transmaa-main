import { Card, Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import AnimationTitles from "./functions/AnimationTitles";
import "../../Styles/all.css";

function Properties() {
  // Active on select a tab
  // function active(e) {
  //   let act = document.querySelectorAll(".active");
  //   act[0].classList.remove("active");
  //   e.target.classList.add("active");
  // }

  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    // Start properties
    <div className="properties">
      <Container>
        <AnimationTitles
          className="title mx-auto"
          title="Discover Our Trucks"
        />

        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            <SwiperSlide>
              {" "}
              <Card className="bg-black-200 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../../images/properties/ashok-leyland-ecomet-star-1915-he.webp")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                
                  {/* <p className="gray-90">@Ashok Leyland</p> */}
                  <div className="d-flex">
                    <div className="me-3">
                      <span className="gray-90">
                        Our Transmma has Real-Time Tracking and Monitoring
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-200 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../../images/properties/407-gold-29-overview.png")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                
                  {/* <p className="gray-90">@Tata</p> */}
                  <div className="d-flex">
                    <div className="me-3">
                      <span className="gray-90">
                        Our Transmaa Fleet Maintenance and Inspection
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-200 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../../images/properties/bharat-benz-1617r-36572.webp")}
                    />
                    <i
                      className="fa-solid fa-heart like text-danger"
                      onClick={like}
                    ></i>
                  </div>
                

                  {/* <p className="gray-90">@BharatBenz</p> */}
                  <div className="d-flex">
                    <div className="me-3">
                      <span className="gray-90">
                      Our Transmaa  High-Value and  High Security Cargo
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <Card className="bg-black-200 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../../images/properties/tataace.jpeg")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>

                

                  {/* <p className="gray-90">@Tata</p> */}
                  <div className="d-flex">
                    <div className="me-3">
                      <span className="gray-90">
                  Our Transmaa  Medium-Sized Cargo
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <Card className="bg-black-200 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../../images/properties/piaggio-ape-diesel-cargo-ldx-3-wheeler-500x500.webp")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                
                  {/* <p className="gray-90">@Ape</p> */}
                  <div className="d-flex">
                    <div className="me-3">
                      <span className="gray-90">
                    Our Transmaa Small Packages and Parcels Truck
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <Card className="bg-black-200 rounded">
                <Card.Body className="p-2">
                  <div className="rounded overflow-hidden position-relative">
                    <Card.Img
                      variant="top"
                      alt="img"
                      src={require("../../images/properties/eicher-pro-2049-47454.webp")}
                    />
                    <i className="fa-regular fa-heart like" onClick={like}></i>
                  </div>
                
                  {/* <p className="gray-90">@Eicher</p> */}
                  <div className="d-flex">
                    <div className="me-3">
                      <span className="gray-90">
                      Out Transmaa  Oversized Freight
                 
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Properties;
