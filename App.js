// App.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';

const socket = io('http://localhost:4000'); // Connect to your backend

function App() {
  const [yourMsg, setYourMsg] = useState('');
  const [allChats, setAllChats] = useState([]);
  const [username, setUsername] = useState('');
  const [isSet, setIsSet] = useState(false);

  // Receive messages
  useEffect(() => {
    const handleMsg = (msg) => {
      setAllChats((prev) => [...prev, msg]);
    };

    socket.on('asfarMsgReceive', handleMsg);

    // Clean up when component unmounts
    return () => {
      socket.off('asfarMsgReceive', handleMsg);
    };
  }, []);

  const sendMessage = () => {
    if (yourMsg.trim() === '') return;
    const fullMsg = `👤 ${username}: ${yourMsg}`;
    socket.emit('asfarMsgSend', fullMsg);
    setYourMsg('');
  };

  return (
    <div className="chat-app">
      {!isSet ? (
        <div className="set-name">
          <h2>Enter your name to join</h2>
          <input
            type="text"
            placeholder="Your name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setIsSet(true)}>Join Chat</button>
        </div>
      ) : (
        <>
          <h1>🔥 {username}'s Chat Room</h1>

          <div className="chat-box">
            {allChats.map((msg, index) => (
              <div key={index} className="chat-line">
                {msg}
              </div>
            ))}
          </div>

          <div className="chat-controls">
            <input
              type="text"
              value={yourMsg}
              onChange={(e) => setYourMsg(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>

          <footer>Made with ❤️ by Asfar and Afran</footer>
        </>
      )}
    </div>
  );
}

export default App;
