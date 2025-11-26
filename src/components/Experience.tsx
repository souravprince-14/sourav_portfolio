import React from 'react';
import { Section } from './Section';
import { EXPERIENCE } from '../constants';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="experience" className="bg-slate-900/30 rounded-3xl my-12">
      <div className="space-y-12">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative pl-8 md:pl-0">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-[20%] top-0 bottom-0 w-px bg-slate-800"></div>
            
            <div className="md:flex gap-12 group">
              {/* Left: Date & Meta */}
              <div className="md:w-[20%] mb-4 md:mb-0 md:text-right relative">
                 {/* Dot on Timeline */}
                <div className="hidden md:block absolute right-[-29px] top-1 w-3 h-3 rounded-full bg-python-blue border-4 border-slate-950 group-hover:bg-python-yellow transition-colors"></div>
                
                <h3 className="text-xl font-bold text-slate-100">{job.company}</h3>
                <div className="text-sm text-slate-500 mt-1 flex md:justify-end items-center gap-1">
                  <Calendar size={12} /> {job.period}
                </div>
                <div className="text-sm text-slate-500 mt-1 flex md:justify-end items-center gap-1">
                  <MapPin size={12} /> {job.location}
                </div>
              </div>

              {/* Right: Role & Details */}
              <div className="md:w-[80%]">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="text-python-yellow w-5 h-5" />
                  <h4 className="text-lg font-semibold text-python-yellow">{job.role}</h4>
                </div>
                
                <ul className="space-y-3">
                  {job.description.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-300 text-sm leading-relaxed group/item hover:text-white transition-colors">
                      <span className="text-slate-600 mt-1.5 font-mono text-xs">{">"}</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};