import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat";
import React from 'react';
import Home from "./Home";
import {Route,Routes,Link} from 'react-router-dom';

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showchat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>
       
    
    <div className="App">
      <div id="img">
        <img
          src="https://i.pinimg.com/originals/63/fd/ff/63fdff4b7c1964f08c3c16f18f581bd7.gif"
          alt="image"
        />
      </div>
      {!showchat ? (
        <div className="joinChatContainer" id="con">
          <h3>Join a chat</h3>
          <input
            type="text"
            placeholder="Your Name"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room id"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join a room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
    </>
  );
}

export default App;
