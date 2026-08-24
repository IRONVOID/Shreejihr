import React from 'react';
import { Phone, Mail, MapPin, FileText, Building2, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { SITE_CONFIG } from '../config/siteConfig';

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
            Contact Our Recruitment Team
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Speak directly with our HR consultants in Meerut or submit your requirements online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Details Card */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-[#0B1F3F] pb-3 border-b border-slate-200">
                Shree Ji HR Consultancy
              </h3>
              <div className="space-y-4 text-sm">
                {/* Phones */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center mt-0.5">
                    <Phone className="w-4 h-4 text-[#0B1F3F]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Direct Recruitment Desks
                    </p>
                    <div className="mt-1 space-y-1.5">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#0B1F3F]">Khushi Tanwar</span>
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">Direct HR Consultant</span>
                        </div>
                        <a href={`tel:${SITE_CONFIG.khushiPhoneRaw}`} className="block text-sm font-bold text-[#0B1F3F] hover:text-[#C9A227]">
                          {SITE_CONFIG.khushiPhone}
                        </a>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-[#0B1F3F]">Shruti Thakur</span>
                          <span className="px-1.5 py-0.2 rounded text-[10px] font-bold bg-slate-100 text-slate-700">Founder & Owner</span>
                        </div>
                        <a href={`tel:${SITE_CONFIG.shrutiPhoneRaw}`} className="block text-sm font-semibold text-slate-700 hover:text-[#C9A227]">
                          {SITE_CONFIG.shrutiPhone}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center mt-0.5">
                    <Mail className="w-4 h-4 text-[#0B1F3F]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Email
                    </p>
                    <a href={`mailto:${SITE_CONFIG.email}`} className="block text-sm font-semibold text-[#0B1F3F] hover:text-[#C9A227] break-all">
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-100 border border-slate-200 flex items-center justify-center mt-0.5">
                    <MapPin className="w-4 h-4 text-[#0B1F3F]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Office Address
                    </p>
                    <div className="text-sm text-slate-800 mt-0.5">
                      <p>{SITE_CONFIG.address.line1}</p>
                      <p>{SITE_CONFIG.address.line2}</p>
                      <p>{SITE_CONFIG.address.line3}</p>
                      <p className="text-slate-600">Meerut, Uttar Pradesh — {SITE_CONFIG.address.pincode}</p>
                    </div>
                    <a href={SITE_CONFIG.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-1 text-xs font-bold text-[#0B1F3F] hover:text-[#C9A227]">
                      📍 View on Google Maps
                    </a>
                  </div>
                </div>
              </div>
              
              {/* WhatsApp Action Buttons */}
              <div className="pt-2 space-y-2">
                <a
                  href={SITE_CONFIG.socialLinks.whatsappKhushi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat with HR Consultant (WhatsApp)</span>
                </a>

                <a
                  href={SITE_CONFIG.socialLinks.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-50 hover:bg-emerald-50 text-[#0B1F3F] border border-emerald-300 font-bold text-xs shadow-2xs transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                  <span>Join Shree Ji HR WhatsApp Channel 📢</span>
                </a>
              </div>
            </div>
            {/* Embedded Google Map */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-xs">
              <div className="p-3 bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-700 flex justify-between items-center">
                <span className="font-bold text-[#0B1F3F]">Office Location: Om Tower, Delhi Road, Meerut</span>
                <a href={SITE_CONFIG.address.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#0B1F3F] hover:text-[#C9A227]">
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="w-full h-64 sm:h-72 bg-slate-100">
                <iframe title="Shree Ji HR Consultancy Location Meerut" src={SITE_CONFIG.address.mapEmbedUrl} width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full" />
              </div>
            </div>
          </div>

          {/* Right Column: Online Inquiry & Application Forms */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-100 text-[#735019] text-xs font-bold border border-slate-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Official Application Portals</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3F] mt-2">
                  Submit Your Requirements Online
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Choose the appropriate form below for fast-track processing by our recruitment team.
                </p>
              </div>

              {/* Form Option 1: Candidate / Job Seeker Form */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 hover:border-[#0B1F3F]/40 hover:bg-slate-100 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#0B1F3F] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-[#0B1F3F]">Candidate Application Form</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 uppercase">
                          Job Seekers / Candidates
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        For candidates, freshers, and experienced job seekers applying for vacancies or submitting resumes.
                      </p>
                    </div>
                  </div>
                  <a
                    href={SITE_CONFIG.forms.candidateForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#0B1F3F] hover:bg-[#122C54] text-white font-bold text-xs shrink-0 shadow-sm transition-all group"
                  >
                    <span>Open Candidate Form</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Form Option 2: Recruiter / Employer / Client Form */}
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-[#C9A227] hover:bg-slate-100 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A227] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <Building2 className="w-5 h-5 text-[#0B1F3F]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-[#0B1F3F]">Recruiter & Client Form</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-900 border border-amber-200 uppercase">
                          Employers / Recruiters
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">
                        For companies, employers, and recruiters looking to hire talent, submit mandates, or request proposals.
                      </p>
                    </div>
                  </div>
                  <a
                    href={SITE_CONFIG.forms.recruiterForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C9A227] hover:bg-[#B08B1E] text-[#0B1F3F] font-bold text-xs shrink-0 shadow-sm transition-all group"
                  >
                    <span>Open Client Form</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Direct Assistance Prompt */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                <span>Prefer a quick phone consultation instead?</span>
                <a
                  href={`tel:${SITE_CONFIG.khushiPhoneRaw}`}
                  className="font-bold text-[#0B1F3F] hover:text-[#C9A227] flex items-center gap-1"
                >
                  Call HR Consultant: {SITE_CONFIG.khushiPhone} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
