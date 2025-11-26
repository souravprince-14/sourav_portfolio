import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
          <span className="text-python-blue font-mono mr-2">def</span>
          {title}<span className="text-slate-500">():</span>
        </h2>
        <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
      </div>
      {children}
    </section>
  );
};