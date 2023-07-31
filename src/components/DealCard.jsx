import React, { createContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './../css/dealCard.css';

// const btnIndex = createContext();

function DealCard(props) {

    const [btnText, setBtnText] = useState('Add to Cart');


    const atcBtn = (e) => {
        setBtnText('Added to Cart!');
        let btnValue = e.target.value;
    }

    return (
        <div>
            {/* <btnIndex.Provider value={btnValue}> */}
                <img className='image' src={props.image} />
                <h3 className='name'>{props.name}</h3>
                <p className='price'>{props.price}</p>
                <button className='atcButton' onClick={atcBtn} value={props.index} >{btnText}</button>
            {/* </btnIndex.Provider> */}
        </div>
    );
}

export default DealCard;
// export { btnIndex };