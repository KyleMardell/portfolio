import React from "react";
import { Link } from "react-router";
import { Nav, Navbar, Container } from "react-bootstrap";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    return (
        <Navbar
            data-bs-theme="dark"
            expanded={expanded}
            expand="lg"
            fixed="top"
            className={styles.NavBar}
        >
            <Container>
                <Navbar.Brand className={styles.NavBrand}>KM</Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    ref={ref}
                    onClick={() => setExpanded(!expanded)}
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/cv">Curriculum Vitae</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
