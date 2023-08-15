import React from 'react';
import './../css/dealCard.css';
import { useCart } from 'react-use-cart';
import { useDispatch } from 'react-redux';
import { addData } from '../actions';

function DealCard(props) {
    // const [btnText, setBtnText] = useState('Add to Cart');

    // const atcBtn = (e) => {
    //     setBtnText('Added to Cart!');
    //     console.log(props.index);
    //     console.log(props.name);
    // }

    const dispatch = useDispatch()

    function addDataToCart(){
        dispatch(addData({
            index: props.index,
            image: props.image,
            name: props.name,
            price: props.price
        }));
    }

    const { addItem } = useCart();

    return (
        <div>
                <img className='image' src={props.image} />
                <h3 className='name'>{props.name}</h3>
                <p className='price'>{props.price}</p>
                <button className='atcButton' onClick={addDataToCart} value={props.index} >Add to Cart</button>
        </div>
    );
}

export default DealCard;