import React from 'react';
import { 
  FileSearch, 
  Search, 
  UserCheck, 
  CheckSquare, 
  Award, 
  PartyPopper,
  ShieldCheck
} from 'lucide-react';
import { HIRING_PROCESS } from '../data/hrData';

export default function HiringProcess() {
  const iconMap = {
    FileSearch,
    Search,
    UserCheck,
    CheckSquare,
    Award,
    PartyPopper
  };

  return (
    <section id="process" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            Step-by-Step Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
            Our Hiring Process
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            A transparent 6-step recruitment pipeline designed for speed, precision candidate matching, and guaranteed joining.
          </p>
        </div>

        {/* 6-Step Clean Process Grid / Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {HIRING_PROCESS.map((item, idx) => {
            const IconComp = iconMap[item.icon] || UserCheck;

            return (
              <div
                key={item.step}
                className="bg-white rounded-lg p-5 border border-slate-200 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-[#0B1F3F] text-white flex items-center justify-center font-bold text-xs">
                        {item.step}
                      </div>
                      <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 text-[#0B1F3F] flex items-center justify-center">
                        <IconComp className="w-4 h-4 text-[#C9A227]" />
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider px-2 py-0.5 bg-slate-50 rounded border border-slate-200">
                      {item.highlight || item.duration}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3F]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {idx === 5 && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Dedicated Joining & Onboarding Support</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
