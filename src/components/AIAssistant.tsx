import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { VERIFIED_DATA } from '../data/portfolioData';

type Message = { role: 'bot' | 'user'; text: string };

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm Samiya's portfolio assistant. You can ask me about her skills, projects, hackathons, or education." }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Strict routing to prevent hallucinations.
  // NOTE: To upgrade to a real LLM later, replace this with a fetch() call to a Vercel /api/chat route.
  const generateResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes('skill') || q.includes('tech') || q.includes('know')) {
      return `Samiya's verified skills include: ${VERIFIED_DATA.skills.join(', ')}.`;
    }
    if (q.includes('project') || q.includes('built') || q.includes('made')) {
      const projNames = VERIFIED_DATA.projects.map(p => p.title).join(', ');
      return `She has built the following projects: ${projNames}.`;
    }
    if (q.includes('hackathon') || q.includes('compete') || q.includes('win')) {
      return `She has participated in: ${VERIFIED_DATA.hackathons.join(' and ')}.`;
    }
    if (q.includes('internship') || q.includes('work') || q.includes('experience')) {
      return `She interned at ${VERIFIED_DATA.internship.company}.`;
    }
    if (q.includes('education') || q.includes('cgpa') || q.includes('study') || q.includes('degree')) {
      return `She is currently in her ${VERIFIED_DATA.education.year} of ${VERIFIED_DATA.education.degree}, maintaining a CGPA of ${VERIFIED_DATA.education.cgpa}.`;
    }
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
      return `You can reach her directly at ${VERIFIED_DATA.personal.email}.`;
    }
    
    return "I don't have verified information about that yet. You can ask me about her skills, projects, hackathons, or education!";
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);

    // Simulate slight AI thinking delay
    setTimeout(() => {
      const botReply = generateResponse(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:bg-blue-500 hover:scale-105 transition-all z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-black/90 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-blue-500/20 text-blue-400 rounded-lg">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-white font-medium text-sm">Portfolio Assistant</h3>
                  <p className="text-blue-400 text-[10px] uppercase tracking-wider">Verified Data Only</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors p-1">
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 text-blue-400">
                      <Bot size={14} />
                    </div>
                  )}
                  <div className={`px-4 py-2.5 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white/10 text-gray-200 rounded-bl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-black/50">
              <form onSubmit={handleSend} className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Samiya..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
