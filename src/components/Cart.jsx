import React from 'react';
import Navbar from './Navbar';
import './../css/cart.css';
import { Scrollbars } from 'react-custom-scrollbars-2';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

function Cart() {

    const data = useSelector(state => state.addToCart)

    return (
        <div>
            <Navbar />
            <div className='subMainDiv'>
                <h3 className='headingText'>Shopping Cart</h3>
                <p className='cartItem'>You have <span className='cartItemCount'>5</span> items in your cart</p>
            </div>
            <div className='section'>
                <Scrollbars>
                    {data.map((value, index) => {
                        return (
                            <CartItem
                                key={index}
                                image={value.image}
                                name={value.name}
                                price={value.price}
                            />
                        )
                    })}
                </Scrollbars>
            </div>
            <div className='cartTotal'>
                <div className='subCartTotal'>
                    <p>Cart Total : <span className='cartTotalPrice'>₹5,99,995</span></p>
                    <button className='checkoutButton'>Checkout   <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
}

export default Cart;