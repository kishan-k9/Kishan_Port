import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/pldp.png";
import chatify from "../../Assets/Projects/hrdr.png";
import bitsOfCode from "../../Assets/Projects/tlp.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Handwritten Digit Recognition"
              description="The handwritten digitrecognition is the ability of computers to recognize human handwritten digits. It is a hard task forthe machine because handwritten digits are not perfect and can be made with many different flavors."
              ghLink="https://github.com/kishan-k9/Projects/tree/main/Handwritten%20Digit%20Recognition%20Deep%20Learning%20Project"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tomato Leaf Prediction"
              description="The Tomato Leaf Prediction Deep Learning Project is an innovative endeavour aimed at leveraging deep learning techniques to detect and classify diseases and anomalies in tomato plants by analysing images of their leaves."
              ghLink="https://github.com/kishan-k9/Projects/tree/main/Extracting%20structured%20information%20from%20scanned%20invoices%20or%20invoice%20images"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Plant Leaf Disease Prediction"
              description="In this project, we've enhanced our Tomato Leaf Disease Detection system to cover 14-15 plant types with 39 disease classes. We trained our model using a training dataset containing 61,486 images. The model is used to predict the diseases of multiple plants by processing the input images."
              // ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
