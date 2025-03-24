import React from "react";
import { Col, Row } from "react-bootstrap";

const CV = () => {
    return (
        <Row className="d-flex justify-content-center vh-100">
            <Col md={10} lg={8} className="d-flex flex-column">
                <Row className="my-4">
                    <Col className="text-center">
                        <h1>Curriculum Vitae</h1>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col className="text-center">
                        <a
                            href="https://docs.google.com/document/d/17uJhLz-DtSs8fvVJofUdbCmJobCH03VodBppBGQtNxY/export?format=pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary">
                            Download My CV (PDF)
                        </a>
                    </Col>
                </Row>
                <Row className="flex-grow-1">
                    <Col>
                        <iframe
                            title="My CV"
                            src="https://docs.google.com/document/d/17uJhLz-DtSs8fvVJofUdbCmJobCH03VodBppBGQtNxY/preview"
                            width="100%"
                            height="90%"
                            style={{ border: "none" }}></iframe>
                    </Col>
                </Row>
                
            </Col>
        </Row>
    );
};

export default CV;
