import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, CheckCircle, Clock, Building } from 'lucide-react';
import { CASE_STUDIES } from '../data/businessData';
import { CaseStudy } from '../types';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null);

  const filteredStudies = filter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((item) => item.category === filter);

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[#0D121D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Verified Case Evidence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
              Quantified Outcomes Across High-Stakes Environments.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Real before/after case studies demonstrating operational execution and net capital retention.
            </p>
          </div>

          {/* Interactive filter tabs (allowed as functional button controls per skill guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Engagements
            </button>
            <button
              onClick={() => setFilter('supply_chain')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'supply_chain'
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Supply Chain
            </button>
            <button
              onClick={() => setFilter('operations')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'operations'
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Operations & Procurement
            </button>
            <button
              onClick={() => setFilter('capital_strategy')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'capital_strategy'
                  ? 'bg-amber-400 text-slate-950 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Expansion & Capital
            </button>
          </div>
        </div>

        {/* Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="bg-[#111726] border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div>
                {/* Media frame */}
                {study.image && (
                  <div className="aspect-[16/10] w-full overflow-hidden relative bg-slate-900 border-b border-slate-800">
                    <img
                      src={study.image}
                      alt={study.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Metric overlay */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-display tabular-nums">
                        {study.metricHighlight}
                      </div>
                      <div className="text-xs text-slate-300 font-medium">{study.metricLabel}</div>
                    </div>
                  </div>
                )}

                <div className="p-6 space-y-4">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="text-slate-300">{study.clientIndustry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{study.timeline}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display leading-snug group-hover:text-amber-300 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {study.overview}
                  </p>

                  <div className="pt-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Key Interventions
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {study.outcomes.slice(0, 2).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setActiveModal(study)}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Examine Case Breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Proof banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#111726] to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Ready to benchmark your current dispatch and operational costs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Our preliminary confidential operational audit takes under 5 business days and requires zero operational cutover.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>Request Operational Audit</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Case Study Deep-Dive Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#111726] border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-mono mb-1">
                  <span>{activeModal.clientIndustry}</span>
                  <span>·</span>
                  <span>{activeModal.timeline}</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  {activeModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-sm font-medium"
              >
                ✕
              </button>
            </div>

            {/* Metric Banner */}
            <div className="p-4 rounded-xl bg-slate-900 border border-amber-400/20 flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-amber-400 font-display tabular-nums">
                  {activeModal.metricHighlight}
                </div>
                <div className="text-xs text-slate-300">{activeModal.metricLabel}</div>
              </div>
              <TrendingUp className="w-8 h-8 text-amber-400/60" />
            </div>

            {/* Challenge */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                Initial Operational Vulnerability
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-3.5 rounded-xl border border-slate-800">
                {activeModal.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                UMZ Operational Intervention
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/50 p-3.5 rounded-xl border border-slate-800">
                {activeModal.solution}
              </p>
            </div>

            {/* Outcomes */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Audited Commercial Outcomes
              </h4>
              <ul className="space-y-2">
                {activeModal.outcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
              >
                Close Case
              </button>
              <button
                onClick={() => {
                  setActiveModal(null);
                  onOpenConsultation();
                }}
                className="px-5 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5"
              >
                <span>Discuss Similar Problem</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
