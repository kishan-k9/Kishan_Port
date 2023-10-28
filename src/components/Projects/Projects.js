import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/cs.png";
import chatify from "../../Assets/Projects/hrdr.png";
import bitsOfCode from "../../Assets/Projects/tfi.png";

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
              title="Text from Image"
              description="The text extractor will allow you to extract text from any image. You may upload an image or document (.pdf) and the tool will pull text from the image. Our image to text converter allows you to extract text from images in one click. It provides 100% accurate results."
              ghLink="https://github.com/kishan-k9/Projects/tree/main/Extracting%20structured%20information%20from%20scanned%20invoices%20or%20invoice%20images"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project Name..."
              description="This will be added soon..."
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
