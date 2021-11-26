import React from 'react';
import{Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const Usernavber = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand as={Link} to="/">Booking Ark</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/findhotelform">Find-Hotel</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Usernavber;