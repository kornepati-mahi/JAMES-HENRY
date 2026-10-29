/**
 * InfiniteMarquee - React Bits Inspired Component
 * Seamless GPU-accelerated infinite horizontal loop marquee for tickers and badges.
 */
export default function InfiniteMarquee({
  items = [],
  speed = 30,
  direction = "left",
  className = "",
}) {
  return (
    <div className={`overflow-hidden select-none whitespace-nowrap flex w-full ${className}`}>
      <div
        className={`flex shrink-0 items-center gap-5 sm:gap-8 animate-marquee ${
          direction === "right" ? "animate-marquee-reverse" : ""
        }`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="shrink-0 flex items-center">
            {item}
          </div>
        ))}
      </div>
      <div
        className={`flex shrink-0 items-center gap-5 sm:gap-8 animate-marquee ${
          direction === "right" ? "animate-marquee-reverse" : ""
        }`}
        style={{ animationDuration: `${speed}s` }}
        aria-hidden="true"
      >
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="shrink-0 flex items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
