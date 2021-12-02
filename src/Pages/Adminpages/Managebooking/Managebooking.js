import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
const Managebooking = () => {
    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetch('https://hidden-oasis-04101.herokuapp.com/managebookings')
        .then(res => res.json())
        .then(data => setBookings(data))
    },[])
    return (
        <div className="container-fluid">
            <h3 className="text-center fw-bold">All Customer Booking Here</h3>
            <Table responsive striped bordered hover>
            <thead>
                <tr>
                <th>Client Name</th>
                <th>Hotel Name</th>
                <th>Duration</th>
                <th>Person</th>
                <th>Payment Date</th>
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
                        <td>{booking.username}</td>
                        <td>{booking.hotelname}</td>
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

export default Managebooking;