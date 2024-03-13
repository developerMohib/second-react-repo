
// import React from 'react';

import './Bottle.css'

const Bottle = ( {bottle} ) => {
    const { id, name, img, price, quantity, seller, ratings, ratingsCount,shipping,stock } = bottle;
    return (
        // <div className='bottleContainer'>

            <div key={id} className="bottleClass">
                <img src={img} alt={name} />
                <h3> Name : {name}</h3>
                <p> Price : {price} </p>
                <p> Quantity : {quantity} </p>
                <p> Seller : {seller} </p>
                <p> Ratings : {ratings} </p>
                <p> Ratings Count : {ratingsCount} </p>
                <p> Shipping : {shipping} </p>
                <p> Stock : {stock} </p>

                <button className='addToCart'> Add to Cart </button>
            </div>

        // </div>
    );
};

export default Bottle;