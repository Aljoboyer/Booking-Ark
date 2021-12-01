import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Hotelcart from '../Hotelcart/Hotelcart';
import Payment from '../Payment/Payment';
import { useLocation, useNavigate} from 'react-router-dom';
import Usernavber from '../UserNavbar/Usernavber';

const Rulethree = () => {
    const rule = true;
    const navigate = useNavigate()
    const {state} = useLocation();

    return (
    <Row className="justify-content-center">
        <Usernavber></Usernavber>
            <Col lg={7} md={8} sm={12}>
            <Row className="justify-content-center">
                <Col lg={3} md={4} sm={12} >
                <h5 className="text-center text-muted  fw-bold">Review House Rules</h5>
                </Col>
                <Col className="text-muted text-center fw-bold" lg={3} md={4} sm={12}>
                <h5>Who is Comming</h5>
                </Col>
                <Col lg={3} md={4} sm={12}>
                <h5 className="text-center fw-bold">Confirm and Pay</h5>
                </Col>
            </Row>
            <Payment hoteldetails={state.hoteldetails} formsdata={state.data} totaldata={state.alldata}></Payment>
            </Col>

            <Col lg={4} md={4} sm={12}>
                <Hotelcart hoteldetails={state.hoteldetails} rule={rule} formsdata={state.data} totaldata={state.alldata}></Hotelcart>
            </Col>
    </Row>
    );
};

export default Rulethree;