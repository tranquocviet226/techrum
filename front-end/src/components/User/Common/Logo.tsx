import logoDark from "assets/img/logo/logo-dark.png";

const Logo = () => {
  return (
    <div className="header-middle-area">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 align-self-center">
            <div className="logo-area">
              <img className="img-fluid logo-dark" src={logoDark} alt="tech" />
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
