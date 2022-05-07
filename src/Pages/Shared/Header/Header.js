import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
           <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img style={{width:'80px',}} src="https://i.ibb.co/HHL5Rhv/logo.png" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-r text-uppercase fs-6 fw-bold">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="features">Features</Nav.Link>
                    <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                    <Nav.Link as={Link} to="fruits">Fresh Fruits</Nav.Link>
                    <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                    <Nav.Link as={Link} to="about">About</Nav.Link>
                    <Nav.Link as={Link} to="login">Log in</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;