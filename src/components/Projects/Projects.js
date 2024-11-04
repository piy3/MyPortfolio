import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import weather from "../../Assets/Projects/weather.png";
import ShopAround from "../../Assets/Projects/shopAround.png";

import tastybites from "../../Assets/Projects/tastybites.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ShopAround}
              isBlog={false}
              title="ShopAround"
              description="Built a responsive, location-based marketplace using React.js, enabling users to list, browse, and purchase items. Implemented a modern, user-friendly interface using Tailwind CSS, ensuring seamless navigation and responsivedesign across devices."
              ghLink="https://github.com/piy3/ShopAround"
              demoLink="https://shop-around.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tastybites}
              isBlog={false}
              title="TastyBites"
              description="TastyBites is a visually engaging frontend project showcasing a responsive and interactive food menu. It is designed to provide users with an immersive browsing experience for various dishes. The project demonstrates strong UI/UX principles, making it easy for users to explore and discover meals."
              ghLink="https://github.com/piy3/TastyBites.github.io"
              demoLink="https://piy3.github.io/TastyBites.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather-WebApp"
              description="The Weather-WebApp is a frontend project that provides real-time weather updates with a clean and user-friendly interface. It allows users to quickly check current weather conditions for different locations, presenting information like temperature, humidity, and weather descriptions."
              ghLink="https://github.com/piy3/Weather-WebApp"
              demoLink="https://piy3.github.io/Weather-WebApp/"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
