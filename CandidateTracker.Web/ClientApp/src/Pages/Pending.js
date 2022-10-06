import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Pending = () => {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        const getPendingCandidates = async () => {
            const { data } = await axios.get('/api/candidate/getpending');
            setCandidates(data);
        }
        getPendingCandidates();
    }, [])
    return (
        <>
            <h1>Pending</h1>
            <table className="table table-hover table striped table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c => {
                        return (
                            <tr key={c.id}>
                                <td>
                                    <Link to={`/details/${c.id}`}>View Details</Link>
                                </td>
                                <td>{c.firstName}</td>
                                <td>{c.lastName}</td>
                                <td>{c.phone}</td>
                                <td>{c.email}</td>
                            </tr>
                        )
                    }

                    )}
                </tbody>
            </table>

        </>

    )
}
export default Pending;