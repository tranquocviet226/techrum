/* eslint-disable */
import React, { createRef, useEffect, useRef, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// creates a beautiful scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
// core components
import Navbar from '../components/MaterialCommon/Navbars/Navbar';
import Footer from '../components/MaterialCommon/Footer/Footer';
import Sidebar from '../components/MaterialCommon/Sidebar/Sidebar';

import routes from '../types/dashboardRoutes';

import dashboardStyle from '../assets/jss/material-dashboard-react/layouts/dashboardStyle';

import imageDefault from '../assets/img/sidebar-2.jpg';
import logo from '../assets/img/reactlogo.png';

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === '/admin') {
        return <Route
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
          exact />
      }
    })}
    <Redirect
      path="/admin/"
      to="/admin/dashboard"
      exact />
  </Switch>
);

interface Props {
  classes: any;
  location: any;
  history: any;
}

const Dashboard : React.FC<Props> = (props) => {
  const { classes, ...rest } = props;
   const refs = createRef<any>()

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const getRoute = () => {
    return props.location.pathname !== '/admin/maps';
  }

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false)
    }
  }
  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(refs.current);
    }
    window.addEventListener('resize', resizeFunction);
    return () => {
      window.removeEventListener('resize', resizeFunction);
    }
  }, [])

  useEffect(() => {
    if (props.history.location.pathname !== props.location.pathname) {
      refs.current.scrollTop = 0;
      if (mobileOpen) {
        setMobileOpen(false)
      }
    }
  })

    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={'Creative Tim'}
          logo={logo}
          handleDrawerToggle={handleDrawerToggle}
          open={mobileOpen}
          image={imageDefault}
          color='blue'
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
}

export default withStyles(dashboardStyle)(Dashboard);
