import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './../css/todayDeals.css';
import DealCard from './DealCard';
import iphone from './../images/todayDealsImages/iphone.png';
import sGalaxy from './../images/todayDealsImages/sGalaxy.png';
import macbook from './../images/todayDealsImages/macbook.png';
import oneplus from './../images/todayDealsImages/oneplus.png';
import mac from './../images/todayDealsImages/mac.png';
import luffy from './../images/todayDealsImages/luffy.png';

const TodayDeals = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };



    return (
        <div>
            <h2 className='dealsText'>Deals of the Day</h2>
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}>
                <div>
                    <DealCard
                        image={iphone}
                        name='Apple iPhone 14'
                        price='₹1,19,999'
                    />
                </div>
                <div>
                    <DealCard
                        image={sGalaxy}
                        name='Samsung Galaxy S23'
                        price='₹1,09,999'
                    />
                </div>
                <div>
                    <DealCard
                        image={macbook}
                        name='Apple Macbook Pro'
                        price='₹1,49,999'
                    />
                </div>
                <div>
                    <DealCard
                        image={oneplus}
                        name='OnePlus Nord 2'
                        price='₹23,999'
                    />
                </div>
                <div>
                    <DealCard
                        image={mac}
                        name='Apple iMac'
                        price='₹1,33,999'
                    />
                </div>
                <div>
                    <DealCard
                        image={luffy}
                        name='Luffy Gear 5 Action Figure'
                        price='₹10,999'
                    />
                </div>
                <div>
                    <DealCard
                        image={luffy}
                        name='Luffy Gear 5 Action Figure'
                        price='₹10,999'
                    />
                </div>
            </Carousel>
        </div>
    );
}

export default TodayDeals;