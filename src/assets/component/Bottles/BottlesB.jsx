import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const BottlesB = () => {
    // varriable set 
    const [bottles, setBottles] = useState( [] )

    // data load fetch
    useEffect( () => {
        fetch('bottol.json')
        .then (res => res.json())
        .then (data => setBottles(data))
        // .then ( data => console.log(data))
    } , [])

    return (
        <div>
            <h3>Big Bottles length : {bottles.length} </h3>
            <div className='bottleContainer'>
            {
                // bottles.map(bottle => (console.log(bottle)))
                bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} ></Bottle> )
            }
            </div>
        </div>
    );
};

export default BottlesB;

