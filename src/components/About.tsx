import React from 'react';
import { Section } from './Section';
import { PROFILE } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about" title="about_me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-300 leading-relaxed">
        <div className="md:col-span-2 space-y-4">
          <p className="text-lg">
            {PROFILE.summary}
          </p>
          <p>
            With a strong foundation in <span className="text-python-yellow">Information Technology</span> and hands-on experience at <span className="text-white font-semibold">EY GDS</span>, 
            I have architected and deployed production-grade AI applications. 
            My passion lies in bridging the gap between complex ML models and scalable backend infrastructure.
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-lg border-l-4 border-python-yellow">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="text-2xl">⚡</span> Quick Facts
          </h3>
          <ul className="space-y-3 font-mono text-sm text-slate-400">
            <li><span className="text-python-blue">experience</span>: 2+ Years</li>
            <li><span className="text-python-blue">focus</span>: Backend & AI</li>
            <li><span className="text-python-blue">location</span>: India</li>
            <li><span className="text-python-blue">coffee</span>: TRUE</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};