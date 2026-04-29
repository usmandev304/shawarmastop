'use client'
import { useState, useCallback } from 'react';
import Image from 'next/image';
import SectionHeader from '../home/components/sectionHeader';
import props from '../../images/home-mainSection/props.png'
import { Poppins } from 'next/font/google';
import HomeLocation from '../home/homeLocation';
import { useCart } from '@/app/context/CartContext';
import { addToCartDatabase } from '@/lib/api';
import { menuItems } from './data/orderMenuItems';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});
const categories = ['Appetizers', 'Fatayers', 'Main Course', 'Dessert', 'Drink', 'Others'];
const itemsByCategory = Object.fromEntries(
    categories.map((category) => [
        category,
        menuItems.filter((item) => item.category === category),
    ]),
);
function buildOrderCartPayload(item) {
    return {
        id: `order-${item.id}-${item.name}`,
        name: item.name,
        description: item.description,
        price: item.price,
        category: item.category,
        badge: item.badge,
    };
}

export default function OrderMainSection() {
    const [selectedCategory, setSelectedCategory] = useState('Appetizers');
    const { addItem } = useCart();

    const filteredItems = itemsByCategory[selectedCategory] ?? [];

    const handleCategoryClick = useCallback((e) => {
        const category = e.currentTarget.getAttribute('data-category');
        if (category) setSelectedCategory(category);
    }, []);

    const handleAddToCart = useCallback(
        (item) => {
            addItem(item);
            addToCartDatabase(buildOrderCartPayload(item));
        },
        [addItem],
    );

    return (
        <>
            <section className={`${poppins.className} bg-white min-h-screen md:p-8 p-4`}>
                <div className="max-w-[1360px] mx-auto">
                    <div className='[&>div]:mt-0 [&>section]:pt-0'>
                        <SectionHeader
                            badgeImage={props}
                            badgeAlt="Explore Our Menu"
                            title="Explore Our Menu"
                            description="Enjoy freshly made meals crafted with quality ingredients and great taste."
                        />
                    </div>
                    <div className={`${poppins.className} bg-[#f4f2ed] content-stretch flex md:gap-[12px] gap-[8px] items-center flex-wrap p-[8px] lg:rounded-[100px] rounded-[30px] mb-12 md:mt-[40px] w-fit mx-auto`}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                data-category={category}
                                onClick={handleCategoryClick}
                                className={`${poppins.className} content-stretch flex md:h-[48px] h-[38px] cursor-pointer items-center justify-center md:text-[14px] font-[500] px-[16px] py-[10px] rounded-[100px] shrink-0 w-[90px] md:w-[130px] transition-colors ${selectedCategory === category
                                    ? 'bg-[#f95233]'
                                    : 'bg-transparent hover:bg-[#f4e8e2]'
                                    }`}
                            >
                                <p className={`font-['Poppins:${selectedCategory === category ? 'SemiBold' : 'Medium'}',sans-serif] leading-[normal] not-italic text-[14px] text-center whitespace-nowrap ${selectedCategory === category ? 'text-white' : 'text-black'
                                    }`}>
                                    {category}
                                </p>
                            </button>
                        ))}
                    </div>

                    <div className="mb-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-x-[4px] lg:grid-cols-4 gap-y-11">
                        {filteredItems.map((item) => {
                            const badgeIsRegular = item.badge === 'Regular';
                            return (
                                <div
                                    key={item.id}
                                    className={`${poppins.className} flex h-full flex-col rounded-2xl bg-[#f4f2ed] p-3 md:min-h-[442px] md:items-center md:rounded-[16px] md:p-[6px] md:pt-[25px] max-w-[320px]`}
                                >
                                    <div className="relative mx-auto mb-2 w-full max-w-[260px] shrink-0 md:mb-6">
                                        <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl md:h-[213px] md:overflow-visible md:rounded-none md:bg-transparent">
                                            <Image
                                                alt={item.name}
                                                src={item.image}
                                                className="h-full w-full object-contain md:pointer-events-none md:absolute md:inset-0 md:size-full md:max-w-none"
                                                sizes="(max-width: 767px) 45vw, (min-width: 1024px) 22vw, 40vw"
                                            />
                                        </div>
                                        <div
                                            className={`absolute right-0 top-0 z-[1] hidden rounded-[88.235px] bg-[#ffae29] px-[14.118px] py-[7.059px] md:flex md:content-stretch md:items-start md:justify-end ${item.badge ? 'visible' : 'invisible'
                                                }`}
                                        >
                                            <p className="whitespace-nowrap font-['Poppins:SemiBold',sans-serif] text-[10.588px] not-italic leading-[normal] text-white">
                                                {item.badge}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex min-h-0 flex-1 flex-col md:hidden">
                                        <p className="mb-1.5 line-clamp-2 text-left text-[13px] font-bold leading-tight text-gray-900  sm:text-[14px]">
                                            {item.name}
                                        </p>
                                        <div className="mb-1.5 flex items-center justify-between gap-2">
                                            <span className="whitespace-nowrap text-[13px] font-semibold text-[#f95233] sm:text-[14px]">
                                                PKR {item.price}
                                            </span>
                                            {item.badge ? (
                                                <span
                                                    className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-semibold text-white sm:text-[10px] ${badgeIsRegular ? 'bg-[#FFAE29]' : 'bg-[#FFAE29]'
                                                        }`}
                                                >
                                                    {item.badge}
                                                </span>
                                            ) : (
                                                <span className="invisible rounded-full px-2 py-0.5 text-[9px]">—</span>
                                            )}
                                        </div>
                                        <p className="mb-3 line-clamp-2 flex-1 text-left text-[11px] leading-snug text-gray-700 sm:text-xs">
                                            {item.description}
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => handleAddToCart(item)}
                                            className="mt-auto w-full rounded-full bg-[#f95233] py-2 text-center text-[12px] font-semibold text-white transition-colors hover:bg-[#e04020] sm:text-[13px]"
                                        >
                                            Order Now
                                        </button>
                                    </div>

                                    <div className="hidden w-full flex-1 flex-col px-4 md:flex md:grow md:gap-[16px] md:pt-[5.571px]">
                                        <div className="flex w-full flex-col gap-[7.543px] text-black">
                                            <p className={`${poppins.className} w-full lg:text-[18px] text-[16px] font-[700] leading-[normal]`}>
                                                {item.name}
                                            </p>
                                            <p className={`${poppins.className} line-clamp-3 w-full lg:text-[15px] text-[14px] font-[400] leading-[19.8px]`}>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="mt-auto flex w-full items-center justify-between pb-4">
                                            <button
                                                type="button"
                                                onClick={() => handleAddToCart(item)}
                                                className={`${poppins.className} w-[130px] shrink-0 rounded-[30px] bg-[#f95233] px-[16px] py-[9px] transition-colors hover:bg-[#e04020]`}
                                            >
                                                <p
                                                    className={`${poppins.className} whitespace-nowrap cursor-pointer text-center text-[14px] not-italic leading-[normal] text-white`}
                                                >
                                                    Add To Cart
                                                </p>
                                            </button>
                                            <p
                                                className={`${poppins.className} whitespace-nowrap lg:text-[18px] text-[16px] font-[600] not-italic leading-[normal] text-black`}
                                            >
                                                Rs {item.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex justify-center md:pb-[50px]">
                        <button className="border-2 border-[#f95233] md:bg-white bg-[#f95233] content-stretch flex items-center justify-center md:px-[138px] px-[90px] py-[19px] rounded-[100px] hover:bg-[#f95233] hover:text-white transition-colors group">
                            <p className="font-['Poppins:Medium',sans-serif] leading-[normal] not-italic text-[14px]  text-[#f95233] group-hover:text-white whitespace-nowrap md:text-black text-white">
                                View All menu
                            </p>
                        </button>
                    </div>
                </div>
            </section>
            <HomeLocation />
        </>
    );
}
