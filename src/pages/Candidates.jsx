import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ShinyText from "../components/reactbits/ShinyText";
import AuroraBackground from "../components/reactbits/AuroraBackground";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";

const candidateBenefits = [
  {
    iconClass: "bi bi-credit-card-2-front",
    title: "Weekly Pay Every Friday",
    desc: "Direct BACS transfer every Friday morning without fail. Clear electronic payslips accessible 24/7.",
    color: "#10B981",
  },
  {
    iconClass: "bi bi-calendar-check",
    title: "Accrued Holiday Pay",
    desc: "Earn 28 days statutory holiday pay as you work. Simple, transparent holiday request management.",
    color: "#F97316",
  },
  {
    iconClass: "bi bi-award",
    title: "Workplace Pension",
    desc: "Automatic enrollment in compliant UK workplace pension schemes with employer co-contributions.",
    color: "#38BDF8",
  },
  {
    iconClass: "bi bi-clock-history",
    title: "24/7 Dedicated Support",
    desc: "Our Hounslow dispatch office is open 24 hours. A real consultant is always ready to answer your call.",
    color: "#A78BFA",
  },
  {
    iconClass: "bi bi-shield-check",
    title: "Free PPE & Site Briefings",
    desc: "High-vis vests, safety boots support, and thorough site induction checklists before your first shift.",
    color: "#F43F5E",
  },
  {
    iconClass: "bi bi-star-fill",
    title: "Temp-to-Perm Pathways",
    desc: "Over 40% of our temporary logistics operatives transition into permanent contracts with our partner clients.",
    color: "#FBBF24",
  },
];

const checklistItems = [
  {
    id: "passport",
    title: "Proof of Right-to-Work (UK)",
    short: "Valid UK/Irish Passport OR Home Office Online Share Code (9 characters).",
    details:
      "All candidates must prove eligibility to work in the UK before deployment. For non-UK nationals, we use the Home Office Employer Checking Service via your 9-character Share Code.",
  },
  {
    id: "ni",
    title: "National Insurance (NI) Number",
    short: "Official HMRC letter, P45, P60, or National Insurance plastic card.",
    details:
      "Required for weekly PAYE payroll, tax deductions, and pension credits. Can be found on your HMRC app or any previous payslip.",
  },
  {
    id: "address",
    title: "Proof of Address (Last 3 Months)",
    short: "Utility bill, council tax statement, or bank statement dated within 90 days.",
    details:
      "Required for verification and ensuring you are matched to sites within reasonable commuting distance of your residence.",
  },
  {
    id: "bank",
    title: "UK Bank Account Details",
    short: "Sort code and account number in your name for Friday weekly pay.",
    details:
      "We pay directly into UK current accounts. Monzo, Revolut, and traditional High Street banks are all supported.",
  },
  {
    id: "licenses",
    title: "Forklift / Driver Licences (If Applicable)",
    short: "RTITB, ITSSAR, NPORS certificate for FLT, or UK Driving Licence (C/C+E) + CPC.",
    details:
      "Operators must bring valid certificates. Counterbalance, Reach Truck, VNA, PPT, and HGV Class 1/2 drivers receive premium rates.",
  },
];

const liveVacancies = [
  {
    id: 1,
    title: "E-Commerce Picker & Packer",
    location: "Heathrow Cargo Terminal 4",
    rate: "£12.80 - £14.20 / hr",
    shift: "4-on-4-off Continental (Days & Nights)",
    type: "Immediate Start",
    tags: ["Weekly Pay", "Overtime Available"],
  },
  {
    id: 2,
    title: "FLT Counterbalance Operator",
    location: "Hounslow Logistics Park (TW5)",
    rate: "£14.50 - £16.00 / hr",
    shift: "Monday - Friday (14:00 - 22:00)",
    type: "Ongoing Temp-to-Perm",
    tags: ["Accredited Licence", "Immediate"],
  },
  {
    id: 3,
    title: "Parcel Sortation Operative",
    location: "Feltham / M4 Corridor",
    rate: "£12.50 - £13.80 / hr",
    shift: "Night Shift (22:00 - 06:00)",
    type: "Full-Time",
    tags: ["Bonus Shift Premium", "Clean Site"],
  },
  {
    id: 4,
    title: "Reach Truck Driver (Cold Store)",
    location: "Slough Trading Estate",
    rate: "£15.20 - £17.00 / hr",
    shift: "Rotating Days (06:00 - 14:00 / 14:00 - 22:00)",
    type: "Temp-to-Perm",
    tags: ["PPE Provided", "Premium Pay"],
  },
];

export default function Candidates() {
  const { openCandidateApply } = useOutletContext() || {};
  const [openChecklist, setOpenChecklist] = useState(0);
  const [activeShiftFilter, setActiveShiftFilter] = useState("All");

  const [fileName, setFileName] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [rtwChoice, setRtwChoice] = useState("UK Passport");
  const [formDone, setFormDone] = useState(false);
  const [candName, setCandName] = useState("");
  const [candPhone, setCandPhone] = useState("");
  const [candRole, setCandRole] = useState("Picker / Packer");
  const fileInputRef = useRef(null);

  const handleSimulatedUpload = (name) => {
    setFileName(name);
    setUploading(true);
    setProgress(0);
    setUploaded(false);

    let curr = 0;
    const t = setInterval(() => {
      curr += 25;
      if (curr >= 100) {
        setProgress(100);
        setUploading(false);
        setUploaded(true);
        clearInterval(t);
      } else {
        setProgress(curr);
      }
    }, 180);
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    setFormDone(true);
  };

  const filteredJobs =
    activeShiftFilter === "All"
      ? liveVacancies
      : liveVacancies.filter((j) => j.shift.toLowerCase().includes(activeShiftFilter.toLowerCase()));

  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <AuroraBackground className="bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] py-12 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300">
                <i className="bi bi-patch-check-fill text-emerald-400" />
                <ShinyText text="Active Hiring across Heathrow & London" speed={3.5} />
              </div>

              <BlurText
                as="h1"
                text="Work That Pays. Paid Every Friday."
                effect="blur"
                animateBy="words"
                direction="top"
                delay={80}
                stepDuration={0.35}
                className="mt-4 sm:mt-6 text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              />

              <p className="mt-4 sm:mt-6 max-w-xl text-xs sm:text-base text-slate-300 leading-relaxed">
                Join hundreds of warehouse operatives, forklift drivers, and transport professionals placed across Heathrow Cargo Hub and the M4/M25 logistics corridor. Weekly pay, full holiday entitlement, and honest communication.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <StarBorder
                  as="button"
                  onClick={openCandidateApply}
                  color="#F97316"
                  trailColor="#FF6B00"
                  radius={12}
                  glow={0.6}
                  duration={3}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-5 py-2.5 sm:px-7 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition"
                >
                  <span>Fast-Apply Online</span>
                  <i className="bi bi-lightning-charge-fill" />
                </StarBorder>
                <StarBorder
                  as="a"
                  href="#checklist"
                  color="#10B981"
                  trailColor="#38BDF8"
                  radius={12}
                  glow={0.5}
                  duration={3.5}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-200 transition hover:bg-white/10 active:bg-white/10"
                >
                  <span>View Document Checklist</span>
                  <i className="bi bi-arrow-right" />
                </StarBorder>
              </div>

              {/* Trust Badges */}
              <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-2 sm:gap-3 border-t border-white/10 pt-6 text-center">
                <div>
                  <p className="text-lg sm:text-xl font-black text-white">Every Friday</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Weekly BACS Pay</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-black text-[#10B981]">28 Days</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Paid Holiday / Year</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-black text-[#38BDF8]">24 Hours</p>
                  <p className="text-[11px] sm:text-xs text-slate-400">Rapid Placement</p>
                </div>
              </div>
            </div>

            {/* In-page Interactive Fast Reg Widget */}
            <div className="relative">
              <SpotlightCard
                spotlightColor="rgba(16, 185, 129, 0.2)"
                className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#1E293B]/90 to-[#0B192C]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-md"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#F97316]">Instant Registration</p>
                    <BlurText
                      as="h3"
                      text="Express Candidate Signup"
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-lg font-bold text-white"
                    />
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400">
                    Live Today
                  </span>
                </div>

                {!formDone ? (
                  <form onSubmit={handleQuickSubmit} className="space-y-4">
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className={`cursor-pointer rounded-2xl border-2 border-dashed p-4 text-center transition ${
                        uploaded
                          ? "border-[#10B981] bg-[#10B981]/10"
                          : uploading
                          ? "border-orange-500 bg-orange-500/10"
                          : "border-white/15 bg-white/[0.02] hover:border-orange-500/40"
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            handleSimulatedUpload(e.target.files[0].name);
                          }
                        }}
                      />
                      {uploaded ? (
                        <div className="flex items-center justify-center gap-2 text-sm text-[#10B981]">
                          <i className="bi bi-patch-check-fill text-lg" />
                          <span className="font-semibold text-white">{fileName}</span>
                          <span className="text-xs bg-[#10B981]/20 px-2 py-0.5 rounded-full">Attached</span>
                        </div>
                      ) : uploading ? (
                        <div className="space-y-2">
                          <p className="text-xs text-orange-400 font-semibold">Simulating CV Scan... {progress}%</p>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-orange-500 to-emerald-400" style={{ width: `${progress}%` }} />
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-3">
                          <i className="bi bi-cloud-arrow-up text-2xl text-orange-400" />
                          <div className="text-left text-xs">
                            <p className="font-semibold text-slate-200">Upload CV / Resume (Optional)</p>
                            <p className="text-slate-400 text-[11px]">Click or drag PDF/DOC</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="text-xs text-slate-400 font-semibold mb-1 block">Right to Work Document</label>
                      <div className="grid grid-cols-2 gap-2">
                        {["UK Passport", "Share Code"].map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setRtwChoice(opt)}
                            className={`rounded-xl border py-2 px-3 text-xs font-semibold transition ${
                              rtwChoice === opt
                                ? "border-emerald-500 bg-emerald-500/20 text-white"
                                : "border-white/10 text-slate-400 hover:text-white"
                            }`}
                          >
                            {opt === "UK Passport" ? "🇬🇧 UK Passport" : "🔑 Online Code"}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                          Full Name
                        </label>
                        <input
                          required
                          value={candName}
                          onChange={(e) => setCandName(e.target.value)}
                          placeholder="e.g. John Smith"
                          className="w-full rounded-xl border border-white/10 bg-black/30 px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                        />
                      </div>
                      <div>
                        <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                          Mobile Phone
                        </label>
                        <input
                          required
                          value={candPhone}
                          onChange={(e) => setCandPhone(e.target.value)}
                          placeholder="07xxx xxxxxx"
                          className="w-full rounded-xl border border-white/10 bg-black/30 px-3.5 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                        Preferred Role
                      </label>
                      <select
                        value={candRole}
                        onChange={(e) => setCandRole(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-[#070F1E] px-3.5 py-2 text-xs text-white outline-none focus:border-orange-500"
                      >
                        <option value="Picker / Packer">Picker / Packer (Heathrow &amp; Slough)</option>
                        <option value="Forklift Driver">FLT Driver (Counterbalance / Reach)</option>
                        <option value="Parcel Sortation">Parcel Sortation &amp; Despatch</option>
                        <option value="Warehouse Operative">General Warehouse Operative</option>
                        <option value="HGV Driver">HGV Class 1 / Class 2</option>
                      </select>
                    </div>

                    <StarBorder
                      as="button"
                      type="submit"
                      color="#F97316"
                      trailColor="#FF6B00"
                      radius={12}
                      glow={0.6}
                      duration={3}
                      className="w-full rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-2.5 sm:py-3.5 text-xs font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition flex items-center justify-center"
                    >
                      <span>Submit Registration → Start This Week</span>
                    </StarBorder>
                  </form>
                ) : (
                  <div className="py-8 text-center space-y-3">
                    <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-emerald-500/20 text-[#10B981]">
                      <i className="bi bi-patch-check-fill text-3xl" />
                    </div>
                    <BlurText
                      as="h4"
                      text="You're On The Dispatch Roster!"
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-lg font-bold text-white text-center justify-center"
                    />
                    <p className="text-xs text-slate-300 max-w-xs mx-auto">
                      Thank you {candName || "Candidate"}! Our Hounslow recruitment desk will call {candPhone || "you"} within 2 hours to confirm your RTW {rtwChoice} verification.
                    </p>
                    <button
                      onClick={() => setFormDone(false)}
                      className="text-xs text-orange-400 hover:underline pt-2"
                    >
                      Register another role or update details
                    </button>
                  </div>
                )}
              </SpotlightCard>
            </div>
          </div>
        </div>
      </AuroraBackground>

      {/* ─── CANDIDATE BENEFITS ─── */}
      <section className="py-20 bg-[#050B19]/80 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">Why Work With James Henry</p>
            <BlurText
              as="h2"
              text="Candidate Benefits & Welfare"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-3 text-2xl sm:text-4xl font-extrabold text-white text-center justify-center"
            />
            <p className="mt-4 text-sm text-slate-400 max-w-xl mx-auto">
              We treat our temporary workers like permanent partners. You get fair treatment, secure pay, and a team that has your back.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {candidateBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="h-full"
              >
                <SpotlightCard
                  spotlightColor={`${b.color}25`}
                  className="h-full card-hover rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm flex flex-col justify-between"
                >
                  <div>
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 mb-4"
                      style={{ background: `${b.color}22` }}
                    >
                      <i className={`${b.iconClass} text-2xl`} style={{ color: b.color }} />
                    </div>
                    <BlurText
                      as="h3"
                      text={b.title}
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-base font-bold text-white"
                    />
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">{b.desc}</p>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIVE VACANCIES & RATES ─── */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F97316]">Current Demand</p>
              <BlurText
                as="h2"
                text="Live Open Positions"
                effect="blur"
                animateBy="words"
                direction="top"
                delay={70}
                stepDuration={0.35}
                className="mt-2 text-2xl sm:text-3xl font-bold text-white"
              />
            </div>
            <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1 sm:pb-0">
              {["All", "Continental", "Monday", "Night"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveShiftFilter(filter)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition min-h-[34px] ${
                    activeShiftFilter === filter
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "border border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {filter === "Monday" ? "Mon-Fri" : filter === "Continental" ? "Continental" : filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredJobs.map((job) => (
              <SpotlightCard
                key={job.id}
                spotlightColor="rgba(249, 115, 22, 0.16)"
                className="card-hover rounded-2xl border border-white/10 bg-gradient-to-br from-[#1E293B]/70 to-[#0B192C]/70 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                        {job.type}
                      </span>
                      <BlurText
                        as="h3"
                        text={job.title}
                        effect="blur"
                        animateBy="words"
                        direction="top"
                        delay={50}
                        stepDuration={0.3}
                        className="mt-2 text-lg font-bold text-white"
                      />
                      <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                        <i className="bi bi-geo-alt-fill text-orange-400" />
                        {job.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-base font-black text-white">{job.rate}</p>
                      <p className="text-[10px] text-slate-500">Gross PAYE / Hr</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                    <p className="text-xs text-slate-300">
                      <strong className="text-slate-400 font-normal">Shift: </strong>
                      {job.shift}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.tags.map((t) => (
                        <span key={t} className="rounded-md bg-white/5 border border-white/5 px-2 py-0.5 text-[10px] text-slate-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[11px] text-slate-400">Ref: JH-VAC-{job.id}</span>
                  <StarBorder
                    as="button"
                    onClick={openCandidateApply}
                    color="#F97316"
                    trailColor="#FF6B00"
                    radius={10}
                    glow={0.5}
                    duration={3}
                    className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-md shadow-orange-500/20 hover:scale-105 active:scale-95 transition"
                  >
                    <span>Quick Apply</span>
                    <i className="bi bi-arrow-right" />
                  </StarBorder>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOCUMENT CHECKLIST ACCORDION ─── */}
      <section id="checklist" className="py-20 bg-[#070F1E] border-t border-white/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#10B981]">Compliance &amp; Onboarding</p>
            <BlurText
              as="h2"
              text="What You Need to Register"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={70}
              stepDuration={0.35}
              className="mt-2 text-2xl sm:text-3xl font-extrabold text-white text-center justify-center"
            />
            <p className="mt-3 text-xs sm:text-sm text-slate-400">
              Have these documents ready so our recruitment team can complete your UK Right-to-Work check without delay.
            </p>
          </div>

          <div className="space-y-3">
            {checklistItems.map((item, index) => {
              const isOpen = openChecklist === index;
              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition ${
                    isOpen ? "border-orange-500/50 bg-[#1E293B]/80" : "border-white/10 bg-white/[0.02]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenChecklist(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between p-5 text-left"
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl font-bold text-xs ${
                          isOpen ? "bg-orange-500 text-white" : "bg-white/10 text-slate-400"
                        }`}
                      >
                        0{index + 1}
                      </div>
                      <div>
                        <BlurText
                          as="h4"
                          text={item.title}
                          effect="blur"
                          animateBy="words"
                          direction="top"
                          delay={40}
                          stepDuration={0.25}
                          className="text-sm font-bold text-white"
                        />
                        <p className="text-xs text-slate-400 mt-0.5">{item.short}</p>
                      </div>
                    </div>
                    <i className={`bi bi-chevron-down text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/5 mt-1">
                          <p>{item.details}</p>
                          <div className="mt-3 flex items-center gap-2 text-emerald-400 font-semibold">
                            <i className="bi bi-shield-check" />
                            <span>Verified under UK Home Office Guidelines</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={openCandidateApply}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-6 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition"
            >
              <span>Open Candidate Fast-Apply Drawer</span>
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
