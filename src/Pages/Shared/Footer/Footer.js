import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './footer.css'
const Footer = () => {
    return (
        <div className="container-fluid footers">
            <Row className="g-3 p-2 ">
                <Col lg={3} sm={12} md={6}>
                <h4 className="fotertitle">ABOUT</h4>
                <p className="ftxt">About US</p>
                <p className="ftxt">Pricing</p>
                <p className="ftxt">FAQ</p>
                <p className="ftxt">Terms of Service</p>
                <p className="ftxt">Privacy Policy</p>
                <p className="ftxt">Refund Policy</p>
                </Col>
                <Col lg={3} sm={12} md={6}>
                <h4  className="fotertitle">CONTACT</h4>
                <p className="ftxt">Contact Us</p>
                <p className="ftxt">Low Rate Guarantee</p>
                <p className="ftxt">Become an Affiliate</p>
                <p className="ftxt">Affiliate Login</p>
                </Col>
                <Col lg={3} sm={12} md={6}>
                <h4  className="fotertitle">Community</h4>
                <p className="ftxt">disaster relief housing</p>
                <p className="ftxt">Support Afghan refugees</p>
                <p className="ftxt">Celebrating diversity and belonging</p>
                <p className="ftxt">Combating discrimination</p>
                </Col>
                <Col lg={3} sm={12} md={6}>
                    <h2  className="fotertitle">Booking Ark</h2>
                    <h4 className="ftxt">Follow Us</h4>
                    <i className="ftxt fa-3x mx-2 fab fa-twitter"></i>
                    <i className="ftxt fa-3x mx-2 fab fa-facebook-square"></i>
                    <i className="ftxt fa-3x mx-2 fab fa-instagram"></i>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;