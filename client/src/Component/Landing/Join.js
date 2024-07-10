import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "./functions/AnimationTitles";

// const { Container } = require("react-bootstrap");

function Join() {
  return (
    <div className="join">
      <Container>
      <AnimationTitles title="Our Services" className="title" />
        <Swiper
          grabCursor={true}
          spaceBetween={30}
          loop={true}
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            998: {
              slidesPerView: 3,
            },
            1198: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">1</h4>
            <img src={require("../../images/illustration/01.webp")} alt="img" />
            <AnimationTitles
              title="Load"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
            Our wide range of services, which include logistical planning, real-time tracking, and exact delivery, meet the various needs of our clients.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">2</h4>
            <img src={require("../../images/illustration/02.webp")} alt="img" />
            <AnimationTitles
              title="Vehicle Dealers"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
            Truck buyers and sellers can transact in an open and effective market with our all-inclusive vehicle buying and selling services.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">3</h4>
            <img src={require("../../images/illustration/03.webp")} alt="img" />
            <AnimationTitles
              title="Insurance"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
            Our Vehicle Insurance services cover your most precious assets, whether they are individual vehicles or a fleet.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">4</h4>
            <img src={require("../../images/illustration/04.webp")} alt="img" />
            <AnimationTitles
              title="Finance"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
            Our Financial Planning Services offer specialized methods to people and organizations to ensure good financial health.
            </p>
          </SwiperSlide>
          <SwiperSlide className="py-4 px-3 align-items-start flex-column">
            <h4 className="gray-100 mb-5">5</h4>
            <img src={require("../../images/illustration/01.webp")} alt="img" />
            <AnimationTitles
              title="Fuel"
              className="text-white mb-4 mt-5 h4"
            />
            <p className="gray-50">
            Transmaa stands as your reliable partner, offering comprehensive fueling solutions for the future of transportation.
            </p>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Join;
