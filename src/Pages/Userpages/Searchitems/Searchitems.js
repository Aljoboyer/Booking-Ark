import React, { useEffect, useReducer, useState } from 'react';
import { Col, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Usernavber from '../UserNavbar/Usernavber';
import Searchitem from './Searchitem';

const Searchitems = () => {
    const {state} = useLocation();
    const [filterhotel, setFilterhotel] = useState([]);

    const FilterHandler = (item) => {
        if(item === 'all')
            {
                const filteritem = []
                setFilterhotel(filteritem)
                console.log('cancel click', item, filteritem)
            }  
        if(item === 'cancel')
            {
                const filteritem = state.hotels.filter(hotel => hotel.facility === 'cancelation');
                setFilterhotel(filteritem)
                console.log('cancel click', item, filteritem)
            }   
        else if(item === 'breakfast')
            {
                const filteritem = state.hotels.filter(hotel => hotel.facility === 'breakfast');
                setFilterhotel(filteritem)
            }
        else if(item === 'pool')
            {
                const filteritem = state.hotels.filter(hotel => hotel.facility === 'pool');
                setFilterhotel(filteritem)
            }
        else  if(item === 'fitness')
            {
                const filteritem = state.hotels.filter(hotel => hotel.facility === 'fitness');
                setFilterhotel(filteritem)
            }
    }

    return (
        <div className="container-fluid">
            <Usernavber></Usernavber>
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

            <Row classsName="contianer justify-content-center bg-dark">
                <Col className="" lg={3} md={3} sm={6}>
                <h3><span className="">Location</span> : {state.fdata?.destination}</h3>
                </Col>
                <Col lg={3} md={3} sm={6}>
                <h3>Member : {state?.person}</h3>
                </Col>
                <Col lg={3} md={3} sm={6}>
                <h3>Day: {state?.day}</h3>
                </Col>
               
                <Col lg={3} md={3} sm={6}>
                <h3> From: {state.fdata?.fromdate} To : {state.fdata?.todate}</h3>
                </Col>
            </Row>
            {
                filterhotel.length ? <Row className="justify-content-center">
                {
                    filterhotel.map(hotel => <Searchitem searchdata={state.fdata}  diffDays={state.day} newperson={state.person} key={hotel._id} hotel={hotel}></Searchitem>)
                }
            </Row>   : <>  {
                    state.hotels === undefined ?  <Spinner animation="grow" /> 
                    :
                    <Row className="justify-content-center">
                    {
                        state.hotels.map(hotel => <Searchitem searchdata={state.fdata}  diffDays={state.day} newperson={state.person} key={hotel._id} hotel={hotel}></Searchitem>)
                    }
                </Row>
                }</>
            }

          
        </div>
    );
};

export default Searchitems;