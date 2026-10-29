import { motion } from "framer-motion";

/**
 * AuroraBackground - React Bits Inspired Component
 * Liquid, animated glowing aurora mesh in hero backgrounds.
 */
export default function AuroraBackground({ children, className = "" }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dynamic Aurora Mesh Glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.18, 0.32, 0.18],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[25%] left-[8%] h-[380px] w-[480px] rounded-full bg-gradient-to-br from-orange-500/35 to-amber-600/25 blur-[95px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -45, 0],
            y: [0, 35, 0],
            opacity: [0.14, 0.28, 0.14],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
          className="absolute top-[15%] right-[6%] h-[420px] w-[520px] rounded-full bg-gradient-to-bl from-emerald-500/25 to-teal-700/15 blur-[105px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            x: [0, 25, 0],
            y: [0, 45, 0],
            opacity: [0.12, 0.24, 0.12],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
          className="absolute -bottom-[15%] left-[25%] h-[340px] w-[460px] rounded-full bg-gradient-to-t from-sky-500/25 to-blue-700/15 blur-[95px]"
        />
      </div>
      {children}
    </div>
  );
}
