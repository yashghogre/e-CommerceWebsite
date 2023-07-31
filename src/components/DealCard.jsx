import React, { useState } from 'react';
import iphone from './../images/todayDealsImages/iphone.png';
import './../css/dealCard.css';


function DealCard(props) {

    const [btnText, setBtnText] = useState('Add to Cart');

    const atcBtn = () => {
        setBtnText('Added to Cart!');
    }

    return (
        <div>
            <img className='image' src={props.image} />
            <h3 className='name'>{props.name}</h3>
            <p className='price'>{props.price}</p>
            <button className='atcButton' onClick={atcBtn}>{btnText}</button>
        </div>
    );
}

export default DealCard;