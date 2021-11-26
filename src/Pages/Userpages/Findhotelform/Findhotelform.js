import React, { useEffect, useState } from 'react';
import { Col, Form, Row,Button } from 'react-bootstrap';
import Allhotels from '../Allhotels/Allhotels';
import Usernavber from '../UserNavbar/Usernavber';
import { Link, useNavigate } from "react-router-dom";

const Findhotelform = () => {
    const [searchdata, setSearchdata] = useState({});
    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
    const [newperson, setNewperson] = useState(0);
    const navigate = useNavigate();

    const onBlurHandler = e => {
        const searchtext = e.target.name;
        const searchvalue = e.target.value;

        const newdata = {...searchdata}
        newdata[searchtext] = searchvalue;
        setSearchdata(newdata)
    }
    const person = child + adult;

    //counting days between two dates
    const dats = new Date(searchdata.fromdate)
    const dats2 = new Date(searchdata.todate)
    const seting1 = ((dats.getMonth() > 8) ? (dats.getMonth() + 1) : ('0' + (dats.getMonth() + 1))) + '/' + ((dats.getDate() > 9) ? dats.getDate() : ('0' + dats.getDate())) + '/' + dats.getFullYear()
    const seting2 = ((dats2.getMonth() > 8) ? (dats2.getMonth() + 1) : ('0' + (dats2.getMonth() + 1))) + '/' + ((dats2.getDate() > 9) ? dats2.getDate() : ('0' + dats2.getDate())) + '/' + dats2.getFullYear()

    const date1 = new Date(seting1);
    const date2 = new Date(seting2);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const SubmitHandler = e => {
        e.preventDefault()
        setNewperson(person)
        fetch(`http://localhost:5000/findhotels?destination=${searchdata.destination}&&space=${person}`)
        .then(res => res.json())
        .then(data => {
            if(data)
            {
                setChild(0);
                setAdult(0);
                navigate('/searchitems', {state: {hotels: data, fdata: searchdata, person: person,  day: diffDays}})
                e.target.reset()
            }
        } )
       
        
    }
    return (
        <div className="container-fluid">
             <Usernavber></Usernavber>
    <Row className="">
        <Col lg={2} sm={12} md={12}>
             <Form onSubmit={SubmitHandler} className=" searchform p-4 rounded">
            <Row className="my-4">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Destination</Form.Label>
                <Form.Control  name="destination" onBlur={onBlurHandler}  type="text" placeholder="Hotel Location" />
                </Form.Group>
            </Row>
            <Row className="my-4">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>From Date</Form.Label>
                <Form.Control  name="fromdate" onBlur={onBlurHandler}  type="date" />
                </Form.Group>
            </Row>
            <Row className="my-4">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>To Date</Form.Label>
                <Form.Control  name="todate" onBlur={onBlurHandler}  type="date"  />
                </Form.Group>
            </Row>
            <Row className="my-4">
               <h5 className="my-2">Adult :<i  onClick={() => {
                   if(adult > 0) 
                   {
                    setAdult(adult - 1)
                   }
               }} className="fas fa-minus ms-2"> <span className="ms-2">{adult}</span></i> <i onClick={() => setAdult(adult + 1)} className="fas fa-plus ms-2"></i></h5>

               <h5 className="my-2">Child :<i onClick={() => {
                   if(child > 0)
                   {
                    setChild(child - 1)
                   }
               }}  className="fas fa-minus mx-2"> <span className="ms-2">{child}</span></i> <i onClick={() => setChild(child + 1)} className="fas fa-plus ms-2"></i></h5>
            </Row>
                <Button  className="my-3 searchbtn"  type="submit">
            Find Hotel
            </Button>
                
            </Form>
    </Col>
                <Col lg={10} sm={12} md={12}>
                    <Allhotels></Allhotels>
                </Col>
             </Row>
        </div>
    );
};

export default Findhotelform;