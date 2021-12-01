import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Managehotel from './Managehotel';
import Swal from 'sweetalert2';
const Managehotels = () => {
    const [hotels, setHotels] = useState([]);
    const [demo, setDemo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/managehotel')
        .then(res => res.json())
        .then(data => setHotels(data))
    },[demo])
    
    const DeleteHanlder = id => {
        fetch(`http://localhost:5000/deletehotel?id=${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data)
            {
                Swal.fire(
                    'Hotel Succesfully',
                    '',
                    'success'
                  )
                  setDemo(hotels)
            }
        })
    }
    return (
        <div className="container-fluid">
            <h3 className="text-center fw-bolt my-4">Manage All Hotels</h3>
            {
                hotels.length ?
                <Row className="justify-content-center g-2">
                    {
                        hotels.map(hotel => <Managehotel DeleteHanlder={DeleteHanlder} key={hotel._id} hotel={hotel} ></Managehotel>)
                    }
                </Row>
                : <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
                </div>
            }
        </div>
    );
};

export default Managehotels;