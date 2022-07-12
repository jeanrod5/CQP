import React from 'react';

import { Card } from '../card/card.component';

import './card-list.styles.css';

export const CardList = props => (
    <div className= 'card-list'>
        {props.systems.map(system => ( 
            <Card key={system.id} system={system}/>
        ))}
    </div>
);