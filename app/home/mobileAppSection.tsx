'use client';
import Image from 'next/image';
import Link from 'next/link';
// In images ke paths ko apne folder structure ke mutabiq adjust kar lein
import mobileMockup from '../../images/home-mobileSection/hand-holding-phone.png';
import googlePlay from '../../images/home-mobileSection/google-play.png';
import appStore from '../../images/home-mobileSection/app-store.png'
import mobilesm from '../../images/home-mobileSection/mobilesm.png'
import FaqSection from './faqSection';

export default function MobileAppSection() {
  return (
    <>
    <section className="max-w-[1360px] mx-auto px-6 md:pb-3 pt-16 md:pt-[140px] flex flex-col md:flex-row items-center justify-between gap-1 overflow-hidden">
      
      {/* Left Side: Mobile Mockup & Decorative Circles */}
      <div className="flex-1 relative flex justify-center lg:justify-start">
        {/* Background Decorative Circles */}
        <div className="absolute top-1/2 left-1/2 lg:left-1/3 -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-[2px] border-orange-200 rounded-full opacity-50 animate-pulse" />
        </div>

        {/* The Actual Phone Image */}
        <div className="relative z-10">
          <Image 
            src={mobileMockup} 
            alt="App Preview" 
            priority
            className="object-contain lg:w-[487px] md:w-[487px]  md:block hidden"
          />
          <Image 
            src={mobilesm} 
            alt="App Preview" 
            priority
            className="object-contain lg:w-[487px] md:w-[487px] md:hidden block"
          />
        </div>
        {/* </div> */}
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 pt-8 text-center lg:text-left">
        <div className="space-y-4 font-sans">
          <h2 className="lg:text-[44px] md:text-[33px] sm:text-[27px] text-[23px] font-[600] text-[#000000] lg:leading-[60px] md:leading-[48px] sm:leading-[36px] leading-[27px] tracking-tight md:text-start sm:text-center text-start">
            Download Our Mobile App
            <br /> Its Very Simple & Easy
          </h2>
          <p className="text-black font-sans leading-relaxed md:max-w-[450px] max-w-[390px] text-start lg:text-[18px] md:text-[14px] sm:text-[17px] text-[15px]">
            Our mobile app is now available on Android and iOS—making it easier 
            than ever to order, track, and enjoy your favorite Meal.
          </p> 
        </div>

        {/* App Store Buttons */}
        <div className="md:space-y-3 text-start text-center">
          <h3 className="text-2xl font-bold md:mt-7 sm:mt-4 sm:mb-4 mt-6 mb-4">Get the App</h3>
          <div className="flex flex-wrap justify-center justify-start gap-4">
            <Link href="#" className="transition-transform ">
              <Image 
                src={googlePlay} 
                alt="Get it on Google Play" 
                // width={180} 
                // height={54} 
                className="h-auto md:w-[160px] lg:w-[180px] w-[150px]"
              />
            </Link>
            <Link href="#" className="transition-transform ">
              <Image 
                src={appStore} 
                alt="Download on the App Store" 
                // width={180} 
                // height={54} 
                className="h-auto md:w-[160px] lg:w-[180px] w-[150px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
    <FaqSection />
    </>
  );
}