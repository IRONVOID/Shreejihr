import React, { useState } from 'react';
import { 
  PhoneCall, 
  TrendingUp, 
  Users, 
  Crown, 
  Calculator, 
  Briefcase, 
  FolderKanban, 
  Headset, 
  Building, 
  FileText, 
  Home, 
  GraduationCap, 
  Palette, 
  Film, 
  Share2, 
  Globe,
  Search,
  ArrowRight,
  Filter
} from 'lucide-react';
import { POSITIONS } from '../data/hrData';

export default function Positions({ onSelectPosition }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const iconMap = {
    PhoneCall,
    TrendingUp,
    Users,
    Crown,
    Calculator,
    Briefcase,
    FolderKanban,
    Headset,
    Building,
    FileText,
    Home,
    GraduationCap,
    Palette,
    Film,
    Share2,
    Globe
  };

  const categories = ['All', 'Sales & Marketing', 'Calling & Support', 'Admin & Operations', 'Creative & Design', 'Finance & Accounts', 'Management'];

  const filteredPositions = POSITIONS.filter(pos => {
    const matchesSearch = pos.name.toLowerCase().includes(search.toLowerCase()) || pos.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || pos.category.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="positions" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
            Active Talent Sourcing
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1F3F] mt-1">
            Positions We Hire For
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Search our active candidate database and talent pipelines across 16 core job roles.
          </p>
        </div>

        {/* Job-Board Filter & Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs mb-6 space-y-3">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search job title (e.g. Sales, Telecaller, Accountant, Designer)..."
                className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B1F3F]"
              />
            </div>

            {/* Clear Button if filtered */}
            {(search || selectedCategory !== 'All') && (
              <button
                onClick={() => { setSearch(''); setSelectedCategory('All'); }}
                className="text-xs font-bold text-[#0B1F3F] hover:underline px-3 py-2"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Category Filter Chips (horizontal scroll on mobile) */}
          <div className="flex items-center gap-1.5 pt-2 border-t border-slate-100 overflow-x-auto no-scrollbar py-1 -mx-1 px-1">
            <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1 shrink-0">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 whitespace-nowrap min-h-[34px] ${
                  selectedCategory === cat
                    ? 'bg-[#0B1F3F] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Positions List Rows (2 cols on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredPositions.map((pos) => {
            const IconComp = iconMap[pos.icon] || Briefcase;

            return (
              <div
                key={pos.name}
                className="bg-white rounded-lg p-4 border border-slate-200 hover:border-[#C9A227] transition-colors flex items-center justify-between gap-4 shadow-xs"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-9 h-9 rounded bg-slate-100 border border-slate-200 text-[#0B1F3F] flex items-center justify-center flex-shrink-0">
                    <IconComp className="w-4 h-4 text-[#0B1F3F]" />
                  </div>
                  
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-sm font-bold text-[#0B1F3F] truncate">
                        {pos.name}
                      </h3>
                      {pos.openings && (
                        <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded">
                          {pos.openings}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5 flex-wrap">
                      <span>{pos.category}</span>
                      <span>•</span>
                      <span>Exp: {pos.exp}</span>
                      <span>•</span>
                      <span>📍 {pos.location}</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  onClick={() => onSelectPosition && onSelectPosition(pos.name)}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#0B1F3F] hover:text-[#C9A227] flex-shrink-0 px-2.5 py-1 rounded bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Empty Result */}
        {filteredPositions.length === 0 && (
          <div className="text-center py-10 bg-white rounded-lg border border-slate-200">
            <p className="text-xs text-slate-500">No positions found matching "{search}".</p>
            <button
              onClick={() => { setSearch(''); setSelectedCategory('All'); }}
              className="mt-2 text-xs font-bold text-[#0B1F3F] underline"
            >
              Reset all filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
