import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const StatusContext = createContext();
const StatusContextComponent = ({ children }) => {
    const [statusCount, setStatusCount] = useState(
        {
            pending: 0,
            confirmed: 0,
            refused: 0
        }
    )
    const updateStatusCount = async () => {
        const { data } = await axios.get('/api/candidate/getcounts');
        setStatusCount(data);
    }
    useEffect(() => {
        updateStatusCount();
    }, []);
    return (
        <StatusContext.Provider value={{ statusCount, updateStatusCount }}>
            {children}
        </StatusContext.Provider>
    )
}
const useStatusCount = () => {
    return useContext(StatusContext);
}
export { StatusContextComponent, useStatusCount };