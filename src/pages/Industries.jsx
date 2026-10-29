import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ShinyText from "../components/reactbits/ShinyText";
import AuroraBackground from "../components/reactbits/AuroraBackground";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";

const industriesData = [
  {
    id: "air-freight",
    title: "Air Freight & Cargo Logistics",
    subtitle: "Heathrow Cargo Hub Specialist",
    iconClass: "bi bi-airplane-fill",
    color: "#F97316",
    heroStat: "15 min to LHR Cargo Hub",
    description:
      "Positioned directly in Hounslow (TW5), we are the primary workforce partner for air cargo handlers, forwarders, and bonded transit warehouses around London Heathrow Airport.",
    keyCapabilities: [
      "Level D (CO) Cargo Security Vetted Operatives",
      "ULD palletisation, breakdown & rebuild",
      "Bonded warehouse compliance & customs awareness",
      "Airside pass support & 5-year checkable history",
    ],
    shiftPatterns: "24/7 Continental 12-hour rotations, Night freight triage, Weekend surges",
    typicalRoles: ["Air Cargo Handlers", "Bonded Warehouse Staff", "FLT Counterbalance", "Traffic Marshals"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce & High-Volume Fulfilment",
    subtitle: "Next-Day & Same-Day Dispatch Centers",
    iconClass: "bi bi-box-seam",
    color: "#10B981",
    heroStat: "50+ Operatives in 24h",
    description:
      "Rapid seasonal scale-ups for Black Friday, Cyber Week, and flash retail campaigns. We supply high-efficiency pickers, packers, and returns processors capable of high pick rates.",
    keyCapabilities: [
      "RF Scanner & WMS proficiency pre-screened",
      "Low drop-out rates with attendance bonuses",
      "On-site coordinators provided for 20+ headcount",
      "Returns rework & quality inspection teams",
    ],
    shiftPatterns: "Days (06:00-14:00), Twilights (14:00-22:00), Nights (22:00-06:00)",
    typicalRoles: ["Pick & Pack Operatives", "Sortation Staff", "Returns Evaluators", "WMS Clerks"],
  },
  {
    id: "3pl-distribution",
    title: "3PL & Contract Distribution",
    subtitle: "M4 & M25 Logistics Corridor",
    iconClass: "bi bi-truck",
    color: "#38BDF8",
    heroStat: "100% SLA Fulfillment",
    description:
      "Providing multi-client logistics facilities with flexible labor to handle incoming supplier containers, cross-docking, pallet storage, and national courier dispatch.",
    keyCapabilities: [
      "Cross-docking & de-vanning container teams",
      "Narrow-aisle (VNA) and reach truck specialists",
      "EDI and barcoding adherence",
      "Flexible core-and-surge hybrid labor models",
    ],
    shiftPatterns: "Rotating shifts, 4-on-4-off patterns, Weekend cover",
    typicalRoles: ["Reach Truck Drivers", "Container Unloaders", "Cross-Dock Marshals", "Despatch Supervisors"],
  },
  {
    id: "cold-storage",
    title: "Chilled & Cold Storage Logistics",
    subtitle: "Temperature-Controlled Supply Chains",
    iconClass: "bi bi-snow",
    color: "#A78BFA",
    heroStat: "Certified Sub-Zero PPE",
    description:
      "Supplying resilient, medically cleared operatives equipped with thermal PPE for deep freeze (-25°C), chilled (0-4°C), and ambient food & pharma distribution hubs.",
    keyCapabilities: [
      "Sub-zero acclimatized operatives",
      "HACCP and food hygiene awareness",
      "Chilled FLT reach operators with heated cab experience",
      "Strict rotation adherence for operative safety",
    ],
    shiftPatterns: "Continental shifts with scheduled thermal recovery breaks",
    typicalRoles: ["Chilled Pickers", "Cold Store FLT Reach", "Hygiene Operatives", "Temperature QA Staff"],
  },
  {
    id: "assembly-manufacturing",
    title: "Light Assembly & Co-Packing",
    subtitle: "Secondary Packaging & Kitting",
    iconClass: "bi bi-gear-wide-connected",
    color: "#F43F5E",
    heroStat: "High Accuracy Kitting",
    description:
      "Supporting contract packing, promotional bundling, barcoding, and light manufacturing plants across West London, Slough, and Berkshire.",
    keyCapabilities: [
      "High dexterous precision for multi-pack kitting",
      "Blister pack, heat shrink, and labeling machinery line-feeding",
      "Strict batch QA & discrepancy checks",
      "Scalable line squads with designated line leaders",
    ],
    shiftPatterns: "Standard 8-hour Monday to Friday day and late shifts",
    typicalRoles: ["Co-Packing Operatives", "Line Feeders", "Assembly Technicians", "Quality Inspectors"],
  },
];

export default function Industries() {
  const { openStaffRequest } = useOutletContext() || {};
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const active = industriesData[selectedIndustry];

  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <AuroraBackground className="bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-300">
              <i className="bi bi-grid-3x3-gap-fill text-[#F97316]" />
              <ShinyText text="Specialist Logistics Sectors & Expertise" speed={3.5} />
            </div>
            <BlurText
              as="h1"
              text="Specialist Staffing Across the UK Logistics Ecosystem"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={80}
              stepDuration={0.35}
              className="mt-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            />
            <p className="mt-4 text-xs sm:text-base text-slate-300 leading-relaxed">
              Logistics is not one-size-fits-all. A frozen food warehouse needs different training and stamina than an air freight bonded facility or high-speed e-commerce sortation center. We know the difference and supply the right talent.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
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
                <span>Discuss Sector Staffing</span>
                <i className="bi bi-arrow-right" />
              </StarBorder>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* ─── INTERACTIVE SECTOR SWITCHER (SWIPEABLE ON MOBILE) ─── */}
      <section className="py-12 sm:py-16 bg-[#070F1E] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sm:hidden text-center text-[11px] text-slate-400 mb-3 flex items-center justify-center gap-1.5">
            <i className="bi bi-arrow-left-right text-orange-400" />
            <span>Swipe sectors horizontally to view</span>
          </div>

          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 mb-6 sm:mb-10 sm:flex-wrap sm:justify-center">
            {industriesData.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(idx)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition shrink-0 min-h-[38px] ${
                  selectedIndustry === idx
                    ? "border border-orange-500 bg-orange-500/20 text-white shadow-lg shadow-orange-500/20"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-white/25 active:bg-white/10"
                }`}
              >
                <i className={`${ind.iconClass} text-sm`} style={{ color: ind.color }} />
                <span>{ind.title.split("&")[0]}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1E293B]/80 to-[#0B192C]/90 p-5 sm:p-10 shadow-2xl backdrop-blur-md"
            >
              <div className="grid gap-10 lg:grid-cols-2 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
                      style={{ background: `${active.color}22` }}
                    >
                      <i className={`${active.iconClass} text-2xl`} style={{ color: active.color }} />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#F97316]">
                        {active.subtitle}
                      </span>
                      <BlurText
                        as="h2"
                        text={active.title}
                        effect="blur"
                        animateBy="words"
                        direction="top"
                        delay={60}
                        stepDuration={0.3}
                        className="text-2xl sm:text-3xl font-extrabold text-white"
                      />
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mt-4">{active.description}</p>

                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs font-bold uppercase tracking-wider text-white">Specific Industry Vetting:</p>
                    {active.keyCapabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <i className="bi bi-patch-check-fill text-emerald-400 shrink-0 text-xs" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <StarBorder
                      as="button"
                      onClick={openStaffRequest}
                      color="#F97316"
                      trailColor="#FF6B00"
                      radius={12}
                      glow={0.6}
                      duration={3}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-orange-500/20 active:scale-98 transition"
                    >
                      <span>Request Staff for {active.title.split("&")[0]}</span>
                      <i className="bi bi-arrow-right" />
                    </StarBorder>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-xs text-slate-400">Key Advantage Metric</span>
                    <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                      {active.heroStat}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Shift Coverage:</p>
                    <p className="text-xs font-medium text-white bg-black/30 p-3 rounded-xl border border-white/5">
                      {active.shiftPatterns}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Primary Roles Deployed:</p>
                    <div className="flex flex-wrap gap-2">
                      {active.typicalRoles.map((role) => (
                        <span key={role} className="rounded-lg bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs text-orange-300">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 text-xs text-slate-400 flex items-center gap-2">
                    <i className="bi bi-clock-history text-[#F97316]" />
                    <span>Average deployment time: Under 24 hours for verified operatives</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── INDUSTRY CARDS OVERVIEW ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <BlurText
              as="h2"
              text="All 5 Operational Sectors At A Glance"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="text-2xl font-bold text-white sm:text-3xl text-center justify-center"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industriesData.map((ind, i) => (
              <SpotlightCard
                key={ind.id}
                spotlightColor={`${ind.color}28`}
                onClick={() => setSelectedIndustry(i)}
                className={`card-hover cursor-pointer rounded-2xl border p-6 transition flex flex-col justify-between ${
                  selectedIndustry === i ? "border-orange-500 bg-[#1E293B]/70" : "border-white/10 bg-white/5"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <i className={`${ind.iconClass} text-lg`} style={{ color: ind.color }} />
                    <BlurText
                      as="h3"
                      text={ind.title}
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-base font-bold text-white"
                    />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{ind.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-orange-400 font-semibold">
                  <span>Explore Sector Blueprint</span>
                  <i className="bi bi-arrow-right" />
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
