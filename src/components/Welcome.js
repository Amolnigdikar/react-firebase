import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { Todo } from "./Todo";
import { db, auth } from "../config/FirebaseConfig";
import firebase from "firebase";

export const Welcome = () => {
  const userId = auth.currentUser.uid;
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      await db
        .collection("todos")
        .where("userId", "==", userId)
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setTodos(
            snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
          );
        });
    };

    getTodos();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    // var newtodo = {
    //   name: todo,
    //   uid: userId,
    // };
    // firebase
    //   .database()
    //   .ref("todos/" + userId)
    //   .push(newtodo);

    db.collection("todos").add({
      todo: input,
      userId,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div style={{ margin: "10px" }}>
      <form>
        {/* <input
          type="text"
          placeholder="Enter a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        /> */}
        <FormControl>
          <InputLabel>Enter a todo</InputLabel>
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={(e) => {
            addTodo(e);
          }}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <div style={{ display: "inline-block", marginTop: "20px" }}>
        {todos.map((item) => (
          <Todo key={item.uid} todo={item} />
        ))}
      </div>
    </div>
  );
};
