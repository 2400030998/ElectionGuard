import React, { useState } from 'react';
import './JoinDiscussion.css';

const JoinDiscussion = ({ onBack }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  // Get current time in Indian timezone
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const message = {
      id: Date.now(),
      text: newMessage,
      time: getCurrentTime(),
      user: 'You' // Or you can add user authentication
    };

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="discussion-container">
      <div className="discussion-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h1>💬 Election Discussion Forum</h1>
        <div className="time-zone-info">
          <span>🕒 Time Zone: IST (India Standard Time)</span>
        </div>
      </div>

      <div className="discussion-content">
        <div className="messages-container">
          {messages.length === 0 ? (
            <div className="no-messages">
              <p>No messages yet. Start the discussion!</p>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className="message">
                <div className="message-header">
                  <span className="user-name">{message.user}</span>
                  <span className="message-time">{message.time}</span>
                </div>
                <div className="message-text">{message.text}</div>
              </div>
            ))
          )}
        </div>

        <div className="message-input">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message about elections..."
            maxLength={500}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>

        <div className="discussion-info">
          <p>💡 Discuss election results, policies, and share your opinions!</p>
          <p>🕒 All times are displayed in IST (Indian Standard Time)</p>
        </div>
      </div>
    </div>
  );
};

export default JoinDiscussion;