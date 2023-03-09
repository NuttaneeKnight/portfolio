import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    subect: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={8} md={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated" : ""}>
                  <h2>Get In Touch</h2>
                  <div>
                    <form ref={form} onSubmit={sendEmail}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            input
                            placeholder="Name"
                            type="text"
                            name="name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            input
                            placeholder="Lastname"
                            type="text"
                            name="name"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            placeholder="Email"
                            type="email"
                            name="email"
                            required
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            required
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            placeholder="Message"
                            name="message"
                            required
                          ></textarea>
                          <button type="submit">
                            <span>Send</span>
                          </button>
                        </Col>
                        {status.message && (
                          <Col>
                            <p
                              className={
                                status.success === false ? "danger" : "success"
                              }
                            >
                              {status.message}
                            </p>
                          </Col>
                        )}
                      </Row>
                    </form>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
