import Image, { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google'; // Assuming Poppins is configured

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

interface SectionHeaderProps {
    badgeImage: StaticImageData;
    badgeAlt?: string;
    title: string;
    description: ReactNode;
}

export default function SectionHeader({
    badgeImage,
    badgeAlt = 'section badge',
    title,
    description,
}: SectionHeaderProps) {
    return (
        /* Replaced md:pt-[73px] with a container style matching the grid's bottom margin consistency */
        <div className="flex flex-col items-center text-center justify-center md:pt-[73px] md:mb-12 mb-7 mt-[50px] md:mt-0">
            
            {/* Badge Image - Consistent with grid leading/shrink-0 behavior */}
            <div className="flex justify-center w-full mb-2 shrink-0 pt-[25px] md:pt-0">
                <Image
                    src={badgeImage}
                    alt={badgeAlt}
                    className="md:w-[164px] md:h-[30px] w-[120px]  object-contain"
                />
            </div>

            {/* Title - Using Poppins 700 and Black color from orderMainSection */}
            <h2 className={`${poppins.className} text-black md:font-[700] lg:font-[600] font-[600] md:text-[44px] text-[20px] leading-[normal] md:mb-[16px] mb-[10px]`}>
                {title}
            </h2>

            {/* Description - Using Poppins 400 and the 15px/16px sizing from the grid items */}
            <div className={`${poppins.className} font-[400] md:text-[16px] text-[13px] leading-[19.8px] text-black max-w-[690px] px-4`}>
                {description}
            </div>
        </div>
    );
}