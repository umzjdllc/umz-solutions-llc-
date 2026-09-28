import React, { useState } from 'react';
import { X, Printer, Download, Check, Sparkles, Building, Mail, ShieldAlert } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/businessData';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBooking: (serviceId: string, notes: string) => void;
}

export const ProposalModal: React.FC<ProposalModalProps> = ({
  isOpen,
  onClose,
  onProceedToBooking,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);
  const [tier, setTier] = useState<'standard' | 'enterprise'>('enterprise');
  const [companyName, setCompanyName] = useState<string>('');
  const [targetTimeline, setTargetTimeline] = useState<string>('Immediate (14-Day Cutover)');

  if (!isOpen) return null;

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const estimatedRetainer = tier === 'enterprise' ? '$12,500 – $24,000 / mo' : '$6,500 – $11,000 / mo';
  const estimatedAuditFee = tier === 'enterprise' ? '$4,500 (Credited upon SOW)' : '$2,500 (Credited upon SOW)';

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const text = `================================================
UMZ SOLUTIONS LLC | PRELIMINARY SCOPE ESTIMATE
================================================
Client Organization: ${companyName || 'Confidential Enterprise Client'}
Date Generated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
Target Cutover: ${targetTimeline}
Engagement Tier: ${tier.toUpperCase()}

PRIMARY CAPABILITY:
${activeService.title} (${activeService.category})

ESTIMATED BENCHMARK INVESTMENT:
- Operational Audit & Discovery: ${estimatedAuditFee}
- Dedicated Governance Retainer: ${estimatedRetainer}
- Estimated Performance Target: ${activeService.metrics}

DELIVERABLE HIGHLIGHTS:
${activeService.deliverables.map((d) => `• ${d}`).join('\n')}

LEGAL & COMPLIANCE:
All engagements under ${COMPANY_INFO.legalName} (${COMPANY_INFO.name}) include $5M liability coverage, full statutory bonding, and mutual NDA protection.
Direct Contact: ${COMPANY_INFO.email} | ${COMPANY_INFO.phone}
================================================`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `UMZ_Preliminary_RFQ_${(companyName || 'Estimate').replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#111726] border border-slate-700 max-w-3xl w-full rounded-2xl shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              RFQ Engine
            </span>
            <span className="text-slate-600">·</span>
            <h3 className="text-lg font-bold text-white font-display">
              Instant Scope-of-Work Generator
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Target Capability Scope</label>
              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.number}. {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Your Organization Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="e.g. Apex Industrial Group"
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Service SLA Tier</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTier('standard')}
                  className={`py-2 px-3 text-xs rounded-lg border text-left transition-colors ${
                    tier === 'standard'
                      ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="font-bold text-white text-xs">Standard SLA</div>
                  <div className="text-[10px] text-slate-400">Regional / Growth tier</div>
                </button>
                <button
                  type="button"
                  onClick={() => setTier('enterprise')}
                  className={`py-2 px-3 text-xs rounded-lg border text-left transition-colors ${
                    tier === 'enterprise'
                      ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="font-bold text-white text-xs">Dedicated Executive</div>
                  <div className="text-[10px] text-slate-400">Multi-hub 24/7 priority</div>
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Implementation Horizon</label>
              <select
                value={targetTimeline}
                onChange={(e) => setTargetTimeline(e.target.value)}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="Immediate (14-Day Cutover)">Immediate (14-Day Cutover)</option>
                <option value="30 to 45 Days (Upcoming Month)">30 to 45 Days (Upcoming Month)</option>
                <option value="Next Fiscal Quarter (Strategic Planning)">Next Fiscal Quarter (Strategic Planning)</option>
              </select>
            </div>
          </div>

          {/* Generated SOW Brief Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-slate-500 block text-[10px]">ESTIMATED CLIENT SPECIFICATION</span>
                <span className="text-white font-bold text-sm">
                  {companyName || 'Prospective Enterprise Client'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-slate-500 block text-[10px]">ISSUING AUTHORITY</span>
                <span className="text-amber-400 font-semibold">{COMPANY_INFO.legalName}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-300">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">TARGET TIMELINE</span>
                <span className="font-semibold text-white">{targetTimeline}</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">PRELIMINARY AUDIT</span>
                <span className="font-semibold text-amber-300">{estimatedAuditFee}</span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                <span className="text-slate-500 block text-[10px]">ESTIMATED MONTHLY</span>
                <span className="font-semibold text-emerald-400">{estimatedRetainer}</span>
              </div>
            </div>

            <div>
              <span className="text-slate-400 font-sans font-semibold text-xs block mb-2">
                Mandatory SOW Core Workstreams:
              </span>
              <ul className="space-y-1 text-slate-300 font-sans text-xs">
                {activeService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-800 pt-2 text-[11px] text-slate-400 font-sans flex items-center justify-between">
              <span>* Subject to mutual 5-day discovery audit and binding Master Services Agreement.</span>
              <span className="text-slate-400 font-mono">SOC-2 Protected</span>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-800 bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print RFQ</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download (.TXT)</span>
            </button>
          </div>

          <button
            onClick={() => {
              const notes = `RFQ Generated for ${companyName || 'Enterprise Client'}\nTier: ${tier}\nTarget Timeline: ${targetTimeline}`;
              onClose();
              onProceedToBooking(selectedServiceId, notes);
            }}
            className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-md transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Lock this Scope & Schedule Briefing</span>
          </button>
        </div>

      </div>
    </div>
  );
};
