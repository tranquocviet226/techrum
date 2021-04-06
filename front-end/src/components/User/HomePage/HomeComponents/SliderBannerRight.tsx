import { connect } from 'react-redux';
import SlickItem from './SlickItem';
import "./SliderBannerRight.css";

const data = [
    {
        id: 1,
        title: "Ratcliffe to be Director of nation talent Trump ignored",
        background_url: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_3-600x398.jpg",
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
        background_url: "https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_3-600x398.jpg",
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
]

const SliderBannerRight = () => {

    const _renderSubView = (item: any) => {
        return (
            <div
                className="item item-before rocket-lazyload lazyloaded"
                style={{
                    backgroundImage:
                        `url("${item.background_url}")`,
                }}
                data-ll-status="loaded"
            >
                <a
                    className="img-link"
                    href={item.redirect_to_url}
                />
                <div className="overlay-post-content">
                    <div className="post-content">
                        <div className="grid-category">
                            {item.categories.map((it: any) => (
                                <a
                                    key={it.id}
                                    className="post-cat"
                                    href={item.author.url}
                                    style={{
                                        backgroundColor: it.color,
                                        color: "#ffffff",
                                    }}
                                >
                                    {it.title}
                                </a>
                            ))}
                        </div>
                        <h3 className="post-title">
                            <a href="https://demo.themewinter.com/wp/digiqoles/secretart-for-economic-air-plane-that-looks-like-largest/">
                                {item.title}
                            </a>
                        </h3>
                        <ul className="post-meta-info  ">
                            <li className="author">
                                <i className="fa fa-user" />
                                <a href="https://demo.themewinter.com/wp/digiqoles/author/digiQoles/">
                                    {item.author.name}
                                </a>
                            </li>
                            <li>
                                <i className="fa fa-clock-o" />{item.views}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    const _renderTopSlider = () => {
        return (
            <div
                className="elementor-element elementor-element-7970a807 elementor-widget-newszone-post-grid"
                data-id="7970a807"
                data-element_type="widget"
                data-widget_type="newszone-post-grid.default"
            >
                <div className="elementor-widget-container">
                    <div className="grid-item">
                        <div className="ts-overlay-style featured-post post-59 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-travel">
                            {_renderSubView(data[0])}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const _renderBottomSlider = () => {
        return (
            <div
                className="elementor-element elementor-element-7c808275 sm-post-effect elementor-widget elementor-widget-newszone-post-grid"
                data-id="7c808275"
                data-element_type="widget"
                data-widget_type="newszone-post-grid.default"
            >
                <div className="elementor-widget-container">
                    <div className="grid-item">
                        <div className="ts-overlay-style featured-post post-59 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-travel">
                            {_renderSubView(data[1])}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-68ef10d7"
            data-id="68ef10d7"
            data-element_type="column"
        >
            <div className="elementor-column-wrap elementor-element-populated">
                <div className="elementor-widget-wrap">
                    {_renderTopSlider()}
                    {_renderBottomSlider()}
                </div>
            </div>
        </div>
    )
}

export default connect(null, null)(SliderBannerRight);
