import React from 'react';
import {Col, FloatingLabel, Form, Row} from 'react-bootstrap'
const Rulestwo = ({ClickHandler}) => {
    return (
        <Row className="justify-content-center">
             <Row className="justify-content-center">
                <Col lg={3} md={4} sm={12} >
                <h5 className="text-center text-muted  fw-bold">Review House Rules</h5>
                </Col>
                <Col className="text-center fw-bold" lg={3} md={4} sm={12}>
                <h5>Who is Comming</h5>
                </Col>
                <Col lg={3} md={4} sm={12}>
                <h5 className="text-muted text-center fw-bold">Confirm and Pay</h5>
                </Col>
            </Row>
            <Row className="mt-4 pt-4">
                <h4>Describe Concisely About Your Profession And What is the Purpose of comming</h4>
                <h6 className="text-muted my-4">It will help us to know about yourself</h6>
                <Form>
                <FloatingLabel controlId="floatingTextarea2" label="Write About Yourself">
                <Form.Control
                as="textarea"
                placeholder="Write About Yourself"
                style={{ height: '100px' }}
                />
                </FloatingLabel>
                </Form>
            </Row>
            <button onClick={() => ClickHandler('two')} className="btn btn-success my-4">Agree</button>
        </Row>
    );
};

export default Rulestwo;