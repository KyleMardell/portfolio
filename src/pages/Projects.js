import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectDetail from "../components/ProjectDetail";

import freeflow from "../assets/freeflow.png";

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
                        <ProjectDetail
                            src={freeflow}
                            name="Free Flow - Freelance Project Tracker"
                            description="Free flow was the final full stack project for the Code Institute - Full Stack Software Development Diploma. 
                            The app was created using Django's rest framework for the back end API and React with Bootstrap for the front end.
                            While developing the app I followed an agile methodology and I made use of project boards, 
                            carried out full testing and wrote in depth documentation for the entire process, all of which can be found in the repo."
                            link="https://github.com/KyleMardell/freeflow-app"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Projects;
