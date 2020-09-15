import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemIcon,
  Button,
  Divider,
} from "@material-ui/core";
import { db } from "../config/FirebaseConfig";
import "../css/Todo.css";
import { DeleteForever } from "@material-ui/icons";

export const Todo = (props) => {
  console.log(props.todo);
  return (
    <>
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            <Avatar style={{ color: "white", backgroundColor: "orange" }}>
              {props.todo.todo.charAt(0).toUpperCase()}
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Deadline ⏰ " />

          <DeleteForever
            style={{ marginLeft: "10px" }}
            color="secondary"
            onClick={(e) => {
              db.collection("todos").doc(props.todo.id).delete();
            }}
          />
          {/* <Button
          style={{ marginLeft: "10px" }}
          variant="contained"
          color="secondary"
          onClick={(e) => {
            db.collection("todos").doc(props.todo.id).delete();
          }}
        >
          Delete Todo
        </Button> */}
        </ListItem>
      </List>
      <Divider />
    </>
  );
};
