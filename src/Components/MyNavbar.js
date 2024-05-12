import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNavbar = () => {
  return (
    <div>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/hassan">Hassan Kuwari</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="https://hassankuwari.github.io/" target='blank'>Portfolio</Nav.Link>
            <Nav.Link href="/miniprojects/project1">Mini Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default MyNavbar
