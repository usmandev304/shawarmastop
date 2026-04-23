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
  "absolute top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#E55A38] text-[#E55A38] bg-white/90 shadow-sm transition hover:bg-white hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80";

export default function HomeLocation() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const current = branchLocations[index];

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, []);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(id);
  }, [index, isPaused]);

  const textTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.45, ease: [0.4, 0, 0.2, 1] as const };

  const bgTransition = reduceMotion
    ? { duration: 0.2 }
    : { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const };

  const viewStoreHref =
    current.id === "lake-city"
      ? "/lake-city"
      : current.id === "pia"
        ? "/pia-branch"
      : current.id === "dha"
        ? "/dha-branch"
      : current.id === "gullbery"
        ? "/gullbery-branch"
      : (`/order?from=location&branch=${index}` as const);

  return (
    <>
      <section className="px-4 pt-9 md:pb-[140px] flex justify-center">
        <div
          className="relative w-full max-w-[1300px] m-auto min-h-[400px] md:rounded-[20px] overflow-hidden flex flex-col items-center justify-center text-center shadow-xl bg-neutral-900"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          <div className="absolute inset-0 z-0" aria-hidden>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                className="absolute inset-0 bg-cover bg-no-repeat"
                style={{
                  backgroundImage: `url('${current.image.src}')`,
                  backgroundPosition: current.focal,
                }}
                initial={reduceMotion ? { opacity: 0.75 } : { opacity: 0, scale: 1.1 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                exit={reduceMotion ? { opacity: 0.75 } : { opacity: 0, scale: 0.98 }}
                transition={bgTransition}
              />
            </AnimatePresence>
          </div>

          <div className="absolute inset-0 z-1 backdrop-brightness-100 mix-blend-multiply pointer-events-none" />

          <button
            type="button"
            onClick={goPrev}
            className={`${navButtonClass} left-3 md:left-5`}
            aria-label="Previous location"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className={`${navButtonClass} right-3 md:right-5`}
            aria-label="Next location"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2.2} />
          </button>

          <div className="relative z-10 w-full max-w-[640px] px-4 flex flex-col items-center md:mb-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={index}
                className="w-full flex flex-col items-center"
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
                transition={textTransition}
              >
                <h2 className="md:text-[40px] text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                  {current.title}
                </h2>

                <p className="text-white font-light md:text-[16px] text-sm mb-4 font-sans max-w-[580px] min-h-16 md:min-h-14">
                  {current.description}
                </p>

               
              </motion.div>
            </AnimatePresence>

            <Link
              href={viewStoreHref}
              className="bg-white text-[#E55A38] md:px-[90px] px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md"
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
