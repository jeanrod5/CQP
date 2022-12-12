import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className= 'card-container'> 
        <h2> {props.system.system_name} </h2>
        <p> {props.system.quality_status} </p>
        <p> Product List: {props.system.Tour_List} </p>
        <p> Calendar Sync: {props.system.Batch_Availability} </p>
        <p> Real-time Availability & Blockouts: {props.system.Real_Time_Availability} </p>
        <p> Bookings: {props.system.Booking} </p>
        <p> Booking Cancellations: {props.system.Booking_Cancellation} </p>
        <p> Booking Amendments: {props.system.Booking_Amendment} </p>
        <p> Scheduled Entry/ Departure Times: {props.system.Timed_Entry} </p>
        <p> Traveler Email Alias: {props.system.Traveler_Protected_Email} </p>
        <p> Barcodes & QR Codes: {props.system.Barcodes} </p>
        <p> Average Availability speed: {props.system.avg_availablity_speed} </p>
        <p> Booking Failure Rate: {props.system.booking_failure_rate} </p>
    </div>
)