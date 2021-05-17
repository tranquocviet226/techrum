import { COPY_RIGHT } from "../../../constants/index";

const CopyRight = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="copy-right">
      <div className="container">
        <div className="row">
          <div className="col-md-11  align-self-center">
            <div className="copyright-text text-center">
              <p>{COPY_RIGHT}</p>
            </div>
          </div>
          <div onClick={scrollToTop} className="top-up-btn col-md-1">
            <div className="BackTo">
              <i style={{ color: "#FFF" }} className="fas fa-chevron-up"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyRight;
