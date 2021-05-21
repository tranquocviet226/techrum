import PrivateRoute from "components/PrivateRoute";
import UnAuthRoute from "components/UnAuthRoute";
import AdminContainer from "containers/admin/AdminContainer";
import AuthContainer from "containers/admin/login";
import LoadingContainer from "containers/common/LoadingContainer";
import "i18n/config";
import User from "layouts/User";
import moment from "moment";
import "moment/locale/vi";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import history from "services/RoutingService";
import ScrollToTop from "services/ScrollToTop";
import Notification from "components/common/Notification";
import { AppState } from "reducers";
import 'antd/dist/antd.css';

const App = () => {
  const { message, type } = useSelector((state: AppState) => state.notification)
  useEffect(() => {
    moment.locale("vi");
  }, []);

  return (
    <Router history={history}>
      <LoadingContainer />
      <ScrollToTop />
      <Notification message={message} type={type} />
      <Switch>
        <UnAuthRoute path="/admin/login" component={AuthContainer} exact />
        <PrivateRoute path="/admin" component={AdminContainer} />
        <Route path="/" component={User} />
      </Switch>
    </Router>
  );
};

export default App;
