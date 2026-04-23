 'use client';

import { useState } from "react";
import { MapPin } from "lucide-react";
import SectionHeader from "../home/components/sectionHeader";
import props from '../../images/home-mainSection/props.png';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

export default function GoogleMap() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleOpenMap = () => {
    setIsButtonActive((prev) => !prev);
    window.open("https://maps.app.goo.gl/FgNoG4fPpnx8ShZL8", "_blank", "noopener,noreferrer");
  };

  return (
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54439.74863311697!2d74.29020081818965!3d31.483369687034102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905006dba2791%3A0xd278a1aaaa926721!2sShawarma%20stop!5e0!3m2!1sen!2s!4v1776927940849!5m2!1sen!2s"
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
  );
}