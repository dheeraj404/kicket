import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ResponsiveCard from './ ResponsiveCard';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const ResponsiveCarousel = () => {
    const data = [
        {
            imageUrl: '/card.png',
            title: 'Title 1',
            text: 'This is the description for item 1.'
        },
        {
            imageUrl: '/card.png',
            title: 'Title 2',
            text: 'This is the description for item 2.'
        },
        {
            imageUrl: '/card.png',
            title: 'Title 3',
            text: 'This is the description for item 3.'
        },
        // Add more items as needed
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <div style={{ margin: '0 20px' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Slider {...settings} style={{width:'80%'}} className=''>
                {data.map((item, index) => (
                    <div key={index}>
                        <ResponsiveCard 
                            image={item.imageUrl} 
                            tagLine={item.title} 
                            text={item.text} 
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ResponsiveCarousel;
