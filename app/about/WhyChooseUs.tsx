import SectionHeader from "../home/components/sectionHeader";
import props from '../../images/home-mainSection/props.png';
import img4 from '../../images/about/img4.png';
import Image from "next/image";
import ReviewSlider from "./ReviewSlider";

// Placeholder imports for your new images - update these paths
import growthImg from '../../images/about/img5.png';
import chefImg from '../../images/about/img6.png';
import deliveryImg from '../../images/about/img7.png';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

const features = [
    { id: 1, text: "Easy to Order" },
    { id: 2, text: "Fresh Ingredients" },
    { id: 3, text: "Growth Opportunities" },
    { id: 4, text: "Team Culture" },
];

const details = [
    {
        id: 1,
        title: "Growth Opportunity",
        description: "We celebrate our team's hard work by rewarding dedication with gifts and appreciation. At Shawarma Stop, every milestone is shared.",
        image: growthImg
    },
    {
        id: 2,
        title: "Professional Chef",
        description: "Our professional chefs prepare every shawarma with skill, precision, and care. From marination to the final cut, quality is never compromised.",
        image: chefImg
    },
    {
        id: 3,
        title: "Fast Delivery",
        description: "We deliver within 7KM of each branch, ensuring your favorite shawarma arrives fresh, hot, and always just a call away.",
        image: deliveryImg
    }
];

export default function WhyChooseUs() {
    return (
        <>
            <section className={`md:py-12 lg:py-9 px-4 max-w-[1320px] mx-auto ${poppins.className}`}>
                <div className="[&>div]:mt-0 [&>section]:pt-0 [&_h2]:max-w-[930px] [&_h2]:mx-auto [&_h2]:text-center [&_h2]:mb-1">
                    <SectionHeader
                        badgeImage={props} // Keep this as 'props' since your import named it that
                        badgeAlt="Shawarma Stop Icon" // Required prop
                        title="What Makes Shawarma Stop the Best for Customers & Employees"
                        description="" // Required prop - leave as empty string if you don't want text here
                    />
                </div>
                {/* Pill Buttons Container */}
                <div className="mt-10 w-full flex justify-center md:block hidden">
                    <div className="flex flex-wrap justify-center gap-7 max-w-[1300px] w-full">
                        {features.map((feature) => (
                            <div
                                key={feature.id}
                                className="flex items-center gap-3 px-8 lg:py-3.5 md:py-3 border border-gray-300 rounded-full bg-white"
                            >
                                <div className="flex items-center justify-center w-10 h-10 bg-[#FF5733] rounded-full">
                                    <Image src={img4} alt="" className="lg:w-48px md:lg-w-42 " />
                                </div>
                                <span className="text-[#363635] lg:text-[20px] md:text-[18px] font-medium whitespace-nowrap">
                                    {feature.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Cards Grid */}
                <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5">
                    {details.map((item) => (
                        <div key={item.id} className="flex flex-col items-center text-center">
                            {/* Image Container */}
                            <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Step Number */}
                            <div className="flex items-center justify-center w-13 h-13 lg:w-18 lg:h-18 md:w-15 md:h-15 sm:w-12 sm:h-12 border-2 border-[#FF5733] rounded-full mb-4">
                                <span className="text-[#FF5733] text-[21px] font-bold lg:text-[32px] md:text-[28px] sm:text-[24px]">{item.id}</span>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-[#FF5733] text-[20px] lg:text-2xl md:text-[20px] sm:text-[18px] font-bold mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[#363635] lg:text-[16px] md:text-[15px] text-[14px] leading-relaxed max-w-[410px]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <ReviewSlider />
        </>
    );
}