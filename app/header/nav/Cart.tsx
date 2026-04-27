'use client';

import { X, Trash2, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cartItems, itemCount, subtotal, incrementItem, decrementItem, removeItem } =
    useCart();

  if (!isOpen) return null;

  if (cartItems.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
        <div className="absolute inset-0" onClick={onClose}></div>
        <div className="relative w-full max-w-md bg-white h-full p-6 flex flex-col items-center justify-center">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-500">
            <X size={28} />
          </button>
          <p className="text-black font-semibold">Your cart is empty</p>
          <button onClick={onClose} className="mt-4 text-[#FF4D30]">Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
      <div className="absolute inset-0" onClick={onClose}></div>

      <div className="relative w-full max-w-md bg-white h-full shadow-xl p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-black">Cart ({itemCount})</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <X size={28} />
          </button>
        </div>

        {/* Cart Item */}
        <div className="flex-1 overflow-y-auto space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 border-b border-gray-300 pb-4">
              <div className="md:w-24 md:h-24 w-20 h-20 relative rounded-lg bg-gray-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-black lg:text-lg text-[14px]">{item.name}</h3>
                <p className="text-xs text-gray-500 mb-2">
                  {typeof item.description === 'string'
                    ? item.description
                    : 'Freshly prepared and full of flavor.'}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center border rounded-md border-gray-300 overflow-hidden">
                    <button
                      onClick={() => decrementItem(item.id)}
                      className="md:px-3 px-1 py-1.5 hover:bg-gray-100 text-black transition-colors"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="md:px-3 px-1.5 py-1 font-semibold text-black  md:text-[14px] text-12">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => incrementItem(item.id)}
                      className="md:px-3 px-1.5 py-1 hover:bg-gray-100 text-black transition-colors  md:text-[14px] text-12"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:bg-red-50 p-1 rounded transition-colors  md:text-[14px] text-12"
                  >
                    <Trash2 size={18} />
                  </button>
                  <span className="font-bold text-black lg:text-lg text-[12px]">
                    RS {item.price * item.quantity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-6 ">
          <div className="flex justify-between lg:text-xl text-[16px] font-bold mb-4 text-black">
            <span>Subtotal:</span>
            <span className="text-[#FF4D30]">Rs {subtotal}</span>
          </div>
          <Link
            href="/checkout"
            onClick={onClose}
            className="block w-full bg-[#FF4D30] text-white py-4 rounded-full font-bold md:text-lg text-[16px] hover:bg-[#e6452b] transition-colors shadow-lg active:scale-95 text-center"
          >
            Checkout
          </Link>
          <Link
            href="/order"
            className="mt-3 block w-full  text-black hover:underline py-2 rounded-full md:text-lg text-[14px] text-center hover:bg-[#FFF1EE] transition-colors"
          >
            Continue Ordering
          </Link>
        </div>
      </div>
    </div>
  );
}