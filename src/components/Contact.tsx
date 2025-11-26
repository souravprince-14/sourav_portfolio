import React from 'react';
import { Section } from './Section';
import { PROFILE } from '../constants';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <Section id="contact" title="contact_me" className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <p className="text-slate-400 mb-8 text-lg">
              Currently exploring new opportunities in AI Engineering and Backend Development. 
              Let's discuss how I can contribute to your team.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 text-slate-300 hover:text-python-yellow transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-python-blue/20 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Email</p>
                  <p className="font-medium">{PROFILE.email}</p>
                </div>
              </a>

              <a href={`tel:${PROFILE.phone}`} className="flex items-center gap-4 text-slate-300 hover:text-python-yellow transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-python-blue/20 transition-colors">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase">Phone</p>
                  <p className="font-medium">{PROFILE.phone}</p>
                </div>
              </a>

              <div className="flex gap-4 mt-8">
                 <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 text-white transition-colors">
                   <Github size={20} />
                 </a>
                 <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-lg hover:bg-[#0077b5] text-white transition-colors">
                   <Linkedin size={20} />
                 </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="bg-slate-950 p-6 md:p-8 rounded-2xl border border-slate-800 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-slate-500 mb-2">name = input()</label>
              <input 
                type="text" 
                id="name"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-python-blue transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-slate-500 mb-2">email = input()</label>
              <input 
                type="email" 
                id="email"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-python-blue transition-colors"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-mono text-slate-500 mb-2">message = input()</label>
              <textarea 
                id="message"
                rows={4}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-python-blue transition-colors resize-none"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-python-blue to-sky-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex justify-center items-center gap-2">
              <Send size={18} /> Send Message
            </button>
          </form>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-600 text-sm font-mono">
          <p>Built with React, Tailwind & Pythonic Love.</p>
          <p>© {new Date().getFullYear()} Sourav Prince. All rights reserved.</p>
        </div>
      </Section>
    </footer>
  );
};