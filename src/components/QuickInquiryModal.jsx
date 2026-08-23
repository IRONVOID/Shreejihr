import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function QuickInquiryModal({ isOpen, onClose, defaultRole = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    role: defaultRole || '',
    type: 'employer' // 'employer' | 'candidate'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quick Inquiry:', formData);
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Shree Ji HR Consultancy, I want quick assistance.\nType: ${formData.type === 'employer' ? 'Hiring / Employer' : 'Job Seeker / Candidate'}\nName: ${formData.name}\nPhone: ${formData.phone}\nRole: ${formData.role}`
    );
    window.open(`https://wa.me/91${SITE_CONFIG.primaryPhoneRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-[#0B1F3F] text-white p-6 border-b border-[#EBD8A9]/20 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
              Quick Connect
            </span>
            <h3 className="text-xl font-bold text-white">
              Shree Ji HR Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-[#0B1F3F]">
                Inquiry Received!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xs mx-auto">
                We'll call you shortly on <strong>{formData.phone}</strong>.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2.5 bg-[#0B1F3F] text-[#C9A227] font-bold text-xs rounded-xl"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Type Switcher */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-[#FAF4E6] border border-[#EBD8A9] rounded-xl">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'employer' })}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    formData.type === 'employer'
                      ? 'bg-[#0B1F3F] text-[#C9A227] shadow-xs'
                      : 'text-slate-700 hover:text-[#0B1F3F]'
                  }`}
                >
                  I Want to Hire (Employer)
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'candidate' })}
                  className={`py-2 text-xs font-bold rounded-lg transition-all ${
                    formData.type === 'candidate'
                      ? 'bg-[#0B1F3F] text-[#C9A227] shadow-xs'
                      : 'text-slate-700 hover:text-[#0B1F3F]'
                  }`}
                >
                  Looking for Job (Candidate)
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Amit Kumar"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EBD8A9] bg-[#FAF4E6]/50 text-sm text-slate-900 focus:ring-1 focus:ring-[#0B1F3F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 9876543210"
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EBD8A9] bg-[#FAF4E6]/50 text-sm text-slate-900 focus:ring-1 focus:ring-[#0B1F3F] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Role / Position
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Telecaller, Sales Executive, Accountant..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#EBD8A9] bg-[#FAF4E6]/50 text-sm text-slate-900 focus:ring-1 focus:ring-[#0B1F3F] focus:outline-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 rounded-xl bg-navy-950 text-gold-400 hover:text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <Send className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
