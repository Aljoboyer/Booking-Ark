import React, { useState } from 'react';
import {Row, Col, Form} from 'react-bootstrap'
import { Link, useNavigate,  useLocation } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';
import Usernavber from '../../Userpages/UserNavbar/Usernavber';
import './login.css'
const Login = () => {
    const [formdata, setFormdata] = useState({});
    const [logerror, setLogerror] = useState('');
    const {LoginUser} = useAuth()
    const navigate = useNavigate();
    const location = useLocation()

    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }
    const SubmitHanlder = e => {
        e.preventDefault();
        if(formdata.email && formdata.password)
        {
            LoginUser(formdata.email , formdata.password, navigate, location)
            setLogerror('')
        }
        else{
            setLogerror('Please Enter Your Email/Password Correctly')
        }
    }
    return (
        <div className="container-fluid">
            <Usernavber></Usernavber>
            <Row className="algin-items-center justify-content-center logins">
                <Col lg={7} sm={12} md={8} className="loginform my-4 p-4">
                    <h5 className="text-danger fw-bold">{logerror}</h5>
                <h3 className="my-4 fw-bold text-light">Log in Booking Ark</h3>
                    <form onSubmit={SubmitHanlder}>
                    <Form.Floating className="mb-3 fw-bold text-primary">
                    <Form.Control
                    className="w-75"
                    id="floatingInputCustom"
                    type="email"
                    name="email"
                    onBlur={onblurHandler}
                    placeholder="Your Email address"
                    />
                    <label className="fw-bold text-primary" htmlFor="floatingInputCustom">Your Email address</label>
                </Form.Floating>
                <Form.Floating className="fw-bold text-primary">
                    <Form.Control className="w-75"
                    id="floatingPasswordCustom"
                    type="password"
                    name="password"
                    onBlur={onblurHandler}
                    placeholder="Password"
                    />
                    <label htmlFor="floatingPasswordCustom">Your Password</label>
                </Form.Floating>
                <button type="submit" className="btn btn-light fw-bold rounded my-3" >Login</button>
                    </form>

                    <Link className="fw-bold text-info fs-6 " to="/register">Are New Here ? Register Please</Link>
                </Col>
            </Row>
        </div>
    );
};

export default Login;