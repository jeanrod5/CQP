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
                    <th>Tour List</th>
                    <th>Batch Availability</th>
                    <th>Real-time Availability</th>
                    <th>Booking</th>
                    <th>Booking Cancellation</th>
                    <th>Booking Amendment</th>
                    <th>Timed Entry</th>
                    <th>Traveler Protected Email</th>
                    <th>Barcodes</th>
                    <th>Average Availability Speed</th>
                    <th>Booking Failure Rate</th>
                </tr>
                {data.filter(systems => systems.quality_status === 'Silver', 'Bronze').map((item) => (
                    <tr className="tr">
                        <td>{item.system_name}</td>
                        <td>{item.quality_status}</td>
                        <td>{item.Tour_List}</td>
                        <td>{item.Batch_Availability}</td>
                        <td>{item.Real_Time_Availability}</td>
                        <td>{item.Booking}</td>
                        <td>{item.Booking_Cancellation}</td>
                        <td>{item.Booking_Amendment}</td>
                        <td>{item.Timed_Entry}</td>
                        <td>{item.Traveler_Protected_Email}</td>
                        <td>{item.Barcodes}</td>
                        <td>{item.avg_availablity_speed}</td>
                        <td>{item.booking_failure_rate}</td>
                    </tr>
                ))}
            </tbody>
    );
}
 
export default TableData;