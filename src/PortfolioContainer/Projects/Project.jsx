
import { Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./Project.css"; 

import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";
import img5 from "../Images/img5.png";
import img6 from "../Images/img6.png";
import img7 from "../Images/img7.png";
import img8 from "../Images/img8.png";
import img9 from "../Images/img9.png";
import img10 from "../Images/img10.png";
import img11 from "../Images/img11.png";
import img12 from "../Images/img12.png";
import img13 from "../Images/img13.png";
import img14 from "../Images/img14.jpeg";
import img15 from "../Images/img15.png";

export const Project = () => {
  const projects = [
    { title: "E-commerce web",  imgUrl: img1 },
    { title: "E-commerce Website", imgUrl: img2 },
    { title: "E-com Website",  imgUrl: img3 },
    { title: "Banner Sec website",  imgUrl: img4 },
    { title: "Contact Sec Website",  imgUrl: img5 },
    { title: "Cart Sec Website",  imgUrl: img6 },
    { title: "Landing Page",  imgUrl: img7 },
    { title: "Portfolio Website",  imgUrl: img8 },
    { title: "Portfolio Service Sec website",  imgUrl: img9 },
    { title: "Project Sec website",  imgUrl: img10 },
    { title: "Beautiful Portfolio Design Website",  imgUrl: img11 },
    { title: "E-Commerce web ", description: "using react.js , redux, router", imgUrl: img12 },
    { title: "React E-com website", imgUrl: img13 },
    { title: "Travel Website",description: "using react.js , redux, router",  imgUrl: img14 },
    { title: "Chatgpt Clone",description: "using react.js", imgUrl: img15 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Here are some of my latest projects showcasing design and development skills.</p>
            <Row>
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


