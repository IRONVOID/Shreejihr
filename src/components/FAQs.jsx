import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/hrData';
import { SITE_CONFIG } from '../config/siteConfig';

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3F] mt-1">
            Questions Employers & Job Seekers Ask
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Clear, transparent answers regarding our recruitment process, hiring terms, and timelines.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-colors shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0B1F3F]">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#C9A227]' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Strip */}
        <div className="mt-8 p-4 rounded-lg bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-700">
            <HelpCircle className="w-4 h-4 text-[#C9A227]" />
            <span>Have a specific hiring requirement not covered above?</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.primaryPhoneRaw}`}
              className="inline-flex items-center gap-1 font-bold text-[#0B1F3F] hover:underline"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Call {SITE_CONFIG.primaryPhoneRaw}</span>
            </a>
            <span>•</span>
            <a
              href={SITE_CONFIG.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-emerald-700 hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
