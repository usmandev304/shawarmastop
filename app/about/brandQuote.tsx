import React from 'react';
import Image from "next/image";
import imgOurJourney1 from "../../images/about/img3.png";
import logo from '../../images/logo/logo.png'
import WhyChooseUs from './WhyChooseUs';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export default function BrandQuote() {
  return (
    <>
   <section className={`${poppins.className} relative md:h-[620px] sm:h-[400px] h-[300px] flex items-center justify-center font-sans px-6 overflow-hidden md:mb-[20px] md:mt-0 mt-[55px]`}>
      
      {/* Background Image Replacement */}
     <div className="absolute inset-0 z-0">
  <Image
    src={imgOurJourney1}
    alt="Our Journey Background"
    fill
    priority
    className="bg-cover"
  />
</div>
      <div className="text-center max-w-4xl mx-auto space-y-4  md:space-y-9 sm:space-y-[15px]  relative z-10">
        
        {/* Brand Logo */}
        <div className='flex justify-center'>
          <Image src={logo} alt="Logo" width={386} height={64} className="max-[170px]  max-w-[280px] object-contain lg:max-w-[400px] md:max-w-[386px] sm:max-w-[280px] "/>
        </div>

        {/* Main Brand Quote */}
        <div className='sm:mb-6 mb-3'>
          <h2 className="px-1 text-[20px] font-semibold leading-tight text-white drop-shadow-lg sm:text-3xl md:text-5xl lg:text-[55px]">
            “Every meal is a chance to experience the world’s flavors, one bite at a time.”
          </h2>
        </div>

        {/* Tagline with Smiley */}
        <div>
          <p className="text-white text-[15px] sm:text-[24px] font-medium drop-shadow-md">
            Shawarma That Stops You :)
          </p>
        </div>
      </div>
    </section>
        <WhyChooseUs />
        </>
  );
}