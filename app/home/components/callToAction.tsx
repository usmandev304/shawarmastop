'use client';
import { Fragment } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

interface Badge {
    image: StaticImageData;
    alt: string;
    label: string;
}

interface CallToActionProps {
    badges: Badge[];
    buttonText: string;
    buttonHref: string;
}

export default function CallToAction({
    badges,
    buttonText,
    buttonHref,
}: CallToActionProps) {
    return (
        <div className={`flex w-full flex-col items-center gap-3 px-0 sm:px-[40px] md:mt-[58px] md:gap-2 md:px-0 ${poppins.className}`}>
            {/* Feature Badges — sm only: single row + dividers; below sm & md+: wrap + gaps (current) */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:flex-nowrap sm:gap-0 md:mt-0 mt-[30px] md:flex-wrap md:gap-4">
                {badges.map((badge, index) => (
                    <Fragment key={badge.label}>
                        {index > 0 ? (
                            <span
                                aria-hidden
                                className="hidden h-[18px] w-px shrink-0 bg-[#d0d0d0] sm:block md:hidden"
                            />
                        ) : null}
                        <div className="flex items-center gap-1 sm:gap-2 sm:px-2 md:gap-1 md:px-0">
                            <Image
                                src={badge.image}
                                alt={badge.alt}
                                className="h-4 w-[22px] object-contain sm:h-[16px] sm:w-[25px] md:h-[16px] md:w-[25px]"
                            />
                            <span className="text-[10px] font-[500] text-[#171717] sm:text-[12px] md:text-[12px]">
                                {badge.label}
                            </span>
                        </div>
                    </Fragment>
                ))}
            </div>

            {/* CTA Button — sm: wide centered pill; md+: original wide padding */}
            <Link href={buttonHref} className="flex w-full justify-center md:block md:w-auto md:max-w-[700px] max-w-[400px] sm:max-w-[610px] max-w-[500px] md:p-0 p-2.5 pt-0">
                <button className="w-full max-w-full cursor-pointer rounded-full bg-[#FF5733] px-6 py-[15px] text-center text-[15px] font-[500] text-white transition-colors hover:bg-[#E64B29] sm:max-w-xl md:w-[500px] md:max-w-[700px] md:px-[10px] md:text-[16px]">
                    {buttonText}
                </button>
            </Link>
        </div>
    );
}
