import React, { useContext } from 'react';
import Navbar from './Navbar';
import './../css/cart.css';
import { btnIndex } from './DealCard';
import DealData from './DealData';

function Cart() {

    const dealIndex = useContext(btnIndex);

    // let cartArr = [];

    // cartArr = [...cartArr, DealData[dealIndex]];

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