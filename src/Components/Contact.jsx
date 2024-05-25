import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Bounce from './Bouncing';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eilxkwo', 'template_qs3q4be', form.current, 'oJMKoMqB2ZT15b7Cx')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        alert('Message sent successfully!');
        console.log(result.text);

       
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  const big = {
    fontSize: 24,
  };

  return (
    <section id="contact">
      <h5 class="get">Get In Touch</h5>
      <h2 class="contact">
        <Bounce text="CONTACT ME" />
      </h2>
      <Container className="contact-container">
        <Row>
          <Col md={4}>
            <Card className="contact-card">
              <Card.Body>
                <FontAwesomeIcon icon={faGoogle} style={big} />
                <Card.Title>Mail</Card.Title>
                <Card.Subtitle className="mb-2">
                  adeogunprecious913@gmail.com
                </Card.Subtitle>
                <a href="mailto:adeogunprecious913@gmail.com" target="blank">
                  Send a message
                </a>
              </Card.Body>
            </Card>
            <Card className="contact-card">
              <Card.Body>
                <FontAwesomeIcon icon={faWhatsapp} style={big} />
                <Card.Title>WhatsApp</Card.Title>
                <Card.Subtitle className="mb-2">
                  +2347087322969
                </Card.Subtitle>
                <a
                  href="https://api.whatsapp.com/send?phone=+2347087322969"
                  target="blank"
                >
                  Send a message
                </a>
              </Card.Body>
            </Card>
            <Card className="contact-card">
              <Card.Body>
                <FontAwesomeIcon icon={faTwitter} style={big} />
                <Card.Title>Twitter</Card.Title>
                <Card.Subtitle className="mb-2d">@saintfgs</Card.Subtitle>
                <a href="https://twitter.com/saintfgs" target="blank">
                  Send a message
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col md={8}>
            <Card className="contact-form-card">
              <Card.Body>
                <form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      required
                      name="user_name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      required
                      name="user_email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      placeholder="Enter your message"
                      rows={3}
                      required
                      name="message"
                    />
                  </Form.Group>
                  <input type="submit" value="Send Message" id="btnn" />
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}