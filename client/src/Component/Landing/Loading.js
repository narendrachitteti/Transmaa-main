import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { Button, Card, Container } from "react-bootstrap";
import AnimationTitles from "./functions/AnimationTitles.js";
import { Link } from "react-router-dom";
import '../../Styles/all.css'
import Cardlanswiper from "./functions/Cardlanswiper.js";
import Loadingcards from "./functions/Loadingcards.js";

function Loading() {
  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <div className="loading position-relative">
      <Container className="d-flex justify-content-between align-items-center  flex-column flex-md-row mt-3  overflow-hidden">
        <motion.div
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="Moving forward,together." />
          <p className="gray-90 mt-3 fs-5">
          Connecting destinations, delivering dreams. Your journey, our commitment.
          </p>
          
        
        <Link to="/AboutUS">
          <Button className="m-0 my-3 px-5 py-2 fs-5 fw-bold">Explore</Button>
          </Link>
          <div
            style={{ color: "white" }}
            className="d-none d-md-flex justify-content-between align-items-center my-4"
          >
            <div>
              <h5 className="fw-bold fs-1">5K+</h5>
              <span className="gray-100">Customers</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">20K+</h5>
              <span className="gray-100">Vehicles</span>
            </div>
            <div>
              <h5 className="fw-bold fs-1">7K+</h5>
              <span className="gray-100">Trips</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-100"
        >

          
        <div className="cards">
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../../images/properties/Cargo-spaces-in-logistics-vehicles-hublogistics-4pl-luxury-fashion-Venera-Mele.webp")}

                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal"><li>Load</li><li>Finance</li><li>Insurance</li></h5>
                <p className="gray-90">Truck buyers and sellers</p>
              </Card.Body>
            </Card>
            <Card className="bg-black-100">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../../images/properties/translandcontainer.jpg")}

                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                             
                <h5 className="mt-2 text-white fw-normal"><><li>Fuel</li><li>Vehicle Dealers</li></></h5>
                <p className="gray-90">Expert in load management</p>
                 
              </Card.Body>
            </Card>
            </div>
            {/* <Loadingcards/> */}


{/* <Cardlanswiper/> */}



{/* <div class="cube-container">
  <div class="cube">
    <div class="face front">Fuel</div>
    <div class="face back">Finance</div>
    <div class="face right">Vehicle Buy & Sell</div>
    <div class="face bottom">Insurance</div>
    <div class="face top">Load</div>
    </div> 
</div> */}

{/* <div class="cube-container">

   <div class="cube">
 <div class="face front"> <img
          src="https://transmaa.com/wp-content/uploads/2024/01/pexels-saqlain-ashraf-clicks-13761855-2048x1365.jpg"
          alt=""
        /></div>
    <div class="face back"><img
          src="https://transmaa.com/wp-content/uploads/2024/01/Truck-Freight-Transport-Logistics-Stock-Photo-14.jpg"
          alt=""
        /></div>
    <div class="face right"> <img
          src="https://transmaa.com/wp-content/uploads/2024/01/pexels-engin-akyurt-12377481-2048x1536.jpg"
          alt=""
        /></div>
    <div class="face left">  <img
          src="https://images.moneycontrol.com/static-mcnews/2023/07/Insurance-770x433.png"
          alt=""
        /></div>
    <div class="face top"> <img
          src="https://www.banking24seven.com/wp-content/uploads/2018/12/finance-department.jpg"
          alt=""
        /></div>
  
  </div>
</div> */}

       
          {/* <div className="cards">
            <Card className="bg-black-100 rounded">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src="https://transmaa.com/wp-content/uploads/2024/01/pexels-engin-akyurt-12377481-2048x1536.jpg"
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal">Fule</h5>
                <p className="gray-90">Fuel Services</p>
                
              </Card.Body>
            </Card>
            <Card className="bg-black-100">
              <Card.Body className="p-2">
                <div className="rounded overflow-hidden position-relative">
                  <Card.Img
                    variant="top"
                    alt="img"
                    src={require("../../images/properties/tataace.jpeg")}
                  />
                  <i className="fa-regular fa-heart like" onClick={like}></i>
                </div>
                <h5 className="mt-2 text-white fw-normal">Finance & Insurance</h5>
                <p className="gray-90">Truck Finance and Insurance</p>
              
              </Card.Body>
            </Card>
          </div> */}
        </motion.div>
       
      </Container>
    </div>
  );
}

export default Loading;
