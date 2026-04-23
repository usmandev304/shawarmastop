import Image from "next/image";
import Head from "./header/head/head";
import img1 from "../images/heroSection/img1.png"
import img2 from "../images/heroSection/img2.png"
import img3 from "../images/heroSection/img3.png"
import img5 from "../images/heroSection/img5.png"
import img6 from "../images/heroSection/img6.png"
import img4 from "../images/heroSection/img4.png"
import mein1 from "../images/heroSection/mein1.png"
import Vector from '../images/heroSection/Vector.png'
import QualityFood from '../images/heroSection/QualityFood.png'
import FastDelivery from "../images/heroSection/FastDelivery.png"
import CashbyHand from "../images/heroSection/CashbyHand.png"
import ProfessionalChef from "../images/heroSection/ProfessionalChef.png"
import Main from "./home/main";
import Link from "next/link";


export default function Home() {
  const features = [
    { id: 1, img: QualityFood, text: "Quality Food" },
    { id: 2, img: FastDelivery, text: "Fast Delivery" },
    { id: 3, img: CashbyHand, text: "Cash By Hand" },
    { id: 4, img: ProfessionalChef, text: "Professional Chef" },
  ];
  return (
    <>
      <div className="min-h-screen bg-white">
        <Head />
     <section className="bg-[#F95233] relative overflow-hidden">
          <h1
            className="md:text-[84px] md:font-bold md:text-white md:text-center md:pt-[50px] md:leading-[89px]">
            The Best <br></br> Shawarma Bite
          </h1>
          <p
            className="md:text-center text-[#FFFFFF] pt-[15px] md:text-[20px] md:mb-[-10px]">
            Gather your friends and family and enjoy the best Shawarma in  <br />town. Freshly made and delivered hot!</p>
          <div className="flex justify-center relative top-10 right-[120px]">
            <Link href="/order">
              <button className="absolute  w-[257px] md:h-[60px] rounded-4xl z-40 bg-[#FDED8B] text-[#F95233] md:text-[20px] md:font-[500] font-sans px-4 py-2 ">
                View Our Menu
              </button>
            </Link>
          </div>
          <div>
            <Image src={img1} alt="Img 1" className="md:absolute lg:right-[384px] lg:top-[59px] lg:w-[147px]" />
            <Image src={img2} alt="Img 2" className="md:absolute lg:right-[254px] lg:top-[192px] lg:w-[117px]" />
            <Image src={img3} alt="Img 3" className="md:absolute lg:right-[384px] lg:top-[369px] lg:w-[117px]" />
            <Image src={img5} alt="Img 5" className="md:absolute lg:left-[420px] lg:top-[50px] lg:w-[117]" />
            <Image src={img6} alt="Img 6" className="md:absolute lg:left-[260px] lg:top-[210px] lg:w-[117px]" />
            <Image src={img4} alt="Img 4" className="md:absolute lg:left-[330px] lg:top-[400px] lg:w-[137px]" />
          </div>
          <div className="md:flex md:justify-center">
            <Image src={mein1} alt="mein1" className="md:w-[578px] h-[275px] " />
          </div>

        </section>
        <div className="relative w-full">
          {/* Background Vector (Cloudy Shape) */}
          <div className="absolute inset-0 z-0">
            <Image
              src={Vector}
              alt="background"
              className="w-full h-full  md:-mt-3"
            />
          </div>

          {/* Content Layer */}
          {/* py-8 ko kam karke py-4 ya py-2 karne se bhi space kam ho jayegi */}
          <div className="relative z-10 flex flex-wrap justify-around items-center  md:py-3 md:pb-10 gap-1 md:px-[40px]">
            {features.map((item) => (
              <div key={item.id} className="flex items-center space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.text}
                    className="w-8 h-8 md:w-[32px] md:h-[40px] object-contain"
                  />
                </div>
                {/* Text */}
                <span className="text-gray-900 md:font-[500] font-sans md:text-[20px] whitespace-nowrap">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Main />
    </>
  );
}
