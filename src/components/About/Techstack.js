import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
} from "react-icons/di";
import {

  SiNextdotjs,
  
  SiC,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiMysql,
  SiGithub,
} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div className="name"><h3>C++</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiC />
        <div className="name"><h3>C</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div className="name"><h3>Javascript</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="name"><h3>NodeJs</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="name"><h3>ReactJs</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <div className="name"><h3>HTML 5</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <div className="name"><h3>Tailwind CSS</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="name"><h3>MYSQL</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="name"><h3>MongoDB</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div className="name"><h3>NextJs</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="name"><h3>Git</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="name"><h3>Github</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="name"><h3>Python</h3></div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <div className="name"><h3>ExpressJs</h3></div>
      </Col>
      
    </Row>
  );
}

export default Techstack;
