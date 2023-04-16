import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToBottom from "react-scroll-to-bottom";

export default function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [MessageList, setMessageList] = useState([]);
  
 
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };



  useEffect(() => {
    socket.off("receive_message").on("receive_message", (data) => {
      // console.log(data);
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <div className="chat-window">
      <div className="chat-header">
      <p>Live Chat </p>
      <Link to="/"><i class="fa-solid fa-house-user fa-2x" style={{color: "white" , margin:"8px 8px 0 0"}}></i></Link>
      
      
        
      
       
        
      </div>
      <div className="chat-body">
      <ScrollToBottom className="message-container">
        {MessageList.map((messageContent) => {
          return (
            <div
              className="message"
              id={username === messageContent.author ? "you" : "other"}
            >
              <div>
                <div className="message-content">
                  <p>{messageContent.message}</p>
                </div>
                <div className="message-meta">
                  <p id="time">{messageContent.time}</p>
                  <p id="author">{messageContent.author}</p>
                </div>
              </div>
            </div>
          );
        })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value = {currentMessage}
          placeholder="Type a message"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>&#9658;</button>
        
      </div>
    </div>
  );
}
