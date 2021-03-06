import React, { useState } from 'react';
import {Form,Row,Col,Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

const Addhoteldata = () => {
    const [hoteldata, setHoteldata] = useState({});
    const [img, setImg] = useState('');
    const [img2, setImg2] = useState('');

    const imgHandler = e => {
        const data = e.target.files[0];
        setImg(data)
    }
    const img2Handler = e => {
        const data2 = e.target.files[0];
        setImg2(data2)
    }
    const onBlurHandler = e => {
        const dataname = e.target.name;
        const datavalue = e.target.value;

        const newdata = {...hoteldata}
        newdata[dataname] = datavalue;

        setHoteldata(newdata)
    }

    const SubmitHandler = e => {
        e.preventDefault()
        if(!img && !img2)
            {
                return;
            }
        const fd = new FormData();
        fd.append('hotelname', hoteldata.hotelname)
        fd.append('hotellocation', hoteldata.hotellocation)
        fd.append('price', hoteldata.price)
        fd.append('space', parseInt(hoteldata.space))
        fd.append('rate', hoteldata.rate)
        fd.append('img', img)
        fd.append('img2', img2)
        fd.append('short', hoteldata.short)
        fd.append('overview', hoteldata.overview)
        fd.append('facility', hoteldata.facility)
        //uploading to database
        fetch('https://hidden-oasis-04101.herokuapp.com/addinghotel', {
            method: 'POST',
            body: fd
            })
            .then(response => response.json())
            .then(result => {
                e.target.reset();
                Swal.fire(
                    'Hotel Information Added Succesfully',
                    '',
                    'success'
                  )
            })
            .catch(error => {
                Swal.fire(
                    '!',
                    'Error!',
                    'error'
                  )
            });
        
    }
    return (
    <div className="container-fluid">
        <Row className="justify-content-center">
            <h3 className="text-center fw-bold my-4">ADD NEW HOTEL INFO</h3>
            <Col lg={8} sm={12} md={10}>
            <Form className="addform p-3" onSubmit={SubmitHandler}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold">Hotel Name</Form.Label>
                <Form.Control name="hotelname" onBlur={onBlurHandler} type="text" placeholder="Hotel Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="fw-bold">Hotel Location</Form.Label>
                <Form.Control  name="hotellocation" onBlur={onBlurHandler}  type="text" placeholder="Hotel Location" />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold">Price Per Night</Form.Label>
                <Form.Control  name="price" onBlur={onBlurHandler}  type="number" placeholder="Hotel price" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="fw-bold">Room Space</Form.Label>
                <Form.Control  name="space" onBlur={onBlurHandler}  type="Number" placeholder="Room Space" />
                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="fw-bold">Facility</Form.Label>
                <Form.Control  name="facility" onBlur={onBlurHandler}  type="text" placeholder="Hotel Facility" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="fw-bold">Rate</Form.Label>
                <Form.Control  name="rate" onBlur={onBlurHandler}  placeholder="Ratings"/>
                </Form.Group>
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col}  controlId="formFile" className="mb-3">
                <Form.Label className="fw-bold">Choose Front Image</Form.Label>
                <Form.Control onChange={imgHandler} type="file" />
            </Form.Group>

                <Form.Group as={Col}  controlId="formFile" className="mb-3">
                    <Form.Label className="fw-bold">Choose Details Image</Form.Label>
                    <Form.Control  onChange={img2Handler} type="file" />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label className="fw-bold">Short Description</Form.Label>
                <Form.Control  name="short" onBlur={onBlurHandler}  as="textarea" placeholder="Short Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label className="fw-bold">Overview</Form.Label>
                <Form.Control  name="overview" onBlur={onBlurHandler}  as="textarea" placeholder="Overview" />
            </Form.Group>

            <Button className="regbtn" type="submit">
                ADD
            </Button>
        </Form>
            </Col>
        </Row>  
    </div>
    );
};

export default Addhoteldata;