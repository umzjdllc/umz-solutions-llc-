import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Layers, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/businessData';
import { ServiceItem } from '../types';

interface ServicesBentoProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#0D121D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Core Commercial Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Engineered for Operating Velocity and Scalable Governance.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Every capability is backed by enforceable service-level agreements, transparent milestone accounting, and dedicated operational managers.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 1: Logistics Architecture (Large Col-Span-7) */}
          <div className="lg:col-span-7 bg-[#111726] rounded-2xl border border-slate-800/80 p-7 sm:p-9 flex flex-col justify-between hover:border-slate-700 transition-all group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-400 font-mono text-sm font-bold tracking-wider">
                  {SERVICES[0].number}. {SERVICES[0].category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {SERVICES[0].typicalTimeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3 group-hover:text-amber-300 transition-colors">
                {SERVICES[0].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {SERVICES[0].description}
              </p>

              {/* Visual preview */}
              {SERVICES[0].image && (
                <div className="rounded-xl overflow-hidden mb-6 aspect-[16/9] border border-slate-800 relative bg-slate-900">
                  <img
                    src={SERVICES[0].image}
                    alt={SERVICES[0].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-amber-300">
                    {SERVICES[0].metrics}
                  </div>
                </div>
              )}

              {/* Key Deliverables */}
              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-300">
                {SERVICES[0].deliverables.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => setSelectedServiceModal(SERVICES[0])}
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>View Complete Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={() => onSelectService(SERVICES[0].id)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Engage Capability</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Operations & Governance (Col-Span-5) */}
          <div className="lg:col-span-5 bg-[#111726] rounded-2xl border border-slate-800/80 p-7 sm:p-9 flex flex-col justify-between hover:border-slate-700 transition-all group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-400 font-mono text-sm font-bold tracking-wider">
                  {SERVICES[1].number}. {SERVICES[1].category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {SERVICES[1].typicalTimeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3 group-hover:text-amber-300 transition-colors">
                {SERVICES[1].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {SERVICES[1].description}
              </p>

              {SERVICES[1].image && (
                <div className="rounded-xl overflow-hidden mb-6 aspect-[16/10] border border-slate-800 relative bg-slate-900">
                  <img
                    src={SERVICES[1].image}
                    alt={SERVICES[1].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-amber-300">
                    {SERVICES[1].metrics}
                  </div>
                </div>
              )}

              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-300">
                {SERVICES[1].deliverables.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => setSelectedServiceModal(SERVICES[1])}
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>View Complete Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={() => onSelectService(SERVICES[1].id)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Engage Capability</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: Digital Automation Systems (Col-Span-5) */}
          <div className="lg:col-span-5 bg-[#111726] rounded-2xl border border-slate-800/80 p-7 sm:p-9 flex flex-col justify-between hover:border-slate-700 transition-all group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-400 font-mono text-sm font-bold tracking-wider">
                  {SERVICES[2].number}. {SERVICES[2].category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {SERVICES[2].typicalTimeline}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3 group-hover:text-amber-300 transition-colors">
                {SERVICES[2].title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {SERVICES[2].description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-6">
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Impact Metric</div>
                <div className="text-amber-400 font-mono font-bold text-sm">{SERVICES[2].metrics}</div>
              </div>

              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-300">
                {SERVICES[2].deliverables.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => setSelectedServiceModal(SERVICES[2])}
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>View Complete Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={() => onSelectService(SERVICES[2].id)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Engage Capability</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 4: Commercial Capital & Expansion (Col-Span-7) */}
          <div className="lg:col-span-7 bg-[#111726] rounded-2xl border border-slate-800/80 p-7 sm:p-9 flex flex-col justify-between hover:border-slate-700 transition-all group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-400 font-mono text-sm font-bold tracking-wider">
                  {SERVICES[3].number}. {SERVICES[3].category}
                </span>
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {SERVICES[3].typicalTimeline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3 group-hover:text-amber-300 transition-colors">
                {SERVICES[3].title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {SERVICES[3].description}
              </p>

              {SERVICES[3].image && (
                <div className="rounded-xl overflow-hidden mb-6 aspect-[16/9] border border-slate-800 relative bg-slate-900">
                  <img
                    src={SERVICES[3].image}
                    alt={SERVICES[3].title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-amber-300">
                    {SERVICES[3].metrics}
                  </div>
                </div>
              )}

              <ul className="space-y-2 mb-6 text-xs sm:text-sm text-slate-300">
                {SERVICES[3].deliverables.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => setSelectedServiceModal(SERVICES[3])}
                className="text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>View Complete Scope</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
              <button
                onClick={() => onSelectService(SERVICES[3].id)}
                className="px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Engage Capability</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Scope Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#111726] border border-slate-700 max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-amber-400 font-mono text-xs font-bold tracking-wider">
                  {selectedServiceModal.number} · {selectedServiceModal.category}
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  {selectedServiceModal.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 text-sm font-medium"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedServiceModal.description}
            </p>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block mb-0.5">Deployment Window</span>
                <span className="text-white font-semibold font-mono">{selectedServiceModal.typicalTimeline}</span>
              </div>
              <div>
                <span className="text-slate-400 block mb-0.5">Performance Benchmark</span>
                <span className="text-amber-400 font-semibold font-mono">{selectedServiceModal.metrics}</span>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Scope Deliverables & Work Breakdown</span>
              </h4>
              <ul className="space-y-2.5">
                {selectedServiceModal.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
              >
                Close Window
              </button>
              <button
                onClick={() => {
                  const id = selectedServiceModal.id;
                  setSelectedServiceModal(null);
                  onSelectService(id);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-1.5"
              >
                <span>Request Scope Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
