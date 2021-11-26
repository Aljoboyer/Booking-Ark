import React from 'react';
import {Col} from 'react-bootstrap'
import { Link } from "react-router-dom";

const Hotels = ({hotel}) => {
    const {_id,img,img2, short, overview, hotelname, hotellocation, space,price,rate} = hotel;
 
    return (
        <Col lg={4} md={6}>
            <img className="rounded" src={`data:image/jpeg;base64,${img}`}  alt="" />
            <h4>{hotelname}</h4>
            <p>{short}</p>
            <h5>$ {price}</h5>
            <p>Room {space}</p>
            <Link to={`/detailshotel/${_id}`}><button className="bt btn-primary">View Details</button></Link>
        </Col>
    );
};

export default Hotels;