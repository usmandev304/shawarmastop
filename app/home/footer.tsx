import Image from "next/image";
import logo from "../../images/logo/logo.png"
import Link from "next/link";
import googleplay from '../../images/home-mobileSection/google-play.png'
import appstore from '../../images/home-mobileSection/app-store.png'
import face from '../../images/footer/face.png'
import instra from '../../images/footer/instra.png'
import whatsapp from '../../images/footer/whatsapp.png'
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

export default function Footer() {
    return (
        <footer className={`${poppins.className} bg-[#f95233] pt-[64px] px-6 md:px-[60px] pb-8 w-full text-white`}>
            <div className="max-w-[1387px] m-auto border-b border-[rgba(255,255,255,0.2)] pb-[64px] flex  flex-wrap flex-col lg:flex-row justify-between gap-10">
                
                {/* Left Section: Logo, Info & Locations */}
                <div className="flex flex-col md:flex-row flex-1 gap-10 lg:gap-85">
                    
                    {/* Logo and Social Text */}
                    <div className="flex flex-col gap-6 max-w-[300px]">
                        <div className="h-[38px] w-[230px] relative">
                            <Image
                                alt="Shawarma Stop Logo"
                                className="object-contain"
                                src={logo}
                                fill
                            />
                        </div>
                        <p className="md:text-[17px] text-[15px] font-[300] leading-relaxed opacity-90">
                            We're also active on social media! Follow us for engaging industry updates.
                        </p>
                        
                        {/* Locations Section */}
                        <div className="mt-4 md:block hidden">
                            <p className="font-semibold text-[#fded8b] md:text-[23px] text-[19px] mb-4 ">Locations</p>
                            <div className="flex flex-col gap-4 md:text-[17px] text-[15px] opacity-90 md:whitespace-nowrap font-[300] max-w-[350px]">
                                <p>Building # 157, DHA Phase 4 Sector CCA Dha Phase 4, Lahore, 52000</p>
                                <p>Plaza C-43-3, Commercial Area, Lake City</p>
                                <p>39 D - Block PIA Housing Society Lahore</p>
                                <p>95B-D/1, Main Boulevard, Gulberg III, Lahore</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links & Contact Info */}
                    <div className="flex flex-wrap gap-10 md:gap-20">
                        {/* Quick Links */}
                        <div className="flex flex-col gap-6">
                            <p className="font-semibold text-[#fded8b] md:text-[20px] text-[17px]">Quick Links</p>
                            <nav className="flex flex-col gap-5">
                                <Link href="/" className="hover:text-[#fded8b] transition-colors font-[300]  md:text-[17px] text-[15px]">Home</Link>
                                <Link href="/about" className="hover:text-[#fded8b] transition-colors font-[300]  md:text-[17px] text-[15px]">About</Link>
                                <Link href="/order" className="hover:text-[#fded8b] transition-colors font-[300]  md:text-[17px] text-[15px]">Order Now</Link>
                                <Link href="/contact" className="hover:text-[#fded8b] transition-colors font-[300]  md:text-[17px] text-[15px]">Contact</Link>
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div className="flex flex-col gap-6">
                            <p className="font-semibold text-[#fded8b] md:text-[20px] text-[17px]">Contact Info</p>
                            <div className="flex flex-col gap-4 text-[16px]">
                                <div>
                                    <p className="font-[500] md:text-[17px] text-[15px]">Opening Hours:</p>
                                    <p className="opacity-90 font-[300] md:text-[17px] text-[15px] max-w-[200px]">Mon – Sun: 12:30 PM – 2:00 AM</p>
                                </div>
                                <p className="opacity-90 font-[300] md:text-[17px] text-[15px]">0314 4445074</p>
                                <p className="opacity-90 font-[300] md:text-[17px] text-[15px]">info@shawarmastop.co</p>
                            </div>
                        </div>
                    </div>
                     {/* Locations Section */}
                        <div className="mt-4 md:hidden">
                            <p className="font-semibold text-[#fded8b] md:text-[23px] text-[19px] mb-4 ">Locations</p>
                            <div className="flex flex-col gap-4 md:text-[17px] text-[15px] opacity-90 md:whitespace-normal flex-wrap font-[300] md:max-w-[350px] max-w-[270px]">
                                <p>Building # 157, DHA Phase 4 Sector CCA Dha Phase 4, Lahore, 52000</p>
                                <p>Plaza C-43-3, Commercial Area, Lake City</p>
                                <p>39 D - Block PIA Housing Society Lahore</p>
                                <p>95B-D/1, Main Boulevard, Gulberg III, Lahore</p>
                            </div>
                        </div>
                </div>

                {/* Right Section: App Badges */}
                <div className="flex flex-col gap-6 min-w-[220px] ">
                    <p className="md:text-[26px] text-[20px] font-[500] md:mb-4">Get the App</p>
                    <div className="flex md:flex-col  md:gap-4 gap-3 flex-wrap">
                        <div className="cursor-pointer hover:scale-105 transition-transform md:w-[200px] w-[160px]">
                            <Image src={appstore} alt="App Store" className="md:w-[300px] w-[160px] md:h-[60px] h-[50px]"/>
                        </div>
                        <div className="cursor-pointer hover:scale-105 transition-transform md:w-[200px] w-[160px]">
                            <Image src={googleplay} alt="Google Play" className="md:w-[300px] w-[160px] md:h-[60px] h-[50px]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="max-w-[1387px] m-auto pt-8 flex  md:flex-row justify-between items-center gap-6">
                <p className="md:text-[16px] text-[14px] font-[300] text-center text-left">
                    © 2025 Shawarma Stop. All rights reserved.
                </p>

                <div className="flex gap-4 flex-wrap">
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image src={face} alt="Facebook" className="md:w-[35px] w-[28px] md:h-[35px] h-[28px]"/>
                    </Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image src={instra} alt="Instagram" className="md:w-[35px] w-[28px] md:h-[35px] h-[28px]"/>
                    </Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">
                        <Image src={whatsapp} alt="WhatsApp" className="md:w-[35px] w-[28px] md:h-[35px] h-[28px]" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}