/**
 * ShinyText - React Bits Inspired Component
 * Applies a smooth shimmering metallic light sweep effect across heading or badge text.
 */
export default function ShinyText({
  text,
  disabled = false,
  speed = 4,
  className = "",
}) {
  return (
    <span
      className={`inline-block bg-clip-text text-transparent bg-[length:200%_100%] ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0.75) 0%, rgba(249, 115, 22, 1) 35%, rgba(255, 255, 255, 1) 50%, rgba(16, 185, 129, 0.95) 65%, rgba(255, 255, 255, 0.75) 100%)",
        animationDuration: `${speed}s`,
      }}
    >
      {text}
    </span>
  );
}
