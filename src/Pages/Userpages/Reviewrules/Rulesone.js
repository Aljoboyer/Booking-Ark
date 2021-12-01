import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Rulesone = ({ClickHandler,formsdata,totaldata,DisagreeHandler}) => {
    return (
        <Row className="justify-content-center">
            <Row className="justify-content-center my-4">
                <Col lg={3} md={4} sm={12} >
                <h5 className="text-center fw-bold">Review House Rules<i className="fas fa-angle-double-right ms-2"></i></h5>
                </Col>
                <Col className="text-muted text-center fw-bold" lg={3} md={4} sm={12}>
                <h5>Who is Comming<i className="fas fa-angle-double-right ms-2"></i></h5>
                </Col>
                <Col lg={3} md={4} sm={12}>
                <h5 className="text-muted text-center fw-bold">Confirm and Pay<i className="fas fa-angle-double-right ms-2"></i></h5>
                </Col>
            </Row>
            <Row clasName="pt-4">
                <h4 className="mt-3">Review Hose Rules</h4>
                <Row className="text-muted my-3">
                <h5>{totaldata.day - 1} Nights in {totaldata.destination}</h5>
                <h5>{formsdata.fromdate} To {formsdata.todate}</h5>
                <p>Self Checking With BUilding Staff</p>
                </Row>
                <Row className="my-3">
                    <h4 className="fw-bold">Things to keep in mind</h4>
                    <p className="fw-bold fs-6"><i className="mx-2 fas fa-luggage-cart"></i>Suitable for children</p>
                    <p className="fw-bold fs-6"><i className="mx-2 fas fa-paw"></i>Pets Are Allowed</p>
                    <p className="fw-bold fs-6"><i className="mx-2 fas fa-smoking"></i>Smoking Are Allowed</p>
                    <p className="fw-bold fs-6"><i className="mx-2 fas fa-prescription-bottle"></i>Drugs are not Allowed</p>
                    <p className="fw-bold fs-6"><i className="mx-2 fas fa-glass-cheers"></i>party is Allowed</p>
                </Row>
            </Row>
            <button onClick={() => ClickHandler('one')} className="btn regbtn">Agree</button>
            <button onClick={DisagreeHandler}  className="btn btn-light  my-4 disagreebtn">DisAgree</button>

        </Row>
    );
};

export default Rulesone;