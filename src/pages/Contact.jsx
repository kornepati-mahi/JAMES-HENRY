import { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../components/reactbits/SpotlightCard";
import ShinyText from "../components/reactbits/ShinyText";
import AuroraBackground from "../components/reactbits/AuroraBackground";
import BlurText from "../components/reactbits/BlurText";
import StarBorder from "../components/reactbits/StarBorder";

export default function Contact() {
  const [department, setDepartment] = useState("Client Staffing Request (Immediate)");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1200);
  };

  const resetForm = () => {
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSent(false);
  };

  return (
    <div className="overflow-hidden">
      {/* ─── HERO ─── */}
      <AuroraBackground className="bg-gradient-to-b from-[#070F1E] via-[#0B192C] to-[#070F1E] py-12 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-300">
              <i className="bi bi-headset text-[#F97316]" />
              <ShinyText text="24/7 Rapid Dispatch Desk" speed={3.5} />
            </div>
            <BlurText
              as="h1"
              text="Get in Touch with Our Hounslow Logistics Desk"
              effect="blur"
              animateBy="words"
              direction="top"
              delay={80}
              stepDuration={0.35}
              className="mt-4 text-2xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
            />
            <p className="mt-4 text-xs sm:text-base text-slate-300 leading-relaxed">
              Based in Hounslow, West London — directly serving the Heathrow Cargo Hub and the M4/M25 logistics corridor. Reach our recruitment consultants 24 hours a day, 7 days a week.
            </p>
          </div>
        </div>
      </AuroraBackground>

      {/* ─── CONTACT CHANNELS & DETAILS ─── */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Direct Cards */}
            <SpotlightCard spotlightColor="rgba(249, 115, 22, 0.22)" className="card-hover rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-[#F97316] mb-5">
                <i className="bi bi-telephone-fill text-2xl" />
              </div>
              <BlurText
                as="h3"
                text="24/7 Dispatch Hotline"
                effect="blur"
                animateBy="words"
                direction="top"
                delay={50}
                stepDuration={0.3}
                className="text-base font-bold text-white"
              />
              <p className="mt-2 text-xs text-slate-400">Available day and night for emergency shift coverage and immediate bookings.</p>
              <div className="mt-5 pt-4 border-t border-white/5">
                <a
                  href="tel:02081234567"
                  className="inline-flex items-center gap-2 text-sm font-bold text-orange-400 hover:text-orange-300 transition"
                >
                  020 8123 4567 <span className="text-[11px] font-normal text-slate-400">(London Desk)</span>
                </a>
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(16, 185, 129, 0.22)" className="card-hover rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 mb-5">
                <i className="bi bi-geo-alt-fill text-2xl" />
              </div>
              <BlurText
                as="h3"
                text="Registered Office"
                effect="blur"
                animateBy="words"
                direction="top"
                delay={50}
                stepDuration={0.3}
                className="text-base font-bold text-white"
              />
              <p className="mt-2 text-xs text-slate-400">Strategically located in Hounslow for rapid transit to Heathrow terminals and M4 corridor.</p>
              <div className="mt-5 pt-4 border-t border-white/5">
                <p className="text-xs font-bold text-slate-200">221 Waye Avenue, Hounslow</p>
                <p className="text-xs text-slate-400">England, TW5 9SJ</p>
              </div>
            </SpotlightCard>

            <SpotlightCard spotlightColor="rgba(56, 189, 248, 0.22)" className="card-hover rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 mb-5">
                <i className="bi bi-clock-history text-2xl" />
              </div>
              <BlurText
                as="h3"
                text="Operating Hours"
                effect="blur"
                animateBy="words"
                direction="top"
                delay={50}
                stepDuration={0.3}
                className="text-base font-bold text-white"
              />
              <p className="mt-2 text-xs text-slate-400">Recruitment consultants and dispatch controllers operating around the clock.</p>
              <div className="mt-5 pt-4 border-t border-white/5 space-y-1 text-xs text-slate-300">
                <p><strong className="text-white">Emergency Dispatch:</strong> 24 Hours / 7 Days</p>
                <p><strong className="text-white">Registration Desk:</strong> Mon - Sat: 07:00 - 19:00</p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FORM & MAP GRID ─── */}
      <section className="py-12 bg-[#050B19] border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <SpotlightCard spotlightColor="rgba(249, 115, 22, 0.16)" className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1E293B]/80 to-[#0B192C]/90 p-5 sm:p-10 shadow-2xl">
              <div className="mb-6">
                <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-[#F97316]">
                  15-Minute Response SLA
                </span>
                <BlurText
                  as="h2"
                  text="Direct Enquiry Form"
                  effect="blur"
                  animateBy="words"
                  direction="top"
                  delay={60}
                  stepDuration={0.3}
                  className="mt-3 text-2xl font-bold text-white"
                />
                <p className="text-xs text-slate-400 mt-1">Submit your request directly to our on-duty recruitment coordinators.</p>
              </div>

              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">
                      Enquiry Department
                    </label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#070F1E] px-4 py-2.5 text-xs text-white outline-none focus:border-orange-500"
                    >
                      <option value="Client Staffing Request (Immediate)">Client Staffing Request (Urgent / Immediate)</option>
                      <option value="Candidate Work Registration">Candidate Work Registration (Job Seeker)</option>
                      <option value="Permanent Recruitment Enquiry">Permanent Logistics Placement</option>
                      <option value="Compliance & RTW Verification">Compliance &amp; Right-to-Work Queries</option>
                      <option value="Accounts & Invoicing">Accounts &amp; Invoicing</option>
                    </select>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">
                        Your Name
                      </label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rachel Adams"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">
                        Company Name (If Client)
                      </label>
                      <input
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Heathrow Express Freight"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">
                        Email Address
                      </label>
                      <input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rachel@company.co.uk"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">
                        Phone Number
                      </label>
                      <input
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="07xxx xxxxxx"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">
                      Enquiry / Operational Requirements
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please include headcount, shift times, site location, or any specific candidate qualifications..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-orange-500"
                    />
                  </div>

                  <StarBorder
                    as="button"
                    type="submit"
                    disabled={sending}
                    color="#F97316"
                    trailColor="#FF6B00"
                    radius={12}
                    glow={0.6}
                    duration={3}
                    className="w-full rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {sending ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        <span>Transmitting to Duty Coordinator...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Enquiry (15-min Response)</span>
                        <i className="bi bi-arrow-right" />
                      </>
                    )}
                  </StarBorder>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-emerald-500/20 text-[#10B981]">
                    <i className="bi bi-patch-check-fill text-4xl" />
                  </div>
                  <BlurText
                    as="h3"
                    text="Message Transmitted!"
                    effect="blur"
                    animateBy="words"
                    direction="top"
                    delay={50}
                    stepDuration={0.3}
                    className="text-xl font-bold text-white text-center justify-center"
                  />
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. Your enquiry for <span className="text-orange-400 font-semibold">{department}</span> has been assigned to our on-duty Hounslow logistics consultant.
                  </p>
                  <p className="text-[11px] text-slate-400">
                    We will call back to <strong className="text-white">{phone}</strong> within 15 minutes.
                  </p>
                  <button
                    onClick={resetForm}
                    className="rounded-full bg-white/10 px-6 py-2 text-xs font-semibold text-white hover:bg-white/20 transition pt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </SpotlightCard>

            {/* Map & Location Focus */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <BlurText
                      as="h3"
                      text="Hounslow Operational Location"
                      effect="blur"
                      animateBy="words"
                      direction="top"
                      delay={50}
                      stepDuration={0.3}
                      className="text-base font-bold text-white"
                    />
                    <p className="text-xs text-slate-400">221 Waye Avenue, Hounslow, TW5 9SJ</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=221+Waye+Avenue+Hounslow+TW5+9SJ"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1.5 text-[11px] font-bold text-orange-400 hover:bg-orange-500/20 transition"
                  >
                    <i className="bi bi-compass" />
                    Open Maps
                  </a>
                </div>

                {/* Map iframe */}
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-inner h-72 w-full">
                  <iframe
                    title="James Henry Office Location Hounslow"
                    src="https://maps.google.com/maps?q=221%20Waye%20Avenue%2C%20Hounslow%2C%20TW5%209SJ&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0 filter contrast-125"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Transit Distances */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-white">Transit Logistics Hub Proximity:</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-extrabold text-[#F97316]">12 Min</p>
                    <p className="text-[10px] text-slate-400">Heathrow Cargo</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-extrabold text-[#10B981]">18 Min</p>
                    <p className="text-[10px] text-slate-400">Slough Industrial</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-extrabold text-[#38BDF8]">08 Min</p>
                    <p className="text-[10px] text-slate-400">M4 / M25 Junction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
