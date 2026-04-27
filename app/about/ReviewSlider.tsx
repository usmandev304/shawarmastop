"use client";
import { useState } from "react";
import Image from "next/image";
import kunafa from "../../images/about/kunafa.png";
import arslan from "../../images/about/arslan.jpg";
import ayesha from "../../images/about/ayesha.png";
import bilal from "../../images/about/bilal.jpg";
import zainab from "../../images/about/zainab.jpg";
import img8 from "../../images/about/img8.png";
import HomeLocation from "../home/homeLocation";
import ayeshareviews from "../../images/about/ayeshareviews.png"
import bilalreviews from '../../images/about/bilalreviews.png'
import zainabreviews from '../../images/about/zainabreviews.png'

const reviews = [
    {
        id: 1,
        name: "Arslan Ahmed",
        tagline: "Quality That Meet Standard",
        review: "Absolutely delicious! The shawarma was fresh, juicy, and packed with authentic Middle Eastern flavors. Great portion size and fast service. Shawarma Stop is now my go-to place!",
        image: kunafa,
        avatar: arslan,
    },
    {
        id: 2,
        name: "Ayesha Khan",
        tagline: "juicy & smoky perfection",
        review: "The Shish Tawook is grilled to perfection with a delicious smoky aroma and incredibly tender chicken that melts in your mouth.",
        image: ayeshareviews,
        avatar: ayesha,
    },
    {
        id: 3,
        name: "Bilal Hussain",
        tagline: "crispy injected chicken broast",
        review: "This Chicken Broast is perfectly crispy on the outside and incredibly juicy on the inside, giving you the ultimate crunch with every bite.",
        image: bilalreviews,
        avatar: bilal,
    },
    {
        id: 4,
        name: "Zainab Noor",
        tagline: "Authentic flavors and massive portions!",
        review: "Hands down the best feast in town! The Mix Platter was perfectly charred and juicy, but the Honey Wings were the real showstopper with that addictive glaze. Paired with their freshly blended juices.",
        image: zainabreviews,
        avatar: zainab,
    },
];

export default function ReviewSlider() {
    const [activeReview, setActiveReview] = useState(reviews[0]);

    return (
        <>
        <section className="max-w-[1387px] mx-auto md:py-16 px-4 md:mt-[30px]">
            {/* Top Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-6 items-center bg-white rounded-3xl overflow-hidden">

                {/* Left Side: Review Text */}
                <div className="space-y-4">
                    <div className="flex gap-3">
                        <span className="px-4 py-2.5 border border-gray-300 rounded-full text-xs text-gray-400 md:text-[17px]">Quality Food</span>
                        <span className="px-4 py-2.5 border border-gray-300 rounded-full text-xs text-gray-400 md:text-[17px]">Best Quality</span>
                    </div>

                    <div className="text-[#F95233] text-5xl font-serif">
                        <Image src={img8} alt="" className="md:w-12 md:h-12 w-10 h-10" />
                    </div>

                    <h2 className="text-4xl lg:text-5xl md:text-[30px] lg:max-w-[400px] md:max-w-[350px] font-bold text-[#1A1A1A] leading-tight">
                        {activeReview.tagline}
                    </h2>

                    <div className="flex text-yellow-500 text-xl">
                        {"★★★★★".split("").map((star, i) => (
                            <span key={i}>{star}</span>
                        ))}
                    </div>

                    <p className="lg:text-[19px] md:text-[15px] leading-relaxed lg:max-w-[530px] md:max-w-[450px]">
                        {activeReview.review}
                    </p>
                </div>

                {/* Right Side: Product Image Card */}
                <div className="relative h-[400px] lg:h-[500px] w-full max-w-[570px] mx-auto rounded-[40px] overflow-hidden md:shadow-2xl">
                    <Image
                        src={activeReview.image}
                        alt="Delicious Middle Eastern Food"
                        fill
                        priority
                        className="md:object-cover object-contain transition-all duration-700 ease-in-out"
                    />
                </div>
            </div>

            {/* Bottom Navigation: Reviewers */}
            <div className="lg:mt-9 md:mt-10 mt-6 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 md:gap-10 gap-3">
                {reviews.map((user) => (
                    <button 
                        key={user.id}
                        onClick={() => setActiveReview(user)}
                        className={`flex items-center gap-4 md:p-4 p-2 md:px-7 px-5  md:rounded-xl rounded-[10px] border transition-all  cursor-pointer duration-300 ${activeReview.id === user.id
                            ? "bg-[#F95233] border-[#F95233] text-white"
                            : "bg-white md:border-2 border-[#F95233] text-gray-800 hover:border-[#F95233]"
                            }`} 
                    >
                        <div className="relative md:w-13 md:h-14 w-6 h-6 rounded-full overflow-hidden  shadow-md">
                            <Image src={user.avatar} alt={user.name} fill className="object-cover" />
                        </div>
                        <span className="font-[500] lg:text-[22px] md:text-[18px] text-[8px]">{user.name}</span>
                    </button>
                ))}
            </div>
        </section>
        <HomeLocation />
        </>
    );
}