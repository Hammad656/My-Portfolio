import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ExternalLink,
  FileText,
  Mail,
  Phone,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, EDUCATION_LIST, CERTIFICATIONS_LIST } from '../data/portfolioData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
  links?: { label: string; url?: string; action?: () => void }[];
}

interface AiAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCvModal: () => void;
}

export function AiAssistantDrawer({ isOpen, onClose, onOpenCvModal }: AiAssistantDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello! I'm Hammad Saleem's Portfolio Assistant. I can answer any questions about his technical experience, project portfolio, educational background, or contact details. How can I help you today?`,
      time: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "Tell me about PakResidencyLaw",
    "What are his core technical skills?",
    "What is his education & CGPA?",
    "What certifications does he hold?",
    "How can I contact or hire him?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('pakresidency') || q.includes('legal') || q.includes('pakistan residency')) {
      return `PakResidencyLaw (pakresidencylaw.space) is Hammad's flagship AI-powered legal assistance platform! He built it using Next.js, MongoDB, REST APIs, and an integrated machine learning chatbot. He designed responsive user interfaces in React and Tailwind CSS, developed performant backend APIs, and trained AI models to deliver automated legal guidance.`;
    }

    if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('framework')) {
      return `Hammad specializes in:\n• Frontend: React.js, Next.js, Tailwind CSS, JavaScript, TypeScript\n• Backend: Next.js API Routes, RESTful APIs, Authentication & Authorization, Node.js, ASP.NET MVC\n• Databases: MongoDB, MySQL (HackerRank Advanced Certified)\n• Cloud & AI: AWS (Cloud Fundamentals), Git, GitHub, Machine Learning & AI Chatbot Integration.`;
    }

    if (q.includes('education') || q.includes('cgpa') || q.includes('degree') || q.includes('university')) {
      return `Hammad is a Computer Science graduate from the University of Central Punjab (2022–2026) with a CGPA of 3.03. Prior to university, he completed FSC Pre-Engineering at Punjab Group of Colleges (2020–2022) and Matriculation at Unique School System.`;
    }

    if (q.includes('certif') || q.includes('mysql') || q.includes('aws') || q.includes('hackerrank')) {
      return `Hammad holds two professional certifications:\n1. HackerRank — MySQL Advanced Certificate (validating complex joins, subqueries, indexing, and optimization)\n2. AWS Certificate — Cloud (validating core AWS cloud computing and architecture principles).`;
    }

    if (q.includes('lms') || q.includes('learning management') || q.includes('asp.net') || q.includes('c#')) {
      return `Hammad developed a comprehensive Learning Management System using ASP.NET on MVC architecture. It features secure role-based authentication, CRUD operations for courses and users, and robust database management. Source code is available on his GitHub (github.com/Hammad656/LMS-Project).`;
    }

    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('call') || q.includes('whatsapp')) {
      return `You can contact Hammad directly:\n• Email: hammad467saleem@gmail.com\n• Phone: 0306-4659520 (+92 306 4659520)\n• WhatsApp: https://wa.me/923064659520\n• LinkedIn: linkedin.com/in/hammad-saleem-a64276290/\n• Location: Lahore, Pakistan (Available for on-site, hybrid, and remote roles!)`;
    }

    if (q.includes('cv') || q.includes('resume')) {
      return `Hammad's complete CV is available right here! You can click "View Full CV" to view the ATS-formatted version, print it as a PDF, or download the text file.`;
    }

    return `Hammad is a versatile Software Engineer with solid experience across React.js, Next.js, Node.js, MongoDB, and MySQL, alongside hands-on AI chatbot integration. He has proven projects like PakResidencyLaw (live at pakresidencylaw.space) and an ASP.NET LMS. Feel free to ask about his projects, skills, education, or get in touch!`;
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = generateAnswer(text);
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: answer,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, aiMsg]);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end p-0 sm:p-4 bg-slate-950/70 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.25 }}
          className="w-full sm:max-w-md h-full sm:h-[88vh] bg-slate-900 border-l sm:border border-slate-800 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Hammad's Portfolio Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
                <p className="text-[11px] text-slate-400">AI Knowledge Assistant</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-3 bg-slate-950/60 border-b border-slate-800/80 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-2">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none'
                      : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-line'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="block text-[10px] text-slate-400 mt-1.5 text-right">
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions Footer inside Drawer */}
          <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
            <button
              onClick={onOpenCvModal}
              className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Full CV</span>
            </button>

            <a
              href="https://pakresidencylaw.space"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-slate-200 flex items-center gap-1"
            >
              <span>pakresidencylaw.space</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-slate-950 border-t border-slate-800">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Hammad's CV, tech, or projects..."
                className="flex-1 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white disabled:opacity-40 transition-all hover:brightness-110"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
