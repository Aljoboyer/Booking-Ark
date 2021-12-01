import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Everything = () => {
    return (
       <Row className="everything my-4">
           <Col className="p-4 bg-light mt-4 mb-4 rounded" lg={6} sm={12} md={10}>
               <h4 className="snaptitle fw-bold">Everything’s better on the beach... and it’s ready when you are</h4>
                <p className="fs-5">Now, more than ever, you deserve a holiday. And with that, you deserve a holiday company you can trust. Our Protection Promise means your wellbeing is our priority and your money is secure, so you can book with confidence knowing you’re in good hands.</p>
                <button className="btn btn-warning fw-bold text-primary fs-5">SEARCH MORE</button>
           </Col>
       </Row>
    );
};

export default Everything;