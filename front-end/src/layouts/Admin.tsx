/* eslint-disable */
import React from 'react';
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

import image from '../assets/img/sidebar-2.jpg';
import logo from '../assets/img/reactlogo.png';
import UnAuthRoute from '../components/UnAuthRoute';
import PrivateRoute from '../components/PrivateRoute';

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
}

interface State {
  image: string;
  color: string;
  hasImage: boolean;
  fixedClasses: string;
  mobileOpen: boolean;
}

class Dashboard extends React.Component<Props, State> {
  refs: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      image: image,
      color: 'blue',
      hasImage: true,
      fixedClasses: 'dropdown show',
      mobileOpen: false
    };
  }

  handleImageClick = (i: string) => {
    this.setState({ image: i });
  }

  handleColorClick = (c: string) => {
    this.setState({ color: c });
  }

  handleFixedClick = () => {
    if (this.state.fixedClasses === 'dropdown') {
      this.setState({ fixedClasses: 'dropdown show' });
    } else {
      this.setState({ fixedClasses: 'dropdown' });
    }
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }

  getRoute() {
    return this.props.location.pathname !== '/admin/maps';
  }

  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }

  componentDidMount() {
    if (navigator.platform.indexOf('Win') > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener('resize', this.resizeFunction);
  }

  componentDidUpdate(e: any) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFunction);
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={routes}
          logoText={'Creative Tim'}
          logo={logo}
          image={this.state.image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color={this.state.color}
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
