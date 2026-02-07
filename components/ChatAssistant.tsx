import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { generateClubResponse } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Ciao Bianconero! 👋 Sono l\'assistente virtuale del Club Enna. Posso aiutarti con info su tesseramento, biglietti o eventi. Dimmi pure!', timestamp: new Date() }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const responseText = await generateClubResponse(userMsg.text);

    const botMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-juve-gold text-black p-4 rounded-full shadow-lg hover:bg-white transition-all transform hover:scale-110 flex items-center gap-2 font-bold"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="hidden md:inline">Club Assistant</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 md:w-96 rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-200 animate-fade-in-up h-[500px]">
          {/* Header */}
          <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-display font-bold uppercase">Juve Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-juve-gold">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm ${
                  msg.role === 'user' 
                    ? 'bg-black text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-black rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white border border-gray-200 p-3 rounded-lg rounded-bl-none shadow-sm">
                  <Loader2 className="w-4 h-4 animate-spin text-juve-gold" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-200 bg-white flex gap-2">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Scrivi qui..."
              className="flex-1 bg-gray-100 px-3 py-2 rounded text-sm focus:outline-none focus:ring-1 focus:ring-black"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
              className="bg-black text-white p-2 rounded hover:bg-juve-gold hover:text-black transition-colors disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAssistant;