import React from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { FolderGit2, Star } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="projects">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div key={index} className="group bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-python-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-python-blue/10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-950 rounded-lg text-python-blue group-hover:text-python-yellow transition-colors">
                <FolderGit2 size={24} />
              </div>
              <div className="flex gap-1 text-slate-600">
                <Star size={16} />
              </div>
            </div>

            <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-python-blue transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-slate-500 mb-6 font-mono">{project.subtitle}</p>

            <div className="flex-grow space-y-3 mb-6">
              {project.points.slice(0, 3).map((point, idx) => (
                <p key={idx} className="text-sm text-slate-400 line-clamp-2">
                   • {point.split(':')[1] || point}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, tIdx) => (
                <span 
                  key={tIdx} 
                  className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded border border-slate-700 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};