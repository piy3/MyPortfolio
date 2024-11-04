import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";

function Home() {
  return (
    <section>
      {/* <Container fluid className="home-section" id="home"> */}
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PIYUSH YADAV</strong>
              </h1>
              <div className="cplinks">
                <div className="leetcode" >
                  <a
                    className="links"
                    href="https://leetcode.com/u/yadavpiy02/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <SiLeetcode style={{scale:"2"}} />
                  </a>
                </div>
                <div className="codechef" >
                  <a
                    className="links"
                    href="https://www.codechef.com/users/stud_pet_56"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiCodechef style={{scale:"2"}} />
                  </a>
                </div>
                <div className="cf" >
                  <a
                    className="links"
                    href="https://codeforces.com/profile/yadavpiy02"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <SiCodeforces style={{scale:"2"}} />
                  </a>
                </div>
                <div className="gfg" >
                  <a
                    className="links"
                    href="https://www.geeksforgeeks.org/user/yadavpk83b/"
                    target="_blank" rel="noopener noreferrer"
                  >
                    <SiGeeksforgeeks style={{scale:"2"}} />
                  </a>
                </div>
              </div>
              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      {/* </Container> */}
      <Home2 />
    </section>
  );
}

export default Home;
