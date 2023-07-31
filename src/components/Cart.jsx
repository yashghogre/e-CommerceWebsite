import React from 'react';
import Navbar from './Navbar';
import './../css/cart.css';

function Cart() {
    return (
        <div>
            <Navbar />
            <div className='subMainDiv'>
                <h2>Items from your Cart will appear here</h2>
            </div>
        </div>
    );
}

export default Cart;