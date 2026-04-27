'use client';

import Navbar from "../nav/navbar";

export default function Head() {
    return (
        <>
        <div className="bg-[#FDED8B]">
            <h1
                className="md:text-[16px] text-[12px] pt-2.5 pb-2.5 text-center hidden md:block md:pt-[8px] md:pb-[8px] md:font-[400] text-[#000000] font-sans">
                Real Flavor. Real Ingredients. Real Fast Delivery.
            </h1>
        </div>
        <Navbar />
        </>
    )
}