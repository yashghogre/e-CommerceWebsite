import React, { useContext } from 'react';
// import { productContext } from './DealCard';
import DealData from './DealData';
import { CartContext } from './Cart';

const CartItem = () => {

    // const cartProductIndex = useContext(productContext);
    // console.log(cartProductIndex);

    const item = useContext(CartContext);

    return (
        <div>
            <div className='itemDiv'>
                <div>
                    <img className='cardItemImage' src='https://www.pngmart.com/files/22/iPhone-14-PNG-Transparent.png' alt='iphone' />
                </div>
                <div>
                    <h2 className='titleNameText'>Apple iPhone 14</h2>
                </div>
                <div>
                    <i className='fas fa-minus'></i>
                    <input className='amountInput' type='text' placeholder='1' />
                    <i className='fas fa-plus'></i>
                </div>
                <div>
                    <h3 className='price'>₹1,19,999</h3>
                </div>
                <div>
                    <i className='fas fa-trash-alt' ></i>
                </div>
            </div>
            {/* <h1>{cartProductIndex}</h1> */}
        </div>
    )
}

export default CartItem;