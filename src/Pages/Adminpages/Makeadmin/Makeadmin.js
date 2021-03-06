import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
const Makeadmin = () => {
    const [email, setEmail] = useState('')
    const onBlurHandler = e => {
        setEmail(e.target.value)
    }
    const  SubmitHandler = e => {
        e.preventDefault()

        fetch(`https://hidden-oasis-04101.herokuapp.com/addmin?email=${email}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire(
                    'Admin Added Succesfully',
                    '',
                    'success'
                  )
                e.target.reset()
            }
        })
    }
    return (
        <div className="container-fluid">
            <h3 className="fw-bold my-4 text-center">To Make Admin Enter Email And Add</h3>
            <Form onSubmit={SubmitHandler}>
             <Form.Group controlId="formGridPassword">
                <Form.Label>Enter Email</Form.Label>
                <Form.Control  name="email" onBlur={onBlurHandler}  type="text" placeholder="Enter Email" />
                </Form.Group>
                <button type="submit" className="btn btn-info fw-bold my-4">Add</button>
            </Form>
        </div>
    );
};

export default Makeadmin;