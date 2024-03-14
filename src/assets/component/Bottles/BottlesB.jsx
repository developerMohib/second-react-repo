// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToLS , getStoreCart } from '../../../utilitis/localS';

const BottlesB = () => {
    // varriable set 
    const [bottles, setBottles] = useState( [] )
    const [cart, setCart] = useState([])


    // data load fetch
    useEffect( () => {
        fetch('bottol.json')
        .then (res => res.json())
        .then (data => setBottles(data))
        // .then ( data => console.log(data))
    } , [])

// data load from local storage

    useEffect( () => {
        // agei load hoy
        console.log('agei load ', bottles.length);
        // const storeCart = getStoreCart();
        // console.log(storeCart);

        if(bottles.length){
            const storeCart = getStoreCart();
            console.log(storeCart);

            const saveCart = [ ];
            for (const sinId of storeCart) {
                console.log(sinId)
                const bottle = bottles.find(bottle => bottle.id === sinId);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log(saveCart , 'save cart');
            setCart(saveCart);

            }
    } , [])


    const buttonHandler = (bottle) => {
        // console.log('going to be added' , bottle);
        const newCart = [...cart, bottle]
        setCart(newCart);
        console.log(newCart);
        addToLS(bottle.id)
    }

    return (
        <div>
            <h3>Big Bottles length : {bottles.length} </h3>
            <h4> Cart : {cart.length} </h4>
            <div className='bottleContainer'>
            {
                // bottles.map(bottle => (console.log(bottle)))
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle}
                    buttonHandler={buttonHandler}
                    ></Bottle> )
            }
            </div>
        </div>
    );
};

export default BottlesB;

