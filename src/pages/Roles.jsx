import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";

const allRolesData = [
  {
    id: "picker-packer",
    title: "Picker & Packer Operative",
    category: "Pickers & Packers",
    rate: "£12.50 - £14.20 / hr",
    shifts: "Days / Nights / 4-on-4-off",
    location: "Heathrow Hub, Slough, Feltham",
    description: "Voice picking, RF gun barcode scanning, order collation, packaging, and label generation for fast-paced e-commerce & air cargo hubs.",
    requirements: ["No experience needed (Full training provided)", "Good attention to detail", "Right-to-Work verified"],
    iconClass: "bi bi-box-seam",
    tag: "High Demand",
  },
  {
    id: "parcel-sortation",
    title: "Parcel Sortation Operative",
    category: "Pickers & Packers",
    rate: "£12.80 - £14.50 / hr",
    shifts: "Twilight (16:00 - 01:00) & Night Shift",
    location: "M4 Corridor / Heathrow Vicinity",
    description: "High-speed conveyor sortation, loading distribution cages, bag tipping, and dispatch preparation for next-day UK courier networks.",
    requirements: ["Ability to lift up to 20kg safely", "Punctual & team-oriented", "PPE boots & high-vis required"],
    iconClass: "bi bi-envelope-paper",
    tag: "Immediate Placement",
  },
  {
    id: "flt-counterbalance",
    title: "FLT Counterbalance Operator",
    category: "Forklift / MHE",
    rate: "£14.50 - £16.50 / hr",
    shifts: "Continental 12hr / Rotating Days & Nights",
    location: "Heathrow Cargo Hub, TW5, TW6",
    description: "Loading & unloading curtain-siders, block stacking in yards, cross-dock transit, and servicing automated conveyor feed lines.",
    requirements: ["Valid RTITB, ITSSAR or NPORS licence", "Min 6 months warehouse experience", "Heathrow airside awareness"],
    iconClass: "bi bi-truck-flatbed",
    tag: "Certified Operators",
  },
  {
    id: "flt-reach",
    title: "Reach Truck Driver (High-Bay)",
    category: "Forklift / MHE",
    rate: "£15.00 - £17.20 / hr",
    shifts: "Monday - Friday (08:00 - 17:00 or Nights)",
    location: "Slough Trading Estate & Hounslow",
    description: "Precision high-bay racking operations up to 10-12 metres, replenishment of active picking locations, and goods-in putaway.",
    requirements: ["Accredited Reach Truck licence", "Confident working at heights", "Vetting check on certificate"],
    iconClass: "bi bi-building-up",
    tag: "Premium Rate",
  },
  {
    id: "stock-controller",
    title: "Inventory & Stock Controller",
    category: "Stock Control",
    rate: "£14.00 - £16.00 / hr",
    shifts: "Day Shifts (08:00 - 16:30)",
    location: "Feltham & Heathrow Logistics Parks",
    description: "Perpetual inventory cycle counting, WMS discrepancies investigation, goods-in receipting, batch tracking, and audit preparation.",
    requirements: ["Working knowledge of WMS / SAP / Excel", "Strong numerical accuracy", "Previous logistics admin"],
    iconClass: "bi bi-clipboard-data",
    tag: "Specialist",
  },
  {
    id: "goods-in-checker",
    title: "Goods-In QA Inspector",
    category: "Stock Control",
    rate: "£13.50 - £15.00 / hr",
    shifts: "Early Shift (06:00 - 14:30)",
    location: "Hounslow Warehouses (TW5)",
    description: "Verifying supplier delivery notes against purchase orders, damage inspection, temperature logging for chilled freight, and system booking.",
    requirements: ["Attention to detail", "Basic computer literacy", "Good communication skills"],
    iconClass: "bi bi-search",
    tag: "Day Shift",
  },
  {
    id: "shift-supervisor",
    title: "Warehouse Shift Team Leader",
    category: "Supervisors",
    rate: "£17.00 - £20.00 / hr (or £35k-£42k perm)",
    shifts: "4-on-4-off Rotating Shift Pattern",
    location: "Heathrow Logistics Hub & Nationwide",
    description: "Leading teams of 15-40 operatives, managing shift briefings, monitoring hourly pick rates, H&S enforcement, and client liaison.",
    requirements: ["Proven supervisory logistics experience", "First Aid & IOSH advantageous", "Strong leadership"],
    iconClass: "bi bi-person-badge",
    tag: "Leadership",
  },
  {
    id: "despatch-coordinator",
    title: "Despatch & Traffic Supervisor",
    category: "Supervisors",
    rate: "£16.50 - £19.00 / hr",
    shifts: "Late Shift & Night Operations",
    location: "M4 / M25 Intersection Distribution Centre",
    description: "Coordinating dock allocation, sealing outgoing trailers, generating CMR & manifest paperwork, and tracking driver departure SLAs.",
    requirements: ["Transport & logistics paperwork fluency", "Fast problem solver", "Clear radio communication"],
    iconClass: "bi bi-journal-check",
    tag: "High Responsibility",
  },
  {
    id: "hgv-class-1",
    title: "HGV Class 1 (C+E) Trunking Driver",
    category: "Transport",
    rate: "£18.50 - £22.00 / hr",
    shifts: "Days, Nights, Tramping Options",
    location: "Heathrow to Midlands Logistics Network",
    description: "Hub-to-hub depot trunking, airport cargo transfers, and pallet network freight with modern clean fleet vehicles.",
    requirements: ["Category C+E UK licence", "Valid CPC & Digital Tachograph", "No more than 6 minor points"],
    iconClass: "bi bi-truck",
    tag: "Top Earning",
  },
  {
    id: "hgv-class-2",
    title: "HGV Class 2 Multi-Drop Driver",
    category: "Transport",
    rate: "£16.00 - £18.50 / hr",
    shifts: "Monday - Friday (06:00 Starts)",
    location: "London & Home Counties Deliveries",
    description: "Palletised commercial multi-drop deliveries with tail-lift and electric pump truck, POD signatures, and vehicle pre-checks.",
    requirements: ["Category C UK licence", "Valid CPC card", "Good customer manner"],
    iconClass: "bi bi-truck",
    tag: "Mon-Fri Days",
  },
];

const categories = ["All", "Pickers & Packers", "Forklift / MHE", "Stock Control", "Supervisors", "Transport"];

export default function Roles() {
  const { openStaffRequest, openCandidateApply } = useOutletContext() || {};
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRoles = allRolesData.filter((r) => {
    const matchesCat = selectedCategory === "All" || r.category === selectedCategory;
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="overflow-hidden w-full">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] pt-8 pb-14 lg:pt-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">Workforce Directory</p>
            <BlurText
              as="h1"
              text="Roles We Supply & Place Across the UK"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={80}
              stepDuration={0.35}
              className="mt-3 text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight"
            />
            <p className="mt-3 text-xs sm:text-base text-slate-300 leading-relaxed">
              Explore our vetted talent pool. From entry-level parcel handlers to accredited high-bay reach truck operators and shift managers, we supply fully certified personnel across Heathrow Cargo Hub and nationwide.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
              <StarBorder
                as="button"
                onClick={openStaffRequest}
                color="#F97316"
                trailColor="#FF6B00"
                radius={12}
                glow={0.6}
                duration={3}
                className="rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs font-bold text-white shadow-md shadow-orange-500/25 active:scale-95 transition flex items-center justify-center gap-1.5"
              >
                <span>Request Operatives for Your Site</span>
                <i className="bi bi-arrow-right text-xs" />
              </StarBorder>
              <StarBorder
                as="button"
                onClick={openCandidateApply}
                color="#10B981"
                trailColor="#38BDF8"
                radius={12}
                glow={0.5}
                duration={3.5}
                className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs font-bold text-emerald-300 active:bg-emerald-500/20 transition flex items-center justify-center gap-1.5"
              >
                <i className="bi bi-person-check-fill text-emerald-400" />
                <span>Apply as Candidate</span>
              </StarBorder>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STICKY SEARCH & HORIZONTAL SWIPE PILLS BAR ─── */}
      <section className="sticky top-[53px] sm:top-[69px] z-30 border-y border-white/10 bg-[#070F1E]/95 py-3 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Swipeable Pills */}
            <div className="flex overflow-x-auto no-scrollbar gap-1.5 pb-1 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold whitespace-nowrap shrink-0 transition min-h-[38px] ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-[#F97316] to-[#FF6B00] text-white shadow-md shadow-orange-500/25"
                      : "border border-white/10 bg-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <i className="bi bi-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-xs" />
              <input
                type="text"
                placeholder="Search roles, locations, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-white/5 pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500 min-h-[40px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ROLES GRID ─── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-400 mb-6">
            Showing <strong className="text-white">{filteredRoles.length}</strong> available role profiles in{" "}
            <span className="text-[#F97316]">{selectedCategory}</span>
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <AnimatePresence>
              {filteredRoles.map((role) => (
                <motion.div
                  key={role.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="card-hover rounded-2xl border border-white/10 bg-gradient-to-br from-[#1E293B]/60 to-[#0B192C]/80 p-5 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xl text-orange-400">
                          <i className={role.iconClass} />
                        </div>
                        <div>
                          <span className="rounded-full bg-orange-500/20 px-2.5 py-0.5 text-[10px] font-bold text-[#F97316]">
                            {role.tag}
                          </span>
                          <BlurText
                            as="h3"
                            text={role.title}
                            effect="blur"
                            animateBy="words"
                            direction="top"
                            delay={50}
                            stepDuration={0.3}
                            className="mt-1 text-base sm:text-lg font-bold text-white"
                          />
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm sm:text-base font-black text-white">{role.rate}</p>
                        <p className="text-[10px] text-slate-500">Benchmark</p>
                      </div>
                    </div>

                    <p className="mt-3 text-xs text-slate-300 leading-relaxed">{role.description}</p>

                    <div className="mt-3 grid gap-1.5 sm:grid-cols-2 text-xs text-slate-400 pt-3 border-t border-white/5">
                      <div className="flex items-center gap-1.5">
                        <i className="bi bi-clock-history text-orange-400 shrink-0" />
                        <span>{role.shifts}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <i className="bi bi-geo-alt-fill text-emerald-400 shrink-0" />
                        <span>{role.location}</span>
                      </div>
                    </div>

                    <div className="mt-3 space-y-1 pt-3 border-t border-white/5">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Candidate Vetting Standards:</p>
                      {role.requirements.map((req) => (
                        <div key={req} className="flex items-center gap-2 text-xs text-slate-300">
                          <i className="bi bi-check-circle-fill text-emerald-400 shrink-0 text-xs" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                    <button
                      onClick={openStaffRequest}
                      className="flex-1 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-3 min-h-[44px] text-xs font-bold text-white shadow-md shadow-orange-500/20 active:scale-98 transition flex items-center justify-center gap-1.5"
                    >
                      <span>Request This Staff</span>
                      <i className="bi bi-arrow-right" />
                    </button>
                    <button
                      onClick={openCandidateApply}
                      className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 min-h-[44px] text-xs font-semibold text-slate-200 active:bg-white/10 transition flex items-center justify-center gap-1.5"
                    >
                      <i className="bi bi-person-check-fill text-emerald-400" />
                      <span>Apply</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
