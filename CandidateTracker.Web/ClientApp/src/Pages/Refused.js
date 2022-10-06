import React, { useState, useEffect } from "react";
import axios from 'axios';
import CandidatesTable from '../Components/CandidatesTable';
const Refused = () => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const getRefusedCandidates = async () => {
            const { data } = await axios.get('/api/candidate/getrefused');
            setCandidates(data);
        }
        getRefusedCandidates();
    }, [])
    return (
        <>
            <h1>Refused</h1>
            <CandidatesTable candidates={candidates} />
        </>

    )
}
export default Refused;