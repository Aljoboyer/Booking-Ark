import React from 'react';
import{Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import './Navs.css'
const Usernavber = () => {
  const {isadmin,user,LogOutUser} = useAuth();


  const LogOutHandler = () => {
    LogOutUser()
  }
 
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container className="p-2">
          <Navbar.Brand as={Link} to="/"><span className="navtitle fw-bold fs-2">Booking Ark</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" ><i className="fas fa-sliders-h fa-2x"></i></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  as={Link} to="/"> <span className="navtxt fs-6 fw-bold">Home</span> </Nav.Link>
              <Nav.Link as={Link} to="/findhotelform"><span className="navtxt fs-6 fw-bold">Find-Hotel</span></Nav.Link>
              {
                user.email ? <>{ isadmin ?  <Nav.Link  as={Link} to="/dashboard"> <span className="navtxt fs-6 fw-bold" >Admin Dashboard</span></Nav.Link> :  <Nav.Link as={Link} to="/mybooking"><span className="navtxt fs-6 fw-bold" >My Bookings</span></Nav.Link> }
                </> : ''
              }
            </Nav>
            <Nav>
              {
                user.email ? <button onClick={LogOutHandler} className="btn logoutbtn fw-bold fs-5">LogOut</button> : <Nav.Link className="loginbtn
                  text-light fw-bold p-3 rounded" as={Link} to="/login">Login</Nav.Link>
              }
              
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    );
};

export default Usernavber;