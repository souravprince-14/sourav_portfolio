import React, { useMemo } from 'react';
import { Section } from './Section';
import { Terminal, Clock, Sparkles, MapPin, Coffee } from 'lucide-react';

export const About: React.FC = () => {
  const experience = useMemo(() => {
    const startDate = new Date(2023, 7, 7); // August 7, 2023
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (now.getDate() < startDate.getDate()) {
      months--;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years === 0) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    } else if (months === 0) {
      return `${years} year${years !== 1 ? 's' : ''}`;
    } else {
      return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
    }
  }, []);

  return (
    <Section id="about" title="about_me">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-slate-300 leading-relaxed">
        
        {/* Left: macOS/IDE styled Code Window */}
        <div className="lg:col-span-2 bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-xl shadow-2xl overflow-hidden flex flex-col hover:border-slate-700/60 transition-colors duration-300">
          {/* IDE Window Header */}
          <div className="bg-slate-950 px-4 py-3 border-b border-slate-800/80 flex justify-between items-center select-none">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 inline-block transition-colors cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 inline-block transition-colors cursor-pointer"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 inline-block transition-colors cursor-pointer"></span>
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Terminal size={12} className="text-python-blue animate-pulse" /> about_me.py
            </span>
            <div className="w-12"></div>
          </div>
          
          {/* IDE Window Body */}
          <div className="p-6 font-mono text-sm leading-relaxed text-slate-300 flex gap-4 overflow-x-auto">
            {/* Line Numbers Gutter */}
            <div className="text-slate-600 text-right select-none pr-4 border-r border-slate-800/80 hidden sm:block font-mono text-xs space-y-1 pt-0.5">
              <div>01</div>
              <div>02</div>
              <div>03</div>
              <div>04</div>
              <div>05</div>
              <div>06</div>
              <div>07</div>
              <div>08</div>
              <div>09</div>
              <div>10</div>
              <div>11</div>
              <div>12</div>
            </div>
            
            {/* Paragraph Text */}
            <div className="flex-grow space-y-5 font-sans text-[15px] sm:text-base">
              {/* <p className="leading-relaxed">
                I am an <span className="text-python-blue font-semibold">AI Engineer</span> and <span className="text-python-yellow font-semibold">GenAI Task Force member</span> with hands-on experience in designing, developing, and deploying production-grade <span className="text-white font-semibold">Generative AI solutions</span> and <span className="text-slate-100 font-medium">Proof-of-Concepts (PoCs)</span>. 
              </p> */}
              <p className="leading-relaxed">
                I am an <span className="text-python-blue font-semibold">AI Engineer</span> with hands-on experience in designing, developing, and deploying production-grade <span className="text-white font-semibold">Generative AI solutions</span> and <span className="text-slate-100 font-medium">Proof-of-Concepts (PoCs)</span>. 
              </p>
              <p className="leading-relaxed">
                Strong background in backend development using <span className="text-python-blue font-medium">Python</span>, <span className="text-python-blue font-medium">Flask</span>, and <span className="text-python-blue font-medium">FastAPI</span>, with expertise in <span className="text-white font-semibold">LLM integrations</span>, <span className="text-python-yellow font-medium">RAG pipelines</span>, Prompt Engineering, and Document Intelligence. Experience of cloud-native deployments on <span className="text-python-blue font-medium">Microsoft Azure Services</span>, CI/CD automation, and building scalable, <span className="text-white font-semibold">secure APIs</span> in cross-functional enterprise environments.
              </p>
              {/* <p className="leading-relaxed">
                With a strong foundation in <span className="text-python-yellow font-medium">Information Technology</span> and hands-on experience at <span className="text-white font-semibold">EY GDS</span>, I have architected and deployed production-grade AI applications. My passion lies in bridging the gap between complex ML models and scalable backend infrastructure.
              </p> */}
            </div>
          </div>
        </div>

        {/* Right: Quick Facts Card */}
        <div className="bg-gradient-to-br from-slate-900/60 to-slate-950/80 backdrop-blur-md p-6 rounded-xl border border-slate-800 shadow-2xl flex flex-col justify-between hover:border-python-yellow/30 transition-all duration-300 group">
          <div>
            <h3 className="text-white font-semibold mb-6 flex items-center gap-2 text-lg">
              <span className="text-python-yellow animate-bounce">⚡</span> Quick Facts
            </h3>
            
            <div className="space-y-4">
              {/* Experience Fact */}
              <div className="flex items-center gap-4 p-3 bg-slate-950/40 rounded-lg border border-slate-800/40 group-hover:border-slate-800/85 transition-colors">
                <div className="p-2 bg-slate-900 text-python-blue rounded-lg group-hover:text-python-yellow transition-colors">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Experience</p>
                  <p className="text-sm font-semibold text-slate-200 font-mono">{experience}</p>
                </div>
              </div>

              {/* Focus Fact */}
              <div className="flex items-center gap-4 p-3 bg-slate-950/40 rounded-lg border border-slate-800/40 group-hover:border-slate-800/85 transition-colors">
                <div className="p-2 bg-slate-900 text-python-blue rounded-lg group-hover:text-python-yellow transition-colors">
                  <Sparkles size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Focus</p>
                  <p className="text-sm font-semibold text-slate-200 font-mono">Backend & AI</p>
                </div>
              </div>

              {/* Location Fact */}
              <div className="flex items-center gap-4 p-3 bg-slate-950/40 rounded-lg border border-slate-800/40 group-hover:border-slate-800/85 transition-colors">
                <div className="p-2 bg-slate-900 text-python-blue rounded-lg group-hover:text-python-yellow transition-colors">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold text-slate-200 font-mono">India</p>
                </div>
              </div>

              {/* Coffee Fact */}
              <div className="flex items-center gap-4 p-3 bg-slate-950/40 rounded-lg border border-slate-800/40 group-hover:border-slate-800/85 transition-colors">
                <div className="p-2 bg-slate-900 text-python-blue rounded-lg group-hover:text-python-yellow transition-colors">
                  <Coffee size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Coffee Intake</p>
                  <p className="text-sm font-semibold text-slate-200 font-mono">TRUE</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs text-slate-500 font-mono text-center">
            print("Keep building!")
          </div>
        </div>
        
      </div>
    </Section>
  );
};