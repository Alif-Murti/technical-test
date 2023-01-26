import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BackButton from "../../Components/BackButton";
import { Footer } from "../../Components/Footer";

const Profile = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home" className="ms-5">
          <BackButton />
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row className="mt-5 align-items-center">
          <Col>
            <img
              src="foto.jpg"
              alt="foto profil"
              width={"400px"}
              className="rounded-5 border border-5  shadow shadow-4"
            />
          </Col>
          <Col>
            <h1 className="fw-bold mb-5">Helloo</h1>
            <h5>
              I am a college student from Gunadarma University Majoring in
              Information System, currently studying at final semester. A
              Laboratorium Assistance at Integrated Laboratory in Module
              Division, and web developer for kophistory.my.id and
              electrive.my.id. Skilled with HTML, CSS, Bootstrap, Word, Excel.
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <h2 className="mt-5 mb-3">Experience</h2>
            <ul>
              <li>Web Developer for electrive.my.id</li>
              <li>Web Developer for kophistory.my.id (terminated)</li>
              <li>Studi Independen Front-End Javascript at Binar Academy</li>
              <li>Laboratory Assistance at ILab Gunadarma University</li>
            </ul>
          </Col>
          <Col>
            <h2 className="mt-5 mb-3">Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
              <li>Figma</li>
              <li>MySQL</li>
              <li>Git</li>
              <li>Teamwork</li>
            </ul>
          </Col>
          <Col>
            <h2 className="mt-5 mb-2">Contact</h2>
            <h5>alifmurti86@gmail.com</h5>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Profile;
