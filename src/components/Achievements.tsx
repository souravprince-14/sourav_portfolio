// import React from 'react';
// import { Section } from './Section';
// import { ACHIEVEMENTS } from '../constants';
// import { Award, Star, Calendar, Building2, ExternalLink } from 'lucide-react';
// import { AchievementItem } from '../type';

// const categoryConfig = {
//   award: {
//     icon: Award,
//     label: 'Award',
//     accent: 'text-python-yellow',
//     border: 'hover:border-python-yellow/50',
//     shadow: 'hover:shadow-python-yellow/10',
//     iconBg: 'bg-python-yellow/10',
//     badge: 'bg-python-yellow/15 text-python-yellow border-python-yellow/30',
//     divider: 'border-python-yellow/20',
//   },
//   recognition: {
//     icon: Star,
//     label: 'Recognition',
//     accent: 'text-emerald-400',
//     border: 'hover:border-emerald-400/50',
//     shadow: 'hover:shadow-emerald-400/10',
//     iconBg: 'bg-emerald-400/10',
//     badge: 'bg-emerald-400/15 text-emerald-400 border-emerald-400/30',
//     divider: 'border-emerald-400/20',
//   },
//   certification: {
//     icon: Award,
//     label: 'Certification',
//     accent: 'text-python-blue',
//     border: 'hover:border-python-blue/50',
//     shadow: 'hover:shadow-python-blue/10',
//     iconBg: 'bg-python-blue/10',
//     badge: 'bg-python-blue/15 text-python-blue border-python-blue/30',
//     divider: 'border-python-blue/20',
//   },
// };

// const AchievementCard: React.FC<{ item: AchievementItem; index: number }> = ({ item, index }) => {
//   const config = categoryConfig[item.category];
//   const Icon = config.icon;

//   return (
//     <div
//       className={`group relative flex flex-col bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${config.border} ${config.shadow}`}
//       style={{ animationDelay: `${index * 80}ms` }}
//     >
//       {/* Top row */}
//       <div className="flex items-start justify-between gap-3">
//         <div className={`p-3 rounded-xl ${config.iconBg} transition-transform duration-300 group-hover:scale-110 shrink-0`}>
//           <Icon size={22} className={config.accent} />
//         </div>
//         <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${config.badge} shrink-0`}>
//           {config.label}
//         </span>
//       </div>

//       {/* Title */}
//       <h3 className="text-white font-semibold text-base leading-snug group-hover:text-slate-100 transition-colors">
//         {item.title}
//       </h3>

//       {/* Description */}
//       {item.description && (
//         <p className="text-slate-400 text-sm leading-relaxed flex-grow line-clamp-4">
//           {item.description}
//         </p>
//       )}

//       {/* Footer */}
//       <div className={`pt-4 border-t ${config.divider} flex items-center justify-between gap-2 flex-wrap mt-auto`}>
//         <div className="flex flex-col gap-1">
//           <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
//             <Building2 size={11} className="text-slate-500 shrink-0" />
//             {item.issuer}
//           </span>
//           <span className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
//             <Calendar size={11} className="shrink-0" />
//             {item.date}
//           </span>
//         </div>

//         {item.certificateUrl && (
//           <a
//             href={item.certificateUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg border transition-all duration-200 ${config.badge} hover:opacity-90 hover:scale-105`}
//           >
//             <ExternalLink size={11} />
//             View Certificate
//           </a>
//         )}
//       </div>
//     </div>
//   );
// };

// export const Achievements: React.FC = () => {
//   return (
//     <Section id="achievements" title="achievements">
//       {/* Subtitle */}
//       <p className="text-slate-500 font-mono text-sm mb-8 -mt-2">
//         // recognition &amp; awards received throughout my career at EY GDS
//       </p>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//         {ACHIEVEMENTS.map((item, index) => (
//           <AchievementCard key={index} item={item} index={index} />
//         ))}
//       </div>
//     </Section>
//   );
// };
