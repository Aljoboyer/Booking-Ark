import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Hotelsearchform from '../HotelSearchForm/Hotelsearchform';
import Usernavber from '../UserNavbar/Usernavber';
import './Userhome.css'
const Userhome = () => {

    return (
        <div className="container-fluid userhome">
            <Usernavber></Usernavber>
            <Row className="p-4">
            <h1 className="fw-bold  mt-4 hometext">Travel with Peace of Mind</h1>
            <h3 className="fw-bold  my-3 hometext">Explore Our All Hotels</h3>
            <button className="btn exbtn w-25 text-light fw-bold">Explore--</button>
            </Row>
           <Row className="d-flex justify-content-center align-items-center">
                <Col lg={8} md={10} sm={12} className="">
                    <Hotelsearchform></Hotelsearchform>
                </Col>
           </Row>
        </div>
    );
};

export default Userhome;