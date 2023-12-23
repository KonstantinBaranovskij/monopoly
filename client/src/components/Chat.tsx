import React from 'react';

type ChatProps = {
  messages: string[];
};

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div style={{ border: '1px solid black', height: '200px', overflowY: 'scroll' }}>
      {messages.map((message, index) => (
        <div key={index} style={{ padding: '5px' }}>
          {message}
        </div>
      ))}
    </div>
  );
};

export default Chat;