import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className= 'card-container'> 
        <h2> {props.system.system_name} </h2>
        <p> {props.system.quality_status} </p>
        <p> {props.system.capabilities.join(', ')} </p>
        <p> Average Availability speed: {props.system.avg_availablity_speed} </p>
        <p> Booking Failure Rate: {props.system.booking_failure_rate} </p>
    </div>
)