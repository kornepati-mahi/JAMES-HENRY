import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import StaffRequestModal from "../components/StaffRequestModal";
import CandidateApplyModal from "../components/CandidateApplyModal";
import StarBorder from "../components/reactbits/StarBorder";

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [staffModalOpen, setStaffModalOpen] = useState(false);
  const [candidateModalOpen, setCandidateModalOpen] = useState(false);

  const openStaffRequest = () => setStaffModalOpen(true);
  const openCandidateApply = () => setCandidateModalOpen(true);

  const mainNavLinks = [
    { to: "/", label: "Home", icon: "bi bi-house" },
    { to: "/about", label: "About", icon: "bi bi-info-circle" },
    { to: "/services", label: "Services", icon: "bi bi-gear" },
    { to: "/roles", label: "Roles", icon: "bi bi-box-seam" },
    { to: "/industries", label: "Industries", icon: "bi bi-buildings" },
    { to: "/clients", label: "Employers", icon: "bi bi-briefcase" },
    { to: "/candidates", label: "Job Seekers", icon: "bi bi-person-badge" },
    { to: "/compliance", label: "Compliance", icon: "bi bi-shield-check" },
    { to: "/contact", label: "Contact", icon: "bi bi-envelope" },
  ];

  return (
    <div className="min-h-screen bg-[#070F1E] text-slate-100 flex flex-col selection:bg-orange-500 selection:text-white font-sans w-full overflow-x-hidden">
      {/* ─── TOP NOTIFICATION BANNER (CLEAN & NON-COLLIDING ON 320PX) ─── */}
      <div className="border-b border-white/10 bg-[#050B19] px-3 py-1.5 text-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="hidden sm:flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold tracking-wide text-xs whitespace-nowrap">
              <i className="bi bi-patch-check-fill text-emerald-400" />
              100% Right-to-Work Verified
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300 text-xs whitespace-nowrap">
              Heathrow Cargo Hub • M4/M25 Logistics Corridor • Nationwide
            </span>
          </div>

          {/* Mobile Clean Single Line on <= 400px Viewports */}
          <div className="flex sm:hidden w-full items-center justify-between text-[10px]">
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <i className="bi bi-patch-check-fill text-[11px]" />
              100% RTW Verified
            </span>
            <a href="tel:02081234567" className="text-orange-400 font-bold flex items-center gap-1">
              <i className="bi bi-telephone-fill text-[10px]" />
              020 8123 4567
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs">
            <a
              href="tel:02081234567"
              className="flex items-center gap-1.5 font-bold text-orange-400 hover:text-orange-300 transition whitespace-nowrap text-xs"
            >
              <i className="bi bi-telephone-fill text-orange-400" />
              <span>24/7 Desk: 020 8123 4567</span>
            </a>
            <span className="hidden lg:inline text-slate-400 font-mono text-[11px] bg-white/5 px-2 py-0.5 rounded border border-white/5">
              Co. #17018469
            </span>
          </div>
        </div>
      </div>

      {/* ─── MAIN STICKY NAVBAR ─── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070F1E]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 sm:px-6 lg:px-8">
          {/* Brand Logo (Proportionate on Mobile) */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 shrink-0 group">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F97316] to-[#FF6B00] text-white shadow-md shadow-orange-500/25 transition group-hover:scale-105">
              <i className="bi bi-buildings text-sm sm:text-lg" />
            </div>
            <div>
              <p className="text-[11px] sm:text-sm font-black uppercase tracking-[0.14em] text-white group-hover:text-orange-400 transition leading-tight whitespace-nowrap">
                JAMES HENRY
              </p>
              <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold whitespace-nowrap">
                Resource Partners Ltd
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-orange-500/15 text-orange-400 border border-orange-500/30 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <StarBorder
              as="button"
              onClick={openCandidateApply}
              color="#10B981"
              trailColor="#38BDF8"
              radius={999}
              glow={0.5}
              duration={3.5}
              className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-bold text-emerald-300 transition hover:bg-emerald-500/20 whitespace-nowrap min-h-[36px]"
            >
              <i className="bi bi-person-check-fill text-emerald-400" />
              <span>Fast-Apply</span>
            </StarBorder>

            <StarBorder
              as="button"
              onClick={openStaffRequest}
              color="#F97316"
              trailColor="#FF6B00"
              radius={999}
              glow={0.6}
              duration={3}
              sparkle={true}
              className="group flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#F97316] to-[#FF6B00] px-4 py-2 text-xs font-extrabold text-white shadow-md shadow-orange-500/30 transition hover:scale-105 hover:shadow-orange-500/50 whitespace-nowrap min-h-[36px]"
            >
              <span>Request Staff</span>
              <i className="bi bi-arrow-right transition-transform group-hover:translate-x-0.5" />
            </StarBorder>
          </div>

          {/* Mobile Right Action Area: Always clearly visible, fits on 320px screen */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href="tel:02081234567"
              aria-label="Call 24/7 Desk"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-400 active:bg-orange-500/20"
            >
              <i className="bi bi-telephone-fill text-xs" />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open mobile menu"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 active:bg-white/15"
            >
              <i className="bi bi-list text-xl leading-none" />
            </button>
          </div>
        </div>
      </header>

      {/* ─── MAIN CONTENT CONTAINER (PADDED BOTTOM FOR MOBILE BAR) ─── */}
      <main className="flex-1 pb-24 lg:pb-0 w-full overflow-x-hidden">
        <Outlet context={{ openStaffRequest, openCandidateApply }} />
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/10 bg-[#050B19] text-slate-400 pb-24 lg:pb-0">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#F97316] to-[#FF6B00] text-white">
                  <i className="bi bi-buildings text-lg" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-wider text-white">JAMES HENRY</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Resource Partners Ltd</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-slate-400">
                Premier UK logistics and warehouse recruitment agency servicing Heathrow Cargo Hub, the M4/M25 corridor, and nationwide distribution hubs.
              </p>
              <div className="pt-1 space-y-1 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <i className="bi bi-geo-alt-fill text-[#F97316] mt-0.5" />
                  <span>221 Waye Avenue, Hounslow, England, TW5 9SJ</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <i className="bi bi-telephone-fill text-[#F97316]" />
                  <span>24/7 Dispatch: 020 8123 4567</span>
                </div>
              </div>
            </div>

            {/* Col 2 */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">Navigation</p>
              <ul className="space-y-2 text-xs">
                <li><NavLink to="/" className="hover:text-white transition">Home</NavLink></li>
                <li><NavLink to="/about" className="hover:text-white transition">About Us &amp; Mission</NavLink></li>
                <li><NavLink to="/services" className="hover:text-white transition">Temporary &amp; Permanent Staffing</NavLink></li>
                <li><NavLink to="/roles" className="hover:text-white transition">Roles We Supply</NavLink></li>
                <li><NavLink to="/industries" className="hover:text-white transition">Industries We Serve</NavLink></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">Portals</p>
              <ul className="space-y-2 text-xs">
                <li><NavLink to="/clients" className="hover:text-white transition">For Employers (Staff Request)</NavLink></li>
                <li><NavLink to="/candidates" className="hover:text-white transition">For Job Seekers (Fast-Apply)</NavLink></li>
                <li><NavLink to="/compliance" className="hover:text-white transition">Right-to-Work &amp; Standards</NavLink></li>
                <li><NavLink to="/contact" className="hover:text-white transition">Contact &amp; Map Coordinates</NavLink></li>
                <li>
                  <button onClick={openStaffRequest} className="text-orange-400 hover:underline flex items-center gap-1">
                    <span>Immediate Staff Calculator</span>
                    <i className="bi bi-arrow-right text-[11px]" />
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-white">Statutory Registration</p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <i className="bi bi-file-earmark-text text-[#F97316]" />
                  <span>Company No: <strong className="text-white">17018469</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="bi bi-briefcase text-[#F97316]" />
                  <span>SIC Code: <strong className="text-white">78200</strong></span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400">
                  <i className="bi bi-shield-check text-emerald-400" />
                  <span>Conduct Regulations 2003 Compliant</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-left">
            <p>© {new Date().getFullYear()} JAMES HENRY RESOURCE PARTNERS LIMITED. Registered in England &amp; Wales.</p>
            <p className="flex items-center justify-center gap-2">
              <span>Hounslow TW5 9SJ</span>
              <span>•</span>
              <span>Heathrow Air Cargo</span>
              <span>•</span>
              <span>UK Nationwide</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ─── FULL-SCREEN MOBILE DRAWER (SMOOTH & RESPONSIVE) ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-col bg-[#050B19] border-l border-white/10 p-5 overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 text-white font-bold text-sm">
                    JH
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white block">James Henry</span>
                    <span className="text-[10px] text-slate-400 font-mono">Co. #17018469</span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-slate-300 hover:text-white active:bg-white/10"
                  aria-label="Close menu"
                >
                  <i className="bi bi-x-lg text-lg" />
                </button>
              </div>

              {/* Navigation Links (Minimum 48px Touch Targets) */}
              <nav className="my-4 space-y-1">
                {mainNavLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 min-h-[48px] text-sm font-semibold transition ${
                        isActive
                          ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                          : "text-slate-300 hover:bg-white/5 active:bg-white/10"
                      }`
                    }
                  >
                    <div className="flex items-center gap-2.5">
                      <i className={`${link.icon} text-base opacity-75`} />
                      <span>{link.label}</span>
                    </div>
                    <i className="bi bi-chevron-right text-xs opacity-50" />
                  </NavLink>
                ))}
              </nav>

              {/* Drawer Bottom Actions */}
              <div className="mt-auto pt-4 border-t border-white/10 space-y-2 pb-6">
                <StarBorder
                  as="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openStaffRequest();
                  }}
                  color="#F97316"
                  trailColor="#FF6B00"
                  radius={12}
                  glow={0.6}
                  duration={3}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98"
                >
                  <span>Request Staff Now</span>
                  <i className="bi bi-lightning-charge-fill" />
                </StarBorder>

                <StarBorder
                  as="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openCandidateApply();
                  }}
                  color="#10B981"
                  trailColor="#38BDF8"
                  radius={12}
                  glow={0.5}
                  duration={3.5}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-emerald-300 active:scale-98"
                >
                  <span>Job Seeker Fast-Apply</span>
                  <i className="bi bi-person-check-fill" />
                </StarBorder>

                <a
                  href="tel:02081234567"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 py-2 sm:py-2.5 text-xs font-semibold text-slate-300"
                >
                  <i className="bi bi-telephone-fill text-orange-400" />
                  <span>Call 24/7 Desk: 020 8123 4567</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── STICKY MOBILE ACTION BAR (SLEEK & PROPORTIONATE) ─── */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-white/10 bg-[#050B19]/95 px-3 py-1.5 pb-[max(0.4rem,env(safe-area-inset-bottom))] backdrop-blur-xl lg:hidden">
        <StarBorder
          as="a"
          href="tel:02081234567"
          color="#38BDF8"
          trailColor="#ffffff"
          radius={12}
          glow={0.4}
          duration={4}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 h-10 text-[11px] font-bold text-slate-200 active:bg-white/10 shadow-sm"
        >
          <i className="bi bi-telephone-fill text-[#F97316] text-xs" />
          <span>Call 24/7</span>
        </StarBorder>
        <StarBorder
          as="button"
          onClick={openStaffRequest}
          color="#F97316"
          trailColor="#FF6B00"
          radius={12}
          glow={0.6}
          duration={3}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] h-10 text-[11px] font-bold text-white shadow-md shadow-orange-500/25 active:scale-95 transition-transform"
        >
          <i className="bi bi-lightning-charge-fill text-xs" />
          <span>Request Staff</span>
        </StarBorder>
      </div>

      {/* ─── MODALS ─── */}
      <StaffRequestModal open={staffModalOpen} onClose={() => setStaffModalOpen(false)} />
      <CandidateApplyModal open={candidateModalOpen} onClose={() => setCandidateModalOpen(false)} />
    </div>
  );
}
