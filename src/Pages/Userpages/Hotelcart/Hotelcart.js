import React from 'react';
import { Row } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';

const Hotelcart = ({data,day,person,price, rule, formsdata, totaldata}) => {
    const navigate = useNavigate()
    const cleaning = 10;
    const servicefee = 21;
    const total = (price * day) + cleaning + servicefee;
    const alldata ={day, person, price, cleaning, servicefee,total}

    const BookHandler = () => {
        navigate('/revirerules', {state: {data: data, alldata: alldata}})
    }
    return (
       <>
       {
           rule ?  <Row className="justify-content-center">
           <h2>{formsdata.fromdata} to  {formsdata.todate}</h2>
           <h3>{formsdata.destination}</h3>
           <p>$ <b>{totaldata.price}</b>/Nights </p>
           <h6>{totaldata.day - 1} Night</h6>
           <h6>{totaldata.person} person</h6>
           <h6>Cleaning fee: {totaldata.cleaning}</h6>
           <h6>servicefee fee: {totaldata.servicefee}</h6>
           <h2>Total: {totaldata.total}</h2>
       </Row> :  <Row className="justify-content-center">
           <h2>{data.fromdata} to  {data.todate}</h2>
           <h3>{data.destination}</h3>
           <p>$ <b>{price}</b>/Nights </p>
           <h6>{day} Night</h6>
           <h6>{person} person</h6>
           <h6>Cleaning fee: {cleaning}</h6>
           <h6>servicefee fee: {servicefee}</h6>
           <h2>Total: {total}</h2>
      <button onClick={BookHandler} className="btn btn-warning">Book Now</button>
       </Row>
       }
       </>
    );
};

export default Hotelcart;