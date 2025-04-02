import React from "react";
import { Col, Row } from "react-bootstrap";
import ProjectDetail from "../components/ProjectDetail";

import freeflow from "../assets/freeflow.png";
import beeteach from "../assets/beeteach.gif";

const Projects = () => {
    return (
        <Row className="d-flex justify-content-center">
            <Col md={10} lg={8} className="d-flex flex-column">
                <Row className="my-4">
                    <Col className="text-center">
                        <h1 className="m-0">Projects</h1>
                    </Col>
                </Row>
                <Row>
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

                        <ProjectDetail
                            src={beeteach}
                            name="Bee Teach - Educational Resource Sharing App"
                            description="Bee Teach is an educational resource sharing app designed for teachers, parents and educators alike. 
                            The app was the first full stack project in the Code Institute - Full Stack Software Development Diploma, 
                            and was created using Django for the entire front and back ends, as well as a Postgresql database to store data.
                            The repo contains detailed documentation of the entire development process including extensive manual and unit testing."
                            link="https://github.com/KyleMardell/bee-teach"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Projects;
