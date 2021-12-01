import React from 'react';
import {Col, FloatingLabel, Form, Row} from 'react-bootstrap';
import Hotelcart from '../Hotelcart/Hotelcart';
import { useLocation, useNavigate} from 'react-router-dom';
import Usernavber from '../UserNavbar/Usernavber';

const Rulestwo = () => {
    const navigate = useNavigate()
    const {state} = useLocation();
    const rule = true;

    const DisagreeHandler = () => {
       
    }
    const ClickHandler = () => {
        navigate('/rulethree', {state: {data: state.data, alldata: state.alldata, hoteldetails: state.hoteldetails}})
    }

    return (
        <Row className="justify-content-center">
            <Usernavber></Usernavber>
            <Col lg={7} md={6} sm={12}>
            <Row className="justify-content-center">
                <Col lg={3} md={4} sm={12} >
                <h5 className="text-center text-muted  fw-bold">Review House Rules</h5>
                </Col>
                <Col className="text-center fw-bold" lg={3} md={4} sm={12}>
                <h5  >Who is Comming</h5>
                </Col>
                <Col lg={3} md={4} sm={12}>
                <h5 className="text-muted text-center fw-bold">Confirm and Pay</h5>
                </Col>
            </Row>
            <Row className="mt-4 pt-4">
                <h4>Describe Concisely About Your Profession And What is the Purpose of comming</h4>
                <h6 className="text-muted my-4">It will help us to know about yourself</h6>
                <Form>
                <FloatingLabel className="fw-bold  fs-5" controlId="floatingTextarea2" label="Write About Yourself">
                <Form.Control
                className="area"
                as="textarea"
                placeholder="Write About Yourself"
                style={{ height: '100px' }}
                />
                </FloatingLabel>
                <button onClick={ClickHandler} className="btn my-4 mx-4 regbtn">Agree</button>
            <button onClick={DisagreeHandler} className="btn  my-4 disagreebtn">DisAgree</button>
                </Form>
            </Row>
            </Col>
            <Col lg={4} md={4} sm={12}>
                <Hotelcart hoteldetails={state.hoteldetails} rule={rule} formsdata={state.data} totaldata={state.alldata}></Hotelcart>
            </Col>
        </Row>
    );
};

export default Rulestwo;