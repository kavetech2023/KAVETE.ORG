import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Maximize2, Minimize2, MessageCircle } from 'lucide-react';
import run from '../Config/gemini';

const AIChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [isChatVisible, setIsChatVisible] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { type: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await run(input);
      const aiMessage = { type: 'ai', content: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      const errorMessage = { type: 'error', content: 'Sorry, I encountered an error. Please try again.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChatVisibility = () => {
    setIsChatVisible(!isChatVisible);
    if (!isChatVisible) {
      setIsMinimized(false);
    }
  };

  return (
    <>
      {!isChatVisible && (
        <button
          onClick={toggleChatVisibility}
          className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          aria-label="Open AI Assistant"
        >
          <MessageCircle size={24} />
        </button>
      )}
      {isChatVisible && (
        <div className={`fixed bottom-4 right-4 w-full md:w-96 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out ${isMinimized ? 'h-14' : 'h-96'}`}>
          <div className="flex justify-between items-center p-4 bg-indigo-600 text-white rounded-t-lg">
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <div className="flex space-x-2">
              <button onClick={() => setIsMinimized(!isMinimized)} className="focus:outline-none" aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}>
                {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
              </button>
              <button onClick={() => setMessages([])} className="focus:outline-none" aria-label="Clear chat history">
                <X size={20} />
              </button>
              <button onClick={toggleChatVisibility} className="focus:outline-none" aria-label="Close chat">
                <X size={20} />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              <div className="h-64 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-3/4 p-2 rounded-lg ${
                      message.type === 'user' ? 'bg-indigo-100 text-indigo-900' : 
                      message.type === 'ai' ? 'bg-gray-200 text-gray-900' : 'bg-red-100 text-red-900'
                    }`}>
                      {message.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-200 text-gray-900 p-2 rounded-lg">
                      Thinking...
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                    aria-label="Send message"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AIChatBot;