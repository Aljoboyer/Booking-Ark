import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import useAuth from '../../../Context/useAuth';
import Swal from 'sweetalert2';

const CheckoutForm = ({hoteldetails,formsdata, totaldata}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret,setClientSecret] = useState('')
    const price = totaldata.price;
    const {user} = useAuth();
    const [phone, setPhone] = useState('');
    const [porcessing, setProcessing] = useState(false)
    const [success, setSuccess] = useState('')
  console.log('from checkout',hoteldetails)
    const OnBlurHanlder = (e) => {
      setPhone(e.target.value)
    }

    useEffect(() => {
      fetch('http://localhost:5000/create-payment-intent',{
          method: 'POST',
          headers: {
              'content-type':'application/json'
          },
          body: JSON.stringify({price})
      })
      .then(res => res.json())
      .then(data => setClientSecret(data.clientSecret))
  },[price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
          return;
        }

        const card = elements.getElement(CardElement);

        if(card === null)
        {
          return;
        }
        setProcessing(true)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        })
        if (error) {
          Swal.fire(
            `${error.message}`,
            '',
            'error'
          )
        }
        else {
          setProcessing(false)
          console.log('[PaymentMethod]', paymentMethod);
        }
       //payment intent
       const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
        clientSecret,
        { 
          payment_method: {
            card: card,
            billing_details: {
              name: user.displayName,
              email: user.email
            },
          },
        },
      );
      if(intentError)
      {
        setProcessing(false)
        setSuccess('')
        Swal.fire(
          `${intentError.message}`,
          '',
          'error'
        )
      }
      else{
        setSuccess('success')
        Swal.fire(
          'Payment Succesfull',
          '',
          'success'
        )
        setProcessing(false)
        const payment = {
          email: user.email,
          username: user.displayName,
          paymentdate: new Date().toLocaleDateString(),
          amount: price,
          fromdate: formsdata.fromdate,
          todate: formsdata.todate,
          hotelname: hoteldetails.hotelname,
          location: hoteldetails.hotellocation,
          person: totaldata.person,
          phone: phone,
          transaction: paymentIntent.client_secret.slice('_secret')[0]
       }
             //saving payment history database
             fetch('http://localhost:5000/paymentdetailspost',{
                method: 'POST',
                headers: {
                    'content-type':'application/json'
                }, 
                body: JSON.stringify(payment)
             })
             .then(res => res.json())
             .then(data => console.log(data))
      }

    } 
    return (
        <Row className="mt-4 p-4">

            <form className="my-4 text-center bg-secondary rounded p-4" onSubmit={handleSubmit}>
            <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
              <Form.Label className="fw-bold fs-5">Phone Number</Form.Label>
              <Form.Control onBlur={OnBlurHanlder} type="number" placeholder="Enter Phone Number" />
            </Form.Group>
      <CardElement
        options={{
          style: {
            base: {
             fontWeight: 'bold',
              fontSize: '16px',
              color: 'black',
              '::placeholder': {
                color: 'black',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      {
         porcessing ? <p className="fw-bold text-primary">Processing...</p> :
         <button className="btn regbtn my-4  fw-bold w-50" type="submit" disabled={!stripe || success}>
        Pay
      </button>
      }
      
    </form>
        </Row>
    );
};

export default CheckoutForm;