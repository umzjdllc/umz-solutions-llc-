import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/businessData';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenProposal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenProposal }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Architectural Scrim & Texture */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17] via-[#0B0F17]/70 to-[#0B0F17]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed category kicker without pill tags */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400">
              <span>Enterprise Commercial Solutions</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Institutional Governance</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display max-w-2xl [text-wrap:balance]">
              Precision Operations & Scalable Logistics for High-Growth Commerce.
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
              {COMPANY_INFO.name} designs, optimizes, and executes multi-facility supply chains, master vendor agreements, and automated dispatch operations for regional and national enterprises.
            </p>

            {/* Primary Action Zone */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer active:scale-[0.99]"
              >
                <span>Schedule Discovery Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenProposal}
                className="px-5 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 border border-slate-700/80 rounded-lg hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Instant SOW / Quote Generator</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {/* Direct Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>$5M Commercial Liability & Bonded</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>14-Day Staged Cutover Guarantee</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Executive Account Management</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Carrier with Resilient Fallback */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl shadow-black/60 group">
              
              {!imgError ? (
                <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full overflow-hidden">
                  <img
                    src="/src/assets/images/hero_business_headquarters_1790611465667.jpg"
                    alt="UMZ Solutions Executive Headquarters and Commercial Operations"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Measured Scrim for Media Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
                </div>
              ) : (
                /* Fallback container if asset fails to load */
                <div className="aspect-[16/10] w-full bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-3 font-display font-bold text-lg">
                    UMZ
                  </div>
                  <h4 className="text-white font-semibold font-display">Commercial Operations Center</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">Wilmington Corporate Hub & Multi-Facility Logistics</p>
                </div>
              )}

              {/* In-frame Executive Metrics Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 border-b border-slate-800/80 pb-2">
                  <span className="font-medium text-slate-300">Quarterly Operational Execution</span>
                  <span className="text-amber-400 font-mono tabular-nums font-semibold">Q3 Benchmark Verified</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white font-display tabular-nums">99.4%</div>
                    <div className="text-xs text-slate-400">On-Time SLA Delivery</div>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-display tabular-nums">-32%</div>
                    <div className="text-xs text-slate-400">Freight Variance Delta</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Claim-to-Proof Adjacency Strip: Full 1440px desktop baseline stats */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
