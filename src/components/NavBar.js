import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {

    const {expanded, setExpanded, ref} = useClickOutsideToggle();

    return (
        <Navbar
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#cv">Projects</Nav.Link>
                        <Nav.Link href="#cv">Curriculum Vitae</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
