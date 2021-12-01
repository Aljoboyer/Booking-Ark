import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';

const Hotelcart = ({hoteldetails,data,day,person,price, rule, formsdata, totaldata}) => {
    const navigate = useNavigate()
    const cleaning = 10;
    const servicefee = 21;
    const total = (price * day) + cleaning + servicefee;
    const alldata ={day, person, price, cleaning, servicefee,total}

    const BookHandler = () => {
        navigate('/revirerules', {state: {data: data, alldata: alldata, hoteldetails: hoteldetails}})
    }
    return (
       <>
       {
           rule ?  <Row className="d-flex justify-content-center">
           <Col className="p-4 carts" lg={10} md={12} sm={12}>
               <img className="w-50" src={`data:image/jpeg;base64,${hoteldetails.img}`} alt="" />
           <h5>{formsdata.fromdate} <i className="fas fa-arrow-right mx-2"></i> {formsdata.todate}</h5>
           <hr />
           <h4>{formsdata.destination}</h4>
           <hr />
           <p>$ <b>{totaldata.price}</b>/Nights </p>
           <h6>{totaldata.day - 1} Night</h6>
           <h6>{totaldata.person} person</h6>
           <h6>Cleaning fee: {totaldata.cleaning}</h6>
           <h6>servicefee fee: {totaldata.servicefee}</h6>
           <hr />
           <h2>Total: {totaldata.total}</h2>
           </Col>
       </Row> :  
       <Row className="d-flex justify-content-center p-4">
           <Col className="carts p-3" lg={10} md={12} sm={12}>
               
           <h5>{data.fromdate} <i className="fas fa-arrow-right mx-2"></i>  {data.todate}</h5>
           <hr />
           <h3>{data.destination}</h3>
           <hr />
           <p>$ <b>{price}</b>/Nights </p>
           <h6>{day} Night</h6>
           <h6>{person} person</h6>
           <h6>Cleaning fee: {cleaning}</h6>
           <h6>servicefee fee: {servicefee}</h6>
           <hr />
           <h2>Total: {total}</h2>
          <button onClick={BookHandler} className="btn regbtn">Book Now</button>
           </Col>
       </Row>
       }
       </>
    );
};

export default Hotelcart;