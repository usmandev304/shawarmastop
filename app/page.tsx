'use client';
import Main from "./home/main";
import Location from "./location/location";
import img from "../images/heroSection/img.png"
import Image from "next/image";
import sm from "../images/heroSection/sm.png"
import Vector from "../images/heroSection/Vector.png"
import Link from "next/link";
import { Poppins } from 'next/font/google';
import FastDelivery from "../images/heroSection/FastDelivery.png"
import CashbyHand from "../images/heroSection/CashbyHand.png"
import ProfessionalChef from "../images/heroSection/ProfessionalChef.png"
import QualityFood from "../images/heroSection/QualityFood.png"
import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const deliveryFeatures = [
  { id: 5, img: QualityFood, title: "Quality Food" },
  { id: 1, img: FastDelivery, title: "Fast Delivery" },
  { id: 2, img: CashbyHand, title: "Cash by Hand" },
  { id: 3, img: ProfessionalChef, title: "Professional Chef" },
];

export default function Home() {
  return (
    <>
      {/* Hidden on sm and md, visible on lg and up */}
      <section className={`${poppins.className} bg-[#F95233] w-full lg:h-[520px] xl:h-[690px] relative`}>
        <div className="hidden lg:block">
          <Image
            src={img}
            alt="Hero"
            fill
            priority
            className="object-contain " 
            quality={100}
          />
        </div>
        <div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pb-[56px] sm:pb-[72px] lg:pb-[88px] xl:pb-[130px]">
            <div>
              <h1 className={`${poppins.className} text-white text-center sm:text-[46px] md:text-[52px] lg:text-[50px] xl:text-[5.7vw] text-[32px] font-[700] mb-[15px] lg:mb-[12px] md:mb-[10px] leading-[1.1]`}>
                The Best <br /> Shawarma Bite
              </h1>
              <p className={`${poppins.className} text-white text-center sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px] md:font-[400] text-[14px] font-[500] max-w-[418px] md:max-w-[500px] lg:max-w-[580px] xl:max-w-[668px] sm:max-w-[460px] mb-[24px] sm:mb-[40px]`}>
                Gather your friends and family and enjoy the best Shawarma in town. Freshly made and delivered hot!
              </p>
              <div className="flex justify-center">
                <Link href="/order">
                  <button className="bg-[#FDED8B] text-[#F95233] sm:text-[20px] text-[14px] font-[500] px-5 lg:px-12 xl:px-16 sm:py-3.5 py-2 cursor-pointer rounded-full">
                    View Our Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Image src={sm} alt="sm" width={1000} height={1000} className="w-full bg-cover lg:hidden" />
        </div>
        <div className="absolute bottom-[-20px] lg:bottom-[-14px] xl:bottom-[-20px] left-0 w-full z-20 overflow-hidden">
          <div className="relative w-full h-auto">
            <Image
              src={Vector}
              alt="Vector Bottom"
              className="w-full h-auto block rotate-180"
              priority
            />

            <div className="absolute inset-0 flex items-center overflow-hidden">
              <motion.div
                className="flex whitespace-nowrap"
                animate={{
                  x: ["0%", "-50%"], 
                }}
                transition={{
                  ease: "linear",
                  duration: 25, 
                  repeat: Infinity,
                }}
              >
              
                {[...deliveryFeatures, ...deliveryFeatures].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 px-6 sm:px-10 lg:px-20" // Consistent spacing is key
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-9 lg:h-9 object-contain"
                    />
                    <p className="text-[10px] sm:text-xs md:text-sm lg:text-[20px] xl:text-[23px] md:font-[500] font-[500] text-gray-800 tracking-wide">
                      {item.title}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Main />
      <Location />
    </>
  );
}