import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "./functions/AnimationTitles";
import { motion } from "framer-motion";

function Developers() {
  return (
    <div className="developers">
      <div className="container-fluid">
        <AnimationTitles
          title="Meet Our Amazing Team"
          className="titleofteam"
        />
        <p className="gray-50 text-center mb-5">
         
        </p>
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none justify-content-start"
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
                <img
                  className="pe-3"
                  src={require("../../images/developers/devlog1.jpg")}
                  style={{height:'70px',width:'70px',borderRadius:'30px' }}
                  alt="img"
                />
                <h6 className="text-white m-0">Alaxis D. Dowson</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
              <img
                  className="pe-3"
                  src={require("../../images/developers/devlog2.jpg")}
                  style={{height:'70px',width:'70px',borderRadius:'30px' }}
                  alt="img"
                />
                <h6 className="text-white m-0">Salma Khatun</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
              <img
                  className="pe-3"
                  src={require("../../images/developers/devlog4.jpg")}
                  style={{height:'70px',width:'70px',borderRadius:'30px' }}
                  alt="img"
                />
                <h6 className="text-white m-0">Rahul Roshan</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
              <img
                  className="pe-3"
                  src={require("../../images/developers/devlog3.png")}
                  style={{height:'70px',width:'70px',borderRadius:'30px' }}
                  alt="img"
                />
                <h6 className="text-white m-0">Radhika Das</h6>
              </div>
            </SwiperSlide>
           
          </Swiper>
        </motion.div>




        {/* <motion.div
          initial={{ x: 80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none"
            spaceBetween={50}
            grabCursor={true}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              596: {
                slidesPerView: 3,
              },
              1298: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
               
                <h6 className="text-white m-0">Amruth L P</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
               
                <h6 className="text-white m-0">Bro Code</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
               
                <h6 className="text-white m-0">Sandy</h6>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="d-flex justify-content-between align-items-center py-2 px-3">
               
                <h6 className="text-white m-0">
                  Sunil
                </h6>
              </div>
            </SwiperSlide>
           
           
          </Swiper>
        </motion.div> */}
      </div>
    </div>
  );
}

export default Developers;
