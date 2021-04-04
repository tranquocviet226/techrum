import React from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import Image from 'components/User/Common/Image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        ]
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
        ]
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
        ]
    }
]

const SlickSlider = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings} className="sl-mg">
                {sliderData.map(item => (
                    <div key={item.id} className="slider-img">
                        <Image src={item.src} style={{ width: "100%", height: 600, borderRadius: 8 }} />
                        <div className="infor-container">
                            <div className="infor-content">
                                <div className="category-container">
                                    {item.category.map(it => (
                                        <div className="category" style={{ backgroundColor: it.color }}>{it.name}</div>
                                    ))}
                                </div>
                                <div className="title-container">
                                    <p className="title">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default connect(null, null)(SlickSlider);
