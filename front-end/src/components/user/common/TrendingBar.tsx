import txtConstants from "constants/index";
import moment from "moment";
import React from "react";
import { connect } from "react-redux";

const TrendingBar = () => {
  return (
    <div className="topbar topbar-gray" style={{paddingBottom: 0}}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="tranding-bg-white">
              <div className="tranding-bar">
                <div
                  id="tredingcarousel"
                  className="trending-slide carousel slide trending-slide-bg"
                  data-ride="carousel"
                >
                  <p className="trending-title">
                    <i className="fa fa-bolt" />{" "}
                    {txtConstants.trending.toUpperCase()}
                  </p>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="post-content">
                        <p className="post-title title-small">
                          <a href="#">Welcome to Techrum.org!</a>
                        </p>
                      </div>
                      {/*/.most-view-item-content */}
                    </div>
                  </div>
                  {/*/.carousel-inner*/}
                  <div className="tp-control d-none">
                    <a
                      className="tp-control-prev"
                      href="#tredingcarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left" />
                    </a>
                    <a
                      className="tp-control-next"
                      href="#tredingcarousel"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </div>
                {/*/.trending-slide*/}
              </div>
              {/*/.container*/}
            </div>
          </div>
          <div className="col-md-4 xs-center align-self-center text-right">
            <ul className="top-info">
              <li>
                <i className="far fa-calendar-check" aria-hidden="true" />
                {moment(Date.now()).format("lll")}
              </li>
            </ul>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
      {/* end container */}
    </div>
  );
};

export default connect(null, null)(TrendingBar);
