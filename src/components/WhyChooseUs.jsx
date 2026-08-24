import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  UserCheck, 
  Headphones, 
  BadgePercent, 
  Layers, 
  Database, 
  Cpu, 
  Clock, 
  Target, 
  Sliders, 
  GitCommit, 
  HeartHandshake, 
  Building2, 
  CalendarCheck, 
  MessageSquareText, 
  Hourglass, 
  FileSpreadsheet, 
  TrendingUp,
  Search,
  CheckCircle2
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/hrData';

export default function WhyChooseUs() {
  const [searchTerm, setSearchTerm] = useState('');

  const iconMap = {
    ShieldCheck,
    Zap,
    RefreshCw,
    UserCheck,
    Headphones,
    BadgePercent,
    Layers,
    Database,
    Cpu,
    Clock,
    Target,
    Sliders,
    GitCommit,
    HeartHandshake,
    Building2,
    CalendarCheck,
    MessageSquareText,
    Hourglass,
    FileSpreadsheet,
    TrendingUp
  };

  const filteredPoints = WHY_CHOOSE_US.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
              Key Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
              Why Choose Shree Ji HR Consultancy
            </h2>
            <p className="text-sm text-slate-700 mt-1">
              20 reasons why startups, SMEs, and enterprises partner with us for talent acquisition.
            </p>
          </div>

          {/* Clean Search Input */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search 20 points..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0B1F3F] shadow-xs"
            />
          </div>
        </div>

        {/* 20 Points List / Card Rows (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {filteredPoints.map((item) => {
            const IconComp = iconMap[item.icon] || CheckCircle2;
            const formattedNumber = item.id < 10 ? `0${item.id}` : `${item.id}`;

            return (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 sm:p-5 border border-slate-200 hover:border-[#C9A227] transition-colors flex items-start gap-3.5 shadow-xs"
              >
                {/* Number & Flat Icon */}
                <div className="flex-shrink-0 flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {formattedNumber}.
                  </span>
                  <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 text-[#0B1F3F] flex items-center justify-center">
                    <IconComp className="w-4 h-4 text-[#0B1F3F]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-0.5 flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-[#0B1F3F] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPoints.length === 0 && (
          <div className="text-center py-8 bg-white rounded-lg border border-slate-200">
            <p className="text-xs text-slate-500">No advantages matched "{searchTerm}".</p>
            <button onClick={() => setSearchTerm('')} className="mt-1 text-xs font-bold text-[#0B1F3F] underline">
              Reset search
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
