import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp,
  Download,
  FileText,
  Building2,
  ExternalLink,
  Radio
} from 'lucide-react';
import { 
  LinkedInIcon, 
  InstagramIcon, 
  FacebookIcon, 
  TwitterXIcon, 
  WhatsAppIcon 
} from './SocialIcons';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Founders & Leadership', href: '#leadership' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Services We Provide', href: '#services' },
    { name: 'Industries We Serve', href: '#industries' },
    { name: 'Our Hiring Process', href: '#process' },
    { name: 'Positions We Hire For', href: '#positions' },
    { name: 'Benefits For Companies', href: '#benefits' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  const serviceLinks = [
    'Permanent Hiring',
    'Temporary Staffing',
    'Bulk Hiring',
    'Telecaller Hiring',
    'Sales Staff Hiring',
    'Office Staff Hiring',
    'Real Estate Hiring',
    'BPO Hiring',
    'IT Recruitment',
    'Accountants & Managers'
  ];

  return (
    <footer className="bg-[#0B1F3F] text-slate-300 pt-12 pb-10 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-navy-800">
          
          {/* Column 1: Brand (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5 flex-shrink-0">
                <img 
                  src="/logo.jpg" 
                  alt="Shree Ji HR Consultancy Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="block font-bold text-lg text-white">
                  Shree Ji HR Consultancy
                </span>
                <span className="block text-xs uppercase tracking-wider text-[#C9A227]">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Govt. of India Recognized & MSME Udyam certified recruitment agency delivering reliable, speed-driven staffing solutions across North India and Pan-India.
            </p>

            {/* Social Icons Row */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Connect With Us
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                
                {/* WhatsApp Direct */}
                <a
                  href={SITE_CONFIG.socialLinks.whatsappKhushi}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct WhatsApp Chat with HR Consultant"
                  className="w-8 h-8 rounded bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                  title="WhatsApp (Chat with HR Consultant)"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                </a>

                {/* WhatsApp Channel */}
                <a
                  href={SITE_CONFIG.socialLinks.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Official WhatsApp Channel"
                  className="w-8 h-8 rounded bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors"
                  title="Join WhatsApp Channel"
                >
                  <Radio className="w-4 h-4 animate-pulse" />
                </a>

                {/* LinkedIn */}
                <a
                  href={SITE_CONFIG.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Shruti Thakur on LinkedIn"
                  className="w-8 h-8 rounded bg-navy-800 text-slate-300 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors"
                  title="Shruti Thakur (Founder) on LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href={SITE_CONFIG.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-8 h-8 rounded bg-navy-800 text-slate-300 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href={SITE_CONFIG.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Page"
                  className="w-8 h-8 rounded bg-navy-800 text-slate-300 hover:bg-blue-700 hover:text-white flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>

                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label="Send Email"
                  className="w-8 h-8 rounded bg-navy-800 text-slate-300 hover:bg-[#C9A227] hover:text-[#0B1F3F] flex items-center justify-center transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* Phone */}
                <a
                  href={`tel:${SITE_CONFIG.khushiPhoneRaw}`}
                  aria-label={`Call Khushi Tanwar (${SITE_CONFIG.khushiPhone})`}
                  className="w-8 h-8 rounded bg-navy-800 text-slate-300 hover:bg-[#C9A227] hover:text-[#0B1F3F] flex items-center justify-center transition-colors"
                  title={`Call Khushi Tanwar (${SITE_CONFIG.khushiPhone})`}
                >
                  <Phone className="w-4 h-4" />
                </a>

              </div>
            </div>

            {/* Action Links: Brochure, Client Form & WhatsApp Channel */}
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="/shree-ji-hr-brochure.pdf"
                download="Shree-Ji-HR-Consultancy-Brochure.pdf"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#C9A227]/40 text-[#C9A227] font-semibold text-[11px] hover:bg-[#C9A227] hover:text-[#0B1F3F] transition-all group"
              >
                <Download className="w-3 h-3" />
                <span>Brochure</span>
                <span className="px-1 py-0.2 rounded bg-white/10 text-[9px] group-hover:bg-[#0B1F3F]/10">PDF</span>
              </a>

              <a
                href={SITE_CONFIG.forms.candidateForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] transition-colors"
              >
                <FileText className="w-3 h-3 text-[#C9A227]" />
                <span>Candidate Form</span>
                <ExternalLink className="w-2.5 h-2.5 text-slate-400" />
              </a>

              <a
                href={SITE_CONFIG.forms.recruiterForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#C9A227]/20 hover:bg-[#C9A227] text-[#C9A227] hover:text-[#0B1F3F] border border-[#C9A227]/40 font-semibold text-[11px] transition-colors"
              >
                <Building2 className="w-3 h-3" />
                <span>Client Form</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-70" />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-400/40 font-semibold text-[11px] transition-colors"
              >
                <Radio className="w-3 h-3 text-emerald-400" />
                <span>WhatsApp Channel 📢</span>
              </a>
            </div>

            </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
              Services
            </h4>
            <ul className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm">
              {serviceLinks.map((srv) => (
                <li key={srv}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {srv}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact info (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
              Contact Details
            </h4>
            
            <div className="space-y-2">
              <a 
                href={SITE_CONFIG.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors flex items-start gap-2 group"
                title="Open location in Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#C9A227] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{SITE_CONFIG.address.fullAddress}</span>
              </a>
              <div className="space-y-1.5">
                <div>
                  <span className="text-[11px] text-slate-400 block">Direct HR Consultant:</span>
                  <a href={`tel:${SITE_CONFIG.khushiPhoneRaw}`} className="hover:text-white font-bold text-slate-200 block mt-0.5">
                    📞 {SITE_CONFIG.khushiPhone} (Khushi Tanwar)
                  </a>
                </div>
              </div>
              <div className="space-y-1 pt-1">
                <span className="text-[11px] text-slate-400 block">Official Email:</span>
                <a href={`mailto:${SITE_CONFIG.email}`} className="block hover:text-white break-all text-xs text-slate-200">
                  ✉️ {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Shree Ji HR Consultancy. All rights reserved. MSME Udyam Certified.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
