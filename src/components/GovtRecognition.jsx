import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  Users
} from 'lucide-react';
import { GOVT_BADGES } from '../data/hrData';

export default function GovtRecognition() {
  const iconMap = {
    ShieldCheck,
    Award,
    CheckCircle2,
    Briefcase,
    Users
  };

  return (
    <section className="py-12 bg-[#0B1F3F] text-white border-b border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/10 text-gold-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official Accreditation</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
            Proud to be <span className="text-gold-400">Udyam Registered</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Officially registered under the Ministry of Micro, Small and Medium Enterprises (MSME), Government of India.
          </p>
        </div>

        {/* 5 Badges / Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {GOVT_BADGES.map((badge) => {
            const IconComponent = iconMap[badge.icon] || ShieldCheck;
            return (
              <div 
                key={badge.id}
                className="bg-[#071732] border border-navy-800 rounded-lg p-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded bg-gold-400/10 text-gold-400 flex items-center justify-center">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h3 className="text-xs font-bold text-white leading-snug">
                    {badge.title}
                  </h3>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 leading-tight">
                  {badge.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
