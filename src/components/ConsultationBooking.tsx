import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Check, ArrowRight, ShieldCheck, Mail, Phone, Building, User, FileText, Download, Copy, CheckCheck } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/businessData';
import { ConsultationFormData } from '../types';

interface ConsultationBookingProps {
  initialServiceId?: string;
  initialNotes?: string;
}

export const ConsultationBooking: React.FC<ConsultationBookingProps> = ({
  initialServiceId,
  initialNotes,
}) => {
  const [step, setStep] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    serviceId: initialServiceId || SERVICES[0].id,
    estimatedBudget: '$50k - $150k',
    preferredDate: '2026-10-06',
    preferredTime: '10:00 AM EST',
    projectScope: initialNotes || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const availableDates = [
    { date: '2026-10-06', day: 'Tuesday', label: 'Oct 6' },
    { date: '2026-10-07', day: 'Wednesday', label: 'Oct 7' },
    { date: '2026-10-08', day: 'Thursday', label: 'Oct 8' },
    { date: '2026-10-09', day: 'Friday', label: 'Oct 9' },
    { date: '2026-10-13', day: 'Tuesday', label: 'Oct 13' },
  ];

  const timeSlots = [
    '09:30 AM EST',
    '11:00 AM EST',
    '01:30 PM EST',
    '03:00 PM EST',
    '04:30 PM EST',
  ];

  const validateStep2 = () => {
    return !!formData.preferredDate && !!formData.preferredTime;
  };

  const validateStep3 = () => {
    const err: Record<string, string> = {};
    if (!formData.fullName.trim()) err.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      err.email = 'Valid corporate email is required';
    }
    if (!formData.companyName.trim()) err.companyName = 'Company / Organization name is required';
    if (!formData.phone.trim()) err.phone = 'Contact telephone is required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;
    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const text = `UMZ Solutions LLC - Consultation Request\nContact: ${formData.fullName} (${formData.companyName})\nEmail: ${formData.email} | Phone: ${formData.phone}\nService: ${formData.serviceId}\nScheduled: ${formData.preferredDate} at ${formData.preferredTime}\nEstimated Budget: ${formData.estimatedBudget}\nNotes: ${formData.projectScope}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadTicket = () => {
    const ticketContent = `================================================
UMZ SOLUTIONS LLC | EXECUTIVE CONSULTATION BRIEF
================================================
Reference ID: UMZ-${Math.floor(100000 + Math.random() * 900000)}
Client Organization: ${formData.companyName}
Primary Contact: ${formData.fullName}
Direct Email: ${formData.email}
Telephone: ${formData.phone}

SERVICE SCOPE: ${formData.serviceId}
BUDGET RANGE: ${formData.estimatedBudget}
DATE & TIME: ${formData.preferredDate} @ ${formData.preferredTime}
ADDITIONAL REQUIREMENTS:
${formData.projectScope || 'General Discovery & Initial Operations Audit'}

HEADQUARTERS CONTACT:
Company: ${COMPANY_INFO.legalName} (${COMPANY_INFO.name})
Direct Email: ${COMPANY_INFO.email}
Address: ${COMPANY_INFO.headquarters}
================================================`;
    
    const blob = new Blob([ticketContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `UMZ-Consultation-${formData.companyName.replace(/\s+/g, '_') || 'Brief'}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="consultation" className="py-20 md:py-28 bg-[#0B0F17] relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400">
            Direct Commercial Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Schedule an Executive Discovery Session.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Discuss your operational constraints under mutual NDA with an executive director. No generic sales reps.
          </p>
        </div>

        {/* Step Indicator (clean unboxed steps) */}
        {!submitted && (
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800 text-xs text-slate-400">
            <button
              onClick={() => setStep(1)}
              className={`flex items-center gap-2 cursor-pointer ${step === 1 ? 'text-amber-400 font-bold' : 'hover:text-slate-200'}`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono ${step === 1 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                1
              </span>
              <span>Scope & Service</span>
            </button>
            <span className="text-slate-700">———</span>
            <button
              onClick={() => setStep(2)}
              className={`flex items-center gap-2 cursor-pointer ${step === 2 ? 'text-amber-400 font-bold' : 'hover:text-slate-200'}`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono ${step === 2 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                2
              </span>
              <span>Date & Schedule</span>
            </button>
            <span className="text-slate-700">———</span>
            <button
              onClick={() => setStep(3)}
              className={`flex items-center gap-2 cursor-pointer ${step === 3 ? 'text-amber-400 font-bold' : 'hover:text-slate-200'}`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-mono ${step === 3 ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-slate-300'}`}>
                3
              </span>
              <span>Contact & Submission</span>
            </button>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-[#111726] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          {!submitted ? (
            <div>
              {/* STEP 1: SERVICE & BUDGET */}
              {step === 1 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display mb-1">
                      01. Select Required Operational Capability
                    </h3>
                    <p className="text-xs text-slate-400">
                      Choose the primary domain for the discovery session.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {SERVICES.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          formData.serviceId === srv.id
                            ? 'bg-amber-400/10 border-amber-400 text-white shadow-sm'
                            : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono font-bold text-amber-400">{srv.number}</span>
                          {formData.serviceId === srv.id && (
                            <Check className="w-4 h-4 text-amber-400" />
                          )}
                        </div>
                        <div className="font-semibold text-sm text-white mb-1">{srv.title}</div>
                        <div className="text-xs text-slate-400 line-clamp-2">{srv.tagline}</div>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Estimated Project Scope or Annual Spend Envelope
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Under $50k', '$50k - $150k', '$150k - $500k', '$500k+'].map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => setFormData({ ...formData, estimatedBudget: budget })}
                          className={`py-2 text-xs font-medium rounded-lg border transition-colors ${
                            formData.estimatedBudget === budget
                              ? 'bg-amber-400 text-slate-950 border-amber-400 font-semibold'
                              : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Scheduling</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: DATE & TIME */}
              {step === 2 && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display mb-1">
                      02. Select Preferred Executive Briefing Window
                    </h3>
                    <p className="text-xs text-slate-400">
                      Discovery sessions are 45 minutes conducted securely over Google Meet or direct teleconference.
                    </p>
                  </div>

                  {/* Dates */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <CalendarIcon className="w-3.5 h-3.5 text-amber-400" />
                      <span>Available Session Dates</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {availableDates.map((item) => (
                        <button
                          key={item.date}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredDate: item.date })}
                          className={`p-3 rounded-xl border text-center transition-all ${
                            formData.preferredDate === item.date
                              ? 'bg-amber-400 text-slate-950 border-amber-400 shadow-md font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className="text-xs opacity-75">{item.day}</div>
                          <div className="text-sm font-semibold">{item.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Dedicated Time Windows</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredTime: slot })}
                          className={`py-2.5 px-3 rounded-xl border text-xs font-mono transition-all ${
                            formData.preferredTime === slot
                              ? 'bg-amber-400/20 border-amber-400 text-amber-300 font-bold'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800 cursor-pointer"
                    >
                      Back to Scope
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg flex items-center gap-2 cursor-pointer"
                    >
                      <span>Proceed to Contact Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: CONTACT INFORMATION */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                  <div>
                    <h3 className="text-lg font-bold text-white font-display mb-1">
                      03. Executive Contact & Operating Profile
                    </h3>
                    <p className="text-xs text-slate-400">
                      Direct confirmation will be dispatched to your email. Handled strictly by UMZ JD LLC.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>Executive Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      {errors.fullName && <p className="text-xs text-rose-400">{errors.fullName}</p>}
                    </div>

                    {/* Corporate Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-slate-400" />
                        <span>Corporate Email *</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@enterprise.com"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      {errors.email && <p className="text-xs text-rose-400">{errors.email}</p>}
                    </div>

                    {/* Company Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Company / Organization *</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Vanguard Logistics Corp"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      {errors.companyName && <p className="text-xs text-rose-400">{errors.companyName}</p>}
                    </div>

                    {/* Telephone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-slate-400" />
                        <span>Direct Telephone *</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400"
                      />
                      {errors.phone && <p className="text-xs text-rose-400">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Project Scope / Specific Requirements */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>Primary Operational Friction or Specific Objectives</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.projectScope}
                      onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                      placeholder="Describe active challenges: e.g. Deadhead freight mileage, vendor dispute consolidation, or upcoming facility relocation..."
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Summary of Booking */}
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <span className="text-slate-200 font-semibold">Scheduled Window: </span>
                      <span className="text-amber-400 font-mono font-medium">{formData.preferredDate} @ {formData.preferredTime}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Protected under mutual bilateral NDA</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 rounded-lg border border-slate-800 cursor-pointer"
                    >
                      Back to Date
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-lg shadow-amber-400/20 flex items-center gap-2 cursor-pointer"
                    >
                      <span>Confirm & Book Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* SUBMITTED CONFIRMATION STATE */
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl mx-auto flex items-center justify-center text-emerald-400">
                <Check className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="text-2xl font-bold text-white font-display">
                  Consultation Brief Confirmed
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your executive discovery session has been locked for <span className="text-amber-400 font-mono font-medium">{formData.preferredDate}</span> at <span className="text-amber-400 font-mono font-medium">{formData.preferredTime}</span>.
                </p>
                <p className="text-xs text-slate-400">
                  Our direct operations coordinator from <strong className="text-slate-300">{COMPANY_INFO.email}</strong> is compiling your preliminary dossier and will dispatch the calendar credentials within 2 business hours.
                </p>
              </div>

              {/* Ticket Card */}
              <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-5 text-left max-w-md mx-auto space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500">REF: UMZ-2026-CONF</span>
                  <span className="text-emerald-400 font-semibold">STATUS: CONFIRMED</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-300">
                  <div>
                    <span className="text-slate-500 block">Organization</span>
                    <span className="font-semibold text-white">{formData.companyName}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Scope</span>
                    <span className="font-semibold text-amber-400">{formData.serviceId}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Contact</span>
                    <span>{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Direct Line</span>
                    <span>{formData.phone}</span>
                  </div>
                </div>
              </div>

              {/* Utility actions */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleDownloadTicket}
                  className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Brief (.TXT)</span>
                </button>
                <button
                  onClick={handleCopySummary}
                  className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-slate-500 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Summary</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="px-4 py-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                >
                  Schedule Another Session
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
};
