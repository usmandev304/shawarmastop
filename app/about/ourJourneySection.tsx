'use client'
import { useState } from "react";
import imgOurJourney from "../../images/about/img2.png";
import imgOurJourney1 from "../../images/about/img3.png";
import Image from "next/image";
import BrandQuote from "./brandQuote";
import { Poppins } from 'next/font/google';
import brach2 from "../../images/about/brach2.png";
import brach3 from "../../images/about/brach3.png";
import brach4 from "../../images/about/brach4.png";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const svgPaths = {
  p1798fb00: "M26.2767 32L37.3177 43.04L38.2777 42.0117L28.8597 32.4678L28.3978 32L28.8597 31.5322L38.2777 21.9873L37.3177 20.959L26.2767 32Z",
  p298e5180: "M38.2572 32L27.2161 43.04L26.2562 42.0117L35.6742 32.4678L36.1361 32L35.6742 31.5322L26.2562 21.9873L27.2161 20.959L38.2572 32Z",
};

const slides = [
  {
    image: imgOurJourney,
  },
  {
    image: brach2,
  },
  {
    image: brach3,
  },
  {
    image: brach4,
  }
];

export default function OurJourneySection() {
  const [current, setCurrent] = useState(0);
  const isFirst = current === 0;
  const isLast = current === slides.length - 1;
  
  const nextSlide = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };
  
  return (
    <>
      <div className={`${poppins.className} flex min-h-screen items-center justify-center bg-white p-4 md:mb-[60px] md:p-8`}>
        <div className="relative flex w-full max-w-[1320px] flex-col items-stretch gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* LEFT SIDE - FIXED */}
          <div className="relative h-[350px] w-full shrink-0 overflow-hidden rounded-[16px] sm:h-[380px] md:h-[500px] lg:h-[650px] md:max-w-[48%]">
            <div className="relative h-full w-full overflow-hidden rounded-[16px] bg-gray-100">
              <Image 
                alt="Shawarma Stop journey image" 
                className="object-cover"
                src={slides[current].image}
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                priority
              />
            </div>
          </div>
          
          {/* RIGHT SIDE - Content */}
          <div className="flex w-full min-w-0 shrink-0 flex-col gap-[30px] md:max-w-[48%]">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col lg:gap-[17.632px] md:gap-[10px] sm:gap-[14px] items-start leading-[0] relative shrink-0 w-full">
                <div className="flex flex-col justify-center not-italic relative shrink-0 lg:text-[40px] font-[600] md:text-[25px] sm:text-[30px] text-[20px] text-black w-full">
                  <p className="leading-[44.08px]">Our Journey</p>
                </div>
                <div className="grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="subtext">
                  <div className="col-1 flex flex-col flex-wrap justify-center ml-0 mt-0 not-italic relative row-1 lg:text-[20px] md:text-[16px] sm:text-[17px] text-[12px] text-black w-full">
                    <p className="leading-[26.448px]">We started with a simple idea: serve shawarma that people genuinely crave — fresh, flavorful, and made right.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <div className="bg-[#fded8b] relative rounded-[16px] shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start p-[22px] relative size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 w-full">
                    <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center not-italic relative shrink-0 lg:text-[24px] md:text-[20px] sm:text-[18px] text-[15px] font-[600] text-black w-full">
                      <p className="sm:leading-[normal] leading-[3px]">At First</p>
                    </div>
                    <div className="grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="subtext">
                      <div className="col-1 flex flex-col font-['Poppins:Regular',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 lg:text-[16px] font-[500] md:text-[14px] sm:text-[15px] text-[13px] text-black w-full">
                        <p className="sm:leading-[26.448px] leading-[20px]">It began with a single outlet in Lahore, focused on authentic taste, quality ingredients, and winning trust—one wrap at a time.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative rounded-[16px] shrink-0 w-full min-h-[150px]">
                <Image 
                  alt="Shawarma background" 
                  className="object-cover rounded-[16px]" 
                  src={imgOurJourney1}
                  fill
                />
                <div className="relative z-10 content-stretch flex flex-col items-start p-[22px] size-full">
                  <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 w-full">
                    <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center not-italic relative shrink-0 lg:text-[24px] md:text-[20px] sm:text-[18px] text-[15px] font-[600] text-white w-full">
                      <p className="sm:leading-[normal] leading-[3px]">At the Moment</p>
                    </div>
                    <div className="grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full" data-name="subtext">
                      <div className="col-1 flex flex-col font-['Poppins:Regular',sans-serif] justify-center ml-0 mt-0 not-italic relative row-1 lg:text-[16px] font-[500] md:text-[14px] sm:text-[15px] text-[13px] text-white w-full">
                        <p className="sm:leading-[26.448px] leading-[20px]">Now proudly serving across four branches in Lahore, Shawarma Stop has become a go-to name for bold flavors, generous portions, and consistent quality — without compromising on taste.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="content-stretch flex gap-[21.333px] items-center relative shrink-0">
              <div className="relative shrink-0 lg:size-[64px] md:size-[50px] sm:size-[40px] size-[30px]">
                <svg 
                  className={`${isFirst ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} absolute block inset-0 size-full`} 
                  fill="none" 
                  preserveAspectRatio="none" 
                  viewBox="0 0 64 64" 
                  onClick={prevSlide}
                >
                  <g id="Group 39241">
                    <circle cx="32" cy="32" id="Ellipse 1" r="31" stroke="#F95233" strokeWidth="2" />
                    <path d={svgPaths.p1798fb00} fill="#F95233" id="Vector" stroke="#F95233" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
              <button 
                className={`${isLast ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} block relative shrink-0 lg:size-[64px] md:size-[50px] sm:size-[40px] size-[30px]`} 
                onClick={nextSlide} 
                disabled={isLast}
              >
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <g id="Group 39240">
                    <circle cx="32" cy="32" id="Ellipse 1" r="31" stroke="#F95233" strokeWidth="2" />
                    <path d={svgPaths.p298e5180} fill="#F95233" id="Vector" stroke="#F95233" strokeWidth="1.33333" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BrandQuote />
    </>
  );
}