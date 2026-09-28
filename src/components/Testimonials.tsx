import React from 'react';
import { Quote, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/businessData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0D121D] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Executive Endorsements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Trusted by Commercial Operators and Operations Leaders.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Direct feedback from corporate decision-makers whose logistics and master contracts we oversee.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#111726] border border-slate-800 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-amber-400/40" />
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                {/* Result highlight */}
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{t.metricResult}</span>
                </div>

                {/* Author Info */}
                <div>
                  <div className="text-sm font-bold text-white font-display">{t.author}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.company} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
