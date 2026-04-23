'use client';
import Main from "./home/main";
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
  { id: 1, img: FastDelivery, title: "Fast Delivery" },
  { id: 2, img: CashbyHand, title: "Cash on Delivery" },
  { id: 3, img: ProfessionalChef, title: "Professional Chef" },
  { id: 4, img: QualityFood, title: "Quality Food" },
  { id: 5, img: QualityFood, title: "Quality Food" },
  { id: 6, img: FastDelivery, title: "Fast Delivery" },
];

export default function Home() {
  return (
    <>
      {/* Hidden on sm and md, visible on lg and up */}
      <section className={`${poppins.className} bg-[#F95233] w-full lg:h-[700px] md:h-[400px] relative`}>
        <div className="hidden md:block">
          <Image
            src={img}
            alt="Hero"
            fill
            priority
            className="object-contain " // This ensures the image is NEVER cropped
            quality={100}
          />
        </div>
        <div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <div className="sm:mb-[100px] mb-[50px] lg:mb-[120px] md:mb-[30px]">
              <h1 className="text-white text-center lg:text-[84px] md:text-[44px] sm:text-[60px] text-[32px] font-bold mb-[15px] lg:mb-[30px] md:mb-[10px] leading-[1.1]">
                The Best <br /> Shawarma Bite
              </h1>
              <p className="text-white text-center lg:text-[21px] md:text-[18px] md:font-[500] sm:text-[20px] text-[14px] font-[500] max-w-[418px] lg:max-w-[658px] md:max-w-[520px] sm:max-w-[520px] mb-[30px] sm:mb-[40px]">
                Gather your friends and family and enjoy the best Shawarma in town. Freshly made and delivered hot!
              </p>
              <div className="flex justify-center">
                <Link href="/order">
                  <button className="bg-[#FDED8B] text-[#F95233] sm:text-[20px] text-[14px] font-[500] sm:px-10 px-4 sm:py-3 py-2 rounded-full">
                    View Our Menu
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <Image src={sm} alt="sm" width={1000} height={1000} className="w-full bg-cover md:hidden" />
        </div>
        <div className="absolute bottom-[-20px] left-0 w-full z-20 overflow-hidden">
          <div className="relative w-full h-auto">
            <Image
              src={Vector}
              alt="Vector Bottom"
              className="w-full h-auto block rotate-180"
              priority
            />

            {/* Features Overlay */}
            <div className="absolute inset-0 flex items-center">
              <motion.div
                className="flex gap-12 whitespace-nowrap"
                animate={{
                  x: [0, -1000], // Yeh value aapke content ki width par depend karti hai
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20, // Speed control (jitna zyada number, utni slow animation)
                    ease: "linear",
                  },
                }}
              >
                {deliveryFeatures.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 px-4">
                    <Image
                      src={item.img}
                      alt={item.title}
                      className="sm:w-6 sm:h-6 w-4 h-4 md:w-9 md:h-9 object-contain"
                    />
                    <p className="sm:text-sm text-[10px] md:text-[23px] md:font-[600] font-[500] text-gray-800  tracking-wide">
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
    </>
  );
}