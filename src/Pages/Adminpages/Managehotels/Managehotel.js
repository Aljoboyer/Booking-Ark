import React from 'react';
import { Col } from 'react-bootstrap';

const Managehotel = ({hotel, DeleteHanlder}) => {
    const {_id,img,img2, short, overview, hotelname, hotellocation, space,price,rate} = hotel;

    return (
        <Col lg={5} md={6}>
            <img src={`data:image/jpeg;base64,${img}`}  alt="" />
            <h3>{hotelname}</h3>
            <h6>{short}</h6>
            <h5>{price}</h5>
            <p>Room {space}</p>
            <button onClick={() => DeleteHanlder(_id)}  className="mx-2 btn btn-dark">Delete</button>
            <button className="mx-2 btn btn-warning">Edit</button>
        </Col>
    );
};

export default Managehotel;