export default function OrderStoreSectionDivider() {
  return (
    <div className="relative -mb-1 w-full translate-y-px">
      <svg
        className="w-full text-white"
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        fill="currentColor"
        aria-hidden
      >
        <path
          d="M0,40 C200,0 400,80 600,40 C800,0 1000,80 1200,40 L1200,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#E63D28]">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2L14.2 8.2L20 9.3L16 14.1L16.9 20L12 17.1L7.1 20L8 14.1L4 9.3L9.8 8.2L12 2Z" />
        </svg>
      </div>
    </div>
  );
}
