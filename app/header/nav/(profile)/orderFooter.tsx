import whatapp from '../../../../images/what.png';
import facebook from '../../../../images/facebok.png';
import instagram from '../../../../images/instra.png';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import footer from './profilePage/footer';
const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export default function OrderFooter() {
    return (
        <footer className={`${poppins.className} w-full pt-12 border-t border-gray-300 mt-20 mb-0`}>
      <div className="max-w-[1387px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side: Copyright Text */}
        <p className="text-[#3B3B3B] text-[16px] font-[500]">
          © 2025 Shawarma Stop All right reserved
        </p>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-5">
        <Image src={facebook} alt="Facebook" className="w-9 h-9 cursor-pointer" />
        <Image src={instagram} alt="Instagram" className="w-9 h-9 cursor-pointer" />  
        <Image src={whatapp} alt="WhatsApp" className="w-9 h-9 cursor-pointer" />
        </div>

      </div>
    </footer>
    )
}