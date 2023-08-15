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

    return (
        <div>
            <Navbar />
            <p className='shopByCategory'>Shop By Category:</p>
            <div className="categoryCard">
                {category.map((data, index) => {
                    return <p key={index} className='categoryData' onClick={() => { setOpen(!open) }}>{data}</p>
                })}
                <p className={`dropDown-menu ${open ? 'active' : 'inactive'}`}>Product</p>
            </div>
            <div>
                <BigCarousel />
            </div>
            <div className='dealsDiv'>
                <TodayDeals />
            </div>
            <div className='footer'>
                <p className='footerText'>Made by <a  href='https://bio.link/yashghogre' className='footerLink'>Yash Ghogre</a></p>
            </div>
        </div>
    );
}



export default Home;