import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Register } from "./components/Register";
import { Welcome } from "./components/Welcome";
import { UserProvider } from "./context/UserContext";
import { AuthenticatedRoute } from "./route/AuthenticatedRoute";
import Nav from "./components/Nav";

function App() {
  return (
    <UserProvider>
      <Router>
        <Nav />
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <AuthenticatedRoute path="/welcome" component={Welcome} />
          </Switch>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
