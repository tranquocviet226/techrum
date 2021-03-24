import { Provider } from "react-redux";
import { Router, Switch } from "react-router-dom";

import { persistor, store } from "../store/";
import history from "../services/RoutingService";

import AuthContainer from "../containers/Login";
import { PersistGate } from "redux-persist/integration/react";
import PrivateRoute from "./PrivateRoute";
import UnAuthRoute from './UnAuthRoute';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Switch>
            <UnAuthRoute path="/login" component={AuthContainer} exact />
            <PrivateRoute path="/home" component={() => <div>
              <text>asasjahs</text>
            </div>} exact />
            <UnAuthRoute path="/" component={AuthContainer} exact />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
