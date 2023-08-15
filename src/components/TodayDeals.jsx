import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './../css/todayDeals.css';
import DealCard from './DealCard';
import DealData from './DealData';

const TodayDeals = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    const dealDCard = (val, index) => {
        return (
            <div>
                <DealCard
                    image={val.image}
                    name={val.name}
                    price={val.price}
                    key={index}
                    index={index}
                />
            </div>
        );
    }


    return (
        <div>
            <h2 className='dealsText'>Deals of the Day</h2>
            <Carousel responsive={responsive}
                swipeable={false}
                draggable={false}>
                {DealData.map((value, index) => { return (dealDCard(value, index)) })}
            </Carousel>
        </div>
    );
}

export default TodayDeals;