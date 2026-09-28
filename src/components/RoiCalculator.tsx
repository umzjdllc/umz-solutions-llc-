import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, DollarSign, Clock } from 'lucide-react';

interface RoiCalculatorProps {
  onApplyEstimate: (data: { spend: number; savings: number; focus: string }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onApplyEstimate }) => {
  const [monthlySpend, setMonthlySpend] = useState<number>(120000);
  const [facilityCount, setFacilityCount] = useState<number>(4);
  const [errorRate, setErrorRate] = useState<number>(8);
  const [focusArea, setFocusArea] = useState<string>('logistics');

  // Business logic for savings projections
  const savingsMultipliers: Record<string, number> = {
    logistics: 0.22, // 22% average freight & route reduction
    contracts: 0.17, // 17% vendor consolidation & price ceilings
    automation: 0.14, // 14% labor overhead & error reclamation
    turnkey: 0.26, // 26% comprehensive synergy
  };

  const currentMultiplier = savingsMultipliers[focusArea] || 0.20;
  const annualSpend = monthlySpend * 12;
  const projectedAnnualSavings = Math.round(annualSpend * currentMultiplier);
  const monthlySavings = Math.round(projectedAnnualSavings / 12);
  const reclaimedHours = Math.round(facilityCount * 28 + (monthlySpend / 10000) * 1.5);
  const projectedErrorReduction = Math.min(94, Math.round(errorRate * 8.5 + 45));

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="roi-calculator" className="py-20 md:py-28 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display [text-wrap:balance]">
            Quantify Your Operational Optimization Potential.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Estimate direct cost savings, cycle time compression, and manager capacity reclaimed through UMZ operational frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form Column */}
          <div className="lg:col-span-6 bg-[#111726] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-7">
            
            {/* Monthly Spend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="spend-range" className="text-slate-200 font-semibold">Current Monthly Operational Spend</label>
                <span className="text-amber-400 font-mono font-bold text-base tabular-nums">
                  {formatCurrency(monthlySpend)}
                </span>
              </div>
              <input
                id="spend-range"
                type="range"
                min="20000"
                max="600000"
                step="10000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-xs text-slate-500 font-mono">
                <span>$20,000 / mo</span>
                <span>$300,000 / mo</span>
                <span>$600,000+ / mo</span>
              </div>
            </div>

            {/* Operating Facilities / Distribution Hubs */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <label className="text-slate-200 font-semibold">Active Facilities or Regional Hubs</label>
                <span className="text-amber-400 font-mono font-bold text-base tabular-nums">
                  {facilityCount} {facilityCount === 1 ? 'Location' : 'Locations'}
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 3, 6, 12].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFacilityCount(num)}
                    className={`py-2 text-xs font-semibold rounded-lg border transition-colors ${
                      facilityCount === num
                        ? 'bg-amber-400 text-slate-950 border-amber-400'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {num === 12 ? '10+ Hubs' : `${num} ${num === 1 ? 'Hub' : 'Hubs'}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Optimization Focus */}
            <div className="space-y-3">
              <label className="text-slate-200 font-semibold text-sm block">Primary Friction Vector</label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'logistics', label: 'Fleet & Route Logistics' },
                  { id: 'contracts', label: 'Vendor & MSA Governance' },
                  { id: 'automation', label: 'Workflow & ERP Integration' },
                  { id: 'turnkey', label: 'Comprehensive Turnkey Overhaul' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFocusArea(item.id)}
                    className={`p-3 text-left rounded-xl border text-xs font-medium transition-all ${
                      focusArea === item.id
                        ? 'bg-amber-400/10 border-amber-400/80 text-amber-300 shadow-sm'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Discrepancy Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="error-range" className="text-slate-200 font-semibold">Estimated Billing/Dispatch Slippage Rate</label>
                <span className="text-amber-400 font-mono font-bold tabular-nums">{errorRate}%</span>
              </div>
              <input
                id="error-range"
                type="range"
                min="2"
                max="20"
                step="1"
                value={errorRate}
                onChange={(e) => setErrorRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#121929] to-[#0E1422] border border-amber-400/30 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">Annual Projected Impact</span>
                <h3 className="text-xl font-bold text-white font-display">Target Performance Envelope</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block">Typical Payback</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">38 - 60 Days</span>
              </div>
            </div>

            {/* Big Headline Number */}
            <div className="p-5 rounded-xl bg-slate-900/90 border border-slate-800/90 space-y-1">
              <div className="text-xs text-slate-400 font-medium">Estimated Net Annual Savings</div>
              <div className="text-3xl sm:text-5xl font-extrabold text-amber-400 font-display tabular-nums tracking-tight">
                {formatCurrency(projectedAnnualSavings)}
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Approx. {formatCurrency(monthlySavings)} in recoverable cash flow every month</span>
              </div>
            </div>

            {/* Grid of Secondary Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Manager Hours</span>
                </div>
                <div className="text-2xl font-bold text-white font-display tabular-nums">
                  +{reclaimedHours} hrs
                </div>
                <div className="text-xs text-slate-500">Reclaimed monthly per team</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Friction Reduction</span>
                </div>
                <div className="text-2xl font-bold text-emerald-400 font-display tabular-nums">
                  -{projectedErrorReduction}%
                </div>
                <div className="text-xs text-slate-500">In dispatch & billing disputes</div>
              </div>
            </div>

            {/* Methodology Note */}
            <p className="text-xs text-slate-400 leading-relaxed">
              Based on historical data from 180+ completed client engagements. Projections factor standard carrier rate renegotiation curves, deadhead reduction, and cross-dock turnaround optimization.
            </p>

            {/* Action Button */}
            <button
              onClick={() => onApplyEstimate({ spend: monthlySpend, savings: projectedAnnualSavings, focus: focusArea })}
              className="w-full py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Apply Model to Consultation Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
