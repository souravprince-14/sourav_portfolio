import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { PROFILE, CV_URL } from '../constants';
import { CodeBlock } from './CodeBlock';

export const Hero: React.FC = () => {
  const pythonIntro = `class Engineer:
    def __init__(self):
        self.name = "${PROFILE.name}"
        self.role = "AI Engineer"
        self.stack = ["Python", "Azure", "GenAI"]
    
    def build_future(self):
        return "Building scalable AI solutions..."

me = Engineer()
print(me.build_future())`;

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const downloadCV = () => {
    window.open(CV_URL, "_blank");
  };

  return (
    <section className="min-h-screen pt-32 pb-16 flex items-center justify-center px-6 md:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-python-blue/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-python-yellow/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text Content */}
        <div className="space-y-6">
          
          {/* Profile Image - Circular */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-slate-800 overflow-hidden shadow-2xl mb-2">
              <img 
                  src={PROFILE.image} 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover"
              />
          </div>

          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-python-yellow text-xs font-mono mb-2">
            print("Hello World!")
            <span className="text-slate-500 ml-2"># Open to work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-python-blue to-python-yellow">
              {PROFILE.name.split(' ')[0]}
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-400 font-mono">
            {">"} {PROFILE.title}
          </h2>
          
          <p className="text-slate-400 max-w-lg leading-relaxed text-lg">
            Specializing in backend microservices, RAG systems, and cloud-native deployments on Azure.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects"
              onClick={scrollToProjects}
              className="px-6 py-3 bg-python-blue hover:bg-sky-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              View Projects <ChevronRight size={18} />
            </a>
            <button 
              onClick={downloadCV}
              className="px-6 py-3 border border-slate-700 hover:border-python-yellow text-slate-300 hover:text-python-yellow rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              Download CV <Download size={18} />
            </button>
          </div>
        </div>

        {/* Right: Visuals */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative z-10 w-full max-w-md">
             {/* Floating Code Block */}
             <div className="transform hover:translate-y-[-5px] transition-transform duration-300 shadow-2xl">
                <CodeBlock code={pythonIntro} fileName="portfolio.py" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};