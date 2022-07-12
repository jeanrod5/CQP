import React, {useState, useEffect} from 'react';

import './table.styles.css';

export function TableData() {
    const [data, getData] = useState([])
    const URL = 'https://systems-api.herokuapp.com/systems_list';
 
    useEffect(() => {
        fetchData()
    }, [])
 
 
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
 
            .then((response) => {
                console.log(response);
                getData(response);
            })
 
    }
    
    return (

            <tbody className="table-container">
                <tr>
                    <th>System Names</th>
                    <th>Quality Status</th>
                    <th>Capabilities</th>
                    <th>Average Availability Speed</th>
                    <th>Booking Failure Rate</th>
                </tr>
                {data.filter(systems => systems.quality_status === 'Silver').map((item) => (
                    <tr className="tr">
                        <td>{item.system_name}</td>
                        <td>{item.quality_status}</td>
                        <td>{item.capabilities.join(', ')}</td>
                        <td>{item.avg_availablity_speed}</td>
                        <td>{item.booking_failure_rate}</td>
                    </tr>
                ))}
            </tbody>
    );
}
 
export default TableData;