import React from 'react';
import { Row } from 'react-bootstrap';
import adminimg from '../../../images/adminbanner.jpg';
const Dashhome = () => {
    return (
        <div className="container">
            <Row>
                <img className="img-fluid" src={adminimg} alt="" />
            </Row>
        </div>
    );
};

export default Dashhome;