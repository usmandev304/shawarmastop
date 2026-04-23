import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Clock3, Phone } from "lucide-react";

type LakeCityMainProps = {
  logo: StaticImageData;
  title: string;
  description: string;
  description2: string;
  ctaLabel: string;
  ctaHref: string;
  openingHoursTitle: string;
  openingHoursText: string;
  phoneTitle: string;
  phoneText: string;
};

export default function Main({
  logo,
  title,
  description,
  description2,
  ctaLabel,
  ctaHref,
  openingHoursTitle,
  openingHoursText,
  phoneTitle,
  phoneText,
}: LakeCityMainProps) {
  return (
    <div className="mt-[30px] flex flex-col items-center justify-center md:mt-[50px] lg:mt-[27px]">
      <Image src={logo} alt="Shawarma Stop" className="lg:h-[155px] md:h-[120px] sm:h-[80px] max-w-[250px] lg:max-w-[690px] md:max-w-[505px] sm:max-w-[350px] object-contain" priority />
      <h3 className="mt-2 text-center md:text-[22px] lg:text-[27px] sm:text-[14px] text-[24px] max-w-[780px]">{title}</h3>
      <p className="mt-4 text-center text-[14px] sm:max-w-[440px] md:max-w-[600px] lg:max-w-[780px] font-[400] leading-relaxed lg:mt-[25px] lg:text-[16px] text-[14px">{description}</p>
      <p className="mt-4 text-center text-[14px] sm:max-w-[440px] md:max-w-[600px] lg:max-w-[680px] font-[400] leading-relaxed lg:mt-[0px] lg:text-[16px]">{description2}</p>
      <div className="mt-7">
        <Link href={ctaHref}>
          <button className="cursor-pointer rounded-full bg-[#F95233] px-14 py-3 text-white">{ctaLabel}</button>
        </Link>
      </div>

      <section className="mt-15 mb-10 w-full max-w-[840px] rounded-[8px] bg-[#F4F2ED] px-5 py-7 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4DEB7]">
              <Phone className="h-5 w-5 text-[#F95233]" strokeWidth={2} />
            </div>
            <div>
              <h4 className="lg:text-[24px] md:text-[20px] text-[16px] leading-none font-[500] text-black">{openingHoursTitle}</h4>
              <p className="mt-2 lg:text-[16px] md:text-[14px] font-[400]  text-[12px] text-[#1E1E1E]">{openingHoursText}</p>
            </div>
          </div>

          <div className="hidden h-[72px] w-px border-l border-dashed border-[#8C8C8C] md:block" />

          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F4DEB7]">
              <Clock3 className="h-5 w-5 text-[#F95233]" strokeWidth={2} />
            </div>
            <div> 
              <h4 className="lg:text-[24px] md:text-[20px]leading-none font-[500] text-[16px] text-black">{phoneTitle}</h4>
              <p className="mt-2 lg:text-[16px] md:text-[14px] font-[200]  text-[12px] text-[#1E1E1E]">{phoneText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}