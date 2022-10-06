import React, { useState } from 'react';
const CandidatesTable = ({ candidates }) => {
    const [showNotes, setShowNotes] = useState();
    const switchNotes = () => {
        setShowNotes(!showNotes);
    }
    return (
        <>
            <h1></h1>
            <button className='btn btn-success btn-block' onClick={switchNotes}>Toggle Notes</button>
            <table className='table table-hover table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        {showNotes && <th>Notes</th>}
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(c => {
                        return (
                            <tr key={c.id}>
                                <td>{c.firstName}</td>
                                <td>{c.lastName}</td>
                                <td>{c.phone}</td>
                                <td>{c.email}</td>
                                {showNotes && <td>{c.notes}</td>}

                            </tr>

                        )



                    })}
                </tbody>
            </table>
        </>
    )
}
export default CandidatesTable;