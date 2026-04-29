'use client';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import img1 from '../../images/home-whychoose/img1.png'; 
import icon1 from '../../images/home-whychoose/icon1.png'; 
import icon2 from '../../images/home-whychoose/icon2.png'; 
import FoodGallery from './foodGallery';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] }); 

const features = [
    {
        id: 1,
        title: 'Authentic Recipes',
        description: 'Our shawarmas are crafted using time-honored recipes that bring you the true taste of the Middle East.',
    },
    {
        id: 2,
        title: 'Fresh, Quality Ingredients',
        description: 'From marinated meats to fresh vegetables and soft flatbreads, we use only the best ingredients.',
    },
    {
        id: 3,
        title: 'Expertly Cooked',
        description: 'Slow-roasted and grilled to perfection for rich flavor and juicy texture in every bite.',
    },
];

export default function WhyChooseUs() {
    return (
        <>
        <section className={`${poppins.className} w-full max-w-[1427px] mx-auto px-4 md:px-10 px-0 md:pt-12 sm:pt-8 pt-12 md:pt-24 lg:mb-[50px] mb-[50px]`}>
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-14 md:gap-10">

                {/* ── Left: Overlapping Images Section ── */}
                {/* INCREASED WIDTH TO 50% */}
                <div className="w-full md:w-[50%] relative flex items-center justify-center">
                    <div className="relative z-10 w-full h-auto">
                        <Image
                            src={img1}
                            alt="Mix Platter"
                            /* REMOVED max-w-[500px] TO LET IT FILL THE CONTAINER */
                            className="w-full lg:w-[690px]  md:w-[590px] md:w-[890px] h-auto rounded-[15px] object-contain"
                            priority
                        />
                    </div>
                </div>

                <div className="w-full md:w-[50%] flex flex-col lg:gap-2.5 md:gap-0 gap-3">
                    <div className="flex items-center md:gap-1">
                        <div className="p-1 rounded-sm">
                            <Image
                                src={icon1}
                                alt="Icon 1"
                                className="md:w-[21px] md:h-[22px] object-center text-white"
                            />
                        </div>
                        <span className="lg:text-[17px] md:text-[14px] font-[600] uppercase text-black">
                            About Shawarma Stop
                        </span>
                    </div>

                    {/* Adjusted line-height for the Heading */}
                    <h2 className="text-3xl lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px] font-[600] font-poppins text-gray-900 leading-tight">
                        Why people Choose us?
                    </h2>

                    <p className="lg:text-[16px] md:text-[14px] font-[400] md:mt-[10px] sm:text-[15px] text-[12px] leading-relaxed max-w-[620px]">
                        ShawarmaStop brings you authentic Middle Eastern flavors with freshly made
                        shawarmas, premium ingredients, and traditional spices—served with bold
                        taste and quality you can trust.
                    </p>

                    {/* Feature List */}
                    <div className="flex flex-col md:gap-6 lg:mt-4 md:mt-2 mt-4 gap-4">
                        {features.map((feature) => (
                            <div key={feature.id} className="flex items-start md:gap-4 gap-2 group">
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                                    <Image
                                        src={icon2}
                                        alt="Icon 2"
                                        className="lg:w-[35px] lg:h-[35px] md:w-[21px] md:h-[21px] w-[23px] h-[23px] object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="lg:text-[19px] md:text-[14px] sm:text-[15px] text-[14px] font-[600]">{feature.title}</h3>
                                    <p className="lg:text-[16px] md:text-[12px] sm:text-[13px] text-[12px] font-[400] mt-1 leading-relaxed max-w-[570px]">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <FoodGallery />
        </>
    );
}