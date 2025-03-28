import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectDetail from "../components/ProjectDetail";

const Projects = () => {
    return (
        <Row className="d-flex justify-content-center vh-100">
            <Col md={10} lg={8} className="d-flex flex-column">
                <Row className="my-4">
                    <Col className="text-center">
                        <h1>Projects</h1>
                    </Col>
                </Row>
                <Row className="my-4">
                    <Col className="text-center">
                        <ProjectDetail />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Projects;
