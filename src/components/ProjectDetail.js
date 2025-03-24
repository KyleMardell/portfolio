import React from "react";
import { Col, Row } from "react-bootstrap";

const ProjectDetail = () => {
    return (
        <Row className="d-flex justify-content-center vh-100">
            <Col md={10} lg={8} className="d-flex flex-column">
                <Row className="my-4">
                    <Col className="text-center">
                        <p>Image goes here</p>
                        <h2>Project name</h2>
                        <p>Text goes here</p>
                        <p>links go here</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ProjectDetail;
