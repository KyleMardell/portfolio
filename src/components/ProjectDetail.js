import React from "react";
import { Col, Row, Image } from "react-bootstrap";

import Styles from "../styles/ProjectDetail.module.css";

const ProjectDetail = ({ src, name, description, link }) => {
    return (
        <Row className="d-flex justify-content-center my-4">
            <Col md={10} lg={8} className="d-flex flex-column">
                <Row>
                    <a href={link} target="_blank" rel="noreferrer" className={Styles.Name}>
                        {name}
                    </a>
                </Row>
                <Row>
                    <Col className="text-center mb-5">
                        <Image src={src} alt="Project preview" fluid />
                        <p>{description}</p>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default ProjectDetail;
