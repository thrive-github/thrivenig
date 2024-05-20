// AboutPage.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import "./Group.css";
// import "./animate";

const Group = () => {
  return (
    <>
      <div style={{ height: 600 }} className="header-container w-100 ">
        <div
          class="d-flex justify-content-center align-items-center"
          id="animatedTextBackground"
        >
          <h1 id="animatedTextHeading">About Thrive</h1>
        </div>
      </div>
      <Container>
        <Row className="my-5">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Welcome to our company! We are dedicated to providing the best
                  services and solutions to our customers. Our team of
                  professionals is committed to excellence and innovation,
                  ensuring that we meet and exceed your expectations.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to deliver top-notch products and services that
                  bring value to our customers. We strive to be leaders in our
                  industry through continuous improvement, customer focus, and
                  operational excellence.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="my-5">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Vision</Card.Title>
                <Card.Text>
                  Our vision is to create a better everyday life for our
                  customers. We aim to achieve this by fostering a culture of
                  innovation, sustainability, and social responsibility. We
                  envision a future where our solutions contribute to a more
                  connected and prosperous world.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Group;