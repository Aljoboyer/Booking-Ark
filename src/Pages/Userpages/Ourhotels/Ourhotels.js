import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ourhotel from './Ourhotel';


const Ourhotels = () => {
    const [hotels, setHotels] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/hotels')
        .then(res => res.json())
        .then( data => setHotels(data))
    } ,[])

    let ours = hotels.slice(0, 5)
    return (
        <Row className="my-4 justify-content-center">
            <h1 className="fw-bold fs-1 my-4 snaptitle">Our Hotels <i className="fas fa-angle-double-right ms-2"></i></h1>
        { hotels.length ? <Row className="justify-content-center gy-3 gx-2">
                {
                    ours.map(hotel => <Ourhotel  key={hotel._id} hotel={hotel}></Ourhotel>)
                }
                <Link to="/findhotelform" ><button className="btn exbtn text-light ">More Hotels<i className="fas fa-angle-double-right ms-2"></i></button></Link>
            </Row> 
            : 
        <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
        </div> } 
        </Row>
    );
};

export default Ourhotels;