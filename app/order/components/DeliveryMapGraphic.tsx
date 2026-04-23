/** Decorative “delivery to pin” strip — design approximation without custom assets */
export default function DeliveryMapGraphic({ areaLabel = "Area" }: { areaLabel?: string }) {
  return (
    <div
      className="relative h-[200px] w-full max-w-[320px] md:h-[220px] md:max-w-[360px]"
      aria-hidden
    >
      <div className="absolute bottom-0 left-0 right-0 top-8 rounded-2xl border border-white/20 bg-white/5">
        <svg
          className="h-full w-full opacity-60"
          viewBox="0 0 200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 90 Q50 50 100 60 T180 30"
            stroke="white"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.5"
          />
          <circle cx="32" cy="88" r="4" fill="#FBBF24" />
          <circle cx="170" cy="32" r="5" fill="#E63D28" />
        </svg>
        <span className="absolute right-3 top-3 text-[10px] font-medium uppercase tracking-wider text-white/60">
          {areaLabel}
        </span>
      </div>
      <div className="absolute -right-1 bottom-0 flex h-20 w-24 items-end justify-center">
        <div className="h-12 w-16 rounded-lg bg-amber-300/90 shadow-lg" style={{ transform: "rotate(-8deg)" }} />
        <div className="absolute -bottom-1 h-3 w-3 rounded-full border-2 border-amber-200" />
      </div>
    </div>
  );
}
