import React, { useState } from 'react';
import {
  Phone,
  ShieldCheck,
  Search,
  Briefcase,
  RefreshCw,
  Clock,
  MapPin,
  Download,
  FileText,
  Building2,
  ExternalLink,
  Radio
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Hero({ onSelectRole }) {
  const [userRole, setUserRole] = useState('employer'); // 'employer' | 'jobseeker'

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 bg-white border-b border-slate-200 overflow-hidden">

      {/* Mild Corporate Background Pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Subtle dot grid */}
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #0B1F3F14 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {/* Top-left navy glow */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#0B1F3F] opacity-[0.03] blur-3xl" />
        {/* Bottom-right gold accent */}
        <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-[#C9A227] opacity-[0.06] blur-3xl" />
        {/* Thin diagonal lines overlay — very subtle */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M0 60L60 0" stroke="#0B1F3F" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-lines)" />
        </svg>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Top Header Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Left Column: Human Pitch & Sourcing Actions (7 cols) */}
          <div className="lg:col-span-7 space-y-5">

            {/* Government Accreditation Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 border border-slate-200 text-[#0B1F3F] text-xs font-semibold shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              <span>Govt. of India Recognized • MSME Udyam Certified Enterprise</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3F] tracking-tight leading-tight">
                Shree Ji HR Consultancy
              </h1>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-[#C9A227]">
                Right People • Right Growth
              </p>
            </div>

            {/* Natural Human Subhead */}
            <p className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
              A trusted recruitment and manpower staffing firm based in <strong>Meerut, Uttar Pradesh</strong>. We help companies in Delhi-NCR and across India hire pre-screened, verified professionals in <strong>24 to 48 hours</strong> with <strong>transparent commercials and zero upfront retainer fees</strong>.
            </p>

            {/* Quick Sourcing / Application Interactive Box (Employer vs Job Seeker) */}
            <div className="bg-slate-50/70 rounded-xl border border-slate-200 p-3.5 sm:p-5 shadow-xs space-y-3">

              <div className="grid grid-cols-2 gap-1.5 sm:flex sm:items-center sm:gap-2 border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setUserRole('employer')}
                  className={`px-2.5 py-2 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center min-h-[38px] ${userRole === 'employer'
                    ? 'bg-[#0B1F3F] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                >
                  🏢 Employers (Hire)
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('jobseeker')}
                  className={`px-2.5 py-2 rounded-lg text-xs font-bold transition-all text-center flex items-center justify-center min-h-[38px] ${userRole === 'jobseeker'
                    ? 'bg-[#0B1F3F] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                    }`}
                >
                  👤 Job Seekers (Apply)
                </button>
              </div>

              {userRole === 'employer' ? (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600">
                    Need immediate staff for <strong>Telecalling, Sales, Accounts, IT, or Operations</strong>?
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <a
                      href={SITE_CONFIG.forms.recruiterForm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1F3F] hover:bg-[#122C54] active:scale-[0.98] text-white font-bold text-xs sm:text-sm transition-all min-h-[44px] shadow-sm"
                    >
                      <Briefcase className="w-4 h-4 text-[#C9A227]" />
                      <span>Post Hiring Requirement</span>
                      <ExternalLink className="w-3 h-3 text-slate-300" />
                    </a>
                    <a
                      href={`tel:${SITE_CONFIG.khushiPhoneRaw}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#C9A227] hover:bg-[#B08B1E] active:scale-[0.98] text-[#0B1F3F] font-bold text-xs sm:text-sm transition-all min-h-[44px] shadow-xs"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call HR Desk ({SITE_CONFIG.khushiPhoneRaw})</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs text-slate-600">
                    Looking for job openings in <strong>Meerut, Noida, Delhi-NCR, or Remote</strong>?
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <a
                      href={SITE_CONFIG.forms.candidateForm}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B1F3F] hover:bg-[#122C54] active:scale-[0.98] text-white font-bold text-xs sm:text-sm transition-all min-h-[44px] shadow-sm"
                    >
                      <FileText className="w-4 h-4 text-[#C9A227]" />
                      <span>Fill Candidate Form</span>
                      <ExternalLink className="w-3 h-3 text-slate-300" />
                    </a>
                    <a
                      href={SITE_CONFIG.socialLinks.whatsappKhushi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-xs sm:text-sm transition-all min-h-[44px] shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Send Resume on WhatsApp</span>
                    </a>
                  </div>
                </div>
              )}

            </div>

            {/* Authentic Trust Strip */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600 pt-1">
              <span className="flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
                100% Pre-Screened Talent
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#0B1F3F]" />
                24–48h Resume Delivery
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
                Head Office: Meerut, UP
              </span>
            </div>

            {/* Quick Action Links: Brochure, Candidate Form, Client Form & WhatsApp Channel */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="/shree-ji-hr-brochure.pdf"
                download="Shree-Ji-HR-Consultancy-Brochure.pdf"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-slate-200 text-[#0B1F3F] font-bold text-xs hover:bg-slate-50 transition-all duration-200 group shadow-2xs"
              >
                <Download className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Download Brochure</span>
                <span className="px-1.5 py-0.5 rounded bg-slate-100 text-[10px] text-[#0B1F3F]">PDF</span>
              </a>

              <a
                href={SITE_CONFIG.forms.candidateForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0B1F3F] hover:bg-[#122C54] text-white font-bold text-xs transition-colors shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Candidate Form</span>
                <ExternalLink className="w-3 h-3 text-slate-300" />
              </a>

              <a
                href={SITE_CONFIG.forms.recruiterForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#C9A227] hover:bg-[#B08B1E] text-[#0B1F3F] font-bold text-xs transition-colors shadow-sm"
              >
                <Building2 className="w-3.5 h-3.5 text-[#0B1F3F]" />
                <span>Client Form</span>
                <ExternalLink className="w-3 h-3 text-[#0B1F3F]" />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs transition-colors shadow-xs"
              >
                <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                <span>Join WhatsApp Channel</span>
                <ExternalLink className="w-3 h-3 text-emerald-600" />
              </a>
            </div>

          </div>

          {/* Right Column: Corporate Trust Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-4">

            {/* Handshake Hero Image Card with floating trust badges */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">

              {/* Main Handshake Image */}
              <img
                src="/corporate-handshake.jpg"
                alt="Trusted Corporate Partnership — Shree Ji HR Consultancy"
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Dark overlay for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3F]/80 via-[#0B1F3F]/20 to-transparent" />

              {/* Top-right: Live badge */}
              <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-600/90 text-white text-[11px] font-bold backdrop-blur-sm border border-emerald-400/40 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Active Placements
              </div>

              {/* Top-left: Brand emblem */}
              <div className="absolute top-3 left-3 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 border border-slate-200 shadow-sm">
                <div className="w-6 h-6 shrink-0">
                  <img src="/shree-ji-logo-full.jpg" alt="Shree Ji HR" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-[#0B1F3F] leading-tight">Shree Ji HR<br /><span className="text-[#C9A227] font-semibold">Consultancy</span></span>
              </div>

              {/* Bottom text overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="text-white font-bold text-base drop-shadow-md">
                  Trusted Recruitment Partnerships
                </p>
                <p className="text-slate-300 text-xs mt-0.5 drop-shadow-sm">
                  Ethical • Transparent • Proven Results
                </p>
              </div>
            </div>

            {/* Trust KPI Badges Row */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white rounded-xl border border-slate-200 p-3 text-center shadow-xs">
                <p className="text-lg font-bold text-[#0B1F3F]">24-48h</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">Resume Delivery</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-3 text-center shadow-xs">
                <p className="text-lg font-bold text-[#0B1F3F]">100%</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">Pre-Vetted Talent</p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-3 text-center shadow-xs">
                <p className="text-lg font-bold text-[#C9A227]">₹0</p>
                <p className="text-[10px] text-slate-500 font-medium mt-0.5">Upfront Retainer</p>
              </div>
            </div>

            {/* Quick Contact Numbers Banner */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-bold text-[#0B1F3F]">Direct Recruitment Desks</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">Online</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#0B1F3F]">Khushi Tanwar <span className="text-[10px] font-normal text-slate-500">(HR Consultant)</span></p>
                    <a href={`tel:${SITE_CONFIG.khushiPhoneRaw}`} className="text-slate-700 font-semibold hover:text-[#C9A227]">
                      📞 {SITE_CONFIG.khushiPhone}
                    </a>
                  </div>
                  <a
                    href={SITE_CONFIG.socialLinks.whatsappKhushi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md font-bold text-[11px] inline-flex items-center gap-1"
                  >
                    <WhatsAppIcon className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-1.5 border-t border-slate-100">
                  <div>
                    <p className="font-bold text-[#0B1F3F]">Shruti Thakur <span className="text-[10px] font-normal text-slate-500">(Founder)</span></p>
                    <a href={`tel:${SITE_CONFIG.shrutiPhoneRaw}`} className="text-slate-700 font-semibold hover:text-[#C9A227]">
                      📞 {SITE_CONFIG.shrutiPhone}
                    </a>
                  </div>
                  <a
                    href={`tel:${SITE_CONFIG.shrutiPhoneRaw}`}
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-[#0B1F3F] rounded-md font-bold text-[11px] inline-flex items-center gap-1 border border-slate-200"
                  >
                    <Phone className="w-3 h-3 text-[#C9A227]" />
                    <span>Call</span>
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200">
                <a
                  href={SITE_CONFIG.socialLinks.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-[11px] transition-all"
                >
                  <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span>Join Shree Ji HR WhatsApp Channel 📢</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
