import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/businessData';

interface NavbarProps {
  onOpenConsultation: (serviceId?: string) => void;
  onOpenProposal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onOpenProposal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-display hover:text-amber-400 transition-colors whitespace-nowrap"
          >
            {COMPANY_INFO.name}
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a
              href="#services"
              className="hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-amber-400"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-amber-400"
            >
              Case Studies
            </a>
            <a
              href="#roi-calculator"
              className="hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-amber-400"
            >
              ROI Calculator
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-amber-400"
            >
              About
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors relative py-1 hover:border-b-2 hover:border-amber-400"
            >
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenProposal}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700/80 rounded-lg hover:border-slate-500 transition-colors whitespace-nowrap"
            >
              Generate RFQ
            </button>
            <button
              onClick={() => onOpenConsultation()}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm shadow-amber-400/20 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-3 py-1.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors sm:hidden whitespace-nowrap"
            >
              Consultation
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F141F] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 mt-3 shadow-xl">
          <nav className="flex flex-col space-y-2 text-base font-medium text-slate-200">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800/80 transition-colors"
            >
              Services
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800/80 transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#roi-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800/80 transition-colors"
            >
              ROI Calculator
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800/80 transition-colors"
            >
              About UMZ
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-slate-800/80 transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProposal();
              }}
              className="w-full py-2.5 text-sm font-semibold text-slate-200 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors"
            >
              Generate RFQ
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
