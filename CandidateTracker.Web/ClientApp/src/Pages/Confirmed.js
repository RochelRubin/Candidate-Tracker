import React, { useState, useEffect } from "react";
import axios from 'axios';
import CandidatesTable from '../Components/CandidatesTable';
const Confirmed= () => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const getConfirmedCandidates = async () => {
            const { data } = await axios.get('/api/candidate/getconfirmed');
            setCandidates(data);
        }
        getConfirmedCandidates();
    }, [])
    return (
        <>
            <h1>Confirmed</h1>
            <CandidatesTable candidates={candidates} />
        </>

    )
}
export default Confirmed;