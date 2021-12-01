import React, { useEffect, useState } from 'react';
import { Form, Row ,Button, Col,Accordion} from 'react-bootstrap';
import {  useNavigate } from "react-router-dom";


const Hotelsearchform = () => {
    const [searchdata, setSearchdata] = useState({});
    const navigate = useNavigate();
    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
    const [newperson, setNewperson] = useState(0);

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
        setNewperson(person)
        fetch(`http://localhost:5000/searchhotels?search=${searchdata.destination}&&space=${person}`)
        .then(res => res.json())
        .then( data => {
           
            if(data.length){
                navigate('/searchitems', {state: {hotels: data, fdata: searchdata, person: person,  day: diffDays}})
                e.target.reset() 
            }
        })
       
        e.preventDefault()
         
    }

  
     return (
        <div className="container mt-4"> 
            <Form onSubmit={SubmitHandler} className=" searchform p-4 rounded">
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formlabal fs-6 fw-bold">Destination</Form.Label>
                <Form.Control  name="destination" onBlur={onBlurHandler}  type="text" placeholder="Hotel Location" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="formlabal fs-6 fw-bold">From Date</Form.Label>
                <Form.Control  name="fromdate" onBlur={onBlurHandler}  type="date" placeholder="Hotel price" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formlabal fs-6 fw-bold">To Date</Form.Label>
                <Form.Control  name="todate" onBlur={onBlurHandler}  type="date" placeholder="Room Space" />
                </Form.Group>
            </Row>
            <Row>
                <Col lg={4} md={8} sm={12}>
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
                </Col>
            </Row>
            <Button className="my-3 searchbtn"  type="submit">
          Find Hotel
      </Button>
            
        </Form>
     
        </div>
    );
};

export default Hotelsearchform;