import React, { useState, useContext } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { auth } from "../config/FirebaseConfig";
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";

export const Login = () => {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserLoggedIn, setUserLoggedIn] = useContext(UserContext);

  let divStyle = {
    width: "30%",
    background: "#e7e7e7",
    padding: "30px",
    marginTop: "150px",
    position: "relative",
    display: "inline-block",
    justifyContent: "center",
  };

  let inputStyle = {
    width: "50%",
    justifyContent: "center",
  };

  const loginUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        setUserLoggedIn(true);
        history.push("/welcome");
      })
      .catch((e) => {
        setMessage(e.message);
      });
  };

  return (
    <Container maxWidth="sm" fixed style={{ marginTop: "100px" }}>
      <div>
        <div>
          <form>
            <h4>LOGIN</h4>

            <FormControl fullWidth style={{ marginTop: "20px" }}>
              <TextField
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                variant="outlined"
                label="Enter Email"
                value={email}
              />
            </FormControl>

            <FormControl fullWidth style={{ marginTop: "25px" }}>
              <TextField
                value={password}
                label="Enter Password"
                type="password"
                variant="outlined"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </FormControl>

            <Button
              disabled={!email || !password}
              type="submit"
              style={{ marginTop: "25px" }}
              onClick={(e) => loginUser(e)}
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </div>
        {message && alert(message)}
        <p style={{ marginTop: "10px" }}>
          Not a registered user?
          <Link to="/register"> Create an account!</Link>
        </p>
      </div>
    </Container>
  );
};
