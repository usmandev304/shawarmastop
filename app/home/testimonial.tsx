'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';
import testimonialImg from '../../images/home-testimonials/testimonials.png';
import userAvatar from '../../images/home-testimonials/userAvatar.png';
import userAvatar2 from '../../images/home-testimonials/userAvatar2.png';
import FamilyMealSpecials from './familyMealSpecials';
import { Poppins } from 'next/font/google';
import left from '../../images/home-testimonials/left.png';
import right from '../../images/home-testimonials/right.png';
import { useState } from 'react';
import { StaticImageData } from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const testimonials: {
  heading: string;
  avatar: StaticImageData;
  name: string;
  text: string;
}[] = [
  {
    heading: 'Loved By Customers. Trusted For Quality.',
    avatar: userAvatar,
    name: 'Arslan Ali',
    text: 'Absolutely delicious! The shawarma was fresh, juicy, and packed with authentic Middle Eastern flavors. Great portion size and fast service. Shawarma Stop is now my go-to place!',
  },
  {
    heading: 'Bold flavors that hit different 😍',
    avatar: userAvatar2,
    name: 'Sumayyah',
    text: 'Shawarma Stop delivers pure satisfaction—flavorful, fresh, and absolutely addictive. A must-try for all shawarma lovers! From the first bite to the last, the perfect blend of spices, juicy fillings, and creamy sauces creates an unforgettable taste.',
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
    <section className={`${poppins.className} max-w-[1360px] mx-auto px-6 md:pt-[120px] flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:mb-[140px] md:mt-0 mt-[80px]`}>
      
      {/* Left Content Side */}
      <div className="flex-1 space-y-5">
        <div className="space-t-2">
          <h2 className="text-22 md:text-[44px] font-sans font-[600] text-gray-900 leading-tight">
            {activeTestimonial.heading}
          </h2>
        </div>

        {/* Reviewer Info */}
        <div className="flex items-center md:gap-4 gap-0 ">
          <div className="w-14 h-14 rounded-full overflow-hidden mb-[-10px] md:mb-0">
             <Image src={activeTestimonial.avatar} alt={activeTestimonial.name}className="object-cover object-center md:w-[57px] md:h-[57px] w-[40px] h-[40px]" />
          </div>
          <div>
            <h4 className="font-[600] md:text-[24px] text-[20px] text-gray-900 md:mb-0.5">{activeTestimonial.name}</h4>
            <div className="flex text-[#FF981E]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="md:text-[18px] text-[14px]  max-w-lg lg:max-w-[580px]">
          {activeTestimonial.text}
        </p>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button type="button" onClick={goToPrevious} aria-label="Previous testimonial">
            <Image src={left} alt="left" className="cursor-pointer md:w-[44px] md:h-[44px] w-[30px] h-[30px]" />
          </button>
          <button type="button" onClick={goToNext} aria-label="Next testimonial">
            <Image src={right} alt="right" className="cursor-pointer md:w-[44px] md:h-[44px] w-[30px] h-[30px]" />
          </button>
        </div>
      </div>

      {/* Right Image Side */}
      <div className="flex-1 relative flex justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-100 rounded-full -z-10 opacity-50 blur-3xl" />
        
        <div className="relative z-10">
          <Image 
            src={testimonialImg} 
            alt="App Preview" 
            priority
            className="object-contain md:w-[487px] md:h-[516px]"
          />
        </div>
      </div>

    </section>
    <FamilyMealSpecials />
    </>
  );
}