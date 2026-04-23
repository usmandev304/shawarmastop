'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import SectionHeader from './components/sectionHeader';
import CallToAction from './components/callToAction';
import Products from './components/products';
import props from '../../images/home-mainSection/props.png'
import img1 from '../../images/home-mainSection/img1.png'
import img2 from '../../images/home-mainSection/img2.png'
import img3 from '../../images/home-mainSection/img3.png'
import img4 from '../../images/home-mainSection/img4.png'
import FastDelivery from '../../images/home-mainSection/FastDelivery.png'
import QualityFood from '../../images/home-mainSection/QualityFood.png'
import CashbyHand from '../../images/home-mainSection/CashbyHand.png'
import WhyChooseUs from './whyChooseUs';

const inter = Inter({ subsets: ['latin'] });

const products = [
    {
        id: 1,
        title: "House Special Shawarma",
        description: "Our signature chicken shawarma with garlic sauce and pickles in a wrap.",
        price: "528",
        badge: "Regular",
        image: img1 // Using props as a placeholder
    },
    {
        id: 2,
        title: "Farrouj Meshwi",
        description: "Grilled whole chicken, marinated in Middle Eastern spices, served with garlic sauce and rice.",
        price: "1650",
        badge: "Half",
        image: img2
    },
    {
        id: 3,
        title: "OG Crispy Shawarma",
        description: "Chicken shawarma with garlic sauce and crispy bread, marinated in aromatic spices.",
        price: "950",
        badge: "Regular",
        image: img3
    },
    {
        id: 4,
        title: "Lahori Shawarma Platter",
        description: "Spicy Lahori-style shawarma served with pita bread and chutney.",
        price: "990",
        badge: "Regular",
        image: img4
    }
];


export default function Main() {
    return (
        <>
            <div className="flex flex-col items-center text-center justify-center md:pb-8">
                {/* SectionHeader — dynamic data via props, reusable in any future file */}
                <SectionHeader
                    badgeImage={props}
                    badgeAlt="Customers Favorite Picks badge"
                    title="Customers' Favorite Picks"
                    description="From family-sized deals to solo slices, find the perfect offer for your cravings."
                />

                {/* Product Grid */}
                <Products items={products} />

                {/* CallToAction — dynamic badges & button via props, reusable in any future file */}
                <CallToAction
                    badges={[
                        { image: FastDelivery, alt: 'Fast Delivery', label: 'Fast Delivery' },
                        { image: QualityFood,  alt: 'Quality Food',  label: 'Quality Food'  },
                        { image: CashbyHand,   alt: 'Cash By Hand',  label: 'Cash By Hand'  },
                    ]}
                    buttonText="View All Food"
                    buttonHref="/order"
                />
            </div>
            <WhyChooseUs />
        </>
    )
}