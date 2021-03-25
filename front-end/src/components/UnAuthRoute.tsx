import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { connect } from "react-redux";

import { authSelector } from "../selectors/authSelector";
import { DEFAULT_PATH } from "../constants";

type Props = RouteComponentProps & {
  path: RouteProps["path"];
  exact: RouteProps["exact"];
  component: React.ComponentType<any>;
  isAuth: boolean;
};

const UnAuthRoute = ({ component: Component, isAuth, ...rest }: Props) => {
  console.log("UnAuthRoute", isAuth);
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

export default withRouter(connect(authSelector)(UnAuthRoute));
