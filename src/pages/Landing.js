import React from "react";
import { Col, Row } from "react-bootstrap";
import ProfileImage from "../components/ProfileImage";

const Landing = () => {
    return (
        <Row className="mt-5">
            <Col xs={12} md={4}><ProfileImage /></Col>
            <Col xs={12} md={8} className="text-center d-flex flex-column align-items-center justify-content-center">
                <h1>Kyle Mardell</h1>
                <h2>Full Stack Developer</h2>
            </Col>
        </Row>
    );
};

export default Landing;
