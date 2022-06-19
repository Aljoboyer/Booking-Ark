import React from 'react';
import {Row, Col} from 'react-bootstrap'
import backpeck from '../../../images/backpeck.jpg'
import insurance from '../../../images/insurance.webp'
import cheapest from '../../../images/cheapes.webp'
import checklist from '../../../images/travelcheklis.webp'
import Subscribe from '../Userhome/Subscribe/Subscribe';
import Usernavber from '../UserNavbar/Usernavber';

const TravelAdvise = () => {
    return (
        <div className="container-fluid mx-auto">
            <Usernavber/>
            <Row className='container my-4'>
                <Row className="justify-content-center g-3">
                    <h2 className='rgular-color regular-family fw-bold'>top travel tips</h2>
                    <Col lg={7} md={8} sm={12}>
                        <h4 className='text-warning regular-family fw-bold'>Packing Like a Pro and Traveling Light—My Ultimate Guide</h4>
                        <img className="img-fluid" src={backpeck} alt=""/>
                    </Col>
                    <Col lg={5} md={4} sm={12}>
                        <Row className="mb-3">
                            <Col lg={6} md={6} sm={12}>
                                <img className="tipsimg w-75" src={insurance} alt="" />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <h5 className='tips-text regular-color regular-family fw-bold'>Insurance Review: Heymondo vs. World Nomads vs. Safety Wing</h5>
                                <p  className='text-muted regular-family fw-bold'>FLights</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col lg={6} md={6} sm={12}>
                                <img className="tipsimg w-75" src={cheapest} alt="" />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h5 className='tips-text regular-color regular-family fw-bold'>My ULTIMATE Tips for Finding the Cheapest (and Best) Flights</h5>
                            <p  className='text-muted regular-family fw-bold'>travel tips</p>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col lg={6} md={6} sm={12}>
                                <img className="tipsimg w-75" src={checklist} alt="" />
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                            <h5 className='tips-text regular-color regular-family fw-bold'>Travel Checklist: 15 Things To Always Remember Before You Go</h5>
                            <p  className='text-muted regular-family fw-bold'>before you to go</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <Subscribe></Subscribe>
        </div>
    );
};

export default TravelAdvise;