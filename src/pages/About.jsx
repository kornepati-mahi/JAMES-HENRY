import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ShinyText from "../components/reactbits/ShinyText";
import AuroraBackground from "../components/reactbits/AuroraBackground";
import TiltedCard from "../components/reactbits/TiltedCard";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";

const stats = [
  { value: "100%", label: "Right-to-Work Audited", sub: "Home Office IDVT Checked" },
  { value: "24/7", label: "Dispatch Response", sub: "Around the clock support" },
  { value: "17018469", label: "UK Company Number", sub: "England & Wales Registered" },
  { value: "SIC 78200", label: "Agency Activity", sub: "Temporary Staffing Specialist" },
];

const values = [
  {
    iconClass: "bi bi-shield-check",
    title: "100% Compliance Without Compromise",
    desc: "Rigorous verification under UK Immigration & Right-to-Work laws, Modern Slavery Act 2015, and Conduct Regulations 2003. We protect your business from audit risk.",
    color: "#10B981",
  },
  {
    iconClass: "bi bi-heart-fill",
    title: "Ethical & Fair Candidate Welfare",
    desc: "We believe satisfied workers perform better. All candidates receive on-time Friday weekly pay, statutory holiday pay, pension enrollment, and supportive local management.",
    color: "#F97316",
  },
  {
    iconClass: "bi bi-globe-europe-africa",
    title: "Local Hounslow & Heathrow Roots",
    desc: "Operating directly from 221 Waye Avenue, Hounslow (TW5 9SJ), our consultants have firsthand mastery of the Heathrow airport transit ring and M4/M25 warehouse hubs.",
    color: "#38BDF8",
  },
  {
    iconClass: "bi bi-speedometer2",
    title: "Precision Speed & Reliable Fill Rates",
    desc: "We understand that warehouse lines cannot afford downtime. Our pre-inducted talent bench ensures same-day and within-24-hour shift fulfillment.",
    color: "#A78BFA",
  },
];

const milestones = [
  {
    badge: "Incorporation",
    year: "Co. #17018469",
    title: "Established in England & Wales",
    desc: "JAMES HENRY RESOURCE PARTNERS LIMITED registered at 221 Waye Avenue, Hounslow, TW5 9SJ with a commitment to high-trust UK recruitment.",
    highlight: "Incorporated Entity",
    iconClass: "bi bi-buildings",
  },
  {
    badge: "Licensing",
    year: "SIC 78200",
    title: "Authorised Temporary Employment Activities",
    desc: "Fully certified under SIC 78200 (Temporary Employment Agency Activities) and operating in strict accordance with the Conduct of Employment Agencies Regulations 2003.",
    highlight: "Statutory Compliance",
    iconClass: "bi bi-file-earmark-text",
  },
  {
    badge: "Cargo Hub",
    year: "Heathrow",
    title: "Primary Staffing Partner for Heathrow Terminals",
    desc: "Built specialized air freight and cargo handling talent pools servicing bonded logistics facilities across London Heathrow Airport (LHR).",
    highlight: "Airside & Cargo Logistics",
    iconClass: "bi bi-airplane-fill",
  },
  {
    badge: "Scale",
    year: "Nationwide",
    title: "M4 / M25 Corridor & UK Expansion",
    desc: "Extended operations to cover major 3PL distribution centres, high-volume e-commerce fulfillment, cold storage, and manufacturing plants across the UK.",
    highlight: "Multi-Sector Reach",
    iconClass: "bi bi-award-fill",
  },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      {/* ─── HERO WITH REAL HEATHROW CARGO PHOTOGRAPHY ─── */}
      <AuroraBackground className="bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Story (7 Cols) */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold text-orange-400">
                <i className="bi bi-buildings" />
                <ShinyText text="About James Henry Resource Partners Limited" speed={4} />
              </span>

              <BlurText
                as="h1"
                text="Built on Integrity. Driven by Logistics Speed."
                effect="blur"
                animateBy="words"
                direction="top"
                delay={80}
                stepDuration={0.35}
                className="mt-3 sm:mt-5 text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight"
              />

              <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Founded with a mission to raise the benchmark in temporary and permanent recruitment, <strong className="text-white">JAMES HENRY RESOURCE PARTNERS LIMITED</strong> bridges the gap between ambitious logistics operations and hard-working, compliant talent.
              </p>

              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl">
                Strategically positioned in Hounslow, West London, we directly service the high-pressure demands of the <strong className="text-white">Heathrow Cargo Hub</strong>, regional distribution networks across the M4/M25 motorway corridors, and nationwide supply chains.
              </p>

              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <StarBorder
                  as={NavLink}
                  to="/contact"
                  color="#F97316"
                  trailColor="#FF6B00"
                  radius={12}
                  glow={0.6}
                  duration={3}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 active:scale-95 transition"
                >
                  <span>Contact Our Hounslow Desk</span>
                  <i className="bi bi-arrow-right text-xs" />
                </StarBorder>
                <StarBorder
                  as={NavLink}
                  to="/compliance"
                  color="#10B981"
                  trailColor="#38BDF8"
                  radius={12}
                  glow={0.5}
                  duration={3.5}
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 sm:px-6 sm:py-3.5 text-xs font-semibold text-slate-200 hover:bg-white/10 active:bg-white/10 transition"
                >
                  <i className="bi bi-shield-check text-emerald-400" />
                  <span>View Compliance Certifications</span>
                </StarBorder>
              </div>
            </div>

            {/* Right Photo & Operational Showcase (5 Cols) */}
            <div className="lg:col-span-5">
              <TiltedCard maxTilt={5}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-orange-500/20 to-emerald-500/20 blur-xl pointer-events-none" />
                  <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#1E293B] shadow-2xl">
                    <div className="relative h-52 sm:h-72 w-full overflow-hidden">
                      <img
                        src="/images/heathrow_cargo.jpg"
                        alt="Heathrow Air Cargo Distribution Hub"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 rounded-full bg-black/60 border border-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md flex items-center gap-1.5">
                        <i className="bi bi-geo-alt-fill text-orange-400" />
                        Heathrow Cargo Corridor
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <p className="text-xs uppercase tracking-widest text-[#F97316] font-bold">Registered Office</p>
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                          Official Record
                        </span>
                      </div>
                      <p className="text-sm font-bold text-white">221 Waye Avenue, Hounslow, TW5 9SJ</p>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Minutes from Heathrow Airport cargo terminals, enabling rapid on-site candidate inductions and same-day shift triage.
                      </p>
                    </div>
                  </div>
                </div>
              </TiltedCard>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* ─── STATS BAR ─── */}
      <section className="border-y border-white/10 bg-[#050B19] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="p-2">
                <p className="text-2xl sm:text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs font-bold text-orange-400 mt-1">{s.label}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATUTORY LEGAL DETAILS ─── */}
      <section className="py-20 bg-[#070F1E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">Statutory Governance</p>
            <BlurText
              as="h2"
              text="Official Company Transparency"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-2 text-3xl font-extrabold text-white text-center justify-center"
            />
            <p className="mt-2 text-xs text-slate-400">Verifiable on the Companies House public register.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { iconClass: "bi bi-buildings", label: "Company Name", value: "JAMES HENRY RESOURCE PARTNERS LIMITED", color: "#F97316" },
              { iconClass: "bi bi-file-earmark-text", label: "Company Number", value: "17018469 (England & Wales)", color: "#10B981" },
              { iconClass: "bi bi-geo-alt-fill", label: "Registered Office", value: "221 Waye Avenue, Hounslow, TW5 9SJ", color: "#38BDF8" },
              { iconClass: "bi bi-briefcase", label: "SIC Activity Code", value: "78200 — Temporary Employment Agency", color: "#A78BFA" },
            ].map((item) => (
              <SpotlightCard
                key={item.label}
                spotlightColor={`${item.color}25`}
                className="card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col justify-between"
              >
                <div>
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 mb-4"
                    style={{ background: `${item.color}22` }}
                  >
                    <i className={`${item.iconClass} text-lg`} style={{ color: item.color }} />
                  </div>
                  <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{item.label}</p>
                  <p className="mt-2 text-sm font-bold text-white leading-snug">{item.value}</p>
                </div>
                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <i className="bi bi-patch-check-fill" />
                  <span>Verified Registration</span>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY MILESTONES ─── */}
      <section className="py-20 bg-[#050B19] border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">Company Evolution</p>
            <BlurText
              as="h2"
              text="Key Milestones & Credentials"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-2 text-3xl sm:text-4xl font-extrabold text-white text-center justify-center"
            />
            <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
              Our journey from incorporation to becoming a trusted logistics staffing supplier for Heathrow and nationwide hubs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, idx) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(249, 115, 22, 0.2)"
                  className="card-hover h-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#1E293B]/70 to-[#0B192C]/80 p-6 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] to-[#10B981]" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-orange-500/20 px-3 py-0.5 text-xs font-bold text-orange-400">
                        {m.year}
                      </span>
                      <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                    </div>

                    <BlurText
                      as="h3"
                      text={m.title}
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-base font-bold text-white mb-2"
                    />
                    <p className="text-xs text-slate-400 leading-relaxed">{m.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                    <i className="bi bi-patch-check-fill" />
                    <span>{m.highlight}</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES GRID ─── */}
      <section className="py-20 bg-[#070F1E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">Our Pillars</p>
            <BlurText
              as="h2"
              text="How We Operate"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-2 text-3xl font-extrabold text-white text-center justify-center"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {values.map((v) => (
              <SpotlightCard
                key={v.title}
                spotlightColor={`${v.color}25`}
                className="card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-7 flex gap-5 items-start"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10"
                  style={{ background: `${v.color}22` }}
                >
                  <i className={`${v.iconClass} text-xl`} style={{ color: v.color }} />
                </div>
                <div>
                  <BlurText
                    as="h3"
                    text={v.title}
                    effect="blur"
                    animateBy="words"
                    direction="top"
                    delay={50}
                    stepDuration={0.3}
                    className="text-base font-bold text-white"
                  />
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{v.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
