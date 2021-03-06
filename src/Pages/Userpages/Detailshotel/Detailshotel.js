import React, { useEffect, useState } from 'react';
import { Row ,Col} from 'react-bootstrap';
import {Link,useParams, useLocation} from 'react-router-dom';
import Hotelcart from '../Hotelcart/Hotelcart';
import Usernavber from '../UserNavbar/Usernavber';

const Detailshotel = () => {
    const {state} = useLocation();

    const [hoteldetails,setHoteldetails] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch(`https://hidden-oasis-04101.herokuapp.com/getahotel/${id}`)
        .then(res => res.json())
        .then(data => {
            if(data._id)
            {
                
                setHoteldetails(data)
            }
        })
    },[id])
   
    return (
        <div className="container-fluid">
            <Usernavber></Usernavber>
            <Row className="container pt-4 mt-4">
                <Col lg={8} md={8} sm={12}>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                        <img className="rounded w-100 h-100" src={`data:image/jpeg;base64,${hoteldetails.img}`} alt="" /> 
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                        <img className="rounded w-100 h-100" src={`data:image/jpeg;base64,${hoteldetails.img2}`} alt="" />
                        </Col>
                        <h3>{hoteldetails.hotelname}</h3>
                    <p><b>$ {hoteldetails.price}</b></p>
                    <p><b>Room: {hoteldetails.space}</b></p>
                    <p><b>{hoteldetails.hotellocation}</b></p>
                    <p>{hoteldetails.short}</p>
                 {
                     state && <>
                     <h5><b>Overview</b></h5>     
                     <p>{hoteldetails.overview}</p> 
                     
                     </>
                 }
                    </Row>
                </Col>
                <Col lg={4} md={4} sm={12}>
                   {
                       state ? <Hotelcart hoteldetails={hoteldetails} price = {hoteldetails.price} data={state.fdata} day={state.day} person={state.person}></Hotelcart> : <> 
                       <h5><b>Overview</b></h5>     
                       <p>{hoteldetails.overview}</p>
                       <Link to={`/definitehotelbook/${hoteldetails._id}`}><button className="btn regbtn fw-bold text-light">Book Now</button></Link>
                       </>
                   }
                </Col>
            </Row>
        </div>
    );
};

export default Detailshotel;