import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {Card, Col, Form, Row,Button } from 'react-bootstrap';
import Usernavber from '../UserNavbar/Usernavber'
const Definitehotelbook = () => {
    const [hotel, setHotel] = useState({});
    const {id} = useParams();

    const [searchdata, setSearchdata] = useState({});
    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
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

    useEffect(() => {
        fetch(`https://hidden-oasis-04101.herokuapp.com/getahotel/${id}`)
        .then(res => res.json())
        .then(data => setHotel(data))
    },[id])

    const SubmitHandler = e => {
        e.preventDefault()
        navigate(`/detailshotel/${hotel._id}`, {state: {fdata: searchdata, person: person,  day: diffDays}})
    }
    return (
        <div className="container">
            <Usernavber></Usernavber>
            <h4 className="fw-bold my-4 snaptitle text-center">Please Confirm us Your Bookings Details</h4>
            <Row className="justify-content-center g-2 my-4">
                <Col lg={5} sm={12} md={6}>
                <Form onSubmit={SubmitHandler} className=" searchform p-4 rounded">
            <Row className="my-4">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formlabal fs-6 fw-bold">Destination</Form.Label>
                <Form.Control  name="destination" onBlur={onBlurHandler}  type="text" placeholder="Hotel Location" />
                </Form.Group>
            </Row>
            <Row className="my-4">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="formlabal fs-6 fw-bold">From Date</Form.Label>
                <Form.Control  name="fromdate" onBlur={onBlurHandler}  type="date" />
                </Form.Group>
            </Row>
            <Row className="my-4">
                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="formlabal fs-6 fw-bold">To Date</Form.Label>
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
            Book Hotel
            </Button>
                
            </Form>
                </Col>
                <Col lg={5} sm={12} md={6}>
                <Card>
        <Card.Img variant="top" className="imgs" src={`data:image/jpeg;base64,${hotel.img}`} />
        <Card.Body>
          <Card.Title><h3>{hotel.hotelname}</h3></Card.Title>
          <Card.Text>
          <p>{hotel.short}</p>
            <h5>$ {hotel.price}</h5>
            <p>Room {hotel.space}</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
    </Card.Footer>
      </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Definitehotelbook;