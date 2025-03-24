import React from "react";
import { Col, Row } from "react-bootstrap";

import styles from "../styles/Landing.module.css";

import ProjectCard from "../components/ProjectCard";
import TechCard from "../components/TechCard";

import ProfileImage from "../components/ProfileImage";
import freeflow from "../assets/freeflow.png";
import beeteach from "../assets/beeteach.gif";
import vinventory from "../assets/vinventory.png";
import quizcrunch from "../assets/quizcrunch.png";

const Landing = () => {
    return (
        <Row className="d-flex justify-content-center">
            <Col md={10} lg={8}>
                <Row className="my-4">
                    <Col xs={4}>
                        <ProfileImage />
                    </Col>
                    <Col
                        xs={8}
                        className="text-center d-flex flex-column align-items-center justify-content-center">
                        <h1>Kyle Mardell</h1>
                        <h2>Full Stack Developer</h2>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/kyle-mardell-7b4648288/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.SocialLink} px-3`}
                                >
                                <i class="fa-brands fa-linkedin"></i>
                            </a>{" "}
                            <a
                                href="https://github.com/KyleMardell"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.SocialLink} px-3`}
                                >
                                <i class="fa-brands fa-square-github"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row className="my-4 d-flex justify-content-center">
                    <Col style={{ maxWidth: "fit-content" }}>
                        <p className={`${styles.AnimText}`}>
                            I build things for the web
                        </p>
                    </Col>
                </Row>

                <Row className="my-4">
                    <Col>
                        <p className="text-center m-0">
                            Hi, I'm Kyle, a web developer who loves building
                            clean, functional websites. I first got into coding
                            through a games development degree, which led me to
                            web development and now I'm focused on growing my
                            skills and building great projects.
                        </p>
                    </Col>
                </Row>
                <Row className="my-4 g-4">
                    <Col xs={6}>
                        <ProjectCard
                            src={freeflow}
                            repo="https://github.com/KyleMardell/freeflow-app"
                        />
                    </Col>
                    <Col xs={6}>
                        <ProjectCard
                            src={beeteach}
                            repo="https://github.com/KyleMardell/bee-teach"
                        />
                    </Col>
                    <Col xs={6}>
                        <ProjectCard
                            src={vinventory}
                            repo="https://github.com/KyleMardell/vinventory"
                        />
                    </Col>
                    <Col xs={6}>
                        <ProjectCard
                            src={quizcrunch}
                            repo="https://github.com/KyleMardell/quiz-crunch"
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <p className="text-center m-0">
                            I enjoy making things that look good and work well
                            and I'm always looking for ways to improve and take
                            on new challenges. I work with React, Django, and
                            Bootstrap to build interactive, responsive websites.
                            That said I still enjoy learning and exploring new
                            technologies to expand my skills.
                        </p>
                    </Col>
                </Row>
                <Row className="my-4 g-4">
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="Git & Github" anim="right" />
                    </Col>
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="VS Code" anim="left" />
                    </Col>
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="Django" anim="right" />
                    </Col>
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="React" anim="left" />
                    </Col>
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="Bootstrap" anim="right" />
                    </Col>
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="Python" anim="left" />
                    </Col>
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="JavaScript" anim="right" />
                    </Col>
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="HTML" anim="left" />
                    </Col>
                    <Col
                        xs={6}
                        lg={4}
                        className="d-flex justify-content-center">
                        <TechCard tech="CSS" anim="right" />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default Landing;
