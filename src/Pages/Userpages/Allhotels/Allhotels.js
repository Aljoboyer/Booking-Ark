import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Hotels from './Hotels';
import './hotel.css'
import { filter } from 'dom-helpers';
const Allhotels = () => {
    const [hotels, setHotels] = useState([]);
    const [filterhotel, setFilterhotel] = useState([])
    useEffect(() => {
        fetch('https://hidden-oasis-04101.herokuapp.com/hotels')
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
            <Row className="justify-content-center my-4 gy-3 facilityrow">
            <Col onClick={() => FilterHandler('all') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                    <h6 className="title text-center p-2">All</h6>
                </Col>
                <Col onClick={() => FilterHandler('cancel') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                    <h6 className="title text-center p-2">Cancelation Flexibility</h6>
                </Col>
                <Col onClick={() => FilterHandler('breakfast') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                <h6 className="title text-center p-2">Free Breakfast</h6>
                </Col>
                <Col onClick={() => FilterHandler('pool') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                <h6 className="title text-center p-2">Pool</h6>
                </Col>
                <Col onClick={() => FilterHandler('fitness') } className="fw-bold filtertitle" lg={2} sm={12}  md={6}>
                <h6 className="title text-center p-2">Fitness Center</h6>
                </Col>
            </Row>
            {
                filterhotel.length ?  <Row className="gy-3 gx-2 justify-content-center">
                {
                    filterhotel.map(hotel => <Hotels  key={hotel._id} hotel={hotel}></Hotels>)
                }
            </Row> : <> { hotels.length ? <Row className="justify-content-center gy-3 gx-2">
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