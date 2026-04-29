"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { branchLocations } from "@/app/data/branchLocations";
import Footer from "./footer";

const AUTO_SLIDE_MS = 6000;
const total = branchLocations.length;

const navButtonClass =
  "absolute top-1/2 z-20 -translate-y-1/2 flex md:h-11 md:w-11 h-8 w-8 items-center justify-center rounded-full text-white bg-[rgba(7,6,6,0.6)] shadow-sm transition hover:bg-black hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80";
const branchRouteById: Record<string, string> = {
  "lake-city": "/lake-city",
  pia: "/pia-branch",
  dha: "/dha-branch",
  gulberg: "/gullbery-branch",
  gullbery: "/gullbery-branch",
  "gul-brach": "/gullbery-branch",
};

export default function HomeLocation() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const current = branchLocations[index];

  const goPrev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  }, []);

  const goNext = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % total);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(id);
  }, [index, isPaused]);

  const viewStoreHref =
    branchRouteById[current.id] ??
    (index === 3 || current.title.toLowerCase().includes("gulberg")
      ? "/gullbery-branch"
      : (`/order?from=location&branch=${index}` as const));

  return (
    <>
      <section className="px-4 pt-9 md:pb-[140px] pb-[100px] flex justify-center">
        <div
          className="relative w-full max-w-[1300px] m-auto md:min-h-[420px] sm:min-h-[350px] h-[210px] md:rounded-[20px] rounded-[10px] overflow-hidden flex flex-col items-center justify-center text-center shadow-xl bg-neutral-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          {/* Image Animation - Slides from Right Side */}
          <div className="absolute inset-0 z-0 brightness-140"  aria-hidden>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={index}
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('${current.image.src}')`,
                  backgroundPosition: current.focal,
                }}
                initial={{ 
                  x: "100%",
                  opacity: 0.8
                }}
                animate={{ 
                  x: "0%",
                  opacity: 1
                }}
                exit={{ 
                  x: "-100%",
                  opacity: 0.8
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              />
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 z-1 bg-black/30 pointer-events-none" />

          <button
            type="button"
            onClick={goPrev}
            className={`${navButtonClass} left-3 md:left-5 cursor-pointer`}
            aria-label="Previous location"
          >
            <ChevronLeft className="md:h-6 md:w-6 h-4 w-4" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className={`${navButtonClass} right-3 md:right-5 cursor-pointer`}
            aria-label="Next location"
          >
            <ChevronRight className="md:h-6 md:w-6 h-4 w-4" strokeWidth={2.2} />
          </button>

          <div className="relative z-10 w-full max-w-[640px] px-4 flex flex-col items-center md:mb-0">
            <div className="w-full flex flex-col items-center">
              <h2 className="md:text-[40px] text-[15px] sm:text-3xl font-bold text-white mb-3 tracking-tight">
                {current.title}
              </h2>

              <p className="text-white font-light md:text-[16px] text-[9px] mb-4 font-sans max-w-[580px] min-h-16 md:min-h-14">
                {current.description}
              </p>
            </div>

            <Link
              href={viewStoreHref}
              className="bg-white text-[#E55A38] md:px-[90px] md:text-[16px] text-[9px] md:px-8 md:py-4 px-7 py-3 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
            >
              View store
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}