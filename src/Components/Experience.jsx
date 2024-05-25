import { Container, Row, Col } from 'react-bootstrap';
import XCard from "./XCard";
import Bounce from './Bouncing';

export default function Experience (){

    const developmentItems = [
        "HTML",
        "CSS",
        "Javascript",
        "WordPress",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "Git & Github",
      ];
    
      const softSkillsItems = [
        "Teamwork",
        "Problem Solving",
        "Creativity",
        "Time Management",
        "Self-Learner",
        "Flexibility",
      ];

    return <section id='experience'>
        <h5 class='get'>What Skills I Have</h5>
        <h2 class='contact'><Bounce text="My Experience" /></h2>
      <Container className="experience__container py-0">
      <Row className="justify-content-center">
        <Col  className="mb-4 mb-md-0 contain">
          <XCard header="Development" items={developmentItems} />
        </Col>
        <Col className="mb-4 mb-md-0 contain">
          <XCard header="Soft Skills" items={softSkillsItems} />
        </Col>
      </Row>
    </Container>
    
    </section>
}