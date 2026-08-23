import React from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';
import { ABOUT_DATA } from '../data/hrData';
import { SITE_CONFIG } from '../config/siteConfig';

export default function AboutUs() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#F4E7BD] border-b border-[#DFBF74]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
            Trusted Recruitment Partner Across Industries
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-2">
            Delivering professional HR solutions with transparency, reliability, and long-term client satisfaction.
          </p>
        </div>

        {/* Narrative & Core Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          <div className="lg:col-span-8 space-y-4">
            {ABOUT_DATA.mainText.map((paragraph, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[#DFBF74] shadow-xs">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#0B1F3F]/10 flex items-center justify-center text-[#0B1F3F]">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {paragraph}
                </p>
              </div>
            ))}

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0B1F3F] text-white font-bold text-xs sm:text-sm hover:bg-[#122C54] transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold text-xs sm:text-sm hover:bg-emerald-100 transition-colors"
              >
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Quick Highlight Box */}
          <div className="lg:col-span-4 bg-white rounded-xl p-6 border border-[#DFBF74] space-y-4 shadow-xs">
            <div className="flex items-center gap-3 pb-3 border-b border-[#DFBF74]">
              <ShieldCheck className="w-6 h-6 text-[#C9A227]" />
              <div>
                <h3 className="font-bold text-sm text-[#0B1F3F]">MSME Udyam Certified</h3>
                <p className="text-xs text-slate-500">Government of India</p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-[#DFBF74]/50">
                <span className="font-semibold text-slate-700">Turnaround Time</span>
                <span className="text-[#0B1F3F] font-bold">24 – 48 Hours</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#DFBF74]/50">
                <span className="font-semibold text-slate-700">Commercials</span>
                <span className="text-[#0B1F3F] font-bold">No Upfront Fees</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#DFBF74]/50">
                <span className="font-semibold text-slate-700">Hiring Scope</span>
                <span className="text-[#0B1F3F] font-bold">Local & Pan-India</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-slate-700">Candidate Screening</span>
                <span className="text-[#0B1F3F] font-bold">100% Verified</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mission & Vision Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Mission */}
          <div className="bg-white rounded-xl p-6 border border-[#DFBF74] space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3F] text-white flex items-center justify-center">
                <Target className="w-5 h-5 text-[#C9A227]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227]">Core Purpose</span>
                <h3 className="text-lg font-bold text-[#0B1F3F]">{ABOUT_DATA.mission.title}</h3>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {ABOUT_DATA.mission.description}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-xl p-6 border border-[#DFBF74] space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#0B1F3F] text-white flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#C9A227]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A227]">Long-Term Goal</span>
                <h3 className="text-lg font-bold text-[#0B1F3F]">{ABOUT_DATA.vision.title}</h3>
              </div>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {ABOUT_DATA.vision.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
