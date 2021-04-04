import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import "./TrendingBar.css";

const TrendingBar = () => {
    return (
        <div className="trending-bar fz-12">
            <div className="trending-bar-txt">
                <span className="icon-flash">
                    <i className="fa fa-bolt" ></i>
                </span>
                <p className="trending">TRENDING</p>
                <p className="trending-content">Ratcliffe to be Director of nation talent Trump ignored</p>
            </div>
            <div className="trending-bar-date">
                <EventAvailableIcon fontSize="small" />
                <p>{moment(Date.now()).format("MMM Do YYYY")}</p>
            </div>

        </div>
    )
}

export default connect(null, null)(TrendingBar);
