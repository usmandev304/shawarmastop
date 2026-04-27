import Image from 'next/image';
import Link from 'next/link';
import completeorder from '../../images/completeorder.png'
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

interface OrderModalProps {
  isOpen: boolean;
  orderId: string;
  deliveryTime: string;
  totalAmount: string;
}

export function OrderSuccessModal({ isOpen, orderId, deliveryTime, totalAmount }: OrderModalProps) {
  if (!isOpen) return null;

  return (
    <div className={`${poppins.className} fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-7`}>
      <div className="bg-white rounded-[32px] w-full max-w-[600px] p-8 flex flex-col items-center shadow-2xl animate-in fade-in zoom-in duration-300">

        {/* Green Check Icon */}
        <div className="  rounded-full flex items-center justify-center lg:mb-1">
          <Image src={completeorder} alt="Order Complete" className='lg:w-5vw md:w-4vw w-29 ' />
        </div>

        <h2 className="md:text-[28px] text-[22px] font-[600] text-black mb-2 text-center">Order Confirmed</h2>
        <p className="text-[#9A9A9A] text-center mb-8 font-[400] md:text-[16px] text-[14px]">
          Your food is being prepared and will arrive soon.
        </p>

        {/* Order Details Table */}
        <div className="w-full bg-[#FAFAFA] rounded-xl p-5 space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-[#555555] font-[500] md:text-[16px] text-[14px]">Order ID</span>
            <span className="text-[#555555] font-[600] md:text-[16px] text-[14px]">#{orderId}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#555555] font-[500] md:text-[16px] text-[14px]">Estimate Delivery</span>
            <span className="text-[#555555] font-[600] md:text-[16px] text-[14px]">{deliveryTime}</span>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-[#EDEDED]">
            <span className="text-[#555555] font-bold text-lg  md:text-[18px] text-[16px]">Total</span>
            <span className="text-[#555555] font-bold text-lg  md:text-[18px] text-[16px]">Rs {totalAmount}</span>
          </div>
        </div>

        {/* Back to Menu Button */}
        <Link
          href="/order"
          className="w-full bg-[#FF4D30] text-white text-center md:py-4 py-3  md:text-[16px] text-[14px] rounded-full font-bold text-lg hover:bg-[#e6452b] transition-colors"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  );
}