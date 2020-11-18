import { useState, useEffect } from "react";
import FlipMove from "react-flip-move";
import { IconButton, FormControl, Input, InputLabel } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { db } from "./firebase";
import firebase from "firebase";
import Message from "./Message";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(window.prompt("Enter your username:"));
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img
        style={{ width: "100px" }}
        src="https://i.pinimg.com/originals/98/4d/b3/984db3f9cabcf67479806c19882adc7e.png"
        alt=""
      />
      <h2>Welcome {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message..."
            type="text"
            value={input}
            onChange={handleChange}
          />
          <IconButton
            className="app__inputButton"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!input}
            onClick={handleSubmit}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
