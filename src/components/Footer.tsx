import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/businessData';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenProposal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation, onOpenProposal }) => {
  const [emailInput, setEmailInput] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#080B11] border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="text-xl font-extrabold text-white font-display block">
              {COMPANY_INFO.name}
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Providing enterprise operations architecture, commercial supply chain management, and executive contract governance.
            </p>
            <div className="text-xs text-slate-500">
              Operating entity: <strong className="text-slate-400">{COMPANY_INFO.legalName}</strong>
            </div>
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bonded & Insured · Licensed Commercial Advisory</span>
            </div>
          </div>

          {/* Quick Nav (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services Scope</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#roi-calculator" className="hover:text-white transition-colors">ROI Calculator</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About UMZ</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Operations FAQ</a>
              </li>
            </ul>
          </div>

          {/* Solutions & Tools (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Engagement
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={onOpenProposal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Generate SOW / RFQ
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Schedule Discovery
                </button>
              </li>
              <li>
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  Direct Email Inquiry
                </a>
              </li>
              <li>
                <span className="text-slate-500">Carrier Verification</span>
              </li>
            </ul>
          </div>

          {/* Direct Newsletter / Briefing Subscription (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Commercial Logistics Briefing
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Quarterly executive synthesis covering carrier spot rate forecasts, regulatory compliance updates, and freight capacity indices.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="executive@company.com"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 grow"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg font-semibold text-xs flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {subscribed && (
                <div className="text-xs text-emerald-400 flex items-center gap-1.5 animate-fadeIn">
                  <Check className="w-3.5 h-3.5" />
                  <span>Subscribed. You will receive our next quarterly executive briefing.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Quiet legal notices and contact mirror */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Registered commercial entity.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <span>Corporate Email: <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:underline">{COMPANY_INFO.email}</a></span>
            <span aria-hidden="true">·</span>
            <span>Phone: <span className="text-slate-300 font-mono">{COMPANY_INFO.phone}</span></span>
            <span aria-hidden="true">·</span>
            <span>Headquarters: <span className="text-slate-300">{COMPANY_INFO.headquarters}</span></span>
          </div>
        </div>

      </div>
    </footer>
  );
};
