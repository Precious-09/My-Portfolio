import LinkButton from "./Buttons";
import pfp from '../Images/pfp.jpg'
import Socials from "./Socials";
import { Container, Row, Col } from 'react-bootstrap';

export default function Header() {
    return (
      <>
      <section id='home'>
      <header>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={9}>
                <h5 className="hi">Hi, I'm</h5>
                <h2 className="typewriter">Adeogun Precious</h2>
                <h5 className="animated">I'm a <span></span></h5>
              </Col>
              <Col className="text-center">
              <div style={{ display: 'flex', justifyContent: 'space-between', }}>
                <LinkButton name="Download CV" color="transparent" type="submit" />
                <LinkButton name="Let's Talk" href="#contact" />
              </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={12} md={8}>
                <div className="profile_image">
                  <img className="profile" src={pfp} alt="Me" />
                </div>
              </Col>
              <Col xs={12} md={4} className="text-center">
                <div className="socials_head">
                  <Socials />
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      </section>
      </>
    );
  }

