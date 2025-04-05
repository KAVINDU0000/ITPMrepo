import React, { useState, useEffect, useRef } from 'react';
import { BsChatDotsFill, BsSend } from 'react-icons/bs';
import { FaPaw } from 'react-icons/fa';

const PetConnectChat = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const messageEndRef = useRef(null);

  // Sample responses for common pet questions
  const getResponse = (question) => {
    const lowercaseQuestion = question.toLowerCase();
    
    if (lowercaseQuestion.includes("training") || lowercaseQuestion.includes("train")) {
      return "Consistency is key for pet training! Start with basic commands like 'sit' and 'stay' using positive reinforcement. Short, regular training sessions work better than long, infrequent ones.";
    } else if (lowercaseQuestion.includes("food") || lowercaseQuestion.includes("feeding") || lowercaseQuestion.includes("diet")) {
      return "A balanced diet is essential for your pet's health. Ensure they have appropriate food for their age, size, and health needs. Always provide fresh water and consult your vet for specific dietary recommendations.";
    } else if (lowercaseQuestion.includes("health") || lowercaseQuestion.includes("vet") || lowercaseQuestion.includes("sick")) {
      return "Regular vet check-ups are important! Watch for changes in behavior, appetite, or energy levels as these may indicate health issues. Keep vaccinations up-to-date and maintain parasite prevention.";
    } else if (lowercaseQuestion.includes("grooming") || lowercaseQuestion.includes("bath")) {
      return "Regular grooming keeps your pet healthy and comfortable. Brushing helps reduce shedding and prevents matting. The bathing frequency depends on your pet's breed and lifestyle.";
    } else if (lowercaseQuestion.includes("play") || lowercaseQuestion.includes("toys") || lowercaseQuestion.includes("exercise")) {
      return "Daily exercise and play are crucial for your pet's physical and mental health. Different breeds have different exercise needs, but all pets benefit from regular activity and mental stimulation.";
    } else if (lowercaseQuestion.includes("hi") || lowercaseQuestion.includes("hello") || lowercaseQuestion.includes("hey")) {
      return "Hello! How can I help you with your pet today? Feel free to ask about training, health, nutrition, or any other pet-related concerns!";
    } else {
      return "Thank you for your question! Our pet experts would be happy to help with this specific inquiry. Please provide more details about your pet and we'll give you the best advice possible.";
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  // Optional: Focus on input when chat opens
  useEffect(() => {
    if (showChat) {
      document.querySelector('.message-input').focus();
    }
  }, [showChat]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) {
      return;
    }

    try {
      setIsLoading(true);
      
      // Add the user message to chat history
      const newUserMessage = {
        text: message,
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, newUserMessage]);
      
      // Get response based on user's question
      const botAnswer = getResponse(message);
      
      // Simulate a small delay to make it feel more natural
      setTimeout(() => {
        const botResponse = {
          text: botAnswer,
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1000);
      
      // Clear message input
      setMessage("");
      
    } catch (error) {
      console.error("Error in chat:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <button className="chatbot-btn pulse" onClick={() => setShowChat(!showChat)}>
        <BsChatDotsFill size={30} />
      </button>

      {showChat && (
        <div className="chat-popup">
          <div className="chat-header">
            <h3><FaPaw style={{ marginRight: '8px' }} /> Pet Connect Chat</h3>
            <button className="close-chat" onClick={() => setShowChat(false)}>
              ×
            </button>
          </div>
          
          <div className="chat-messages">
            {chatMessages.length === 0 ? (
              <div className="welcome-message">
                <p>Hello! How can Pet Connect help you and your furry friend today? Ask us about training, health tips, or emergency care!</p>
              </div>
            ) : (
              chatMessages.map((msg, index) => (
                <div key={index} className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}>
                  <p>{msg.text}</p>
                  <span className="message-time">{msg.timestamp}</span>
                </div>
              ))
            )}
            {isLoading && (
              <div className="message bot-message typing">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messageEndRef} />
          </div>
          
          <div className="chat-inputs">
            <textarea
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="message-input"
            />
            <button 
              onClick={sendMessage} 
              disabled={isLoading}
              className="send-button"
            >
              <BsSend size={16} />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .chatbot-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #4CAF50;
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1000;
        }
        
        .pulse {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
          }
        }
        
        .chat-popup {
          position: fixed;
          bottom: 90px;
          right: 20px;
          width: 350px;
          height: 500px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          z-index: 1000;
          overflow: hidden;
        }
        
        .chat-header {
          background-color: #4CAF50;
          color: white;
          padding: 15px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .chat-header h3 {
          margin: 0;
          display: flex;
          align-items: center;
        }
        
        .close-chat {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }
        
        .chat-messages {
          flex-grow: 1;
          padding: 15px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        
        .welcome-message {
          background-color: #f0f0f0;
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 10px;
          align-self: center;
          max-width: 80%;
        }
        
        .welcome-message p {
          margin: 0;
        }
        
        .message {
          padding: 10px 15px;
          border-radius: 18px;
          margin-bottom: 10px;
          max-width: 80%;
          position: relative;
        }
        
        .user-message {
          background-color: #DCF8C6;
          align-self: flex-end;
          border-bottom-right-radius: 5px;
        }
        
        .bot-message {
          background-color: #F0F0F0;
          align-self: flex-start;
          border-bottom-left-radius: 5px;
        }
        
        .message p {
          margin: 0 0 15px 0;
        }
        
        .message-time {
          position: absolute;
          bottom: 5px;
          right: 10px;
          font-size: 10px;
          color: #999;
        }
        
        .chat-inputs {
          padding: 15px;
          background-color: #f9f9f9;
          border-top: 1px solid #ddd;
        }
        
        .message-input {
          width: calc(100% - 50px);
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 20px;
          resize: none;
          height: 40px;
          font-family: inherit;
        }
        
        .send-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #4CAF50;
          color: white;
          border: none;
          cursor: pointer;
          margin-left: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          vertical-align: top;
        }
        
        .send-button:disabled {
          background-color: #cccccc;
        }
        
        .typing-indicator {
          display: flex;
          align-items: center;
          padding: 10px 0;
        }
        
        .typing-indicator span {
          height: 8px;
          width: 8px;
          background-color: #999;
          border-radius: 50%;
          display: inline-block;
          margin-right: 5px;
          animation: bounce 1.5s infinite ease-in-out;
        }
        
        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </>
  );
};

export default PetConnectChat;