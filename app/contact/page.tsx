import Image from "next/image";
import contact from '../../images/contact/contactPage.png';
import { Poppins } from 'next/font/google';
import ContactHeader from "./contactHeader";

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });
export default function Contact() {
  return (
    <>
      <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden md:mb-9">
        {/* Background Image */}
        <Image
          src={contact}
          alt="Shawarma Stop Lahore Contact"
          fill
          priority
          className="object-cover w-full h-full object-contain "
        />

        {/* Overlay Content */}
        <div className={`${poppins.className} absolute inset-0 bg-black/10 flex flex-col justify-center px-8 md:px-20 lg:px-32 md:pb-25`}>
          <div className="max-w-2xl text-white">
            <h3 className="text-xl md:text-2xl sm:text-xl text-[17px] font-[500] md:font-bold mb-2">
              Lahore
            </h3>
            <h1 className="sm:text-5xl text-4xl md:text-7xl lg:text-[80px] font-extrabold mb-6 tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl font-[400] leading-relaxed max-w-[480px]">
              Tell us what you want and we'll take care of the rest.
              Fill out the form to order from our finest Shawarma Stop selections.
            </p>
          </div>
        </div>
      </section>
      <ContactHeader />
    </>
  );
}