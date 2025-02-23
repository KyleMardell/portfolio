import React from "react";
import { Col, Row } from "react-bootstrap";
import ProfileImage from "../components/ProfileImage";

const Landing = () => {
    return (
        <Row className="d-flex justify-content-center">
            <Col md={10} lg={8}>
                <Row className="my-5">
                    <Col xs={4}>
                        <ProfileImage />
                    </Col>
                    <Col
                        xs={8}
                        className="text-center d-flex flex-column align-items-center justify-content-center">
                        <h1>Kyle Mardell</h1>
                        <h2>Full Stack Developer</h2>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col xs={8}>
                        <p>
                            Hi, I’m Kyle, a web developer with a passion for
                            building clean, functional, and engaging websites. I
                            originally studied games development at university,
                            which sparked my interest in coding and eventually
                            led me to web development. I work with React,
                            Django, and Bootstrap, creating dynamic front-end
                            experiences and solid back-end systems. After years
                            in the motor trade, I’m making the leap into web
                            development, bringing strong problem-solving skills,
                            attention to detail, and a love for coding.
                        </p>
                    </Col>
                    <Col xs={4}>
                        <p>I build things for the web.</p>
                    </Col>
                </Row>
                <Row className="my-5">
                    <h3>Some of my recent projects</h3>
                    <Col xs={6}>
                        Project
                    </Col>
                    <Col xs={6}>
                        Project
                    </Col>
                    <Col xs={6}>
                        Project
                    </Col>
                    <Col xs={6}>
                        Project
                    </Col>
                </Row>
                <Row className="my-5">
                    <h3>Tech Stack</h3>
                    <Col xs={6}>
                        Git & Github
                    </Col>
                    <Col xs={6}>
                        VS Code
                    </Col>
                    <Col xs={6}>
                        Django
                    </Col>
                    <Col xs={6}>
                        React
                    </Col>
                    <Col xs={6}>
                        Bootstrap
                    </Col>
                    <Col xs={6}>
                        Python
                    </Col>
                    <Col xs={6}>
                        JavaScript
                    </Col>
                    <Col xs={6}>
                        HTML
                    </Col>
                    <Col xs={6}>
                        CSS
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Landing;
