import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "./functions/AnimationTitles";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="What is TranSmaa?" className="title" />
          <p className="gray-50 mb-5">
            Transmaa, founded in 1990, is a dynamic and innovative operator in
            the transportation and logistics sector. All transport names
            included as Sudha Groups. Now we had updated As Transmaa. And we
            are adding extra benefits for the transporters like loads insurance
            diesels vechicle buy and sale and finance .
            <br /> <br />
            Transmaa specializes in a wide range of transportation services and
            offers bespoke solutions to meet the different demands of its
            clients. Transmaa offers itself as a partner who understands the
            complexities of the supply chain, from guaranteeing timely and
            secure transportation of goods to developing tailored logistics
            solutions.
          </p>
          <Link to="/AboutUS" target="_blank" rel="noopener noreferrer">
            <Button variant="primary ms-0">Read More</Button>
          </Link>
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
  );
}

export default AboutUs;
