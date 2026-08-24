import React from 'react';
import { 
  Building, 
  Code2, 
  Headset, 
  ShoppingBag, 
  GraduationCap, 
  LineChart, 
  Activity, 
  ArrowRight
} from 'lucide-react';
import { INDUSTRIES } from '../data/hrData';

export default function Industries() {
  const iconMap = {
    Building,
    Code2,
    Headset,
    ShoppingBag,
    GraduationCap,
    LineChart,
    Activity
  };

  return (
    <section id="industries" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            Sectors Covered
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
            Industries We Serve
          </h2>
          <p className="text-sm text-slate-700 mt-1">
            Dedicated recruitment specialists matching industry-specific requirements across 7 core sectors.
          </p>
        </div>

        {/* 7 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, idx) => {
            const IconComp = iconMap[ind.icon] || Building;
            return (
              <div
                key={ind.id}
                className="bg-white rounded-lg p-5 border border-slate-200 hover:border-[#C9A227] transition-colors flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded bg-[#0B1F3F] text-white flex items-center justify-center">
                      <IconComp className="w-5 h-5 text-[#C9A227]" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-[#0B1F3F]">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Key Roles:
                  </p>
                  <p className="text-xs font-medium text-slate-800 mt-0.5">
                    {ind.roles}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Other Industries Box */}
          <div className="bg-[#0B1F3F] text-white rounded-lg p-5 flex flex-col justify-between shadow-xs">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                Custom Sourcing
              </span>
              <h3 className="text-base font-bold text-white">
                Other Industries?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Looking for Manufacturing, Logistics, FMCG, or Retail roles? We customize bulk and executive drives.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A227] hover:underline"
            >
              <span>Consult with us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
