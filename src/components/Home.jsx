import React, { useState } from 'react';
import Navbar from './Navbar';
import './../css/home.css'
import BigCarousel from './BigCarousel';
import TodayDeals from './TodayDeals';
import toast, { Toaster } from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
            {/* <Skeleton count={5} /> */}
            <p className='shopByCategory'>Shop By Category:</p>
            <div className="categoryCard">
                {category.map((data) => {
                    return <p className='categoryData' onClick={() => { setOpen(!open) }}>{data}</p>
                })}
                <p className={`dropDown-menu ${open ? 'active' : 'inactive'}`}>Product</p>
            </div>
            <div>
                <BigCarousel />
            </div>
            <div className='dealsDiv'>
                <TodayDeals />
            </div>
        </div>
    );
}



export default Home;