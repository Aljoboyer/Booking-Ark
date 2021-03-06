import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Hotelsearchform from '../HotelSearchForm/Hotelsearchform';
import Usernavber from '../UserNavbar/Usernavber';
import './Userhome.css';
import Snapshot from './Snapshot/Snapshot';
import Everything from './Everything/Everything';
import Ourhotels from '../Ourhotels/Ourhotels';
import { Link } from 'react-router-dom';
import TrustandSecure from './TrustandSecure/TrustandSecure';
import Subscribe from './Subscribe/Subscribe';
import Ourblog from '../Ourblog/Ourblog';
const Userhome = () => {

    return (
        <div className="container-fluid mx-auto">
            <Usernavber></Usernavber>
            <Row className="userhome">
                <Row className="p-4" >
                <h1 className="fw-bold  mt-4 hometext">Travel with Peace of Mind</h1>
                <h3 className="fw-bold  my-3 hometext">Explore Our All Hotels</h3>
            <Link to="/findhotelform" ><button className="btn exbtn w-25 text-light fw-bold text-center">Explore</button></Link>
                </Row>
                <Row className="d-flex justify-content-center align-items-center container-fluid">
                        <Col lg={8} md={10} sm={12} className="">
                            <Hotelsearchform></Hotelsearchform>
                        </Col>
                </Row>
            </Row>

          <TrustandSecure></TrustandSecure>
            <Ourhotels></Ourhotels>
           <Snapshot></Snapshot>
           <Everything></Everything>
           <Ourblog />
           <Subscribe/>

        </div>
    );
};

export default Userhome;