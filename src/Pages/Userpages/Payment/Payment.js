import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise =  loadStripe('pk_test_51Jw2mpBSwbB9BMbhsyE9VsMWMbgeGoz35VdXDYoB2C1QGFkx7JTaEG4FFXG3pyBkqupeooBX2z3nPu0zERZuO1Tw00ZtAW0Wtx');

const Payment = ({hoteldetails,totaldata,formsdata}) => {
    return (
        <div className="container">
             <Elements stripe={stripePromise}>
                <CheckoutForm hoteldetails={hoteldetails} formsdata={formsdata} totaldata={totaldata}  />
             </Elements>
        </div>
    );
};

export default Payment;