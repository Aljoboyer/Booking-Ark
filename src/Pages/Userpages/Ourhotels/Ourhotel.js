import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Ourhotel = ({hotel}) => {
    const {_id,img,img2, short, overview, hotelname, hotellocation, space,price,rate} = hotel;

    return (
        <Col lg={4} md={6}>
        <Card>
    <Card.Img variant="top" className="imgs" src={`data:image/jpeg;base64,${img}`} />
    <Card.Body>
      <Card.Title><h4>{hotelname}</h4></Card.Title>
      <Card.Text>
      <p>{short}</p>
        <h5>$ {price}</h5>
        <p>Room {space}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to={`/detailshotel/${_id}`}><button className="bt regbtn">View Details</button></Link>
</Card.Footer>
  </Card>
    </Col>
    );
};

export default Ourhotel;