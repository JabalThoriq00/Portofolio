import React, {useState,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/jabalthoriq00/repos"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data from GitHub API:", error);
      }
    };
    fetchProjects();
  }, []);
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
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard
                imgPath={"https://raw.githubusercontent.com/"+project.full_name+"/main/src/Assets/Projects/blog.png"}
                isBlog={false}
                title={project.name}
                description={project.description}
                ghLink={project.html_url}
                demoLink={project.homepage}
              />
            </Col>
          ))}
        </Row>{" "}
      </Container>
    </Container>
  );
}

export default Projects;
