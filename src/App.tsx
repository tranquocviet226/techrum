import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import history from './services/RoutingService';
import { store, persistor } from './store';
import './App.css';
import LoginContainer from './containers/Login';
import HomeComponent from './components/Home/HomeComponent';
import UnAuthRoute from './components/UnAuthRoute';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Router history={history}>
            <Switch>
              <UnAuthRoute path="/login" component={LoginContainer} exact />
              <PrivateRoute path="/home" component={HomeComponent} exact />
              <UnAuthRoute path="/" component={LoginContainer} exact />
            </Switch>
          </Router>
        </PersistGate>
      </Provider>
    );
}

export default App;
