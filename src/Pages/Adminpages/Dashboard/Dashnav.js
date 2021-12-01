import React, {useState} from 'react';
import{Navbar,Container,Nav, Offcanvas} from 'react-bootstrap';
import { ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
const Dashnav = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {user,LogOutUser} = useAuth();

    const LogOutHandler = () => {
      LogOutUser()
    }
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="p-2">
        <Navbar.Brand as={Link} to="/"><span className="navtitle fw-bold fs-2">Admin Dashboard</span></Navbar.Brand>
        <Navbar.Toggle onClick={handleShow} aria-controls="responsive-navbar-nav" ><i className="fas fa-sliders-h fa-2x"></i></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          <Nav>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
        

    <Offcanvas className="w-50" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Admin Dashboard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
        <ListGroup.Item onClick={LogOutHandler} className="fw-bold sidetxt my-2"  variant="dark">Logout</ListGroup.Item>
        <ListGroup.Item as={Link} to="/"  className="fw-bold sidetxt my-2"  variant="dark">Home</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/makeadmin" variant="light">Make Admin</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/manageorder"  variant="dark">Manage Bookings</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/addhotels" variant="light">Add Hotels</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/managehotels"  variant="dark">Manage Hotels</ListGroup.Item>
        </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
        
        </>
    );
};

export default Dashnav;