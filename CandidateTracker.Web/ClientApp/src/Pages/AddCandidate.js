import React, { useState } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';
import{useStatusCount}from'../StatusCount';
const AddCandidate=()=>{
    const[candidate,setCandidate]=useState(
        {
    firstName:'',
    lastName:'',
    phone:'',
    email:'',
    notes:'',
  
        })
        const history = useHistory();
        const{updateStatusCount}=useStatusCount();
        const{firstName,lastName,phone,email,notes}=candidate;
       
        const onTextChange = e =>{
            setCandidate({
                ...candidate,
                [e.target.name] : e.target.value
            })
        }
        const onSubmitClick = async () => {
            await axios.post('/api/candidate/addcandidate', candidate);
            setCandidate({firstName:'',lastName:'',phone:'',email:'',notes:''})
            updateStatusCount();
            history.push('/');
        }
        return (
            <div className='container'>
                <div className='row'>                
                    <div className='col-md-6 offset-md-3 mt-5'>
                        <div className='card card-body bg-light'>
                            <h4>Add Candidate</h4>
                            <input onChange={onTextChange}
                                value={firstName}
                                className="form-control"
                                placeholder="First Name"
                                name="firstName" />
                            <br />
                            <input onChange={onTextChange}
                                value={lastName}
                                className="form-control"
                                placeholder="Last Name"
                                name="lastName" />
                            <br />
                            <input onChange={onTextChange}
                                value={email}
                                className="form-control"
                                placeholder="Email"
                                name="email" />
                            <br />
                            <input onChange={onTextChange}
                                value={phone}
                                className="form-control"
                                placeholder="Phone Number"
                                name="phone" />
                            <br />
                            <textarea onChange={onTextChange}
                                value={notes}
                                className="form-control"
                                placeholder="Random Notes"
                                name="notes"
                                rows='6' />
                            <br />
                            <button 
                            onClick={onSubmitClick} 
                            className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default AddCandidate;
