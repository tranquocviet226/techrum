import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { connect } from "react-redux";

import { selector } from "../selectors/authSelector";
import { DEFAULT_PATH } from "../constants";

const UnAuthRoute = ({ component: Component, isAuth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: DEFAULT_PATH, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default compose(withRouter, connect(selector, null))(UnAuthRoute);
