import { connect } from 'react-redux';
import SlickSlider from './HomeComponents/SlickSlider';
import SliderBannerRight from './HomeComponents/SliderBannerRight';
import TrendingBar from './HomeComponents/TrendingBar';
import "./HomePage.css";

const HomePage = () => {
    const theme = "bg-dark";
    return (
        <div className={theme}>
            <TrendingBar />
            <div className="sl-top">
                <SlickSlider />
                <SliderBannerRight />
            </div>

        </div>
    )
}

export default connect(null, null)(HomePage);
