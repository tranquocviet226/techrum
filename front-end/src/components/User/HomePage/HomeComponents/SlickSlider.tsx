import { connect } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./SlickSlider.css";

const data = [
    {
        id: 1,
        title: "Ratcliffe to be Director of nation talent Trump ignored",
        background_url: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/fashion_1.jpg",
        redirect_to_url: "",
        categories: [
            {
                id: 1,
                title: "Fashion",
                color: "#da1793"
            }
        ],
        author: {
            id: 1,
            name: "VietTQ",
            url: "sss"
        },
        date: "July 10, 2019",
        views: 3462
    },
    {
        id: 2,
        title: "Ratcliffe to be Director of nation talent Trump ignored",
        background_url: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_3.jpg",
        redirect_to_url: "https://demo.themewinter.com/wp/digiqoles/ratcliffe-to-be-director-of-nation-talent-trump-ignored/",
        categories: [
            {
                id: 1,
                title: "Fashion",
                color: "#da1793"
            },
            {
                id: 2,
                title: "Lifestyle",
                color: "#fc4a00"
            }
        ],
        author: {
            id: 1,
            name: "VietTQ",
            url: "sss"
        },
        date: "July 11, 2021",
        views: 9811
    },
    {
        id: 3,
        title: "Ratcliffe to be Director of nation talent Trump ignored",
        background_url: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_3.jpg",
        redirect_to_url: "https://demo.themewinter.com/wp/digiqoles/ratcliffe-to-be-director-of-nation-talent-trump-ignored/",
        categories: [
            {
                id: 1,
                title: "Fashion",
                color: "#da1793"
            },
            {
                id: 2,
                title: "Lifestyle",
                color: "#fc4a00"
            }
        ],
        author: {
            id: 1,
            name: "VietTQ",
            url: "sss"
        },
        date: "July 11, 2021",
        views: 9811
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
        <Slider {...settings}>
            {data.map(item => (
                <div
                    key={item.id}
                    className="owl-item cloned ss-w-732"
                >
                    <div className="ts-overlay-style featured-post  post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
                        <div
                            className="item item-before rocket-lazyload lazyloaded"
                            style={{ backgroundImage: `url("${item.background_url}")` }}
                            data-ll-status="loaded"
                        >
                            <div className="overlay-post-content">
                                <div className="post-content">
                                    <div className="grid-category">
                                        {item.categories.map((it: any) => (
                                            <a
                                                className="post-cat ss-cl-fff"
                                                href={item.background_url}
                                                key={it.id}
                                                style={{ backgroundColor: it.color }}
                                            >
                                                {it.title}
                                            </a>
                                        ))}

                                    </div>
                                    <h3 className="post-title">
                                        <a href={item.redirect_to_url}>
                                            {item.title}
                                        </a>
                                    </h3>
                                    <ul className="post-meta-info">
                                        <li className="author">
                                            <i className="fa fa-user" />
                                            <a href={item.author.url}>
                                                {item.author.name}
                                            </a>
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o" />
                                            {item.date}
                                        </li>
                                        <li className="active">
                                            <i className="ts-icon ts-icon-fire" />
                                            {item.views}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>

    )
}

export default connect(null, null)(SlickSlider);
