import React from 'react';
import { Col, Row } from 'react-bootstrap';
import secure1 from '../../../../images/secure-trust.jpg';
import secure2 from '../../../../images/secure-account.jpg';
import secure3 from '../../../../images/secure3.jpg';

const TrustandSecure = () => {

    return (
        <Row className="container-fluid g-3 my-4">
            <Col lg={4} md={6} sm={12}>
                <img className='img-fluid' src={secure1} alt="" />
            </Col>
            <Col lg={4} md={6} sm={12}>
                <img className='img-fluid' src={secure2} alt="" />
            </Col>
            <Col lg={4} md={6} sm={12}>
               <img className='img-fluid' src={secure3} alt="" />
            </Col>
        </Row>
    );
};

export default TrustandSecure;