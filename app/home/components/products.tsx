'use client';
import Image, { StaticImageData } from 'next/image';
import { Inter } from 'next/font/google';
import { useCart } from '@/app/context/CartContext';
import { useState } from 'react';
import { addToCartDatabase } from '@/lib/api';

const inter = Inter({ subsets: ['latin'] });

export interface Product {
    id: number;
    title: string;
    description: string;
    price: string | number;
    badge: string;
    image: StaticImageData;
}

interface ProductGridProps {
    items: Product[];
}

export default function Products({ items }: ProductGridProps) {
    const { addItem } = useCart();
    const marqueeItems = [...items, ...items];
    const [isPaused, setIsPaused] = useState(false);

    return (
        <>
        <div
            className="mt-6 w-full max-w-[1397px] overflow-hidden px-3 sm:px-4 md:mt-10 md:px-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div
                className="flex w-max gap-3 md:gap-5"
                style={{
                    animation: 'productsMarquee 20s linear infinite',
                    animationPlayState: isPaused ? 'paused' : 'running',
                }}
            >
                {marqueeItems.map((product, index) => (
                    <div
                        key={`${product.id}-${index}`}
                        className="group relative w-[240px] shrink-0 overflow-hidden rounded-[12px] bg-[#F5F3ED] p-3 transition-shadow hover:shadow-xl md:w-[300px] md:rounded-[16px] md:p-6"
                    >
                    {/* Badge — desktop only (md+), same as before */}
                    <div className="absolute right-3 top-3 z-10 hidden rounded-full bg-[#FFAB3C] px-2 py-1 text-[9px] font-bold text-white md:right-5 md:top-6 md:block md:px-4 md:py-1.5 md:text-[10px]">
                        {product.badge}
                    </div>

                    {/* Image */}
                    <div className="relative mb-2 flex h-[120px] w-full items-center justify-center overflow-hidden rounded-xl md:mb-4 md:h-[220px] md:rounded-2xl">
                        <Image
                            src={product.image}
                            alt={product.title}
                            className="h-full w-[92%] object-contain transition-transform duration-300 group-hover:scale-105 md:w-[90%]"
                        />
                    </div>

                    <h3 className="text-left text-[12px] font-bold leading-tight text-black md:mt-2 md:text-[18px]">
                        {product.title}
                    </h3>

                    {/* Below md: price + badge row (matches compact mobile UI) */}
                    <div className="mt-1 flex w-full items-center justify-between gap-2 md:hidden">
                        <span className={`text-[13px] font-bold text-[#FF5733] ${inter.className}`}>
                            Rs {product.price}
                        </span>
                        <span className="shrink-0 rounded-full bg-[#FFAB3C] px-2 py-0.5 text-[9px] font-bold text-white">
                            {product.badge}
                        </span>
                    </div>

                    <p className="mt-1 line-clamp-2 text-left text-[11px] leading-snug text-[#333] md:mt-2 md:line-clamp-none md:max-w-[250px] md:text-[15px] md:font-[500] md:text-black">
                        {product.description}
                    </p>

                    {/* md+: button + price row */}
                    <div className="mt-2 hidden w-full items-center justify-between md:flex">
                        <button
                            type="button"
                            onClick={() => {
                                addItem({
                                    id: `home-${product.id}-${product.title}`,
                                    name: product.title,
                                    description: product.description,
                                    image: product.image,
                                    price: Number(product.price),
                                });
                                addToCartDatabase({
                                    id: `home-${product.id}-${product.title}`,
                                    name: product.title,
                                    description: product.description,
                                    price: Number(product.price),
                                    badge: product.badge,
                                });
                            }}
                            className="rounded-full bg-[#FF5733] px-[23px] py-[7px] cursor-pointer text-[14px] font-bold text-white transition-colors hover:bg-[#E64B29]"
                        >
                            Add To Cart
                        </button>
                        <span className={`text-[18px] font-bold text-black ${inter.className}`}>
                            Rs {product.price}
                        </span>
                    </div>

                    {/* Below md: full-width CTA */}
                    <button
                        type="button"
                        onClick={() => {
                            addItem({
                                id: `home-${product.id}-${product.title}`,
                                name: product.title,
                                description: product.description,
                                image: product.image,
                                price: Number(product.price),
                            });
                            addToCartDatabase({
                                id: `home-${product.id}-${product.title}`,
                                name: product.title,
                                description: product.description,
                                price: Number(product.price),
                                badge: product.badge,
                            });
                        }}
                        className="mt-2 w-full rounded-full bg-[#FF5733] py-2 text-center text-[11px] font-bold text-white transition-colors hover:bg-[#E64B29] md:hidden cursor-pointer"
                    >
                        Add To Cart
                    </button>
                    </div>
                ))}
            </div>
        </div>
        <style jsx>{`
            @keyframes productsMarquee {
                from {
                    transform: translateX(0%);
                }
                to {
                    transform: translateX(-50%);
                }
            }
        `}</style>
        </>
    );
}