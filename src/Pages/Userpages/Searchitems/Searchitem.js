import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
const Searchitem = ({hotel,searchdata,newperson,diffDays}) => {
    const {_id,img,img2, short, overview, hotelname, hotellocation, space,price,rate} = hotel;
    const navigate = useNavigate()
    const NavigateHandler = (id) => {
            navigate(`/detailshotel/${id}`, {state: {fdata: searchdata, person: newperson,  day: diffDays}})
        
    } 
    return (
        <Col lg={4} md={6}>
            <Card>
        <Card.Img variant="top" className="imgs" src={`data:image/jpeg;base64,${img}`} />
        <Card.Body>
          <Card.Title><h3>{hotelname}</h3></Card.Title>
          <Card.Text>
          <p>{short}</p>
            <h5>$ {price}</h5>
            <p>Room {space}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button onClick={() => NavigateHandler(_id)} className="btn regbtn">View Details</button>
    </Card.Footer>
      </Card>
        </Col>
    );
};

export default Searchitem;