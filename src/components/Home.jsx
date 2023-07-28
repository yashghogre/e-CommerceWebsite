import React, { useState } from 'react';
import Navbar from './Navbar';
import './../css/home.css'
import BigCarousel from './BigCarousel';
import TodayDeals from './TodayDeals';

const Home = () => {

    const [open, setOpen] = useState(false);

    const category = ["Grocery", "Mobiles", "Fashion", "Home & Furniture", "Appliances", "Travel", "Top Offers", "Beauty", "Toys & More", "Two Wheelers"];

    // const dropDownItem = (props) => {
    //     return(
    //         <p>props.text</p>
    //     )
    // }

    return (
        <div>
            <Navbar />
            <p className='shopByCategory'>Shop By Category:</p>
            <div className="categoryCard">
                {category.map((data) => {
                    return <p onClick={() => { setOpen(!open) }}>{data}</p>
                })}
                <p className={`dropDown-menu ${open ? 'active' : 'inactive'}`}>Product</p>
            </div>
            <div>
                <BigCarousel />
                <h1>hiii</h1>
            </div>
                {/* <div className="dealsDiv">
                <h3 className='dealsText'>Today's Deals</h3>
                <TodayDeals />
            </div>  */}
        </div>
    );
}



export default Home;