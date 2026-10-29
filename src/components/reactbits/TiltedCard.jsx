import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * TiltedCard - React Bits Inspired Component
 * Interactive 3D perspective tilt reacting to cursor coordinates on desktop.
 */
export default function TiltedCard({
  children,
  className = "",
  maxTilt = 7,
  scale = 1.015,
  ...props
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const rotateX = useSpring(0, { damping: 20, stiffness: 220 });
  const rotateY = useSpring(0, { damping: 20, stiffness: 220 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY / height) - 0.5) * -maxTilt * 2;
    const rY = ((mouseX / width) - 0.5) * maxTilt * 2;

    rotateX.set(rX);
    rotateY.set(rY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{ scale: isHovered ? scale : 1 }}
      transition={{ duration: 0.2 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`perspective-1000 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
