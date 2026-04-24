'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';
import locationicon from '../../images/checkout/locationicon.png';

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] }); 

export default function CheckoutPage() {
  const { cartItems, itemCount, subtotal } = useCart();
  const [saveInfo, setSaveInfo] = useState(false);
  const [locationSelected, setLocationSelected] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [locationStatus, setLocationStatus] = useState('');

  const deliveryCharges = itemCount > 0 ? 190 : 0;
  const estimatedTaxes = Math.round(subtotal * 0.0165 * 10) / 10;
  const total = subtotal + deliveryCharges + estimatedTaxes;

  const handleChooseLocation = () => {
    if (!navigator.geolocation) {
      setLocationSelected(false);
      setLocationStatus('Location is not supported on this device.');
      return;
    }

    setIsLocating(true);
    setLocationStatus('');

    navigator.geolocation.getCurrentPosition(
      () => {
        setLocationSelected(true);
        setLocationStatus('Location access granted.');
        setIsLocating(false);
      },
      (error) => {
        setLocationSelected(false);
        setIsLocating(false);

        if (error.code === error.PERMISSION_DENIED) {
          setLocationStatus('Please allow location permission in your browser.');
          return;
        }

        setLocationStatus('Unable to fetch location. Please try again.');
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  };

  return (
    <section className={`${poppins.className} bg-white min-h-screen px-6 md:pt-20 pt-10 md:px-12 lg:px-20 md:mb-20 mb-10`}>
      <div className="max-w-[1200px] mx-auto paymentChecked  flex flex-col-reverse md:flex-col  md:grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <h1 className="text-black md:text-[40px] font-[400] mb-15 hidden md:block">Checkout</h1>
          <h1 className="text-black md:text-[40px] font-[600] text-[24px] font-[400] mb-10 block md:hidden">Delivery details</h1>

          <div className="space-y-6">
            <div>
              <p className="text-black md:text-[20px] font-[500] mb-3">Contact</p>
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full border border-[#E6E6E6] rounded-2xl px-5 py-4 text-black placeholder:text-[#9A9A9A] outline-none font-[400] md:text-[16px]"
              />
            </div>

            <div>
              <p className="text-black md:text-[20px] font-[500] mb-3">Delivery</p>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-[#E6E6E6] rounded-2xl px-5 py-4 text-black placeholder:text-[#9A9A9A] outline-none font-[400]"
                />
                <input
                  type="text"
                  placeholder="Adress"
                  className="w-full border border-[#E6E6E6] rounded-2xl px-5 py-4 text-black placeholder:text-[#9A9A9A] outline-none font-[400]"
                />
                <label
                  className={`flex items-center gap-3 text-[15px] font-[400] rounded-xl px-3 py-2 transition-colors ${
                    saveInfo ? ' text-black' : 'text-black'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={saveInfo}
                    onChange={(event) => setSaveInfo(event.target.checked)}
                    className="size-5 rounded border border-[#E6E6E6] accent-[#FF4D30]"
                  />
                  Save this information for next time.
                </label>
              </div>
            </div>

              <div className="flex items-center justify-center">
                <hr className="w-full border-t border-[#E6E6E6]" />
                <p className=" font-[400] text-[15px] text-[#E6E6E6] px-3">OR</p>
                <hr className="w-full border-t border-[#E6E6E6]" />
            </div>

            <button
              type="button"
              onClick={handleChooseLocation}
              className={`w-full py-4 rounded-2xl text-[16px] font-[500] transition-colors flex items-center justify-center gap-3 border ${
                locationSelected
                  ? 'border-[#FF4D30] bg-[#FF4D30] text-white'
                  : 'border-[#FF4D30] text-[#FF4D30] hover:bg-[#FFF1EE]'
              }`}
            >
              <Image
                src={locationicon}
                alt=""
                width={20}
                height={20}
                className={locationSelected ? 'brightness-0 invert' : ''}
              />
              {isLocating ? 'Detecting Location...' : 'Choose Location'}
            </button>
            {locationStatus && (
              <p className={`text-[14px] ${locationSelected ? 'text-green-600' : 'text-[#FF4D30]'}`}>
                {locationStatus}
              </p>
            )}

            <div>
              <p className="text-black md:text-[20px] font-[500] mb-3">Payment</p>
              <select className="w-full border border-[#E6E6E6] rounded-2xl px-5 py-4 text-black outline-none text-[16px] font-[400]">
                <option>Cash On Delivery</option>
              </select>
            </div>

            <button className="w-full bg-[#FF4D30] text-white py-4 rounded-full text-[16px] font-[500] hover:bg-[#e6452b] transition-colors">
              Complete Order
            </button>
          </div>
        </div>
        

        <div className="pt-3">
        <div className="flex justify-end md:mb-10">
         <div className="flex justify-between w-full h-fill">
          <h1 className="text-black md:text-[40px] text-[17px] font-[400] md:mb-15 block md:hidden">Checkout</h1>
  <Link 
    href="/order" 
    className="text-black md:text-2xl text-[15px] font-[300] underline decoration-2 "
  >
    Continue Ordering
  </Link>
  </div>
</div>

          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between gap-4 text-[16px] font-[400]">
                <div className="flex items-center gap-4">
                  <div className="md:w-25 md:h-25 w-15 h-15 relative rounded-md overflow-hidden md:bg-[#F5F3ED] p-1">
                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                  </div>
                  <div>
                    <p className="text-black md:text-[18px] text-[15px] font-[700]">{item.name}</p>
                    <p className="text-[#3B3B3B] md:text-[15px] text-[12px] font-[400] md:max-w-[290px] max-w-[240px]">
                      {typeof item.description === 'string'
                        ? item.description
                        : 'Grilled whole chicken, marinated in Middle Eastern spices'}
                    </p>
                  </div>
                </div>
                <p className="text-black md:text-[18px] text-[14px] font-[700]">RS {item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-[#EFEFEF] pt-5 space-y-4">
            <div className="flex justify-between text-[16px] font-[400] text-[#000000]">
              <p className="text-[16px] font-[400]  text-[#000000]">Subtotal {itemCount > 0 ? `${itemCount} Items` : ''}</p>
              <p className="text-[15px] font-[400] text-[#000000]">Rs{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-[16px] font-[400] text-[#000000]">
              <p className="text-[16px] font-[400] text-[#000000]">Delivery Charges</p>
              <p className="text-[15px] font-[400] text-[#000000]">Rs {deliveryCharges.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-[16px] font-[400] text-[#000000]">
              <p className="text-[16px] font-[400] text-[#000000]">Estimated taxes</p>
              <p>Rs {estimatedTaxes.toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-end pt-3">
              <p className="text-[20px] font-[600] text-[#000000]">Total</p>
              <p className="text-[20px] font-[600] text-[#000000]"><sub className="text-[12px] font-[400] text-[#000000]">PKR</sub> Rs {total.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}