import Image from 'components/User/Common/Image';
import { connect } from 'react-redux';
import "./SliderBannerRight.css";

const SliderBannerRight = () => {
    return (
        <div className="sl-banner-right">
            <div className="sl-mg">
                <div className="sl-banner-right-1">
                    <Image src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_5.jpg"
                        style={{ width: "100%", height: "100%", borderRadius: 8 }} />
                </div>
                <div className="sl-banner-right-2">
                    <Image src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_3.jpg"
                        style={{ width: "100%", height: "100%", borderRadius: 8 }} />
                </div>
            </div>
        </div>
    )
}

export default connect(null, null)(SliderBannerRight);
