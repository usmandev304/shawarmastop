import Image from "next/image";
import orderHeader from "../../../images/orderHeader/img.png";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export default function OrderDefaultHero() {
  return (
    <section className={`relative w-full overflow-hidden bg-[#f95233] `}>
      <div className="mx-auto flex w-full max-w-[1470px] flex-col flex-col-reverse items-center gap-8 px-4 py-10 md:flex-row md:items-center md:justify-between md:gap-12 md:px-10 md:py-16 lg:p-[60px]">
        <div className="w-full min-w-0 text-white md:max-w-[min(100%,695px)]">
          <p className="font-sans text-lg font-[400] capitalize md:text-[24px] md:font-[600]">
            Our Menu
          </p>
          <p className="mt-4 break-words font-sans text-[clamp(1.75rem,6vw,5rem)] font-[700] capitalize leading-[50px] tracking-tighter md:mt-2 lg:mt-3.5 md:leading-[70px] md:font-[700] lg:leading-[100px] tracking-wide lg:text-[4.8vw]">
            Tasty Treats for Every Craving
          </p>
          <p className="mt-2 max-w-[590px]  text-base font-[300] leading-[24px] md:mt-4 md:max-w-[590px] md:text-[18px] tracking-wide lg:max-w-[635px] lg:text-[19px]">
            Explore a menu packed with bold flavors and freshly prepared favorites. From
            quick bites to full meals, there&apos;s something delicious for everyone.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-[569px] justify-end md:mx-0">
          <Image
            src={orderHeader}
            alt="Order — Shawarma and sides"
            width={569}
            height={541}
            className="h-auto w-full object-contain md:w-[45vw] lg:w-[39.5vw]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
