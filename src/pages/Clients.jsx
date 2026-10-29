import { useState } from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ShinyText from "../components/reactbits/ShinyText";
import AuroraBackground from "../components/reactbits/AuroraBackground";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";

const slaGuarantees = [
  {
    iconClass: "bi bi-clock-history",
    title: "15-Minute Response SLA",
    desc: "Every temporary or urgent staffing request is acknowledged and processed by our senior logistics desk within 15 minutes.",
    badge: "Guaranteed Response",
    color: "#F97316",
  },
  {
    iconClass: "bi bi-arrow-repeat",
    title: "100% Free Replacement",
    desc: "If an operative fails to meet your operational standards within the first 4 hours, notify us and you will not be billed, with immediate replacement dispatched.",
    badge: "Risk-Free Cover",
    color: "#10B981",
  },
  {
    iconClass: "bi bi-shield-check",
    title: "Total Right-to-Work Immunity",
    desc: "We accept 100% legal liability for Home Office Right-to-Work compliance and vetting. Full statutory audit trails provided for every operative on your site.",
    badge: "Full Indemnity",
    color: "#38BDF8",
  },
  {
    iconClass: "bi bi-lightning-charge-fill",
    title: "Same-Day & 24/7 Deployment",
    desc: "Day shifts, night sorting, or 24/7 Continental rotations — our Heathrow and M4 corridor pool is pre-inducted and on standby.",
    badge: "24/7 Availability",
    color: "#A78BFA",
  },
];

const clientReviews = [
  {
    quote:
      "When our air freight volume surged ahead of peak quarter at Heathrow Terminal 4, James Henry supplied 28 fully vetted pickers and FLT drivers within 18 hours. Zero compliance issues.",
    author: "Marcus Vance",
    role: "Operations Director",
    company: "Trans-Cargo Air Freight UK",
    rating: 5,
  },
  {
    quote:
      "The 15-minute response time is real. We run a 24/7 e-commerce 3PL in Slough, and whenever we have night shift dropouts, James Henry fills the slots immediately.",
    author: "Elena Rostova",
    role: "Warehouse General Manager",
    company: "Apex Global Fulfilment",
    rating: 5,
  },
  {
    quote:
      "Having an agency that handles all Home Office Right-to-Work documentation with electronic audit sheets gives our corporate board complete peace of mind.",
    author: "David Hemmings",
    role: "Head of Supply Chain",
    company: "M4 Corridor Distribution Ltd",
    rating: 5,
  },
];

export default function Clients() {
  const { openStaffRequest } = useOutletContext() || {};

  const [operativesCount, setOperativesCount] = useState(15);
  const [shiftType, setShiftType] = useState("Days");
  const [roleSelection, setRoleSelection] = useState("Warehouse Operative");
  const [submittedLead, setSubmittedLead] = useState(false);
  const [leadForm, setLeadForm] = useState({ company: "", contactName: "", phone: "", email: "" });

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    setSubmittedLead(true);
  };

  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <AuroraBackground className="bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-300">
                <i className="bi bi-lightning-charge-fill text-[#F97316]" />
                <ShinyText text="Rapid Logistics Staffing Solutions" speed={3.5} />
              </div>

              <BlurText
                as="h1"
                text="Scalable Staffing. Zero Downtime."
                effect="blur"
                animateBy="words"
                direction="top"
                delay={80}
                stepDuration={0.35}
                className="mt-4 sm:mt-6 text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              />

              <p className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-base text-slate-300 leading-relaxed">
                Whether you need 5 pickers for tonight's despatch or 50 MHE operators for a new distribution contract, JAMES HENRY RESOURCE PARTNERS LIMITED delivers pre-vetted, Right-to-Work compliant staff on demand.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <StarBorder
                  as="button"
                  onClick={openStaffRequest}
                  color="#F97316"
                  trailColor="#FF6B00"
                  radius={12}
                  glow={0.6}
                  duration={3}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition"
                >
                  <span>Request Staff Now (15-min SLA)</span>
                  <i className="bi bi-arrow-right" />
                </StarBorder>
                <StarBorder
                  as="a"
                  href="#calculator"
                  color="#38BDF8"
                  trailColor="#ffffff"
                  radius={12}
                  glow={0.4}
                  duration={4}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-200 transition hover:bg-white/10 active:bg-white/10"
                >
                  <span>Workforce Calculator</span>
                </StarBorder>
              </div>

              <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 pt-6">
                <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-black text-white">15 Min</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Response SLA</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-black text-[#10B981]">100%</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Right-to-Work</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xl sm:text-2xl font-black text-[#38BDF8]">1 to 50+</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Scale on Demand</p>
                </div>
              </div>
            </div>

            {/* In-page Interactive Staffing Quote Widget */}
            <div id="calculator" className="relative">
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1E293B]/90 to-[#0B192C]/90 p-5 sm:p-8 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#F97316]">Interactive Planner</p>
                    <BlurText
                      as="h3"
                      text="Deployment Estimator"
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-lg font-bold text-white"
                    />
                  </div>
                  <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-[#F97316]">
                    Immediate Dispatch
                  </span>
                </div>

                {!submittedLead ? (
                  <form onSubmit={handleLeadSubmit} className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-semibold text-slate-200">Required Operatives</span>
                        <span className="font-bold text-[#F97316] text-sm">{operativesCount} Workers</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="50"
                        value={operativesCount}
                        onChange={(e) => setOperativesCount(Number(e.target.value))}
                        className="w-full accent-[#F97316] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                        <span>1 Cover</span>
                        <span>25 Unit</span>
                        <span>50+ Multi-Site</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 font-semibold mb-1.5 block">Role Specialisation</label>
                      <select
                        value={roleSelection}
                        onChange={(e) => setRoleSelection(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#070F1E] px-3.5 py-2 text-xs text-white outline-none focus:border-orange-500"
                      >
                        <option value="Warehouse Operative">Warehouse Operatives (Pick &amp; Pack)</option>
                        <option value="FLT Counterbalance">FLT Drivers (Counterbalance / Reach)</option>
                        <option value="Parcel Sortation">Parcel Sortation &amp; Cross-Dock</option>
                        <option value="HGV Class 1/2">HGV Drivers (Class 1 &amp; Class 2)</option>
                        <option value="Shift Supervisor">Warehouse Team Leader / Supervisor</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-300 font-semibold mb-1.5 block">Shift Pattern</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["Days", "Nights", "Continental"].map((s) => (
                          <button
                            type="button"
                            key={s}
                            onClick={() => setShiftType(s)}
                            className={`rounded-xl border py-2 text-xs font-bold transition ${
                              shiftType === s
                                ? "border-orange-500 bg-orange-500/20 text-white"
                                : "border-white/10 text-slate-400 hover:text-white"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-3 space-y-1.5 text-xs">
                      <div className="flex justify-between text-slate-300">
                        <span>Deployment SLA:</span>
                        <strong className="text-white">Within 24 Hours</strong>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Vetting Guarantee:</span>
                        <strong className="text-emerald-400">100% Home Office Verified</strong>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Trial Protection:</span>
                        <strong className="text-orange-400">4-Hour Free Replacement</strong>
                      </div>
                    </div>

                    <div className="grid gap-2 sm:grid-cols-2">
                      <input
                        required
                        placeholder="Company Name"
                        value={leadForm.company}
                        onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                        className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                      <input
                        required
                        placeholder="Direct Phone"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>

                    <StarBorder
                      as="button"
                      type="submit"
                      color="#F97316"
                      trailColor="#FF6B00"
                      radius={12}
                      glow={0.6}
                      duration={3}
                      className="w-full rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-2.5 sm:py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition flex items-center justify-center text-center"
                    >
                      <span>Instant Staff Request → Consultant Call in 15 Min</span>
                    </StarBorder>
                  </form>
                ) : (
                  <div className="py-8 text-center space-y-3">
                    <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-emerald-500/20 text-[#10B981]">
                      <i className="bi bi-patch-check-fill text-3xl" />
                    </div>
                    <BlurText
                      as="h4"
                      text="Priority Request Dispatched!"
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-lg font-bold text-white text-center justify-center"
                    />
                    <p className="text-xs text-slate-300 max-w-xs mx-auto">
                      Thank you! Our Hounslow senior logistics consultant will ring {leadForm.phone || "your number"} within 15 minutes regarding {operativesCount}x {roleSelection} ({shiftType}).
                    </p>
                    <button
                      onClick={() => setSubmittedLead(false)}
                      className="text-xs text-orange-400 hover:underline pt-2"
                    >
                      Configure a different staffing requirement
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* ─── SLA GUARANTEES ─── */}
      <section className="py-20 bg-[#050B19]/80 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">The James Henry Standard</p>
            <BlurText
              as="h2"
              text="Client SLAs & Guarantees"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-3 text-2xl sm:text-4xl font-extrabold text-white text-center justify-center"
            />
            <p className="mt-4 text-sm text-slate-400 max-w-xl mx-auto">
              Recruitment excellence isn't just a slogan — we back our service with binding service level commitments.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {slaGuarantees.map((sla, i) => (
              <motion.div
                key={sla.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor={`${sla.color}28`}
                  className="h-full card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10"
                        style={{ background: `${sla.color}22` }}
                      >
                        <i className={`${sla.iconClass} text-xl`} style={{ color: sla.color }} />
                      </div>
                      <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-300">
                        {sla.badge}
                      </span>
                    </div>
                    <BlurText
                      as="h3"
                      text={sla.title}
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-base font-bold text-white"
                    />
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{sla.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-emerald-400">
                    <i className="bi bi-patch-check-fill" />
                    <span>Contractually Backed</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT REVIEWS & CASE STUDIES ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">Client Testimonials</p>
            <BlurText
              as="h2"
              text="Trusted by UK Logistics Leaders"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-3 text-2xl sm:text-4xl font-extrabold text-white text-center justify-center"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {clientReviews.map((rev) => (
              <SpotlightCard
                key={rev.author}
                spotlightColor="rgba(249, 115, 22, 0.18)"
                className="card-hover rounded-2xl border border-white/10 bg-gradient-to-br from-[#1E293B]/60 to-[#0B192C]/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-4 text-[#F97316]">
                    {Array.from({ length: rev.rating }).map((_, r) => (
                      <i key={r} className="bi bi-star-fill text-sm" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed italic">"{rev.quote}"</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-xs font-bold text-white">{rev.author}</p>
                  <p className="text-[11px] text-[#F97316]">{rev.role}</p>
                  <p className="text-[10px] text-slate-500">{rev.company}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>

          <div className="mt-10 sm:mt-16 text-center">
            <button
              onClick={openStaffRequest}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-6 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition"
            >
              <span>Launch Complete Staff Request Wizard</span>
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
