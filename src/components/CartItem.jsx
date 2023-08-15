import React from 'react';
import DealData from './DealData';

const CartItem = (props) => {

    return (
        <div>
            <div className='itemDiv'>
                <div>
                    <img className='cardItemImage' src={props.image} alt='iphone' />
                </div>
                <div>
                    <h2 className='titleNameText'>{props.name}</h2>
                </div>
                <div>
                    <i className='fas fa-minus'></i>
                    <input className='amountInput' type='text' placeholder='1' />
                    <i className='fas fa-plus'></i>
                </div>
                <div>
                    <h3 className='price'>{props.price}</h3>
                </div>
                <div>
                    <i className='fas fa-trash-alt' ></i>
                </div>
            </div>
        </div>
    )
}

export default CartItem;