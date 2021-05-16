import PrivateRoute from "components/PrivateRoute";
import UnAuthRoute from "components/UnAuthRoute";
import AdminContainer from "containers/admin/AdminContainer";
import AuthContainer from "containers/admin/login";
import "i18n/config";
import User from "layouts/User";
import moment from "moment";
import "moment/locale/vi";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import history from "services/RoutingService";
import ScrollToTop from "services/ScrollToTop";
import { persistor, store } from "store";

const App = () => {
  useEffect(() => {
    moment.locale("vi");
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ScrollToTop />
          <Switch>
            <UnAuthRoute path="/admin/login" component={AuthContainer} exact />
            <PrivateRoute path="/admin" component={AdminContainer} />
            <Route path="/" component={User} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
