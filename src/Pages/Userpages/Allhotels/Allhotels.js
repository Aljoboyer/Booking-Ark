import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Hotels from './Hotels';
import './hotel.css'
import { filter } from 'dom-helpers';
const Allhotels = () => {
    const [hotels, setHotels] = useState([]);
    const [filterhotel, setFilterhotel] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/hotels')
        .then(res => res.json())
        .then( data => setHotels(data))
    } ,[])

    const FilterHandler = (item) => {
        if(item === 'all')
            {
                const filteritem = []
                setFilterhotel(filteritem)
                console.log('cancel click', item, filteritem)
            }  
        if(item === 'cancel')
            {
                const filteritem = hotels.filter(hotel => hotel.facility === 'cancelation');
                setFilterhotel(filteritem)
                console.log('cancel click', item, filteritem)
            }   
        else if(item === 'breakfast')
            {
                const filteritem = hotels.filter(hotel => hotel.facility === 'breakfast');
                setFilterhotel(filteritem)
            }
        else if(item === 'pool')
            {
                const filteritem = hotels.filter(hotel => hotel.facility === 'pool');
                setFilterhotel(filteritem)
            }
        else  if(item === 'fitness')
            {
                const filteritem = hotels.filter(hotel => hotel.facility === 'fitness');
                setFilterhotel(filteritem)
            }
    }
    return (
        <div className="container-fluid mt-4">
            <Row className="justify-content-center my-4 gy-3">
            <Col onClick={() => FilterHandler('all') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                    <h6>All</h6>
                </Col>
                <Col onClick={() => FilterHandler('cancel') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                    <h6>Cancelation Flexibility</h6>
                </Col>
                <Col onClick={() => FilterHandler('breakfast') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                <h6>Free Breakfast</h6>
                </Col>
                <Col onClick={() => FilterHandler('pool') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                <h6>Pool</h6>
                </Col>
                <Col onClick={() => FilterHandler('fitness') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                <h6>Fitness Center</h6>
                </Col>
            </Row>
            {
                filterhotel.length ?  <Row className="justify-content-center">
                {
                    filterhotel.map(hotel => <Hotels  key={hotel._id} hotel={hotel}></Hotels>)
                }
            </Row> : <> { hotels.length ? <Row className="justify-content-center">
                {
                    hotels.map(hotel => <Hotels  key={hotel._id} hotel={hotel}></Hotels>)
                }
            </Row> 
            : 
        <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube"></div>
        <div className="sk-cube2 sk-cube"></div>
        <div className="sk-cube4 sk-cube"></div>
        <div className="sk-cube3 sk-cube"></div>
        </div> } </>
            }
            
            
        </div>
    );
};

export default Allhotels;