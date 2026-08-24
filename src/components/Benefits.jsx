import React from 'react';
import { 
  Clock, 
  BadgePercent, 
  RefreshCw, 
  Star, 
  Zap, 
  UserCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import { BENEFITS_FOR_COMPANIES } from '../data/hrData';

export default function Benefits() {
  const iconMap = {
    Clock,
    BadgePercent,
    RefreshCw,
    Star,
    Zap,
    UserCheck,
    TrendingUp
  };

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            Corporate ROI
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
            Benefits for Companies
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Measurable advantages that help employers reduce hiring overheads and secure verified talent.
          </p>
        </div>

        {/* 7 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {BENEFITS_FOR_COMPANIES.map((benefit) => {
            const IconComp = iconMap[benefit.icon] || CheckCircle2;

            return (
              <div
                key={benefit.id}
                className="rounded-xl p-5 border bg-white text-slate-900 border-slate-200 shadow-xs hover:border-[#0B1F3F]/30 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0B1F3F]">
                      <IconComp className="w-4 h-4 text-[#C9A227]" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-50 text-slate-700 border border-slate-200">
                      {benefit.metric}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3F]">
                      {benefit.title}
                    </h3>
                    <p className="text-xs mt-1 text-slate-600 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-10 p-5 rounded-lg bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-[#0B1F3F]">
              Looking for a custom recruitment proposal for your team?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Get an instant quote tailored for your headcount and timeline.
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg bg-[#0B1F3F] text-white hover:bg-[#122C54] text-xs font-bold transition-colors flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" />
          </a>
        </div>

      </div>
    </section>
  );
}
