import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Rulethree = ({ClickHandler}) => {
    return (
    <Row className="justify-content-center">
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
        <button onClick={() => ClickHandler('three')} className="btn btn-success">Agree</button>
    </Row>
    );
};

export default Rulethree;