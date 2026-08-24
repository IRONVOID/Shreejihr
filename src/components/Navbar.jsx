import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  ShieldCheck, 
  ArrowRight,
  Download,
  Radio
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Process', href: '#process' },
    { name: 'Positions', href: '#positions' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200">
      {/* Slim Top Bar */}
      <div className="bg-[#0B1F3F] text-slate-200 text-xs py-2 px-4 border-b border-navy-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-gold-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Govt. of India Recognized • MSME Udyam Certified</span>
            </span>
            <span className="text-slate-500">|</span>
            <a 
              href={SITE_CONFIG.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-400 transition-colors"
              title="View on Google Maps"
            >
              📍 Meerut, Uttar Pradesh 250002
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a 
              href={`tel:${SITE_CONFIG.khushiPhoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
              title="Call HR Desk (Khushi Tanwar)"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>HR Desk: {SITE_CONFIG.khushiPhone}</span>
            </a>
            <a 
              href={`mailto:${SITE_CONFIG.email}`} 
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Slim Clean Navbar */}
      <nav className={`bg-white/95 backdrop-blur-md transition-all duration-200 ${
        isScrolled 
          ? 'shadow-md py-3 border-b border-slate-200' 
          : 'py-3.5 border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo & Name — compact single-line */}
            <a href="#" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-md border border-slate-200 overflow-hidden bg-white p-0.5 flex-shrink-0 shadow-2xs">
                <img 
                  src="/logo.jpg" 
                  alt="Shree Ji HR Consultancy Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="block font-bold text-sm text-[#0B1F3F] whitespace-nowrap">
                  Shree Ji HR
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-wide text-[#C9A227] whitespace-nowrap">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Nav Links — tight single row */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[12.5px] font-semibold text-slate-700 hover:text-[#0B1F3F] whitespace-nowrap transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop Action Buttons — compact flex-shrink-0 */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              <a
                href={SITE_CONFIG.socialLinks.whatsappKhushi}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-300 transition-colors"
                title="Chat with HR Consultant on WhatsApp"
                aria-label="Chat with HR Consultant on WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href={SITE_CONFIG.socialLinks.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg transition-colors whitespace-nowrap"
                title="Join Shree Ji HR WhatsApp Channel"
              >
                <Radio className="w-3 h-3 text-emerald-600 animate-pulse" />
                <span>Channel</span>
              </a>

              <a
                href="/shree-ji-hr-brochure.pdf"
                download="Shree-Ji-HR-Consultancy-Brochure.pdf"
                className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-bold text-[#0B1F3F] bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors whitespace-nowrap"
                title="Download Company Brochure"
              >
                <Download className="w-3 h-3 text-[#C9A227]" />
                <span>Brochure</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.khushiPhoneRaw}`}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-bold text-[#0B1F3F] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200 whitespace-nowrap"
                title={`Call HR Desk (${SITE_CONFIG.khushiPhone})`}
              >
                <Phone className="w-3 h-3 text-[#C9A227]" />
                <span className="hidden xl:inline">Call Now</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold text-white bg-[#0B1F3F] hover:bg-[#122C54] rounded-lg shadow-sm transition-colors whitespace-nowrap"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={`tel:${SITE_CONFIG.primaryPhoneRaw}`}
                className="p-2 rounded-lg bg-slate-100 text-[#0B1F3F] border border-slate-200 sm:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4 text-[#C9A227]" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#0B1F3F] hover:bg-slate-100 focus:outline-none transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#0B1F3F]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop for closing menu on tap outside */}
            <div 
              className="fixed inset-0 top-[60px] bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <div className="relative z-50 lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
              <div className="py-2 border-b border-slate-200 flex items-center justify-between">
                <p className="text-xs text-[#0B1F3F] font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  Govt. Recognized MSME
                </p>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  ● Desks Online
                </span>
              </div>

              {/* Navigation Links Grid */}
              <div className="grid grid-cols-1 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-100 active:bg-slate-200 transition-colors min-h-[44px]"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>

              {/* Action Buttons Section */}
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <a
                  href={SITE_CONFIG.socialLinks.whatsappKhushi}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-sm min-h-[46px] shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat with HR Consultant</span>
                </a>

                <a
                  href={SITE_CONFIG.socialLinks.whatsappChannel}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold text-xs min-h-[42px]"
                >
                  <Radio className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                  <span>Join Official WhatsApp Channel 📢</span>
                </a>

                {/* Candidate & Recruiter Quick Forms */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={SITE_CONFIG.forms.candidateForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#0B1F3F] text-white font-bold text-xs min-h-[42px] text-center shadow-xs"
                  >
                    <span>Candidate Form ↗</span>
                  </a>
                  <a
                    href={SITE_CONFIG.forms.recruiterForm}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-[#C9A227] text-[#0B1F3F] font-bold text-xs min-h-[42px] text-center shadow-xs"
                  >
                    <span>Client Form ↗</span>
                  </a>
                </div>

                {/* Direct Call Card */}
                <div className="pt-1">
                  <a
                    href={`tel:${SITE_CONFIG.khushiPhoneRaw}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-col items-center justify-center py-2.5 px-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-200 min-h-[48px] shadow-xs active:bg-slate-100"
                  >
                    <span className="text-[10px] text-slate-500 font-medium">Direct HR Desk (Khushi Tanwar)</span>
                    <span className="text-xs font-extrabold text-[#0B1F3F] flex items-center gap-1.5 mt-0.5">
                      <Phone className="w-3.5 h-3.5 text-[#C9A227]" /> {SITE_CONFIG.khushiPhone}
                    </span>
                  </a>
                </div>

                {/* Brochure Download */}
                <a
                  href="/shree-ji-hr-brochure.pdf"
                  download="Shree-Ji-HR-Consultancy-Brochure.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-[#0B1F3F] font-bold text-xs min-h-[42px]"
                >
                  <Download className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Download Company Brochure (PDF)</span>
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
