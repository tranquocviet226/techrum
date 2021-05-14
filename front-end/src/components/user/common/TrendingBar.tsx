import moment from "moment";
import React from "react";
import { connect } from "react-redux";

const TrendingBar = () => {
  return (
    <div className="topbar topbar-gray">
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
                    <i className="fa fa-bolt" /> Trending
                  </p>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="post-content">
                        <p className="post-title title-small">
                          <a href="#">Hello world!</a>
                        </p>
                      </div>
                      {/*/.most-view-item-content */}
                    </div>
                    {/*/.carousel-item */}
                    <div className="carousel-item">
                      <div className="post-content">
                        <p className="post-title title-small">
                          <a href="#">
                            Ratcliffe to be Director of nation talent Trump
                            ignored
                          </a>
                        </p>
                      </div>
                      {/*/.most-view-item-content */}
                    </div>
                    {/*/.carousel-item */}
                    <div className="carousel-item">
                      <div className="post-content">
                        <p className="post-title title-small">
                          <a href="#">
                            Nancy multi Chinese business woman trying
                          </a>
                        </p>
                      </div>
                      {/*/.most-view-item-content */}
                    </div>
                    {/*/.carousel-item */}
                    <div className="carousel-item">
                      <div className="post-content">
                        <p className="post-title title-small">
                          <a href="#">
                            Harbour amid a Slowen down in singer city screening
                          </a>
                        </p>
                      </div>
                      {/*/.most-view-item-content */}
                    </div>
                    {/*/.carousel-item */}
                    <div className="carousel-item">
                      <div className="post-content">
                        <p className="post-title title-small">
                          <a href="#">
                            Class property employ ancho red multi level mansion
                          </a>
                        </p>
                      </div>
                      {/*/.most-view-item-content */}
                    </div>
                    {/*/.carousel-item */}
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
                <i className="fa fa-calendar-check-o" aria-hidden="true" />
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
