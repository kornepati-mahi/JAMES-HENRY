import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useOutletContext, NavLink } from "react-router-dom";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ShinyText from "../components/reactbits/ShinyText";
import CountUp from "../components/reactbits/CountUp";
import AuroraBackground from "../components/reactbits/AuroraBackground";
import InfiniteMarquee from "../components/reactbits/InfiniteMarquee";
import TiltedCard from "../components/reactbits/TiltedCard";
import TechText from "../components/reactbits/TechText";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";
import AccordionGallery from "../components/reactbits/AccordionGallery";

const allRoles = [
  {
    category: "Pickers & Packers",
    iconClass: "bi bi-box-seam",
    desc: "Fast-paced e-commerce & air cargo fulfillment",
    roles: ["Pick & Pack Operatives", "Parcel Sortation Staff", "Returns Evaluators", "RF Gun Scanning Specialists"],
  },
  {
    category: "Forklift / MHE",
    iconClass: "bi bi-truck-flatbed",
    desc: "Certified high-bay & yard operators",
    roles: ["FLT Counterbalance", "High-Bay Reach Truck", "VNA Man-Up Drivers", "Powered Pallet Truck (PPT)"],
  },
  {
    category: "Stock Control",
    iconClass: "bi bi-clipboard-data",
    desc: "Accuracy-driven inventory management",
    roles: ["WMS Inventory Controllers", "Cycle Count Specialists", "Goods-In QA Inspectors", "Discrepancy Investigators"],
  },
  {
    category: "Supervisors",
    iconClass: "bi bi-person-badge",
    desc: "Operational leadership on day & night shifts",
    roles: ["Warehouse Shift Supervisors", "Despatch Team Leaders", "H&S Floor Marshals", "Section Coordinators"],
  },
  {
    category: "Transport & Driving",
    iconClass: "bi bi-truck",
    desc: "Airport trunking & national distribution",
    roles: ["HGV Class 1 (C+E) Drivers", "HGV Class 2 Multi-Drop", "7.5T Express Couriers", "Shunt Drivers"],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "15-Minute Intake",
    desc: "Call our 24/7 desk or submit your headcount, role specifications, and site shift times. Your dedicated consultant acknowledges within 15 minutes.",
    iconClass: "bi bi-clock-history",
    color: "#F97316",
  },
  {
    step: "02",
    title: "Vetted Matching",
    desc: "We match candidates from our pre-screened pool with verified UK Right-to-Work, required licences (FLT/CPC), and site induction briefings.",
    iconClass: "bi bi-shield-check",
    color: "#10B981",
  },
  {
    step: "03",
    title: "On-Site Deployment",
    desc: "Operatives arrive on shift in full PPE (high-vis, safety boots) ready to integrate into your warehouse line within 24 hours.",
    iconClass: "bi bi-truck",
    color: "#38BDF8",
  },
];

const sectorGalleryItems = [
  {
    image: "/images/heathrow_cargo.jpg",
    label: "Heathrow Air Cargo Hub",
    subtext: "Level D security-cleared handlers & ULD breakdown teams at Terminals 3, 4, 5.",
    badge: "Bonded Hubs",
    link: "/industries",
    alt: "Heathrow Airport cargo ramp transit and bonded freight logistics",
  },
  {
    image: "/images/ecommerce_fulfilment.jpg",
    label: "E-Commerce Fulfilment",
    subtext: "High-speed pick, pack, and returns processing for retail surge & peak campaigns.",
    badge: "High Volume",
    link: "/industries",
    alt: "Modern automated e-commerce fulfilment warehouse and conveyor lines",
  },
  {
    image: "/images/warehouse_hero.jpg",
    label: "3PL & Contract Logistics",
    subtext: "Cross-docking, container de-vanning, and multi-client logistics management.",
    badge: "M4 / M25 Corridor",
    link: "/industries",
    alt: "3PL high-bay warehouse operations and MHE equipment",
  },
  {
    image: "/images/cold_storage.jpg",
    label: "Cold Chain & Temperature",
    subtext: "Deep-freeze & chilled food distribution with thermal PPE-ready operative teams.",
    badge: "Chilled & Frozen",
    link: "/industries",
    alt: "Cold chain temperature-controlled storage and logistics facility",
  },
  {
    image: "/images/express_freight.jpg",
    label: "Express Parcel Sortation",
    subtext: "Automated sortation, distribution cages, and twilight/night freight triage.",
    badge: "24/7 Dispatch",
    link: "/industries",
    alt: "Express freight and rapid courier parcel sortation depot",
  },
];

const liveTickerItems = [
  <span key="1" className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
    <i className="bi bi-airplane-fill text-orange-400" /> Heathrow Cargo Hub Terminals 3, 4 &amp; 5
  </span>,
  <span key="2" className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
    <i className="bi bi-shield-check text-emerald-400" /> 100% Home Office Right-to-Work Vetted
  </span>,
  <span key="3" className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
    <i className="bi bi-lightning-charge-fill text-amber-400" /> 15-Minute Staffing Response SLA
  </span>,
  <span key="4" className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
    <i className="bi bi-truck text-sky-400" /> M4 / M25 High-Capacity Distribution
  </span>,
  <span key="5" className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
    <i className="bi bi-patch-check-fill text-emerald-400" /> 4-Hour Free Replacement Guarantee
  </span>,
  <span key="6" className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
    <i className="bi bi-telephone-fill text-orange-400" /> 24/7 Operations Desk: 020 8123 4567
  </span>,
  <span key="7" className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
    <i className="bi bi-buildings text-purple-400" /> UK Registered Entity: Co. #17018469
  </span>,
];

export default function Home() {
  const { openStaffRequest, openCandidateApply } = useOutletContext() || {};
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedRolePill, setSelectedRolePill] = useState("Pick & Pack");
  const [techWord, setTechWord] = useState("JAMES HENRY");
  const [techColor, setTechColor] = useState("#F97316");
  const [techReveal, setTechReveal] = useState("letter");
  const [techIntro, setTechIntro] = useState("assemble");

  const categories = ["All", ...allRoles.map((r) => r.category)];
  const displayRoles =
    activeCategory === "All" ? allRoles : allRoles.filter((r) => r.category === activeCategory);

  return (
    <div className="overflow-hidden w-full">
      {/* ─── HERO SECTION WITH AURORA BACKGROUND & REACT BITS ANIMATIONS ─── */}
      <AuroraBackground className="bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] pt-6 pb-12 lg:pt-14 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold text-orange-300"
              >
                <i className="bi bi-lightning-charge-fill text-[#F97316]" />
                <ShinyText text="24/7 Rapid Staffing • Heathrow & M4 Corridor" speed={3.5} />
              </motion.div>

              <BlurText
                as="h1"
                text="Connecting Talent. Supporting Businesses."
                effect="blur"
                animateBy="words"
                direction="top"
                delay={90}
                stepDuration={0.35}
                className="mt-3 sm:mt-6 text-2xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight"
              />

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-3 sm:mt-5 max-w-2xl text-xs sm:text-base text-slate-300 leading-relaxed"
              >
                <strong className="text-white">JAMES HENRY RESOURCE PARTNERS LIMITED</strong> is a premier UK recruitment agency delivering pre-vetted warehouse operatives, forklift drivers, and logistics personnel to <strong className="text-white">Heathrow Cargo Hub</strong>, the M4/M25 corridor, and nationwide distribution networks.
              </motion.p>

              {/* CTAs (Proportionate on Mobile) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-5 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4"
              >
                <StarBorder
                  as="button"
                  onClick={openStaffRequest}
                  color="#F97316"
                  trailColor="#FF6B00"
                  radius={12}
                  glow={0.6}
                  duration={3}
                  className="group flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-95 transition"
                >
                  <span>Request Staff Now</span>
                  <i className="bi bi-arrow-right transition-transform group-hover:translate-x-1" />
                </StarBorder>

                <StarBorder
                  as={NavLink}
                  to="/candidates"
                  color="#10B981"
                  trailColor="#38BDF8"
                  radius={12}
                  glow={0.5}
                  duration={3.5}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-200 transition hover:bg-white/10 active:bg-white/10"
                >
                  <i className="bi bi-person-check-fill text-emerald-400" />
                  <span>Register as Candidate</span>
                </StarBorder>
              </motion.div>

              {/* Trust Pillars */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-4 sm:mt-8 flex flex-wrap items-center gap-1.5 sm:gap-3 text-xs"
              >
                <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-semibold text-emerald-300 text-[10px] sm:text-xs">
                  <i className="bi bi-patch-check-fill text-emerald-400" />
                  100% Right-to-Work
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-medium text-slate-300 text-[10px] sm:text-xs">
                  <i className="bi bi-buildings text-orange-400" />
                  Co. #17018469
                </span>
                <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-medium text-slate-300 text-[10px] sm:text-xs">
                  <i className="bi bi-geo-alt-fill text-sky-400" />
                  Hounslow TW5 9SJ
                </span>
              </motion.div>

              {/* 3 Metric Cards with React Bits Spotlight & CountUp */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-5 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-xl"
              >
                <SpotlightCard
                  spotlightColor="rgba(16, 185, 129, 0.2)"
                  className="p-2.5 sm:p-4 text-center backdrop-blur-sm bg-white/[0.04]"
                >
                  <p className="text-lg sm:text-3xl font-extrabold text-white">
                    <CountUp to={100} suffix="%" duration={1.8} />
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-slate-400">Right-to-Work</p>
                </SpotlightCard>

                <SpotlightCard
                  spotlightColor="rgba(249, 115, 22, 0.25)"
                  className="p-2.5 sm:p-4 text-center backdrop-blur-sm bg-white/[0.04]"
                >
                  <p className="text-lg sm:text-3xl font-extrabold text-[#F97316]">
                    <CountUp to={24} suffix="/7" duration={1.6} />
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-slate-400">Dispatch 24/7</p>
                </SpotlightCard>

                <SpotlightCard
                  spotlightColor="rgba(56, 189, 248, 0.22)"
                  className="p-2.5 sm:p-4 text-center backdrop-blur-sm bg-white/[0.04]"
                >
                  <p className="text-lg sm:text-3xl font-extrabold text-[#10B981]">
                    <CountUp to={15} suffix="min" duration={1.5} />
                  </p>
                  <p className="mt-0.5 text-[10px] sm:text-xs text-slate-400">Response SLA</p>
                </SpotlightCard>
              </motion.div>
            </div>

            {/* Right Visual & Live Dispatch Console with React Bits 3D Tilt (5 Cols) */}
            <div className="lg:col-span-5">
              <TiltedCard maxTilt={5}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mx-auto max-w-lg lg:max-w-none"
              >
                <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#1E293B]/80 shadow-[0_30px_90px_-20px_rgba(249,115,22,0.4)] backdrop-blur-xl">
                  {/* Warehouse Image */}
                  <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                    <img
                      src="/images/warehouse_hero.jpg"
                      alt="UK Logistics Warehouse and Forklift Operator"
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/40 to-transparent" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-black/40 bg-black/60 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Logistics Dispatch
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-orange-400">Operational Hub</p>
                        <p className="text-xs sm:text-sm font-bold text-white">Heathrow &amp; M4 Corridor</p>
                      </div>
                      <span className="rounded-lg bg-orange-500/90 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-white shadow">
                        142 Active On Site
                      </span>
                    </div>
                  </div>

                  {/* Interactive Staff Configurator Widget */}
                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2.5">
                      <span className="text-slate-300 font-semibold flex items-center gap-1 text-[11px] sm:text-xs">
                        <i className="bi bi-broadcast text-[#F97316]" />
                        Select Role for Rapid Deployment:
                      </span>
                      <span className="text-emerald-400 font-bold text-[11px]">Ready</span>
                    </div>

                    {/* Quick Role Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: "Pick & Pack", rate: "from £12.50/hr" },
                        { name: "FLT Counterbalance", rate: "from £14.50/hr" },
                        { name: "Reach Truck Driver", rate: "from £15.00/hr" },
                        { name: "HGV Class 1 Driver", rate: "from £18.50/hr" },
                      ].map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setSelectedRolePill(item.name)}
                          className={`rounded-xl border p-2 sm:p-2.5 text-left transition min-h-[44px] ${
                            selectedRolePill === item.name
                              ? "border-orange-500 bg-orange-500/20 text-white font-bold"
                              : "border-white/10 bg-white/5 text-slate-300 hover:border-white/25"
                          }`}
                        >
                          <p className="text-[11px] sm:text-xs font-semibold">{item.name}</p>
                          <p className="text-[10px] text-slate-400 font-normal">{item.rate}</p>
                        </button>
                      ))}
                    </div>

                    {/* SLA Checklist Strip */}
                    <div className="rounded-xl border border-white/5 bg-black/30 p-2.5 sm:p-3 space-y-1.5 text-xs text-slate-300">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-emerald-400 text-[11px] sm:text-xs">
                          <i className="bi bi-shield-check" />
                          Right-to-Work Pre-Verified
                        </span>
                        <span className="text-slate-400 text-[10px]">Home Office IDVT</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-orange-400 text-[11px] sm:text-xs">
                          <i className="bi bi-clock-history" />
                          Deployment Guarantee
                        </span>
                        <span className="text-slate-400 text-[10px]">Within 24 Hours</span>
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      onClick={openStaffRequest}
                      className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] h-10 text-xs font-bold text-white shadow-md shadow-orange-500/25 active:scale-95 transition"
                    >
                      <span>Instant Quote for {selectedRolePill}</span>
                      <i className="bi bi-arrow-right text-xs" />
                    </button>
                  </div>
                </div>
              </motion.div>
              </TiltedCard>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* ─── REACT BITS INFINITE RUNNING MARQUEE TICKER ─── */}
      <section className="border-y border-white/10 bg-[#050B19]/90 py-3 backdrop-blur-md">
        <InfiniteMarquee items={liveTickerItems} speed={32} />
      </section>

      {/* ─── HOW IT WORKS (WITH REACT BITS SPOTLIGHT CARDS) ─── */}
      <section className="py-14 sm:py-20 bg-[#050B19] border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">Fast &amp; Compliant Staffing</p>
            <BlurText
              as="h2"
              text="How It Works in 3 Steps"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={90}
              stepDuration={0.35}
              className="mt-2 text-2xl sm:text-4xl font-extrabold text-white justify-center"
            />
            <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              From your initial request to boots on the warehouse floor — seamless client onboarding with zero guesswork.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor={`${step.color}26`}
                  className="card-hover h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10"
                        style={{ background: `${step.color}22` }}
                      >
                        <i className={`${step.iconClass} text-xl`} style={{ color: step.color }} />
                      </div>
                      <span className="text-3xl sm:text-4xl font-black text-white/10">{step.step}</span>
                    </div>
                    <BlurText
                      as="h3"
                      text={step.title}
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-base sm:text-lg font-bold text-white"
                    />
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-400">
                    <i className="bi bi-patch-check-fill text-emerald-400" />
                    <span>Verified Standard</span>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FILTERABLE ROLES DIRECTORY (TOUCH-SWIPEABLE ON MOBILE) ─── */}
      <section className="py-14 sm:py-20 bg-[#070F1E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">Roles We Supply</p>
            <BlurText
              as="h2"
              text="Explore Logistics Positions"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={90}
              stepDuration={0.35}
              className="mt-2 text-2xl sm:text-4xl font-extrabold text-white justify-center"
            />
            <p className="mt-2 text-xs sm:text-sm text-slate-400">Swipe through categories with your thumb.</p>
          </div>

          {/* Swipeable Category Pills on Mobile */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-4 sm:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap transition-all min-h-[40px] shrink-0 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#F97316] to-[#FF6B00] text-white shadow-lg shadow-orange-500/25"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Roles Grid with React Bits SpotlightCards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-4">
            <AnimatePresence>
              {displayRoles.map((group) => (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="h-full"
                >
                  <SpotlightCard
                    spotlightColor="rgba(249, 115, 22, 0.16)"
                    className="card-hover h-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#1E293B]/70 to-[#0B192C]/80 p-5 sm:p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-orange-400">
                          <i className={`${group.iconClass} text-lg`} />
                        </div>
                        <BlurText
                          as="h3"
                          text={group.category}
                          effect="blur"
                          animateBy="words"
                          direction="top"
                          delay={50}
                          stepDuration={0.3}
                          className="font-bold text-white text-base"
                        />
                      </div>
                      <p className="text-xs text-slate-400 mb-4">{group.desc}</p>
                      <ul className="space-y-2">
                        {group.roles.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-xs text-slate-300">
                            <i className="bi bi-check-circle-fill text-emerald-400 text-xs shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex gap-2">
                      <button
                        onClick={openStaffRequest}
                        className="flex-1 rounded-xl bg-orange-500/15 border border-orange-500/30 h-9 text-xs font-bold text-orange-400 hover:bg-orange-500 hover:text-white active:scale-95 transition flex items-center justify-center"
                      >
                        Request Staff
                      </button>
                      <button
                        onClick={openCandidateApply}
                        className="rounded-xl border border-white/10 bg-white/5 px-3.5 h-9 text-xs font-semibold text-slate-300 hover:text-white active:bg-white/10 transition flex items-center justify-center"
                      >
                        Apply
                      </button>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─── SECTORS SHOWCASE (REACT BITS ACCORDION GALLERY) ─── */}
      <section className="py-14 sm:py-20 bg-[#050B19] border-t border-white/5 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/5 blur-[120px] pointer-events-none rounded-full" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">Core Hubs</p>
            <BlurText
              as="h2"
              text="Logistics Sectors We Power"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={90}
              stepDuration={0.35}
              className="mt-2 text-2xl sm:text-4xl font-extrabold text-white justify-center"
            />
            <p className="mt-2.5 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
              Hover or tap across our core operational hubs to inspect compliant staffing capabilities, security clearance standards, and fleet deployments.
            </p>
          </div>

          {/* React Bits AccordionGallery */}
          <div className="w-full">
            <AccordionGallery
              items={sectorGalleryItems}
              defaultIndex={2}
              expandRatio={0.48}
              trigger="hover"
              accentColor="#F97316"
              overlayColor="#050B19"
              textColor="#ffffff"
              height={440}
              gap={12}
              radius={20}
              grayscale={false}
            />
          </div>

          {/* Hubs Summary & CTA Strip */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 shrink-0">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-[#F97316] text-xs font-bold border border-orange-500/40">
                  <i className="bi bi-airplane-fill" />
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-sky-400 text-xs font-bold border border-blue-500/40">
                  <i className="bi bi-truck" />
                </span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40">
                  <i className="bi bi-shield-check" />
                </span>
              </div>
              <p className="text-xs text-slate-300">
                <span className="font-semibold text-white">Dedicated M4/M25 Staffing Pools:</span> Active candidate rosters across Slough, Heathrow Cargo, Hayes, Feltham & Park Royal.
              </p>
            </div>

            <StarBorder
              as={NavLink}
              to="/industries"
              color="#F97316"
              duration={3.5}
              radius={12}
              className="text-xs font-bold text-white px-5 py-2.5 inline-flex items-center gap-2 hover:text-orange-300 transition whitespace-nowrap shrink-0"
            >
              <span>Explore All Sector Blueprints</span>
              <i className="bi bi-arrow-right" />
            </StarBorder>
          </div>
        </div>
      </section>

      {/* ─── REACT BITS TECHTEXT INTERACTIVE SECTION (MOBILE OPTIMIZED & SEAMLESS) ─── */}
      <section className="py-8 sm:py-20 bg-gradient-to-b from-[#050B19] via-[#081326] to-[#050B19] border-t border-white/5 relative overflow-hidden">
        {/* Soft atmospheric ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[900px] h-[200px] sm:h-[350px] bg-gradient-to-r from-orange-500/10 via-emerald-500/10 to-sky-500/10 blur-[100px] sm:blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-4 sm:mb-8">
            <div className="flex justify-center mb-2 sm:mb-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-orange-300">
                <i className="bi bi-cpu text-[#F97316]" />
                <ShinyText text="Interactive Vector Wordmark Engine" speed={3.5} />
              </div>
            </div>
            <BlurText
              as="h2"
              text="Precision Logistics Engineering"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={90}
              stepDuration={0.35}
              className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight justify-center text-center w-full"
            />
            <p className="mt-1 sm:mt-2 text-[11px] sm:text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              Click any letter to trigger spring wave ripples, drag off baseline, or hover to inspect vector outlines.
            </p>
          </div>

          {/* MOBILE ONLY: Single Swipeable Pill Strip & Accents (No Wrapping, No Clutter) */}
          <div className="flex sm:hidden flex-col items-center gap-2 mb-2 w-full">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 w-full justify-start px-1">
              {[
                { text: "JAMES HENRY", label: "James Henry" },
                { text: "HEATHROW 24/7", label: "Heathrow 24/7" },
                { text: "ZERO DOWNTIME", label: "Zero Downtime" },
                { text: "RAPID DISPATCH", label: "Rapid Dispatch" },
              ].map((item) => (
                <button
                  key={item.text}
                  onClick={() => setTechWord(item.text)}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold transition min-h-[30px] ${
                    techWord === item.text
                      ? "bg-gradient-to-r from-[#F97316] to-[#FF6B00] text-white shadow-md shadow-orange-500/25"
                      : "border border-white/10 bg-white/5 text-slate-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2.5 text-[11px] text-slate-400">
              <span className="text-[10px] font-semibold text-slate-400">Accent:</span>
              <div className="flex items-center gap-2">
                {[
                  { color: "#F97316", name: "Orange" },
                  { color: "#10B981", name: "Green" },
                  { color: "#38BDF8", name: "Cyan" },
                ].map((c) => (
                  <button
                    key={c.color}
                    onClick={() => setTechColor(c.color)}
                    aria-label={c.name}
                    className={`h-4 w-4 rounded-full transition transform hover:scale-125 ${
                      techColor === c.color ? "ring-2 ring-white ring-offset-2 ring-offset-[#050B19] scale-110" : "opacity-50"
                    }`}
                    style={{ backgroundColor: c.color }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP ONLY: Full Toolbar Suite */}
          <div className="hidden sm:flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-4 text-xs">
            {/* Word Presets */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              {[
                { text: "JAMES HENRY", label: "James Henry" },
                { text: "HEATHROW 24/7", label: "Heathrow 24/7" },
                { text: "ZERO DOWNTIME", label: "Zero Downtime" },
                { text: "RAPID DISPATCH", label: "Rapid Dispatch" },
              ].map((item) => (
                <button
                  key={item.text}
                  onClick={() => setTechWord(item.text)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition min-h-[34px] ${
                    techWord === item.text
                      ? "bg-gradient-to-r from-[#F97316] to-[#FF6B00] text-white shadow-md shadow-orange-500/25"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Accent Color */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className="text-[10px] text-slate-400 font-semibold">Accent:</span>
              {[
                { color: "#F97316", name: "Orange" },
                { color: "#10B981", name: "Green" },
                { color: "#38BDF8", name: "Cyan" },
              ].map((c) => (
                <button
                  key={c.color}
                  onClick={() => setTechColor(c.color)}
                  aria-label={c.name}
                  className={`h-4 w-4 rounded-full transition transform hover:scale-125 ${
                    techColor === c.color ? "ring-2 ring-white ring-offset-2 ring-offset-[#050B19] scale-110" : "opacity-50"
                  }`}
                  style={{ backgroundColor: c.color }}
                />
              ))}
            </div>

            {/* Reveal Mode */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className="text-[10px] text-slate-400 px-2 font-semibold">Reveal:</span>
              {["letter", "area", "off"].map((mode) => (
                <button
                  key={mode}
                  onClick={() => setTechReveal(mode)}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-bold capitalize transition ${
                    techReveal === mode ? "bg-white/20 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>

            {/* Intro Replay Trigger */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md">
              <span className="text-[10px] text-slate-400 px-2 font-semibold">Intro:</span>
              {["assemble", "type", "metrics"].map((intro) => (
                <button
                  key={intro}
                  onClick={() => setTechIntro(intro)}
                  className={`px-2 py-1 rounded-xl text-[11px] font-bold capitalize transition ${
                    techIntro === intro ? "bg-white/20 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {intro}
                </button>
              ))}
            </div>
          </div>

          {/* Seamless Open Stage - Sized cleanly for Mobile and Desktop */}
          <div className="w-full h-32 sm:h-64 md:h-80 lg:h-[380px] relative flex items-center justify-center">
            <TechText
              key={`${techWord}-${techColor}-${techIntro}-${techReveal}`}
              text={techWord}
              fontWeight={800}
              fontSize={150}
              letterSpacing={-0.03}
              color="#FFFFFF"
              accentColor={techColor}
              reveal={techReveal}
              reach={180}
              softness={0.7}
              dashLength={4}
              dashGap={2}
              strokeWidth={1.5}
              lineStyle="dashed"
              specks={16}
              selection={true}
              labels={true}
              draggable={true}
              bounce={0.45}
              clickKick={true}
              intro={techIntro}
              introDuration={1.8}
              guides={true}
              sweep={true}
              speed={1}
            />
          </div>

          {/* Mobile concise hint */}
          <div className="sm:hidden mt-2 text-center text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
            <i className="bi bi-hand-index-thumb text-orange-400" />
            <span>Tap or drag any letter to test vector physics</span>
          </div>

          {/* Desktop detailed hints */}
          <div className="hidden sm:flex mt-3 items-center justify-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-orange-400">
              <i className="bi bi-hand-index-thumb" />
              Click any letter to ripple
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <i className="bi bi-arrows-move" />
              Drag letters off baseline
            </span>
            <span className="text-white/20">•</span>
            <span className="flex items-center gap-1.5 text-sky-400">
              <i className="bi bi-cursor" />
              Hover to reveal vector outlines
            </span>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM HIGH IMPACT CTA ─── */}
      <section className="py-14 sm:py-20 bg-[#070F1E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-br from-orange-500/15 via-[#1E293B]/60 to-[#070F1E] p-5 sm:p-12 text-center shadow-2xl">
            <i className="bi bi-lightning-charge-fill text-2xl sm:text-4xl text-[#F97316] mb-3 inline-block" />
            <BlurText
              as="h2"
              text="Need Staff On Site Within 24 Hours?"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={80}
              stepDuration={0.35}
              className="text-xl sm:text-3xl font-extrabold text-white text-center justify-center"
            />
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              Call our 24/7 Hounslow dispatch office on <strong className="text-white">020 8123 4567</strong> or use our instant online staffing calculator for an immediate 15-minute consultant response.
            </p>
            <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center gap-2.5 sm:gap-3">
              <StarBorder
                as="button"
                onClick={openStaffRequest}
                color="#F97316"
                trailColor="#FF6B00"
                radius={14}
                glow={0.6}
                duration={3}
                className="rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-5 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-95 transition flex items-center justify-center"
              >
                <span>Launch Staff Request Wizard</span>
              </StarBorder>
              <StarBorder
                as="a"
                href="tel:02081234567"
                color="#38BDF8"
                trailColor="#ffffff"
                radius={14}
                glow={0.5}
                duration={4}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 active:bg-white/10 transition"
              >
                <i className="bi bi-telephone-fill text-orange-400" />
                <span>Call 020 8123 4567</span>
              </StarBorder>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
