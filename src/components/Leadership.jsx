import React from 'react';
import { Quote, Award, ShieldCheck, CheckCircle2, Phone } from 'lucide-react';
import { WhatsAppIcon, LinkedInIcon } from './SocialIcons';
import { LEADERSHIP_MEMBERS } from '../data/hrData';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Leadership() {
  return (
    <section id="leadership" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            Leadership & Vision
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
            Meet the Founders Behind Shree Ji HR
          </h2>
          <p className="text-sm sm:text-base text-slate-700 mt-2">
            Driven by ethical recruitment practices, rapid candidate delivery, and a genuine commitment to client and candidate success.
          </p>
        </div>

        {/* 2 Leadership Testimonial Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {LEADERSHIP_MEMBERS.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="p-6 sm:p-7 space-y-5">
                
                {/* Profile Header with Prominent Portrait Frame */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center sm:items-start">
                  
                  {/* Full Portrait Photo Container */}
                  <div className="sm:col-span-5 relative w-full h-96 sm:h-[26rem] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 flex-shrink-0">
                    <img
                      src={leader.image}
                      alt={`${leader.name} - ${leader.role} at Shree Ji HR Consultancy`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-3 text-white sm:hidden">
                      <p className="font-bold text-base">{leader.name}</p>
                      <p className="text-xs text-[#C9A227] font-semibold">{leader.role}</p>
                    </div>
                  </div>

                  {/* Info & Badges */}
                  <div className="sm:col-span-7 space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[#0B1F3F] text-xs font-bold shadow-2xs">
                      <Award className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>{leader.badge}</span>
                    </div>

                    <div className="hidden sm:block">
                      <h3 className="text-2xl font-bold text-[#0B1F3F]">
                        {leader.name}
                      </h3>
                      <p className="text-sm font-bold text-[#C9A227]">
                        {leader.role}
                      </p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        Shree Ji HR Consultancy • Meerut, UP
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="pt-1">
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Executive Focus:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.highlights.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-800 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md"
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Quote / Testimonial Box Inside Column for Desktop */}
                    <div className="relative bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-2xs space-y-1.5 mt-2">
                      <Quote className="w-5 h-5 text-[#C9A227]/40 absolute top-2.5 right-2.5" />
                      <p className="text-xs text-slate-700 leading-relaxed font-normal italic relative z-10">
                        "{leader.quote}"
                      </p>
                    </div>

                  </div>
                </div>

              </div>

                {/* Card Footer Bar with Direct Contact Actions */}
                <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                    <span className="font-semibold text-slate-800">
                      {SITE_CONFIG.khushiPhone}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {leader.id === 'shruti-thakur' && (
                      <a
                        href={SITE_CONFIG.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-xs transition-colors"
                        title="Connect with Shruti Thakur on LinkedIn"
                      >
                        <LinkedInIcon className="w-3.5 h-3.5" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    <a
                      href={`tel:${SITE_CONFIG.khushiPhoneRaw}`}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-[#0B1F3F] font-bold text-xs transition-colors border border-slate-200"
                      title={`Call HR Desk (${SITE_CONFIG.khushiPhone})`}
                    >
                      <Phone className="w-3 h-3 text-[#C9A227]" />
                      <span>Call</span>
                    </a>
                    <a
                      href={leader.id === 'khushi-tanwar' ? SITE_CONFIG.socialLinks.whatsappKhushi : SITE_CONFIG.socialLinks.whatsappShruti}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                    >
                      <WhatsAppIcon className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
          ))}
        </div>

        {/* Bottom Trust Action Box */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50/70 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <h4 className="text-sm font-bold text-[#0B1F3F]">
              Have a strategic recruitment requirement for your business?
            </h4>
            <p className="text-slate-600 mt-0.5">
              Connect directly with our HR Desk at {SITE_CONFIG.khushiPhone} (Khushi Tanwar) for dedicated hiring support.
            </p>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`tel:${SITE_CONFIG.khushiPhoneRaw}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B1F3F] text-white font-bold hover:bg-[#122C54] transition-colors min-h-[38px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Call HR Desk</span>
            </a>
            <a
              href={SITE_CONFIG.socialLinks.whatsappKhushi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors min-h-[38px]"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
