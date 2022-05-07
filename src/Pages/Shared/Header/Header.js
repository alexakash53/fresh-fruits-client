import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const handleSignOut = () =>{
        signOut(auth);
    }
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
                    {
                        user?.displayName ? <div className='user-area' style={{display:'inline-block'}}>
                            <img style={{width:'35px',borderRadius:'50%'}} src={user.photoURL ? user.photoURL : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} alt="" /> 
                            <button onClick={handleSignOut}>Log Out</button>
                        </div> : <Nav.Link as={Link} to="login">Log in</Nav.Link>
                    }
                    </Nav>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;