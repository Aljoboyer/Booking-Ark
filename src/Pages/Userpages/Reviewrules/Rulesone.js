import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Rulesone = ({ClickHandler,formsdata,totaldata}) => {
    return (
        <Row className="justify-content-center">
            <Row className="justify-content-center">
                <Col lg={3} md={4} sm={12} >
                <h5 className="text-center fw-bold">Review House Rules</h5>
                </Col>
                <Col className="text-muted text-center fw-bold" lg={3} md={4} sm={12}>
                <h5>Who is Comming</h5>
                </Col>
                <Col lg={3} md={4} sm={12}>
                <h5 className="text-muted text-center fw-bold">Confirm and Pay</h5>
                </Col>
            </Row>
            <Row clasName="pt-4">
                <h3 className="mt-3">Review Hose Rules</h3>
                <Row className="text-muted my-3">
                <h5>{totaldata.day - 1} Nights in {totaldata.destination}</h5>
                <h5>{formsdata.fromdate} To {formsdata.todate}</h5>
                <p>Self Checking With BUilding Staff</p>
                </Row>
                <Row className="my-3">
                    <h4>Things to keep in mind</h4>
                    <p>Suitable for children</p>
                    <p>Pets Are Allowed</p>
                    <p>Smoking Are Allowed</p>
                    <p>Drugs are not Allowed</p>
                    <p>party is Allowed</p>
                </Row>
            </Row>
            <button onClick={() => ClickHandler('one')} className="btn btn-success">Agree</button>
        </Row>
    );
};

export default Rulesone;