import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div>
           <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img style={{width:'80px',}} src="https://i.ibb.co/HHL5Rhv/logo.png" alt="" />
                    </Navbar.Brand>
                    <Nav className="me-r text-uppercase fs-6 fw-bold">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#features">Inventory</Nav.Link>
                    <Nav.Link href="#features"></Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;