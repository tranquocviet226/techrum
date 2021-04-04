import { connect } from 'react-redux';
import SlickItem from './SlickItem';
import "./SliderBannerRight.css";

const item_1 = {
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
}

const SliderBannerRight = () => {
    return (
        <div className="sl-banner-right">
            <div className="sl-mg">
                <div className="sl-banner-right-1">
                    <SlickItem item={item_1} titleSize={20} />
                </div>
                <div className="sl-banner-right-2">
                    <SlickItem item={item_1} titleSize={20} />
                </div>
            </div>
        </div>
    )
}

export default connect(null, null)(SliderBannerRight);
