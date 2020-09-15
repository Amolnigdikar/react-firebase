import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import {
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  TextField,
} from "@material-ui/core";

export const Register = () => {
  let history = useHistory();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let divStyle = {
    width: "30%",
    background: "#e7e7e7",
    padding: "30px",
    marginTop: "150px",
    position: "relative",
    justifyContent: "center",
    display: "inline-block",
  };

  let inputStyle = {
    width: "50%",
    justifyContent: "center",
  };

  const registerUser = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setMessage("");
        setEmail("");
        setPassword("");
        alert("Registration successful! Go to login");
        console.log(res);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };

  return (
    <Container maxWidth="sm" fixed style={{ marginTop: "100px" }}>
      <div>
        <form>
          <h4>REGISTER</h4>

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
            onClick={(e) => registerUser(e)}
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </form>
        <p style={{ color: "red" }}>{message}</p>
        <p style={{ marginTop: "10px" }}>
          Already registered?
          <Link to="/"> Go to Login</Link>
        </p>
      </div>
    </Container>
  );
};
