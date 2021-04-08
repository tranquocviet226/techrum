import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import 'i18n/config';
import { persistor, store } from "store";
import history from "services/RoutingService";

import { PersistGate } from "redux-persist/integration/react";
import Admin from "layouts/Admin";
import User from "layouts/User";
import UnAuthRoute from "components/UnAuthRoute";
import AuthContainer from "containers/admin/login";
import PrivateRoute from "components/PrivateRoute";
import ScrollToTop from "services/ScrollToTop";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <ScrollToTop />
          <Switch>
            <UnAuthRoute path="/admin/login" component={AuthContainer} exact />
            <PrivateRoute path="/admin" component={Admin} />
            <Route path="/" component={User} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
