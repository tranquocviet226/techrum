import React from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SlickItem from './SlickItem';
import "./SlickSlider.css";

const sliderData = [
    {
        id: 1,
        src: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/fashion_1.jpg",
        title: "The billionaire Philan thropist read to learn more and city",
        category: [
            {
                id: 1,
                name: "FASHION",
                color: "#da1793"
            },
            {
                id: 2,
                name: "LIFESTYLE",
                color: "#fda400"
            }
        ],
        author: {
            name: "TQV",
            date: "June 30, 2021",
            views: 4567
        }
    },
    {
        id: 2,
        src: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_3.jpg",
        title: "Lopez has reportedly added to her real estate holdings an eight",
        category: [
            {
                id: 2,
                name: "LIFESTYLE",
                color: "#fda400"
            }
        ],
        author: {
            name: "DigiQuoles",
            date: "June 30, 2021",
            views: 3404
        }
    },
    {
        id: 2,
        src: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg",
        title: "The billionaire Philan thropist read to learn more and city",
        category: [
            {
                id: 1,
                name: "FASHION",
                color: "#da1793"
            },
            {
                id: 2,
                name: "LIFESTYLE",
                color: "#fda400"
            }
        ],
        author: {
            name: "Alubaba",
            date: "January 11, 2021",
            views: 9999
        }
    }
]

const SlickSlider = () => {
    const settings = {
        dots: true,
        dotsClass: "vertical-dots",
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {sliderData.map(item => (
                    <div key={item.id} className="sl-img-con">
                        <SlickItem item={item} classImage="sl-img-1" titleSize={36} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default connect(null, null)(SlickSlider);
