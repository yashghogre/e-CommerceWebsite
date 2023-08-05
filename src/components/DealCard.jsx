import React, { useState } from 'react';
import './../css/dealCard.css';

function DealCard(props) {
    const [btnText, setBtnText] = useState('Add to Cart');

    const atcBtn = (e) => {
        setBtnText('Added to Cart!');
        console.log(props.index);
        console.log(props.name);
    }

    return (
        <div>
            <img className='image' src={props.image} />
            <h3 className='name'>{props.name}</h3>
            <p className='price'>{props.price}</p>
            <button className='atcButton' onClick={atcBtn} value={props.index} >{btnText}</button>
        </div>
    );
}

export default DealCard;