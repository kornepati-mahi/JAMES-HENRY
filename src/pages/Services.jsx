import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useOutletContext, NavLink } from "react-router-dom";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ShinyText from "../components/reactbits/ShinyText";
import AuroraBackground from "../components/reactbits/AuroraBackground";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";

const tabs = [
  { id: "temp", label: "Temporary & Flexible Staffing", icon: "bi bi-lightning-charge-fill" },
  { id: "perm", label: "Permanent Placement Solutions", icon: "bi bi-award-fill" },
];

const tempFeatures = [
  {
    title: "Same-Day & 24/7 Deployment",
    desc: "Rapid shift cover for morning, afternoon, twilight, and night operations across Heathrow Cargo Hub and M4 corridor.",
    iconClass: "bi bi-lightning-charge-fill",
    color: "#F97316",
    badge: "Under 24h SLA",
  },
  {
    title: "Flexible Headcount (1 to 50+)",
    desc: "Scale up or down without long-term tie-ins. Handle peak surges, container de-vanning, and seasonal volume spikes.",
    iconClass: "bi bi-people-fill",
    color: "#38BDF8",
    badge: "Scale on Demand",
  },
  {
    title: "Continuous Shift Continuity",
    desc: "Dedicated standby operative pool guarantees zero downtime during unplanned worker absences or volume surges.",
    iconClass: "bi bi-clock-history",
    color: "#10B981",
    badge: "99.2% Fill Rate",
  },
  {
    title: "100% Home Office RTW Assured",
    desc: "Every candidate undergoes real-time IDVT digital verification before stepping foot on your logistics site.",
    iconClass: "bi bi-shield-check",
    color: "#A78BFA",
    badge: "Zero Audit Liability",
  },
];

const permFeatures = [
  {
    title: "Specialist Logistics Headhunting",
    desc: "Targeted search for experienced warehouse managers, transport supervisors, inventory controllers, and team leaders.",
    iconClass: "bi bi-search",
    color: "#F97316",
    badge: "Direct Sourcing",
  },
  {
    title: "Multi-Stage Competency Vetting",
    desc: "In-depth skill benchmarking, background referencing, licence validation (CPC/RTITB), and culture-fit assessments.",
    iconClass: "bi bi-person-check-fill",
    color: "#38BDF8",
    badge: "Curated Shortlist",
  },
  {
    title: "6-Month Replacement Guarantee",
    desc: "Complete peace of mind. If a permanent placement departs within 6 months, we supply an immediate free replacement.",
    iconClass: "bi bi-patch-check-fill",
    color: "#10B981",
    badge: "Risk-Free Warranty",
  },
  {
    title: "UK Nationwide Reach",
    desc: "Extensive talent network spanning London, the South East, Midlands distribution hubs, and nationwide logistics parks.",
    iconClass: "bi bi-globe-europe-africa",
    color: "#A78BFA",
    badge: "National Pipeline",
  },
];

const vettingSteps = [
  { num: "01", title: "Identity & Biometric Check", desc: "Biometric passport, BRP, or Home Office share code validated through IDVT." },
  { num: "02", title: "Statutory Right to Work", desc: "Full statutory compliance under UK Immigration Act 2016 with digital audit trail." },
  { num: "03", title: "Employment Referencing", desc: "Minimum 2 verified logistics or warehouse references validated prior to assignment." },
  { num: "04", title: "Licences & Technical Accreditations", desc: "Forklift certificates (RTITB, ITSSAR, NPORS) and HGV CPC licences checked and logged." },
  { num: "05", title: "Health & Safety Site Induction", desc: "Mandatory briefing on warehouse safety, PPE compliance, and manual handling standards." },
];

const comparisonMetrics = [
  { feature: "Deployment Lead Time", temp: "Within 24 Hours (Same-Day Available)", perm: "1 to 3 Weeks (Curated Shortlist)" },
  { feature: "Billing Structure", temp: "Simple All-Inclusive Hourly Rate (PAYE/NI/Holiday)", perm: "Agreed Contingency or Retained Fee" },
  { feature: "Contract Flexibility", temp: "Daily, Weekly, or Ongoing Rolling Cover", perm: "Permanent Direct Client Payroll" },
  { feature: "Replacement Guarantee", temp: "Immediate 4-Hour Free Replacement", perm: "6-Month Free Replacement Warranty" },
  { feature: "Right-to-Work Indemnity", temp: "100% James Henry Full Legal Liability", tempHighlight: true, perm: "Pre-screened & Validated Dossier" },
];

const faqs = [
  { q: "How quickly can James Henry deploy staff to our site?", a: "We acknowledge every request within 15 minutes. For temporary staffing, pre-vetted operatives can arrive on site within 24 hours (or same-day for urgent requirements across the Heathrow Cargo Hub and M4 corridor)." },
  { q: "What geographic areas do you cover?", a: "Our primary operational hub is based in Hounslow (TW5 9SJ), directly servicing London Heathrow Airport, Slough Trading Estate, Feltham, the M4/M25 logistics corridor, and regional distribution networks nationwide." },
  { q: "Are all forklift and MHE drivers certified?", a: "Yes. All counterbalance, reach truck, and VNA operators hold accredited RTITB, ITSSAR, or NPORS licences. We retain copies of all certificates on file and verify their validity prior to dispatch." },
  { q: "How does the 4-hour replacement guarantee work?", a: "If any temporary operative does not meet your operational productivity or conduct standards within the first 4 hours of their shift, notify our desk. You will not be billed for those hours, and an immediate replacement will be dispatched." },
  { q: "Can temporary workers transition to permanent roles?", a: "Yes! We encourage temp-to-perm transitions after an agreed qualifying assignment period, allowing you to thoroughly evaluate candidates on site before extending permanent offers." },
];

export default function Services() {
  const { openStaffRequest, openCandidateApply } = useOutletContext() || {};
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const features = activeTab === 0 ? tempFeatures : permFeatures;

  return (
    <div className="overflow-hidden">
      {/* ─── COMPACT, HIGH-IMPACT HERO & TAB SWITCHER COMBINED ─── */}
      <AuroraBackground className="bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] pt-8 pb-14 lg:pt-12 lg:pb-16 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 items-center">
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400">
                <i className="bi bi-gear-wide-connected" />
                <ShinyText text="Workforce Solutions" speed={3.5} />
              </div>

              <BlurText
                as="h1"
                text="Two Agile Models. One Mission of Excellence."
                effect="blur"
                animateBy="words"
                direction="top"
                delay={80}
                stepDuration={0.35}
                className="mt-3 sm:mt-4 text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight"
              />

              <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Whether you need fast flexible cover for peak warehouse surges or a permanent leadership hire, JAMES HENRY RESOURCE PARTNERS LIMITED provides reliable, 100% Right-to-Work compliant recruitment built for UK logistics.
              </p>

              {/* Tab Selector Directly In Hero (Mobile Optimized) */}
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row rounded-xl border border-white/10 bg-white/5 p-1 gap-1 w-full sm:w-auto">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-all h-9 sm:h-10 ${
                      activeTab === idx
                        ? "bg-gradient-to-r from-[#F97316] to-[#FF6B00] text-white shadow-md shadow-orange-500/25"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <i className={tab.icon} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Quick Trust Strip */}
              <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <i className="bi bi-patch-check-fill" />
                  15-Min Response SLA
                </span>
                <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
                  <i className="bi bi-lightning-charge-fill" />
                  Under 24h Deployment
                </span>
                <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                  <i className="bi bi-shield-check" />
                  100% RTW Indemnity
                </span>
              </div>
            </div>

            {/* Right Column: Live Model Summary Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-[#1E293B]/90 to-[#0B192C]/90 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F97316]">Active Overview</span>
                    <BlurText
                      as="h3"
                      text={activeTab === 0 ? "Temporary Staffing Model" : "Permanent Recruitment Model"}
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-base font-bold text-white"
                    />
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400">
                    {activeTab === 0 ? "Live Dispatch" : "Search & Select"}
                  </span>
                </div>

                <div className="space-y-3">
                  {features.map((f) => (
                    <div key={f.title} className="flex items-start gap-3 rounded-xl bg-white/[0.03] border border-white/5 p-3">
                      <div
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 mt-0.5"
                        style={{ background: `${f.color}22` }}
                      >
                        <i className={`${f.iconClass} text-sm`} style={{ color: f.color }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <BlurText
                            as="h4"
                            text={f.title}
                            effect="blur"
                            animateBy="words"
                            direction="top"
                            delay={40}
                            stepDuration={0.25}
                            className="text-xs font-bold text-white"
                          />
                          <span className="text-[10px] text-orange-400 font-semibold">{f.badge}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex gap-2">
                  <button
                    onClick={openStaffRequest}
                    className="flex-1 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 hover:scale-[1.01] transition flex items-center justify-center gap-1.5"
                  >
                    <span>{activeTab === 0 ? "Request Temporary Staff" : "Discuss Permanent Search"}</span>
                    <i className="bi bi-arrow-right" />
                  </button>
                  <button
                    onClick={openCandidateApply}
                    className="rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-xs font-semibold text-slate-300 hover:text-white transition"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* ─── SIDE-BY-SIDE SERVICE COMPARISON MATRIX ─── */}
      <section className="py-16 bg-[#050B19]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">Direct Comparison</p>
            <BlurText
              as="h2"
              text="Compare Our Two Service Models"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-2 text-2xl sm:text-3xl font-extrabold text-white text-center justify-center"
            />
            <p className="mt-2 text-xs text-slate-400 max-w-lg mx-auto">
              Find the right staffing engagement model for your operational scale and business budget.
            </p>
          </div>

          <div className="sm:hidden text-center text-[11px] text-slate-400 mb-3 flex items-center justify-center gap-1.5">
            <i className="bi bi-arrow-left-right text-orange-400" />
            <span>Swipe table horizontally to compare</span>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02] p-1 sm:p-0">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-slate-400">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px]">Feature / Commitment</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] text-[#F97316] bg-orange-500/5 rounded-t-xl">
                    Temporary Staffing
                  </th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-[11px] text-sky-400 bg-sky-500/5 rounded-t-xl">
                    Permanent Placements
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonMetrics.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition">
                    <td className="py-3.5 px-4 font-semibold text-white">{row.feature}</td>
                    <td className="py-3.5 px-4 bg-orange-500/5 text-slate-200 font-medium">
                      <div className="flex items-center gap-1.5">
                        <i className="bi bi-patch-check-fill text-orange-400 shrink-0 text-xs" />
                        <span>{row.temp}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 bg-sky-500/5 text-slate-200 font-medium">
                      <div className="flex items-center gap-1.5">
                        <i className="bi bi-check-circle-fill text-sky-400 shrink-0 text-xs" />
                        <span>{row.perm}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 5-POINT VETTING GUARANTEE ─── */}
      <section className="py-16 bg-[#070F1E] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">Compliance Assurance</p>
              <BlurText
                as="h2"
                text="5-Point Vetting Guarantee"
                effect="blur"
                animateBy="words"
                direction="top"
                delay={70}
                stepDuration={0.35}
                className="mt-2 text-2xl sm:text-3xl font-extrabold text-white"
              />
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Every operative placed by James Henry undergoes a strict 5-stage verification process before deployment to your site. We assume complete statutory accountability so you operate with 100% confidence.
              </p>
              <div className="mt-5 sm:mt-6">
                <StarBorder
                  as="button"
                  onClick={openStaffRequest}
                  color="#F97316"
                  trailColor="#FF6B00"
                  radius={12}
                  glow={0.6}
                  duration={3}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 active:scale-95 transition"
                >
                  <span>Request Vetted Operatives</span>
                  <i className="bi bi-arrow-right text-xs" />
                </StarBorder>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              {vettingSteps.map((step) => (
                <SpotlightCard
                  key={step.num}
                  spotlightColor="rgba(249, 115, 22, 0.16)"
                  className="card-hover flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 font-mono text-xs font-bold text-orange-400">
                        {step.num}
                      </div>
                      <div>
                        <BlurText
                          as="h4"
                          text={step.title}
                          effect="blur"
                          animateBy="words"
                          direction="top"
                          delay={40}
                          stepDuration={0.25}
                          className="text-xs font-bold text-white"
                        />
                        <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                    <i className="bi bi-patch-check-fill text-[#10B981] text-base shrink-0 ml-3" />
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQS ACCORDION ─── */}
      <section className="py-16 bg-[#050B19] border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">Frequently Asked Questions</p>
            <BlurText
              as="h2"
              text="Client Service Enquiries"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-2 text-2xl sm:text-3xl font-extrabold text-white text-center justify-center"
            />
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left text-xs font-bold text-white transition hover:bg-white/5"
                >
                  <span>{faq.q}</span>
                  <i className={`bi bi-chevron-down text-slate-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-xs text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
