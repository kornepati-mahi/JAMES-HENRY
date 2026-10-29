import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarBorder from "./reactbits/StarBorder";

export default function StaffRequestModal({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [headcount, setHeadcount] = useState(10);
  const [shift, setShift] = useState("Days");
  const [roleType, setRoleType] = useState("Picker / Packer");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    site: "",
    specialRequirements: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  const reset = () => {
    setLoading(false);
    setSuccess(false);
    setStep(1);
    setForm({ name: "", company: "", email: "", phone: "", site: "", specialRequirements: "" });
    setHeadcount(10);
    setShift("Days");
    setRoleType("Picker / Packer");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-6"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={reset} />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="modal-zoom relative z-10 w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#101B2E] to-[#050B19] shadow-[0_120px_200px_-160px_rgba(249,115,22,0.9)]"
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/5 bg-[#101B2E]/95 px-4 py-3.5 sm:px-6 sm:py-4 backdrop-blur">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#F97316] font-semibold">Immediate Dispatch Calculator</p>
                <p className="text-base sm:text-lg font-bold text-white">Staff Request &amp; Deployment</p>
              </div>
              <button
                onClick={reset}
                aria-label="Close modal"
                className="flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-white/10 text-slate-300 hover:text-white active:bg-white/10"
              >
                <i className="bi bi-x-lg text-sm" />
              </button>
            </div>

            {!success ? (
              <div className="p-4 sm:p-6">
                {/* Step indicators */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                        step === 1 ? "bg-[#F97316] text-white" : "bg-[#10B981] text-white"
                      }`}
                    >
                      {step === 2 ? "✓" : "1"}
                    </span>
                    <span className="text-xs font-semibold text-slate-300">Staffing Profile</span>
                  </div>
                  <div className="h-0.5 w-16 bg-white/10" />
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition ${
                        step === 2 ? "bg-[#F97316] text-white" : "bg-white/10 text-slate-400"
                      }`}
                    >
                      2
                    </span>
                    <span className="text-xs font-semibold text-slate-300">Site &amp; Contact Info</span>
                  </div>
                </div>

                {step === 1 ? (
                  <div className="space-y-6">
                    {/* Headcount Slider */}
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                          <i className="bi bi-people-fill text-[#F97316]" /> Required Headcount
                        </label>
                        <span className="rounded-full bg-orange-500/20 px-3 py-1 text-sm font-bold text-[#F97316]">
                          {headcount} {headcount === 1 ? "Operative" : "Operatives"}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={headcount}
                        onChange={(e) => setHeadcount(Number(e.target.value))}
                        className="mt-4 w-full accent-[#F97316] cursor-pointer"
                      />
                      <div className="mt-2 flex justify-between text-xs text-slate-500">
                        <span>1 (Quick Cover)</span>
                        <span>25 (Volume Shift)</span>
                        <span>50+ (Full Operation)</span>
                      </div>
                    </div>

                    {/* Role Selection */}
                    <div>
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 block">
                        Category / Role Type
                      </label>
                      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                        {[
                          "Picker / Packer",
                          "Forklift / MHE",
                          "Warehouse Operative",
                          "HGV Driver (1/2)",
                          "Parcel Sortation",
                          "Shift Supervisor",
                        ].map((role) => (
                          <button
                            type="button"
                            key={role}
                            onClick={() => setRoleType(role)}
                            className={`rounded-xl border p-2.5 text-xs font-medium text-left transition ${
                              roleType === role
                                ? "border-[#F97316] bg-[#F97316]/20 text-white font-bold"
                                : "border-white/10 text-slate-300 hover:border-white/20"
                            }`}
                          >
                            {role}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Shift Selector */}
                    <div>
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 block">
                        Shift Pattern
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Days", "Nights", "24/7 Continental"].map((option) => (
                          <button
                            type="button"
                            key={option}
                            onClick={() => setShift(option)}
                            className={`rounded-xl border py-2.5 px-3 text-xs sm:text-sm font-medium transition ${
                              shift === option
                                ? "border-[#F97316] bg-[#F97316]/20 text-white font-bold"
                                : "border-white/10 text-slate-300 hover:border-white/20"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Dynamic SLA / Estimate Box */}
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-orange-500/10 via-transparent to-emerald-500/10 p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-sm text-slate-300">
                          <i className="bi bi-clock-history text-[#F97316]" />
                          <span>Estimated Deployment:</span>
                          <strong className="text-white">Within 24 Hours</strong>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[#10B981]">
                          <i className="bi bi-shield-check" />
                          <span>100% Right-to-Work Guaranteed</span>
                        </div>
                      </div>
                    </div>

                    <StarBorder
                      as="button"
                      type="button"
                      onClick={() => setStep(2)}
                      color="#F97316"
                      trailColor="#FF6B00"
                      radius={12}
                      glow={0.6}
                      duration={3}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition active:scale-98"
                    >
                      <span>Next: Site &amp; Contact Details</span>
                      <i className="bi bi-arrow-right" />
                    </StarBorder>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Your Full Name</label>
                        <input
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Company Name</label>
                        <input
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="e.g. Apex Logistics UK"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Work Email</label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="sarah@apexlogistics.co.uk"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Direct Phone</label>
                        <input
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="e.g. 020 8123 4567"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Site Postcode / Location</label>
                        <input
                          required
                          value={form.site}
                          onChange={(e) => setForm({ ...form, site: e.target.value })}
                          placeholder="e.g. Heathrow Cargo Hub, TW6 or Slough Trading Estate"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Special Requirements / Security Clearance</label>
                        <input
                          value={form.specialRequirements}
                          onChange={(e) => setForm({ ...form, specialRequirements: e.target.value })}
                          placeholder="e.g. Airside Pass required, High-vis & steel toe boots, Counterbalance"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-400 flex items-center gap-2">
                      <i className="bi bi-clock-history text-[#F97316] shrink-0" />
                      <span>
                        Requesting <strong className="text-white">{headcount}x {roleType}</strong> on <strong className="text-white">{shift}</strong> shift. Fast 15-minute response SLA applies.
                      </span>
                    </div>

                    <div className="flex gap-2 sm:gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="rounded-xl border border-white/15 px-3.5 py-2.5 sm:px-4 sm:py-3 min-h-[40px] min-w-[40px] text-xs sm:text-sm font-semibold text-slate-300 hover:text-white active:bg-white/10 flex items-center justify-center"
                      >
                        <i className="bi bi-arrow-left text-base" />
                      </button>
                      <StarBorder
                        as="button"
                        type="submit"
                        disabled={loading}
                        color="#F97316"
                        trailColor="#FF6B00"
                        radius={12}
                        glow={0.6}
                        duration={3}
                        className="flex-1 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition disabled:opacity-70 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                            <span>Dispatching Request to Consultants...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Staff Request</span>
                            <i className="bi bi-lightning-charge-fill" />
                          </>
                        )}
                      </StarBorder>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              <div className="relative flex flex-col items-center gap-4 px-6 py-12 text-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#10B981]/20">
                  <i className="bi bi-patch-check-fill text-5xl text-[#10B981]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Staff Request Dispatched!</h3>
                  <p className="max-w-md text-sm text-slate-300 leading-relaxed">
                    Thank you! A James Henry recruitment consultant will call your team at <strong className="text-white">{form.company || "your business"}</strong> within <strong className="text-[#10B981]">15 minutes</strong>.
                  </p>
                  <p className="text-xs text-slate-400">
                    Order Ref: <span className="font-mono text-orange-400">JH-{Math.floor(100000 + Math.random() * 900000)}</span> | {headcount}x {roleType} ({shift})
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left max-w-sm w-full space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <i className="bi bi-patch-check-fill shrink-0" />
                    <span>Dedicated Account Manager Assigned</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <i className="bi bi-patch-check-fill shrink-0" />
                    <span>Candidate Vetting &amp; RTW File Pre-Compiled</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <i className="bi bi-patch-check-fill shrink-0" />
                    <span>Site Dispatch Target: Within 24 Hours</span>
                  </div>
                </div>

                <button
                  onClick={reset}
                  className="rounded-full bg-white/10 hover:bg-white/20 px-8 py-2.5 text-sm font-semibold text-white transition"
                >
                  Close &amp; Return
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
