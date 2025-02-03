import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="section-title">Contact Us</h2>
            <p>We'd love to hear from you! Please fill out the form below.</p>

           
            <Form action="https://formsubmit.co/rosemehmood1@gmail.com" method="POST">
              <Form.Group controlId="formName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="contact-input"
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="contact-input"
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="contact-input"
                />
              </Form.Group>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

              <Button variant="primary" type="submit" className="submit-btn">
                Submit
              </Button>
            </Form>
          </Col>

          <Col lg={6}>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <h5>Email</h5>
                <p>rosemehmood1@gmail.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
