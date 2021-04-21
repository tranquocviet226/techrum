import { getListCategory } from "actions/common/categoryAction";
import "assets/css/animate.css";
import "assets/css/blog.css";
import "assets/css/bootstrap.min.css";
import "assets/css/frontend.min.css";
import "assets/css/gutenberg-custom.css";
import "assets/css/icon-font.css";
import "assets/css/jquery.mCustomScrollbar.css";
import "assets/css/magnific-popup.css";
import "assets/css/master.css";
import "assets/css/owl.carousel.min.css";
import "assets/css/owl.theme.default.min.css";
import "assets/css/post-1878.css";
import "assets/css/print.css";
import "assets/css/woocommerce.css";
import Logo from "components/user/common/Logo";
import TrendingBar from "components/user/common/TrendingBar";
import Footer from "components/user/footer";
// import Header from 'components/User/HomePage/HomeComponents/Header';
import Header from "containers/user/HeaderContainer";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "types/dashboardUserRoutes";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      if (prop.layout === "/") {
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
    <Redirect path="/" to="/home" exact />
  </Switch>
);

const User: React.FC = () => {
  return (
    <div className="home page-template page-template-template page-template-homepage-template page-template-templatehomepage-template-php page page-id-1878 sidebar-active elementor-default elementor-kit-6 elementor-page elementor-page-1878">
      <div className="body-inner-content">
        <TrendingBar />
        <Logo />
        <Header />
        {switchRoutes}
        <Footer />
      </div>
    </div>
  );
};

export default User;
