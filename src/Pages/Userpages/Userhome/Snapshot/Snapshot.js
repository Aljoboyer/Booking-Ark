import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import snap1 from '../../../../images/snap1.jpg';
import snap2 from '../../../../images/snap2.jpg'
import snap3 from '../../../../images/snap3.jpg'
import snap4 from '../../../../images/snap4.jpg'
const Snapshot = () => {
    return (
        <div className="container-fluid snapshot_container">
            <h4 className="my-4 fw-bold snaptitle">A snapshot of the world’s most picture-perfect properties</h4>
            <Row className="my-4 g-3">
                <Col lg={3} md={6} sm={12}>
                <Card className="snapcard" border="dark" style={{ width: '18rem' }}>
                    <Card.Header><small className="text-muted">Thailand</small></Card.Header>
                    <Card.Body>
                    <Card.Title className="fw-bold">TreeHouse Villas TreeHouse Villas</Card.Title>
                    <Card.Text>
                        <img className="img-fluid" src={snap1} alt=""/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                <Card className="snapcard" border="dark" style={{ width: '18rem' }}>
                    <Card.Header><small className="text-muted">Chile</small></Card.Header>
                    <Card.Body>
                    <Card.Title className="fw-bold">Explore Patagonia</Card.Title>
                    <Card.Text>
                        <img className="img-fluid" src={snap2} alt=""/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                <Card className="snapcard" border="dark" style={{ width: '18rem' }}>
                    <Card.Header><small className="text-muted">Mexico</small></Card.Header>
                    <Card.Body>
                    <Card.Title className="fw-bold">Grand Miramar</Card.Title>
                    <Card.Text>
                        <img className="img-fluid" src={snap3} alt=""/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                <Card className="snapcard" border="dark" style={{ width: '18rem' }}>

                    <Card.Header><small className="text-muted">Finland</small></Card.Header>
                    <Card.Body>
                    <Card.Title className="fw-bold">Kakslauttanen Arctic Resort</Card.Title>
                    <Card.Text>
                        <img className="img-fluid" src={snap4} alt=""/>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Snapshot;