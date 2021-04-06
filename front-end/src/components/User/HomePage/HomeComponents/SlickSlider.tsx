import React from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./SlickSlider.css";

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
        <Slider {...settings}>
            <div
                className="owl-item cloned"
                style={{
                    width: "732px",
                    marginRight: "30px",
                }}
            >
                <div className="ts-overlay-style featured-post  post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
                    <div
                        className="item item-before rocket-lazyload lazyloaded"
                        style={{
                            backgroundImage:
                                'url("https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/fashion_1.jpg")',
                        }}
                        data-ll-status="loaded"
                    >
                        <div className="overlay-post-content">
                            <div className="post-content">
                                <div className="grid-category">
                                    <a
                                        className="post-cat"
                                        href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                        style={{
                                            backgroundColor: "#da1793",
                                            color: "#ffffff",
                                        }}
                                    >
                                        Fashion
                                                </a>
                                </div>
                                <h3 className="post-title">
                                    <a href="https://demo.themewinter.com/wp/digiqoles/ratcliffe-to-be-director-of-nation-talent-trump-ignored/">
                                        Ratcliffe to be Director of
                                        nation talent Trump ignored
                                                </a>
                                </h3>
                                <ul className="post-meta-info">
                                    <li className="author">
                                        <i className="fa fa-user" />
                                        <a href="https://demo.themewinter.com/wp/digiqoles/author/digiQoles/">
                                            duynn100198
                                                  </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o" />
                                                  July 10, 2019
                                                </li>
                                    <li className="active">
                                        <i className="ts-icon ts-icon-fire" />
                                                  3462
                                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="owl-item cloned"
                style={{
                    width: "732px",
                    marginRight: "30px",
                }}
            >
                <div className="ts-overlay-style featured-post  post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
                    <div
                        className="item item-before rocket-lazyload lazyloaded"
                        style={{
                            backgroundImage:
                                'url("https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/fashion_1.jpg")',
                        }}
                        data-ll-status="loaded"
                    >
                        {/* <a
                            className="img-link"
                            href="https://demo.themewinter.com/wp/digiqoles/ratcliffe-to-be-director-of-nation-talent-trump-ignored/"
                        /> */}
                        <div className="overlay-post-content">
                            <div className="post-content">
                                <div className="grid-category">
                                    <a
                                        className="post-cat"
                                        href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                        style={{
                                            backgroundColor: "#da1793",
                                            color: "#ffffff",
                                        }}
                                    >
                                        Fashion
                                                </a>
                                </div>
                                <h3 className="post-title">
                                    <a href="https://demo.themewinter.com/wp/digiqoles/ratcliffe-to-be-director-of-nation-talent-trump-ignored/">
                                        Ratcliffe to be Director of
                                        nation talent Trump ignored
                                                </a>
                                </h3>
                                <ul className="post-meta-info">
                                    <li className="author">
                                        <i className="fa fa-user" />
                                        <a href="https://demo.themewinter.com/wp/digiqoles/author/digiQoles/">
                                            duynn100198
                                                  </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-clock-o" />
                                                  July 10, 2019
                                                </li>
                                    <li className="active">
                                        <i className="ts-icon ts-icon-fire" />
                                                  3462
                                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>

    )
}

export default connect(null, null)(SlickSlider);
