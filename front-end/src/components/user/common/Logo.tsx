import logo from "assets/img/logo/logo.png";
import text from "assets/img/logo/text.png";
import { Path } from "constants/path";
import { useHistory } from "react-router";

const styles = {
  logo: { height: 40, width: "auto", maxWidth: 200 },
};

const Logo = () => {
  const history = useHistory()
  const handleGoHome = () => {
    history.push(`/${Path.HOME_PAGE}`)
  }
  return (
    <div
      className="header-middle-area"
      style={{ paddingTop: 20, paddingBottom: 12 }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 align-self-center">
            <div onClick={handleGoHome} className="logo-area d-flex cur-po">
              <img
                className="img-fluid logo-dark"
                style={styles.logo}
                src={logo}
                alt="tech"
              />
              <img
                className="img-fluid logo-dark"
                style={styles.logo}
                src={text}
                alt="tech"
              />
            </div>
          </div>
          {/* col end  */}
          <div className="col-md-8 col-lg-9 align-self-center">
            <div className="banner-img text-right"></div>
          </div>
          {/* col end  */}
        </div>
      </div>
    </div>
  );
};

export default Logo;
