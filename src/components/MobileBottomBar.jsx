import React from 'react';
import { Phone, Briefcase, Search, Radio } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { SITE_CONFIG } from '../config/siteConfig';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B1F3F]/95 backdrop-blur-md border-t border-[#DFBF74]/40 px-2 py-1.5 pb-safe shadow-2xl transition-all">
      <div className="grid grid-cols-4 gap-1 items-center max-w-md mx-auto">
        
        {/* 1. Direct Phone Call */}
        <a
          href={`tel:${SITE_CONFIG.khushiPhoneRaw}`}
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg text-slate-200 hover:text-white active:bg-white/10 transition-colors"
          title={`Call HR Desk (${SITE_CONFIG.khushiPhone})`}
        >
          <div className="w-8 h-8 rounded-full bg-white text-[#0B1F3F] flex items-center justify-center shadow-xs">
            <Phone className="w-4 h-4 text-[#C9A227]" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-slate-200">Call Desk</span>
        </a>

        {/* 2. Direct WhatsApp Chat */}
        <a
          href={SITE_CONFIG.socialLinks.whatsappKhushi}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg text-slate-200 hover:text-white active:bg-white/10 transition-colors"
          title="Chat on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs">
            <WhatsAppIcon className="w-4 h-4 fill-current" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-emerald-400">WhatsApp</span>
        </a>

        {/* 3. Official WhatsApp Channel */}
        <a
          href={SITE_CONFIG.socialLinks.whatsappChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg text-slate-200 hover:text-white active:bg-white/10 transition-colors"
          title="Join WhatsApp Channel"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-900/60 border border-emerald-500/50 text-emerald-300 flex items-center justify-center shadow-xs">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-slate-300">Channel</span>
        </a>

        {/* 4. Hire / Contact */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center py-1 px-1 rounded-lg text-slate-200 hover:text-white active:bg-white/10 transition-colors"
          title="Post Hiring Requirement"
        >
          <div className="w-8 h-8 rounded-full bg-[#C9A227] text-[#0B1F3F] flex items-center justify-center shadow-xs">
            <Briefcase className="w-4 h-4 text-[#0B1F3F]" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-[#C9A227]">Hire Staff</span>
        </a>

      </div>
    </div>
  );
}
