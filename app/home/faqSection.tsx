'use client';

import { useState, type ReactNode } from 'react';
import { Poppins } from 'next/font/google';
import { ChevronUp } from 'lucide-react';
import SectionHeader from "./components/sectionHeader";
import props from '../../images/home-mainSection/props.png';
import HomeLoaction from './homeLocation';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

const faqData = [
    {
        question: "Do you offer home delivery?",
        answer: "We currently deliver orders within a 7 km radius from our branch to ensure fresh and timely service."
    },
    {
        question: "What are your opening hours?",
        answer: "We are open Monday to Sunday, from 12:30 PM to 2:00 AM, serving fresh shawarma every day."
    },
    {
        question: "Can I make a reservation in advance?",
        answer: "Yes, you can make a reservation in advance for your visit or any special function, including birthdays, family gatherings, or corporate events."
    },
    {
        question: "Where can I find your branches?",
        answer: (
            <div className="mt-2">
                <p className="font-semibold mb-2">Our branches are located at the following addresses:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Building #157, DHA Phase 4, Sector CCA, Lahore</li>
                    <li>Plaza C-43-3, Commercial Area, Lake City, Lahore</li>
                    <li>39-D Block, PIA Housing Society, Lahore</li>
                    <li>95B-D/1, Main Boulevard, Gulberg III, Lahore</li>
                </ul>
            </div>
        )
    }
];

export default function FaqSection() {
    return (
        <>        <section className={`${poppins.className} lg:py-7 px-4 bg-white`}>
            <div className="max-w-5xl mx-auto">
                <SectionHeader
                    badgeImage={props}
                    title="Curious? Let’s Clear It Up"
                    description={
                        <span className="mx-auto block w-full max-w-[350px] break-words text-center text-black md:max-w-[600px] md:whitespace-nowrap">
                            From placing your order to getting it delivered hot and fresh, we’ve covered it all.
                        </span>
                    }
                />

                <div className="mt-12 space-y-6">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>

                {/* MOVE IT HERE: Outside the map loop so it only shows once */}
                <div className="mt-4">
                </div>
            </div>
        </section>
            <HomeLoaction />
        </>

    );
}

function FaqItem({ question, answer }: { question: string; answer: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false); // Changed to false for better UX, or keep true if preferred

    return (
        <div className="bg-[#f5f3ef] rounded-2xl p-6 md:p-8 transition-all duration-300">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left gap-4"
            >
                <h3 className="md:text-[20px] font-[600] text-[#1a1a1a]">
                    {question}
                </h3>
                <div className={`bg-[#ff5a30] p-1 rounded-full transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`}>
                    <ChevronUp className="text-white md:w-5 md:h-5 w-4 h-4" />
                </div>
            </button>

            {isOpen && (
                <div className="mt-4 md:text-[16px] leading-relaxed md:max-w-[870px] ">
                    {answer}
                </div>
            )}
        </div>
    );
}