import React from 'react';
import { ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Dashboardsidebar = () => {

    const {user,LogOutUser} = useAuth();

    const LogOutHandler = () => {
      LogOutUser()
    }
    return (
    <Row className="container sidebar">
        <ListGroup>
        <ListGroup.Item onClick={LogOutHandler} className="fw-bold sidetxt my-2"  variant="dark">Logout</ListGroup.Item>
        <ListGroup.Item as={Link} to="/"  className="fw-bold sidetxt my-2"  variant="dark">Home</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/makeadmin" variant="light">Make Admin</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/manageorder"  variant="dark">Manage Bookings</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/addhotels" variant="light">Add Hotels</ListGroup.Item>
        <ListGroup.Item className="fw-bold sidetxt my-2" as={Link} to="/dashboard/managehotels"  variant="dark">Manage Hotels</ListGroup.Item>
        </ListGroup>
    </Row>
    );
};

export default Dashboardsidebar;