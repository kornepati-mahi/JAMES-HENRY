import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import StarBorder from "./reactbits/StarBorder";

export default function CandidateApplyModal({ open, onClose }) {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [rtwType, setRtwType] = useState("UK Passport");
  const [rolePreference, setRolePreference] = useState("Picker / Packer");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    postcode: "",
    rtwCode: "",
    hasFlt: false,
    hasTransport: true,
  });

  const fileInputRef = useRef(null);

  const simulateUpload = (fileName) => {
    setFile({ name: fileName });
    setIsUploading(true);
    setUploadProgress(0);
    setIsUploaded(false);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      if (current >= 100) {
        setUploadProgress(100);
        setIsUploading(false);
        setIsUploaded(true);
        clearInterval(interval);
      } else {
        setUploadProgress(current);
      }
    }, 160);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      simulateUpload(e.target.files[0].name);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      simulateUpload(e.dataTransfer.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  const reset = () => {
    setFile(null);
    setUploadProgress(0);
    setIsUploading(false);
    setIsUploaded(false);
    setSubmitting(false);
    setSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      postcode: "",
      rtwCode: "",
      hasFlt: false,
      hasTransport: true,
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-6"
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={reset} />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="modal-zoom relative z-10 w-full max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#101B2E] to-[#050B19] shadow-[0_120px_200px_-160px_rgba(249,115,22,0.9)]"
          >
            {/* Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/5 bg-[#101B2E]/95 px-4 py-3.5 sm:px-6 sm:py-4 backdrop-blur">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-orange-500/10 text-[#F97316]">
                  <i className="bi bi-person-check-fill text-lg sm:text-xl" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#F97316]">Fast Candidate Registration</p>
                  <p className="text-base sm:text-lg font-bold text-white">Job Seeker Fast-Apply</p>
                </div>
              </div>
              <button
                onClick={reset}
                aria-label="Close modal"
                className="flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-white/10 text-slate-300 hover:text-white active:bg-white/10"
              >
                <i className="bi bi-x-lg text-sm" />
              </button>
            </div>

            {!success ? (
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-5 sm:space-y-6">
                {/* CV / Resume Upload Dropzone */}
                <div>
                  <label className="text-sm font-semibold text-white flex items-center justify-between mb-2">
                    <span>Upload CV / Resume (Optional)</span>
                    <span className="text-xs text-slate-400 font-normal">PDF, DOCX up to 10MB</span>
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center transition-all ${
                      isUploaded
                        ? "border-[#10B981]/60 bg-[#10B981]/5"
                        : isUploading
                        ? "border-[#F97316]/60 bg-[#F97316]/5"
                        : "border-white/15 bg-white/[0.02] hover:border-orange-500/40 hover:bg-orange-500/[0.02]"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={handleFileChange}
                    />

                    {isUploaded ? (
                      <div className="flex items-center justify-center gap-3 text-[#10B981]">
                        <i className="bi bi-patch-check-fill text-xl" />
                        <span className="font-medium text-sm text-white">{file?.name}</span>
                        <span className="rounded-full bg-[#10B981]/20 px-2.5 py-0.5 text-xs text-[#10B981]">Verified</span>
                      </div>
                    ) : isUploading ? (
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2 text-sm text-[#F97316]">
                          <i className="bi bi-file-earmark-arrow-up animate-pulse text-lg" />
                          <span>Uploading {file?.name}... {uploadProgress}%</span>
                        </div>
                        <div className="h-2 w-full max-w-xs mx-auto overflow-hidden rounded-full bg-white/10">
                          <motion.div
                            className="h-full bg-gradient-to-r from-[#F97316] to-[#10B981]"
                            style={{ width: `${uploadProgress}%` }}
                            transition={{ ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <i className="bi bi-cloud-arrow-up text-3xl text-slate-400 block" />
                        <p className="text-sm text-slate-300">
                          <span className="text-[#F97316] font-medium">Click to upload</span> or drag and drop your CV
                        </p>
                        <p className="text-xs text-slate-500">Supports quick pre-fill of your profile</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right to Work Toggle */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-white flex items-center gap-2">
                      <i className="bi bi-shield-check text-[#10B981]" />
                      UK Right-to-Work Status
                    </label>
                    <span className="text-xs text-[#10B981] font-medium bg-[#10B981]/15 px-2.5 py-0.5 rounded-full">
                      Home Office Compliant
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {["UK Passport", "Share Code"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setRtwType(type)}
                        className={`rounded-xl border py-2.5 px-3 text-sm font-medium transition ${
                          rtwType === type
                            ? "border-[#10B981] bg-[#10B981]/20 text-white"
                            : "border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {type === "UK Passport" ? "🇬🇧 UK Passport / Birth Cert" : "🔑 Online Share Code"}
                      </button>
                    ))}
                  </div>

                  {rtwType === "Share Code" && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="mt-3">
                      <input
                        placeholder="Enter 9-character Home Office Share Code (e.g. W12 345 67X)"
                        value={formData.rtwCode}
                        onChange={(e) => setFormData({ ...formData, rtwCode: e.target.value })}
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-3.5 py-2 text-sm text-white placeholder-slate-500 outline-none focus:border-[#10B981]"
                      />
                    </motion.div>
                  )}
                </div>

                {/* Role of interest */}
                <div>
                  <label className="text-sm font-semibold text-white mb-2 block">Primary Role of Interest</label>
                  <select
                    value={rolePreference}
                    onChange={(e) => setRolePreference(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-[#070F1E] px-4 py-2.5 text-sm text-white outline-none focus:border-[#F97316]"
                  >
                    <option value="Picker / Packer">Picker / Packer (E-Commerce &amp; Warehouse)</option>
                    <option value="Forklift Driver">FLT Driver (Counterbalance / Reach / VNA)</option>
                    <option value="Warehouse Operative">General Warehouse Operative</option>
                    <option value="HGV Class 1/2">HGV Class 1 or Class 2 Driver</option>
                    <option value="Parcel Sortation">Parcel Sortation &amp; Dispatch</option>
                    <option value="Stock Controller">Stock Control &amp; Inventory</option>
                    <option value="Shift Supervisor">Team Leader / Shift Supervisor</option>
                  </select>
                </div>

                {/* Contact Fields */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Full Name</label>
                    <input
                      required
                      placeholder="e.g. David Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Phone Number</label>
                    <input
                      required
                      placeholder="e.g. 07123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="david@example.co.uk"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1 block">Postcode / City</label>
                    <input
                      required
                      placeholder="e.g. TW5 9SJ / Hounslow"
                      value={formData.postcode}
                      onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-[#F97316]"
                    />
                  </div>
                </div>

                {/* Badges / Checkboxes */}
                <div className="flex flex-wrap gap-4 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.hasFlt}
                      onChange={(e) => setFormData({ ...formData, hasFlt: e.target.checked })}
                      className="rounded accent-[#F97316]"
                    />
                    I hold a valid accredited FLT Certificate
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300">
                    <input
                      type="checkbox"
                      checked={formData.hasTransport}
                      onChange={(e) => setFormData({ ...formData, hasTransport: e.target.checked })}
                      className="rounded accent-[#F97316]"
                    />
                    I have independent transport to sites
                  </label>
                </div>

                {/* Submit button */}
                <StarBorder
                  as="button"
                  type="submit"
                  disabled={submitting}
                  color="#10B981"
                  trailColor="#38BDF8"
                  radius={12}
                  glow={0.6}
                  duration={3}
                  className="w-full rounded-xl bg-gradient-to-r from-[#F97316] to-[#FF6B00] py-2.5 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-orange-500/25 active:scale-98 transition disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      <span>Registering Your Application...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Fast Application</span>
                      <i className="bi bi-lightning-charge-fill" />
                    </>
                  )}
                </StarBorder>
              </form>
            ) : (
              <div className="relative flex flex-col items-center gap-4 px-6 py-12 text-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#10B981]/20">
                  <i className="bi bi-patch-check-fill text-5xl text-[#10B981]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                  <p className="max-w-md text-sm text-slate-300 leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName || "Candidate"}</strong>! Your registration for <span className="text-[#F97316] font-semibold">{rolePreference}</span> has been logged.
                  </p>
                  <p className="text-xs text-slate-400">
                    A James Henry recruitment consultant will contact you via phone (<strong className="text-white">{formData.phone || "provided"}</strong>) within 2 business hours for RTW validation.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left max-w-sm w-full space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <i className="bi bi-patch-check-fill shrink-0" />
                    <span>Weekly Pay &amp; Pension enrolled automatically</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <i className="bi bi-patch-check-fill shrink-0" />
                    <span>Right-to-Work check initiated ({rtwType})</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#10B981]">
                    <i className="bi bi-patch-check-fill shrink-0" />
                    <span>Direct dispatch alerts for Heathrow &amp; M4 corridor</span>
                  </div>
                </div>

                <button
                  onClick={reset}
                  className="rounded-full bg-white/10 hover:bg-white/20 px-8 py-2.5 text-sm font-semibold text-white transition"
                >
                  Close &amp; Done
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
