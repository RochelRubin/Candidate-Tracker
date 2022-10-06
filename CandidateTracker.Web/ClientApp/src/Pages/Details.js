import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStatusCount } from '../StatusCount';
import produce from 'immer';

const Details = () => {
    const { id } = useParams();
    const [candidate, setCandidate] = useState(
        {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            notes: '',
            registrationStatus: ''
        }
    )
    
    const { updateStatusCount } = useStatusCount();
    useEffect(() => {
        const getCandidate = async () => {
            const { data } = await axios.get(`/api/candidate/getbyid?id=${id}`);
            setCandidate(data);
        }
        getCandidate();
    })
   
    const onUpdateStatusClick = async registrationStatus => {
       const{id}=candidate;
        await axios.post('/api/candidate/updatestatus', {registrationStatus,id});
        const nextState = produce(candidate, draft => {
            draft.registrationStatus = registrationStatus;
        });
        setCandidate(nextState);
        await updateStatusCount();
    }
    const { firstName, lastName, email, phone, registrationStatus, notes } = candidate;
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Name: {firstName} {lastName}</h4>
                    <h4>Email: {email}</h4>
                    <h4>Phone: {phone}</h4>
                    <h4>Status: {registrationStatus}</h4>
                    <h4>Notes:</h4>
                    <p>{notes}</p>
                    {registrationStatus === 'Pending' && <div>
                        <button onClick={() => onUpdateStatusClick('Confirmed')} className="btn btn-primary">Confirm</button>
                        <button onClick={() => onUpdateStatusClick('Refused')} className="btn btn-danger">Refuse</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}
export default Details;