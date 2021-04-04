import { Provider } from "react-redux";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import './i18n/config';
import { persistor, store } from "./store";
import history from "./services/RoutingService";

import { PersistGate } from "redux-persist/integration/react";
import Admin from "./layouts/Admin";
import UnAuthRoute from "./components/UnAuthRoute";
import AuthContainer from "./containers/Login";
import PrivateRoute from "./components/PrivateRoute";
import HomePage from "components/User/HomePage/HomePage";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Switch>
            <UnAuthRoute path="/admin/login" component={AuthContainer} exact/>
            <Route path="/home" component={HomePage} exact />
            <PrivateRoute path="/admin" component={Admin} />
            <Redirect from="/" to="/home" />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
