import React from 'react';
import { Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
const Searchitem = ({hotel,searchdata,newperson,diffDays}) => {
    const {_id,img,img2, short, overview, hotelname, hotellocation, space,price,rate} = hotel;
    const navigate = useNavigate()
    const NavigateHandler = (id) => {
            navigate(`/detailshotel/${id}`, {state: {fdata: searchdata, person: newperson,  day: diffDays}})
        
    }
    return (
        <Col lg={4} md={6}>
            <img src={`data:image/jpeg;base64,${img}`}  alt="" />
            <h3>{hotelname}</h3>
            <h6>{short}</h6>
            <h5>{price}</h5>
            <p>Room {space}</p>
            <button onClick={() => NavigateHandler(_id)} className="btn btn-primary">View Details</button>
        </Col>
    );
};

export default Searchitem;