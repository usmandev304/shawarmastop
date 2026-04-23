'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import props from '../../images/home-mainSection/props.png';
import img1 from '../../images/foodGallery/img1.png';
import img2 from '../../images/foodGallery/img2.png';
import img3 from '../../images/foodGallery/img3.png';
import img4 from '../../images/foodGallery/img4.png';
import img5 from '../../images/foodGallery/img5.png';
import img6 from '../../images/foodGallery/img6.png';
import img7 from '../../images/foodGallery/img7.png';
import img8 from '../../images/foodGallery/img8.png';
import img9 from '../../images/foodGallery/img9.png';
import SectionHeader from "./components/sectionHeader";
import FastDelivery from '../../images/home-mainSection/FastDelivery.png'
import QualityFood from '../../images/home-mainSection/QualityFood.png'
import CashbyHand from '../../images/home-mainSection/CashbyHand.png'
import CallToAction from './components/callToAction';
import Testimonial from './testimonial';

const topItems = [
    { id: 1, src: img1, alt: 'Shawarma Header' },
    { id: 4, src: img4, alt: 'Kafta Kebab' },
    { id: 2, src: img2, alt: 'Loaded Fries' },
    { id: 5, src: img5, alt: 'Hummus Box' },
    { id: 3, src: img3, alt: 'Peri Peri Wings' },
    { id: 6, src: img6, alt: 'Signature Wrap' },
    { id: 7, src: img7, alt: 'Happy Weekend' },
    { id: 8, src: img8, alt: 'Lahori Platter' },
    { id: 9, src: img9, alt: 'Falafel Wrap' },
];

const galleryColumnsMd = [
    [topItems[0], topItems[2], topItems[4], topItems[6], topItems[8]],
    [topItems[1], topItems[3], topItems[5], topItems[7]],
];

const galleryColumnsLg = [
    [topItems[0], topItems[1], topItems[6]],
    [topItems[2], topItems[3], topItems[7]],
    [topItems[4], topItems[5], topItems[8]],
];

const GalleryCard = ({
    item,
    imageClassName,
}: {
    item: typeof topItems[0];
    imageClassName: string;
}) => (
    <div className="relative group cursor-pointer overflow-hidden rounded-[20px] shadow-sm">
        <Image
            src={item.src}
            alt={item.alt || "Food Gallery Image"}
            width={600}
            height={800}
            className={imageClassName}
        />
        <div className="absolute inset-0 bg-black/0" />
    </div>
);

const VerticalLoopColumn = ({
    items,
    duration = 14,
    imageClassName,
}: {
    items: typeof topItems;
    duration?: number;
    imageClassName: string;
}) => {
    const firstSetRef = useRef<HTMLDivElement | null>(null);
    const [loopDistance, setLoopDistance] = useState(0);

    useEffect(() => {
        const element = firstSetRef.current;
        if (!element) return;

        const updateDistance = () => {
            setLoopDistance(element.offsetHeight);
        };

        updateDistance();
        const observer = new ResizeObserver(updateDistance);
        observer.observe(element);

        return () => observer.disconnect();
    }, [items]);

    return (
        <div
            className="relative overflow-hidden"
            style={{ height: loopDistance ? `${loopDistance}px` : undefined }}
        >
            <motion.div
                className="will-change-transform"
                animate={loopDistance ? { y: [0, -loopDistance] } : undefined}
                transition={{
                    y: {
                        duration,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                    },
                }}
            >
                <div ref={firstSetRef} className="space-y-4 pb-4">
                    {items.map((item) => (
                        <GalleryCard
                            key={`set-1-${item.id}`}
                            item={item}
                            imageClassName={imageClassName}
                        />
                    ))}
                </div>

                <div className="space-y-4 pb-4">
                    {items.map((item) => (
                        <GalleryCard
                            key={`set-2-${item.id}`}
                            item={item}
                            imageClassName={imageClassName}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default function FoodGallery() {
    return (
        <>
            <section className="bg-white">
                <SectionHeader
                    badgeImage={props}
                    title="Our Food Gallery"
                    description={
                        <>
                            Explore our Food Gallery and discover our freshly made favorites.
                            For more delicious updates, follow us on Instagram{" "}
                            <span className="text-[#FF5733] font-semibold">

                                <a href="https://www.instagram.com/shawarmastop/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @shawarmastop.
                                </a>
                            </span>
                        </>
                    }
                />

                <div className="px-4 lg:pt-5 max-w-[1340px] mx-auto space-y-4">

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:hidden gap-4">
                        {galleryColumnsMd.map((columnItems, index) => (
                            <VerticalLoopColumn
                                key={`gallery-column-md-${index}`}
                                items={columnItems}
                                imageClassName="w-full h-auto object-cover"
                                duration={14 + index * 2}
                            />
                        ))}
                    </div>

                    <div className="hidden lg:grid lg:grid-cols-3 gap-4">
                        {galleryColumnsLg.map((columnItems, index) => (
                            <VerticalLoopColumn
                                key={`gallery-column-lg-${index}`}
                                items={columnItems}
                                imageClassName="w-full h-auto object-cover"
                                duration={14 + index * 2}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <CallToAction
                badges={[
                    { image: FastDelivery, alt: 'Fast Delivery', label: 'Fast Delivery' },
                    { image: QualityFood, alt: 'Quality Food', label: 'Quality Food' },
                    { image: CashbyHand, alt: 'Cash By Hand', label: 'Cash By Hand' },
                ]}
                buttonText="View on Instagram"
                buttonHref="https://www.instagram.com/shawarmastop/"
            />
            <Testimonial />
        </>
    );
}