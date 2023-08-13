import React, { createContext } from 'react';
import Navbar from './Navbar';
import './../css/cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CartItem from './CartItem';
import DealData from './DealData';
import { useCart } from 'react-use-cart';

export const CartContext = createContext();

function Cart() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    if (isEmpty) return <p>Your Cart is Empty!</p>

    return (
        <div>
            <CartContext.Provider value={DealData}>
                <Navbar />
                <div className='subMainDiv'>
                    <h3 className='headingText'>Shopping Cart</h3>
                    <p className='cartItem'>You have <span className='cartItemCount'>5</span> items in your cart</p>
                </div>
                <div className='section'>
                    <Scrollbars>
                        <CartItem />
                    </Scrollbars>
                </div>
                <div className='cartTotal'>
                    <div className='subCartTotal'>
                        <p>Cart Total : <span className='cartTotalPrice'>₹5,99,995</span></p>
                        <button className='checkoutButton'>Checkout   <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </CartContext.Provider>
        </div>
    );
}

export default Cart;