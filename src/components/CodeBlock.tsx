import React from 'react';

interface CodeBlockProps {
  code: string;
  fileName?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, fileName = "main.py" }) => {
  return (
    <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden font-mono text-sm shadow-2xl">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-slate-400 text-xs">{fileName}</span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};