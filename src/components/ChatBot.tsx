import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm here to help you with any questions about my web development services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    "What services do you offer?",
    "How much do you charge?",
    "What's your typical timeline?",
    "Can you help with my project?"
  ];

  const botResponses: { [key: string]: string } = {
    "what services do you offer": "I offer full-stack web development, including Laravel backend development, Vue.js and Next.js frontend development, API integration, database design, and ongoing maintenance. I can build everything from simple websites to complex web applications.",
    "how much do you charge": "My rates vary depending on project complexity. Simple websites start at $1,500, while custom web applications range from $3,000-$10,000+. I always provide detailed quotes after understanding your specific requirements.",
    "what's your typical timeline": "Timeline depends on project scope. A simple website typically takes 1-2 weeks, while complex web applications can take 4-8 weeks. I'll provide a detailed timeline during our initial consultation.",
    "can you help with my project": "I'd love to help! Please describe your project requirements, and I'll let you know how I can assist. You can also fill out the contact form below for a detailed discussion.",
    default: "That's a great question! For detailed information about my services, pricing, or to discuss your specific project, please use the contact form below or send me an email directly. I respond to all inquiries within 24 hours."
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    setTimeout(() => {
      const lowerText = inputText.toLowerCase();
      let response = botResponses.default;
      
      for (const [key, value] of Object.entries(botResponses)) {
        if (key !== 'default' && lowerText.includes(key)) {
          response = value;
          break;
        }
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 z-40 ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white rounded-lg shadow-2xl z-50 flex flex-col h-[500px]">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Alex Johnson</h3>
              <p className="text-sm text-red-100">Web Developer Assistant</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 1 && (
            <div className="p-4 border-t">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="space-y-1">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="block w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;