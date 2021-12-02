import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
import Usernavber from '../UserNavbar/Usernavber';

const Mybooking = () => {
    const {user} = useAuth()
    const [bookings, setBookings] = useState([])
    useEffect(() => {
        fetch(`https://hidden-oasis-04101.herokuapp.com/bookings?email=${user.email}`,{
            headers:{
                'authorization' : `Bearer ${localStorage.getItem('idtoken')}`
            }
        })
        .then(res => res.json())
        .then(data => setBookings(data))
    },[user.email])
    console.log(bookings)
    return (
        <div className="container-fluid">
            <Usernavber></Usernavber>
            <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>Hotel Name</th>
                <th>Location</th>
                <th>Duration</th>
                <th>Person</th>
                <th>Paynent Date</th>
                <th>Paynent Amount</th>
                </tr>
            </thead>
            <tbody>
            {
                bookings.message === 'UnAuthorised' ? <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
                </div> : <>  {
                    bookings.map(booking =>
                    <tr>
                        <td>{booking.hotelname}</td>
                        <td>{booking.location}</td>
                        <td>{booking.fromdate} To {booking.todate}</td>
                        <td>{booking.person}</td>
                        <td>{booking.paymentdate}</td>
                        <td>{booking.amount}</td>
                    </tr>)
                }</>
            }
               
              
            </tbody>
        </Table>
        </div>
    );
};

export default Mybooking;