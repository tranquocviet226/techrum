import WeekenTop from "components/user/homePage/homeComponents/sliderWeekendTop/WeekendTop";
import { connect } from "react-redux";
import { postSelectorUser } from "selectors/user/postSelectorUser";

export default connect(postSelectorUser, null)(WeekenTop);
