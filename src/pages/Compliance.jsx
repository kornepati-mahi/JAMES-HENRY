import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ShinyText from "../components/reactbits/ShinyText";
import AuroraBackground from "../components/reactbits/AuroraBackground";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";

const policies = [
  {
    id: "conduct-2003",
    title: "Conduct of Employment Agencies Regulations 2003",
    tag: "Statutory Instrument",
    summary:
      "JAMES HENRY RESOURCE PARTNERS LIMITED strictly operates in full compliance with the Conduct of Employment Agencies and Employment Businesses Regulations 2003 (as amended).",
    points: [
      "No fees whatsoever charged to work-seekers for work-finding services.",
      "Clear written terms of engagement provided prior to assignment commencement.",
      "Thorough suitability checks including qualifications, experience, and health & safety compliance.",
      "Timely payment of all temporary workers regardless of whether the end-client has settled the agency invoice.",
      "Strict confidentiality of work-seeker and client records.",
    ],
  },
  {
    id: "rtw",
    title: "Home Office Right-to-Work Compliance",
    tag: "Immigration Act 2016",
    summary:
      "We maintain a 100% Right-to-Work audit trail for every operative placed on client sites in accordance with UK Home Office Employer Guidance.",
    points: [
      "In-person document verification or real-time Home Office Online Share Code validation.",
      "Identity Document Validation Technology (IDVT) checks against biometric passports and residence permits.",
      "Time-limited permission to work diarised with automated re-verification triggers 30 days prior to visa expiry.",
      "Full digital copies kept securely for 2 years following the termination of work-finding engagement.",
      "Zero tolerance for illegal working with indemnification provided to our client partners.",
    ],
  },
  {
    id: "modern-slavery",
    title: "Anti-Slavery & Human Trafficking Policy",
    tag: "Modern Slavery Act 2015",
    summary:
      "We uphold the highest ethical recruitment principles to eradicate forced, bonded, or compulsory labour within the UK logistics and transport industry.",
    points: [
      "Rigorous pre-employment screening to identify signs of exploitation or coercion.",
      "Duplicate address, bank account, and phone number audit flags automated in our payroll database.",
      "Transparent worker rights awareness handed out in multiple languages during induction.",
      "Anonymous whistleblower hotline available 24/7 for candidates and client personnel.",
      "Regular physical site inspections and worker welfare spot-checks across our logistics assignments.",
    ],
  },
  {
    id: "gdpr",
    title: "GDPR & Data Protection Statement",
    tag: "UK GDPR & DPA 2018",
    summary:
      "Personal data of candidates, clients, and suppliers is processed transparently, securely, and strictly for lawful employment agency activities.",
    points: [
      "All candidate CVs, identification files, and banking details are encrypted in transit and at rest.",
      "Data retention schedules strictly observed in accordance with statutory accounting and tax retention limits.",
      "No data sharing with non-essential third parties without explicit affirmative consent.",
      "Full compliance with Subject Access Requests (SAR) within statutory timeframes.",
      "Designated Data Protection Officer monitoring compliance.",
    ],
  },
];

export default function Compliance() {
  const [activePolicy, setActivePolicy] = useState(0);
  const [downloading, setDownloading] = useState(false);
  const [downloadMsg, setDownloadMsg] = useState("");

  const handleSimulatedDownload = (title) => {
    setDownloading(true);
    setDownloadMsg(`Generating official compliance PDF: ${title}...`);
    setTimeout(() => {
      setDownloading(false);
      setDownloadMsg(`✓ Download Complete: ${title} (Simulated PDF saved)`);
      setTimeout(() => setDownloadMsg(""), 4000);
    }, 1200);
  };

  const current = policies[activePolicy];

  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <AuroraBackground className="bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
              <i className="bi bi-shield-check text-emerald-400" />
              <ShinyText text="Statutory Governance & Compliance" speed={3.5} />
            </div>
            <BlurText
              as="h1"
              text="Right-to-Work, Ethics & UK Regulatory Compliance"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={80}
              stepDuration={0.35}
              className="mt-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            />
            <p className="mt-4 text-xs sm:text-base text-slate-300 leading-relaxed">
              Operating in temporary employment agency activities (SIC 78200) requires uncompromising standards. We protect our clients and workers through rigid adherence to UK employment legislation, Home Office RTW checks, and ethical labour benchmarks.
            </p>
          </div>
        </div>
      </AuroraBackground>

      {/* ─── STATUTORY DETAILS CARD ─── */}
      <section className="py-8 sm:py-12 bg-[#050B19] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-5 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <i className="bi bi-buildings text-2xl text-[#F97316]" />
              <div>
                <BlurText
                  as="h3"
                  text="Statutory Transparency Disclosure"
                  effect="blur"
                  animateBy="words"
                  direction="top"
                  delay={50}
                  stepDuration={0.3}
                  className="text-base sm:text-lg font-bold text-white"
                />
                <p className="text-xs text-slate-400">Companies Act 2006 &amp; Employment Agency Transparency Requirements</p>
              </div>
            </div>

            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.2)" className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Registered Entity</p>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">JAMES HENRY RESOURCE PARTNERS LIMITED</p>
                <p className="text-[10px] text-emerald-400 mt-1">Active &amp; In Good Standing</p>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(56, 189, 248, 0.2)" className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Company Number</p>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">17018469</p>
                <p className="text-[10px] text-slate-400 mt-1">Incorporated in England &amp; Wales</p>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(249, 115, 22, 0.2)" className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">Registered Office</p>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">221 Waye Avenue</p>
                <p className="text-[10px] text-slate-400 mt-1">Hounslow, England, TW5 9SJ</p>
              </SpotlightCard>
              <SpotlightCard spotlightColor="rgba(167, 139, 250, 0.2)" className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">SIC Activity Code</p>
                <p className="text-xs sm:text-sm font-bold text-white mt-1">78200</p>
                <p className="text-[10px] text-slate-400 mt-1">Temporary Employment Agency Activities</p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE POLICY BROWSER ─── */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Mobile Swipeable Policy Pills */}
          <div className="lg:hidden mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">Select Policy:</p>
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2">
              {policies.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePolicy(idx)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-bold whitespace-nowrap shrink-0 transition min-h-[38px] ${
                    activePolicy === idx
                      ? "border border-emerald-500 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/10"
                      : "border border-white/10 bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  <span>{p.tag}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 lg:gap-10 lg:grid-cols-3">
            {/* Desktop Policy Selector list */}
            <div className="hidden lg:block space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Official Policies &amp; Statements</p>
              {policies.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePolicy(idx)}
                  className={`w-full text-left rounded-2xl border p-4 transition min-h-[48px] ${
                    activePolicy === idx
                      ? "border-emerald-500 bg-emerald-500/10 text-white shadow-lg shadow-emerald-500/10"
                      : "border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/20 active:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-semibold text-emerald-400 mb-1">
                    <span>{p.tag}</span>
                    {activePolicy === idx && <span>Active View</span>}
                  </div>
                  <BlurText
                    as="h4"
                    text={p.title}
                    effect="blur"
                    animateBy="words"
                    direction="top"
                    delay={40}
                    stepDuration={0.25}
                    className="text-sm font-bold text-white leading-snug"
                  />
                </button>
              ))}

              <div className="rounded-2xl border border-white/10 bg-[#1E293B]/40 p-5 mt-6 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2 text-[#10B981] font-bold">
                  <i className="bi bi-shield-check text-lg" />
                  <span>Audit Assurance</span>
                </div>
                <p className="leading-relaxed">
                  All compliance files are digitalised and ready for immediate GLAA, HMRC, and client vendor audits within 2 business hours.
                </p>
              </div>
            </div>

            {/* Policy Reader Display */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1E293B]/70 to-[#0B192C]/80 p-5 sm:p-10 shadow-2xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                    <div>
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                        {current.tag}
                      </span>
                      <BlurText
                        as="h2"
                        text={current.title}
                        effect="blur"
                        animateBy="words"
                        direction="top"
                        delay={60}
                        stepDuration={0.3}
                        className="mt-2 text-xl sm:text-2xl font-extrabold text-white"
                      />
                    </div>

                    <StarBorder
                      as="button"
                      onClick={() => handleSimulatedDownload(current.title)}
                      disabled={downloading}
                      color="#10B981"
                      trailColor="#38BDF8"
                      radius={12}
                      glow={0.5}
                      duration={3.5}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 sm:py-3 text-xs font-bold text-slate-200 hover:text-white hover:bg-white/10 active:bg-white/15 transition disabled:opacity-60"
                    >
                      <i className="bi bi-download text-[#F97316]" />
                      <span>Download Policy PDF</span>
                    </StarBorder>
                  </div>

                  {downloadMsg && (
                    <div className="mb-6 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-3 text-xs text-emerald-300 flex items-center gap-2">
                      <i className="bi bi-patch-check-fill" />
                      <span>{downloadMsg}</span>
                    </div>
                  )}

                  <p className="text-sm text-slate-300 leading-relaxed font-medium mb-6">
                    {current.summary}
                  </p>

                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">Specific Operational Controls:</p>
                    {current.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-slate-300">
                        <i className="bi bi-patch-check-fill text-[#10B981] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
                    <p>Review Date: Current UK Financial Year | Status: Fully Compliant</p>
                    <p>JAMES HENRY RESOURCE PARTNERS LIMITED</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
