import React from 'react';
import { ShieldCheck, Award, FileCheck2, Building2, MapPin, Mail, Phone, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../data/businessData';

export const CompanyAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Institutional Background
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
              Built for Ground-Truth Execution, Not Theoretical Consulting.
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Founded under <strong className="text-white">{COMPANY_INFO.legalName}</strong>, our firm bridges the gap between high-level executive financial strategy and physical supply chain execution. We do not provide abstract slide decks; our managers embed directly with dispatch nodes, procurement officers, and operational directors.
              </p>
              <p>
                Whether managing multi-state freight capacity or restructuring multimillion-dollar vendor master services agreements, our standard is singular: contractual milestones backed by financial transparency.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Bonded & Insured</span>
                </div>
                <p className="text-xs text-slate-400">
                  Backed by $5,000,000 aggregate commercial liability, comprehensive cargo insurance, and state statutory bonding.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>ISO-Aligned SOPs</span>
                </div>
                <p className="text-xs text-slate-400">
                  Standardized operating protocols for multi-modal routing, cold-chain monitoring, and vendor performance audits.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <FileCheck2 className="w-4 h-4 text-amber-400" />
                  <span>Contractual SLAs</span>
                </div>
                <p className="text-xs text-slate-400">
                  Performance-linked contracts guarantee on-time cutover timelines and audit-verified cost reductions.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Directorship</span>
                </div>
                <p className="text-xs text-slate-400">
                  Every account is led by an experienced operating partner with direct escalation paths 24/7.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Corporate Registry & Facility Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#111726] border border-slate-800 rounded-2xl p-7 sm:p-9 space-y-6 shadow-2xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Corporate Information</span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  {COMPANY_INFO.legalName}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Doing business as {COMPANY_INFO.name}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300 border-t border-b border-slate-800 py-5">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Corporate Headquarters</span>
                    <span className="text-slate-400">{COMPANY_INFO.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Commercial Inquiries</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-amber-400 hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Central Switchboard</span>
                    <span className="text-slate-400 font-mono">{COMPANY_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Operating Desk Hours</span>
                    <span className="text-slate-400">{COMPANY_INFO.hours}</span>
                  </div>
                </div>
              </div>

              {/* Regional Division Marker */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                <strong className="text-white block mb-0.5">B2B Trust Marker</strong>
                Licensed, bonded, and certified for inter-state commercial logistics, asset management, and enterprise contract advisory throughout North America.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
