import React from "react";
import "./ChatPage.css";
import mockContacts from "./mockContacts"; // Import the mock data

function ChatPage() {
  return (
    <div className="chat-page">
      <div className="contact-list">
        <h2>Contact List</h2>
        <ul>
          {mockContacts.map((contact) => (
            <li key={contact.id}>
              <img src={contact.avatar} alt={contact.name} />
              <p>{contact.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="conversation-start">
        <p>Create or start a conversation</p>
      </div>
    </div>
  );
}

export default ChatPage;
