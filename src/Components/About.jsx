import React from 'react';
import CubeViewer from './SpinCube';
import Bounce from './Bouncing';
import LinkButton from './Buttons';
import { Container, Row, Col } from 'react-bootstrap';

export default function About() {
  const about = {
    color: 'purple',
  };

  const para = {
    color: 'white',
  };

  

  return (
    
    <section id="about">
      
      <Container>
      <h5 class='get'>Get To Know Me</h5>
      <h1 style={about}>
              <Bounce text="ABOUT ME" />
            </h1>
        <Row className="justify-content-center">
          <Col  md={7}>
            <p style={para}>
              As a skilled front-end developer, I bring a unique blend of creativity and technical expertise to every project. With a passion for crafting intuitive user interfaces and seamless user experiences, I am dedicated to delivering high-quality web solutions that exceed client expectations. I am Proficient in a variety of front-end technologies including HTML5, CSS3, JavaScript, and popular frameworks such as React.js.
            </p>
            <p style={para}>
              I also thrive in collaborative environments, working closely with designers, back-end developers, and stakeholders to bring projects to life. With excellent communication skills and a proactive approach to problem-solving, I am adept at overcoming challenges and delivering solutions that meet both technical requirements and user needs.
            </p>
            <p style={para}>
              I believe that that every challenge presents an opportunity to learn and grow. I am excited to showcase my work and share my journey with you. Thank you for visiting my portfolio, and I look forward to connecting with you soon!
            </p>
            <LinkButton name="Let's Talk" href="#contact" />
          </Col>
          <Col  className="text-center">
            <div className="cubespinner">
              <CubeViewer />
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      
  );
}