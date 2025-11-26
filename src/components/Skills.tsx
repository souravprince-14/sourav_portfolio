import React from 'react';
import { Section } from './Section';
import { SKILLS, EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <div className="bg-slate-950 relative">
      <Section id="skills" title="skills_&_education">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Skills Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-python-yellow">#</span> Tech Stack
            </h3>
            <div className="space-y-8">
              {SKILLS.map((category, index) => (
                <div key={index}>
                  <h4 className="text-slate-400 font-mono text-sm mb-3 uppercase tracking-wider">
                    {category.name}
                  </h4>
                  <div className="flex flex-wrap gap-x-2 gap-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="relative group">
                        <span className="px-3 py-1.5 bg-slate-900 border border-slate-800 text-slate-200 rounded hover:border-python-blue hover:text-python-blue transition-all cursor-default text-sm">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div id="education">
             <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="text-python-yellow">#</span> Education
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex gap-4">
                  <div className="mt-1 min-w-fit">
                    <div className="p-2 bg-slate-800 rounded-lg text-python-blue">
                      <GraduationCap size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-100">{edu.institution}</h4>
                    <p className="text-python-yellow text-sm font-medium mb-1">{edu.degree}</p>
                    <div className="flex justify-between items-center text-xs text-slate-500 font-mono mt-2">
                      <span>{edu.period}</span>
                      <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-400">{edu.details}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
};