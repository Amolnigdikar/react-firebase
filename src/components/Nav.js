import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import { UserContext } from "../context/UserContext";
import MenuIcon from "@material-ui/icons/Menu";

function Nav() {
  let history = useHistory();
  const navStyle = {
    color: "black",
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const [isUserLoggedIn, setUserLoggedIn] = useContext(UserContext);

  const logoutUser = (e) => {
    e.preventDefault();
    setUserLoggedIn(false);
    history.push("/");
  };

  const classes = useStyles();
  return (
    // <nav>
    //   <h3>React Firebase App</h3>
    //   <ul>
    //     <Link to="/welcome" style={navStyle}>
    //       <li>Welcome</li>
    //     </Link>
    //     <Link to="/logout" style={navStyle}>
    //       <li>Todos</li>
    //     </Link>
    //     <Link to="/logout" style={navStyle}>
    //       <li>Messages</li>
    //     </Link>
    //     <Link to="/logout" style={navStyle}>
    //       <li>About us</li>
    //     </Link>
    //     <Link to="/logout" style={navStyle}>
    //       <li>Logout</li>
    //     </Link>
    //   </ul>
    // </nav>

    <AppBar position="left">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          React Firebase App
        </Typography>

        {isUserLoggedIn && (
          <Button
            color="inherit"
            onClick={(e) => {
              logoutUser(e);
            }}
          >
            Logout
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
