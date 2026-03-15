import React, { useMemo } from 'react';
import { Section } from './Section';
import { PROFILE } from '../constants';

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
            <li><span className="text-python-blue">experience</span>: {experience}</li>
            <li><span className="text-python-blue">focus</span>: Backend & AI</li>
            <li><span className="text-python-blue">location</span>: India</li>
            <li><span className="text-python-blue">coffee</span>: TRUE</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};