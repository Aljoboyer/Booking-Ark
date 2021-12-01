import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import Usernavber from '../../Userpages/UserNavbar/Usernavber';

const Register = () => {
    const [formdata, setFormdata] = useState({});
    const {RegisterUser} = useAuth();
    const [regerror, setRegerror] = useState('');
    const nevigate = useNavigate();

    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }

    const SubmitHanlder = e => {
        e.preventDefault();
        
        if(formdata.email)
        {
            setRegerror('')
            if(formdata.password === formdata.password2)
            {
                RegisterUser(formdata.email, formdata.password, formdata.username , nevigate)
                setRegerror('')
                e.target.reset()
            }
            else{
                setRegerror('Password Not Matched')
            }
               
        }
        else {
            setRegerror('Please Enter Your Email Correctly')
        }
    }

    return (
        <div  className="container-fluid">
             <Usernavber></Usernavber>
            <Row className="algin-items-center justify-content-center logins">
                <Col lg={7} sm={12} md={8} className="loginform my-4 p-4">
                <h3 className="my-4 fw-bold text-light">Create Account To <h2 className="text-info fw-bold">Booking Ark</h2></h3>
             
                    <form onSubmit={SubmitHanlder}>
                        <h5 className="text-danger fw-bold"></h5>
                    <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control
                    className="w-75"
                    id="floatingInputCustom"
                    type="text"
                    name="username"
                    onBlur={onblurHandler}
                    placeholder="Your Name"
                    />
                    <label htmlFor="floatingInputCustom">Your Name</label>
                </Form.Floating>

                    <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control
                    className="w-75"
                    id="floatingInputCustom"
                    type="email"
                    name="email"
                    onBlur={onblurHandler}
                    placeholder="Your Email"
                    />
                    <label htmlFor="floatingInputCustom">Your Email address</label>
                </Form.Floating>
                <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control className="w-75"
                    id="floatingPasswordCustom"
                    type="password"
                    name="password"
                    onBlur={onblurHandler}
                    placeholder="Password"
                    
                    />
                    <label htmlFor="floatingPasswordCustom">Your Password</label>
                </Form.Floating>

                <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control className="w-75"
                    id="floatingPasswordCustom"
                    type="password"
                    name="password2"
                    onBlur={onblurHandler}
                    placeholder="Re Enter Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Re Enter Password Your Password</label>
                </Form.Floating>
                <p className="text-danger fw-bold">{regerror}</p>
                <button type="submit" className="btn btn-info fw-bold rounded my-3" >Register</button>
                    </form>
                    <Link className="fw-bold text-info fs-6" to="/login">Are You Already Rgister? please Login</Link>
                </Col>
            </Row>
        </div>
    );
};

export default Register;