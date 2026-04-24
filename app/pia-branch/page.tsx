 'use client';

import { useState } from "react";
import Image from "next/image";
import piabrach from '../../images/lakecity/piabrach.png';
import { Poppins } from 'next/font/google';
import Main from "../lake-city/components/main";
import Shawarmastop from '../../images/lakecity/Shawarmastop.png'
import SectionHeader from "../home/components/sectionHeader";
import props from '../../images/home-mainSection/props.png';
import img1 from '../../images/lakecity/img1.png'
import smImage from '../../images/lakecity/smImage.png'
import CallToAction from "../home/components/callToAction";
import FastDelivery from '../../images/home-mainSection/FastDelivery.png'
import QualityFood from '../../images/home-mainSection/QualityFood.png'
import CashbyHand from '../../images/home-mainSection/CashbyHand.png'
import { MapPin } from "lucide-react";
import { Clock3, Phone } from "lucide-react";
import Footer from "../home/footer";

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

export default function PiaBranchPage() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleOpenMap = () => {
    setIsButtonActive((prev) => !prev);
    window.open("https://maps.app.goo.gl/2nHXdiKpooSEkcqT7", "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Image src={piabrach} alt="Pia Branch" className="h-full w-full object-contain" priority />
      <div className={`${poppins.className} mx-auto flex max-w-[840px] flex-col items-center px-4`}>
        <Main
          logo={Shawarmastop}
          title="PIA Housing Gets a Taste Upgrade"
          description="Shawarma Stop proudly opens its branch in PIA Housing Society, bringing its popular menu closer to the community. With fresh ingredients, bold flavors, and a friendly environment, this outlet is ideal for everyday cravings and family meals."
          secondParagraph="Experience quick service and consistent quality, making every visit a delicious and memorable one."
          ctaLabel="Order Now"
          ctaHref="/order"
          openingHoursTitle="Opening Hours"
          openingHoursText="Monday - Sunday: 12: 30 PM - 2:00 AM"
          phoneTitle="Phone Number"
          phoneText="For Order call at: 0314 4445074"
        />
      </div>
      <SectionHeader
        badgeImage={props}
        title="Our Food Gallery"
        description={
          < div className={`${poppins.className} font-[400] text-[16px] leading-[19.8px] font-[200] text-black max-w-[780px] px-4`}>
            <p className="font-[200]">Explore our Gallery and discover our freshly made favorites. For more delicious updates, follow us on Instagram{" "}
              <span className="text-[#FF5733] font-[500]">
                <a href="https://www.instagram.com/shawarmastop/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @shawarmastop.
                </a>
              </span>
            </p>
          </div>
        }
      />
      <div className='mx-auto flex max-w-[1387px] flex-col items-center px-4'>
        <Image src={img1} alt='img1' className='hidden md:block' />
        <Image src={smImage} alt='img1' className='block md:hidden mt-8' />
        <CallToAction
          badges={[
            { image: FastDelivery, alt: 'Fast Delivery', label: 'Fast Delivery' },
            { image: QualityFood, alt: 'Quality Food', label: 'Quality Food' },
            { image: CashbyHand, alt: 'Cash By Hand', label: 'Cash By Hand' },
          ]}
          buttonText="View more on Instagram"
          buttonHref="https://www.instagram.com/shawarmastop/"
        />
      </div>
       <section className={`${poppins.className} mx-auto md:mt-10 mb-30 w-full max-w-[1387px] m-auto overflow-hidden rounded-[12px]`}>
        <div className="md:mt-40 mb-10">
        <SectionHeader
         badgeImage={props}
          title="Get Directions to Great Taste"
          description={
            <div className={`${poppins.className} max-w-[780px] px-4 text-[16px] leading-[19.8px] font-[200] text-black`}>
              <p className="font-[200]">Navigate your way to bold flavors and fresh bites.{" "}
              </p>
              <button
                type="button"
                onClick={handleOpenMap}
                className={`mt-4 rounded-full md:px-9 px-17 md:py-4 py-2.5 md:text-[16px] text-[12px] cursor-pointer text-white transition-colors ${
                  isButtonActive ? "bg-[#F95233]" : "bg-[#F95233]"
                }`}
              >
                Open in Google Maps
              </button>
            </div>
          } 
        />
        </div>
      <div className="relative md:h-[520px] h-[400px] lg:max-w-[1387px] m-auto md:max-w-[840px] space-x-4 ">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.1796116144274!2d74.34131979678956!3d31.519226500000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905006dba2791%3A0xd278a1aaaa926721!2sShawarma%20stop!5e0!3m2!1sen!2s!4v1776935315076!5m2!1sen!2s"
          width="90%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="h-full w-full"
        />

        <div className="absolute bottom-0 left-0 right-0 bg-[#D81B1B] px-4 py-5 md:px-6 ">
          <div className="flex items-center justify-center gap-3 text-white ">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
              <MapPin className="h-4 w-4 text-[#F95233] " strokeWidth={2.5} />
            </span>
            <p className="md:text-[16px] text-[14px] font-[400]">
              <span className="font-[600] ">Address: <br className="block md:hidden" /></span> Block K, Block D, 13-B, 1 Service Rd, Gulberg III, Lahore
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}
