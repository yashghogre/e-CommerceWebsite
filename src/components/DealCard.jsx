import React, { useState } from 'react';
import './../css/dealCard.css';
import toast, { Toaster } from 'react-hot-toast';

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