import Image from 'next/image';
import SectionHeader from "./components/sectionHeader";
import props from '../../images/home-mainSection/props.png'
import img1 from '../../images/home-family/product1.png'
import img2 from '../../images/home-family/product2.png'
import img3 from '../../images/home-family/product3.png'
import img4 from '../../images/home-family/product4.png'
import bgImg from '../../images/home-family/bgImg.png'
import Products from './components/products';
import MobileAppSection from './mobileAppSection';
import CallToAction from './components/callToAction';
import FastDelivery from '../../images/home-mainSection/FastDelivery.png'
import QualityFood from '../../images/home-mainSection/QualityFood.png'
import CashbyHand from '../../images/home-mainSection/CashbyHand.png'

const products = [
    {
        id: 1,
        title: "Mix Platter for 3",
        description: "2 Regular Chicken Shawarmas, fries, 10 cubes of Shish Tawook, Half Farouj Meshwi, 3 Kebabs...",
        price: "4180",
        badge: "Family Deal",
        image: img1 // Using props as a placeholder
    },
    {
        id: 2,
        title: "Shish Tawook Platter",
        description: "Grilled marinated chicken skewers, served with rice and garlic sauce.",
        price: "1650",
        badge: "Family Deal",
        image: img2
    },
    {
        id: 3,
        title: "Mix Platter for 5",
        description: "3 Chicken Shawarmas, fries, 14 cubes of Shish Tawook, Full Farouj Meshwi, 4 Kafta Kebabs, rice..",
        price: "8030",
        badge: "Family Deal",
        image: img3
    },
    {
        id: 4,
        title: "Shawarma Arabi",
        description: "Shawarma rolled in flatbread, sliced and served with garlic sauce.",
        price: "1155",
        badge: "Family Deal",
        image: img4
    }
];

export default function FamilyMealSpecials() {
    return (
        <>
            <section className="relative text-white">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 pb-[200px] ">
                    <Image
                        src={bgImg}
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 [&_img]:brightness-0 [&_img]:invert ">
                    <SectionHeader className="md:mb-1 mb-0"
                        badgeImage={props}
                        title={<span className='text-white font-[600]'>Family Meal Specials</span>}
                        description={<span className="text-white font-[300] text-[14px] md:text-[17px] md:whitespace-nowrap">Delicious family-sized meals perfect for sharing, saving, and enjoying together.</span>}
                    />
                </div>
                <div className="relative z-10">
                    <div className="flex justify-center md:pb-[90px]">
                        <Products items={products} />
                    </div>
                    <div className="[&_span]:!text-white [&_img]:brightness-0 [&_img]:invert [&_button]:!bg-[#FFFFFF] [&_button]:!text-[#F95233] pb-[30px] md:hidden">
                    <CallToAction badges={[
                        { image: FastDelivery, alt: 'Fast Delivery', label: 'Fast Delivery' },
                        { image: QualityFood, alt: 'Quality Food', label: 'Quality Food' },
                        { image: CashbyHand, alt: 'Cash By Hand', label: 'Cash By Hand' },
                    ]} buttonText="View All Food" buttonHref="/order" />
                    </div>
                </div>
            </section>
            <MobileAppSection />
        </>
    )
}