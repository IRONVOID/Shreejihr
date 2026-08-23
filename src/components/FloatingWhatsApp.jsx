import React, { useState } from 'react';
import { X, Radio, MessageSquare, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { SITE_CONFIG } from '../config/siteConfig';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2.5">
      
      {/* Tooltip Pill */}
      {showTooltip && (
        <div className="flex flex-col gap-1.5 bg-[#0B1F3F]/95 text-white text-xs font-semibold py-2.5 px-3.5 sm:px-4 rounded-2xl border border-[#C9A227]/50 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-4 duration-300 max-w-[calc(100vw-2rem)] sm:max-w-xs">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[#C9A227] font-bold text-[11px] uppercase tracking-wider">Online Now</span>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-white p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div>
            <p className="text-white font-bold text-xs">Chat with HR Consultant</p>
            <p className="text-[11px] text-slate-300">Fast Response • {SITE_CONFIG.khushiPhone}</p>
          </div>

          <div className="pt-1 flex items-center gap-2">
            <a
              href={SITE_CONFIG.socialLinks.whatsappKhushi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 hover:text-emerald-300"
            >
              <MessageSquare className="w-3 h-3" />
              <span>Direct Chat</span>
            </a>
            <span className="text-slate-500">•</span>
            <a
              href={SITE_CONFIG.socialLinks.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C9A227] hover:text-amber-300"
            >
              <Radio className="w-3 h-3" />
              <span>Join Channel</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center gap-2">
        {/* WhatsApp Channel Quick Pill */}
        <a
          href={SITE_CONFIG.socialLinks.whatsappChannel}
          target="_blank"
          rel="noopener noreferrer"
          title="Join Shree Ji HR Consultancy WhatsApp Channel"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white text-[#0B1F3F] text-xs font-bold shadow-lg border border-slate-200 hover:border-[#25D366] hover:bg-emerald-50 transition-all hover:scale-105"
        >
          <Radio className="w-3.5 h-3.5 text-[#25D366] animate-pulse" />
          <span>Join WhatsApp Channel</span>
        </a>

        {/* Main Floating WhatsApp Button (Direct HR Consultant) */}
        <a
          href={SITE_CONFIG.socialLinks.whatsappKhushi}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with HR Consultant"
          title="Chat with HR Consultant on WhatsApp"
          className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/80 focus:outline-none focus:ring-4 focus:ring-emerald-400/50 min-w-[56px] min-h-[56px]"
        >
          {/* Pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
          
          {/* WhatsApp Icon */}
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md" />

          {/* Online Indicator Dot */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-navy-950 rounded-full" />
        </a>
      </div>

    </div>
  );
}
