import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const AuthenticatedRoute = (props) => {
  const [isUserLoggedIn, setUserLoggedIn] = useContext(UserContext);

  if (isUserLoggedIn) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};
