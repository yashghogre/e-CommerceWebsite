import React, { useContext } from 'react';
import Navbar from './Navbar';
import './../css/cart.css';

function Cart() {


    let cartArr = [];

    return (
        <div>
            <Navbar />
            <div className='subMainDiv'>
                <h2>Items from your Cart will appear here</h2>
            </div>
            <div>
                {cartArr.map((val) => {
                    <h3>{val.name}</h3>
                })}
            </div>
        </div>
    );
}

export default Cart;