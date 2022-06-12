import {Container, Nav, Navbar} from 'react-bootstrap';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Get Food</Navbar.Brand>
                <Nav className="ml">
                    <Nav.Link href="/recipes">Recipes </Nav.Link>
                    <Nav.Link href="/ingredients">Ingredients</Nav.Link>
                    <Nav.Link href="/wiki">Wiki</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;