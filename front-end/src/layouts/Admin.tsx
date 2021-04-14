/* eslint-disable */
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { getListCategory } from "actions/common/categoryAction";
import logo from "assets/img/reactlogo.png";
import imageDefault from "assets/img/sidebar-2.jpg";
import dashboardStyle from "assets/jss/material-dashboard-react/layouts/dashboardStyle";
import Footer from "components/admin/common/Footer/Footer";
import Loading from "components/admin/common/loading/Loading";
// core components
import Navbar from "components/admin/common/Navbars/Navbar";
import Sidebar from "components/admin/common/Sidebar/Sidebar";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import React, { createRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "types/dashboardAdminRoutes";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
            exact
          />
        );
      }
    })}
    <Redirect path="/admin/" to="/admin/dashboard" exact />
  </Switch>
);

type Props = {
  classes: any;
  location: any;
  history: any;
  isLoading: boolean;
};

const Dashboard: React.FC<Props> = (props) => {
  const { classes, isLoading, ...rest } = props;
  const refs = createRef<any>();
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoute = () => {
    return props.location.pathname !== "/admin/maps";
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(refs.current);
    }
    window.addEventListener("resize", resizeFunction);
    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);

  useEffect(() => {
    if (props.history.location.pathname !== props.location.pathname) {
      refs.current.scrollTop = 0;
      if (mobileOpen) {
        setMobileOpen(false);
      }
    }
  });

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = () => {
    dispatch(getListCategory());
  };

  return (
    <div className={classes.wrapper}>
      {isLoading ? <Loading /> : <></>}
      <Sidebar
        routes={routes}
        logoText={"Tech"}
        logo={logo}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        image={imageDefault}
        color="blue"
        {...rest}
      />
      <div className={classes.mainPanel} ref={refs}>
        <Navbar
          routes={routes}
          handleDrawerToggle={handleDrawerToggle}
          {...rest}
        />
        {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        {getRoute() ? (
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
        ) : (
          <div className={classes.map}>{switchRoutes}</div>
        )}
        {getRoute() ? <Footer /> : null}
      </div>
    </div>
  );
};

export default withStyles(dashboardStyle)(Dashboard);
