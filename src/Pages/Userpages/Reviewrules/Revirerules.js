import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Hotelcart from '../Hotelcart/Hotelcart';
import Rulesone from './Rulesone';
import { useLocation, useNavigate} from 'react-router-dom'
import Usernavber from '../UserNavbar/Usernavber';
const Revirerules = () => {
    const navigate = useNavigate()
    const {state} = useLocation();

    const ClickHandler = (rule) => {
        if(rule === 'one')
        {
            navigate('/rulestwo', {state: {data: state.data, alldata: state.alldata, hoteldetails: state.hoteldetails}})
        }
    }
    const DisagreeHandler = () => {
       navigate('/')
    }
    
    const rule = true
    return (
        <div className="container-fluid">
            <Usernavber></Usernavber>
            <Row className="justify-content-center">
                <Col className="p-3" lg={7} md={6} sm={12}>
                    <Rulesone DisagreeHandler={DisagreeHandler} formsdata={state.data} totaldata={state.alldata} ClickHandler={ClickHandler}  ></Rulesone>
                </Col>
                <Col lg={4} md={4} sm={12}>
                    <Hotelcart hoteldetails={state.hoteldetails} rule={rule} formsdata={state.data} totaldata={state.alldata}></Hotelcart>
                </Col>
            </Row>
        </div>
    );
};

export default Revirerules;