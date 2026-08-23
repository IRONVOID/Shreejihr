import React from 'react';
import { 
  UserCheck, 
  Clock4, 
  UsersRound, 
  PhoneCall, 
  TrendingUp, 
  Briefcase, 
  Building2, 
  Headphones, 
  Terminal, 
  Navigation, 
  Calculator, 
  Crown, 
  Wrench, 
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../data/hrData';

export default function Services() {
  const iconMap = {
    UserCheck,
    Clock4,
    UsersRound,
    PhoneCall,
    TrendingUp,
    Briefcase,
    Building2,
    Headphones,
    Terminal,
    Navigation,
    Calculator,
    Crown,
    Wrench
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#F3EDE0] border-b border-[#E5DAC4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            Core Offerings
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
            Services We Provide
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Comprehensive staffing and recruitment services designed for startups, SMEs, and corporate enterprises.
          </p>
        </div>

        {/* 13 Numbered List Rows / Cards Grid (3 cols on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service) => {
            const IconComp = iconMap[service.icon] || Briefcase;

            return (
              <div
                key={service.num}
                className="bg-white rounded-lg p-5 border border-[#E5DAC4] hover:border-[#C9A227] transition-colors flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded bg-[#FAF6EE] border border-[#E5DAC4] text-[#0B1F3F] flex items-center justify-center">
                        <IconComp className="w-4 h-4 text-[#0B1F3F]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {service.num}.
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider text-slate-700 bg-[#FAF6EE] border border-[#E5DAC4]">
                      {service.badge || service.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3F]">
                      {service.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5DAC4]/50 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">100% Pre-Screened</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 font-bold text-[#0B1F3F] hover:text-[#C9A227]"
                  >
                    <span>Hire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
