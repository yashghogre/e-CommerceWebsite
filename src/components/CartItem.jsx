import React from 'react'

const CartItem = () => {
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
        </div>
    )
}

export default CartItem