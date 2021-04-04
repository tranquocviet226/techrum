import { connect } from 'react-redux';
import TrendingBar from './HomeComponents/TrendingBar';

const HomePage = () => {
    const theme = "bg-dark";
    return (
        <div className={theme}>
            <TrendingBar />
            HomE
        </div>
    )
}

export default connect(null, null)(HomePage);
