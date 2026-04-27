"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/app/context/CartContext";


export default function OrdersPage() {
  const { cartItems, itemCount, subtotal, incrementItem, decrementItem, removeItem } =
    useCart();
  const isEmpty = cartItems.length === 0;

  if (isEmpty) {
    return (
      <>
        <main className="px-4 pt-15 max-w-[1387px] mx-auto">
          <h1 className="lg:text-[24px] font-bold text-[#000000] mb-6">Orders</h1>

          <div className="bg-white border border-gray-100 rounded-2xl min-h-[360px] flex flex-col items-center justify-center p-8 md:p-20 text-center">
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50"
              aria-hidden
            >
              <div className="bg-[#F3F4F6] rounded-full p-2">
                <ShoppingBag className="h-9 w-9 text-gray-500" strokeWidth={1.5} />
              </div>
            </div>
            <p className="text-xl font-bold text-[#2d2a26] mb-1">No orders yet</p>
            <p className="lg:text-[16px] text-gray-400 mb-6">Go to store to place an order</p>
            <Link
              href="/order"
              className="inline-flex items-center justify-center bg-[#FF5232] text-white px-10 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity lg:text-[16px] text-[14px]"
            >
              Browse Menu
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <main className="px-4 pt-15 max-w-[1387px] mx-auto">
        <h1 className="lg:text-[24px] font-bold text-[#000000] mb-6">Orders</h1>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8">
          <p className="text-sm text-gray-500 mb-6">
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </p>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row gap-4 border-b border-gray-100 pb-6 last:border-0 last:pb-0"
              >
                <div className="w-full sm:w-28 h-40 sm:h-28 relative rounded-lg bg-gray-100 overflow-hidden shrink-0 mx-auto sm:mx-0 max-w-[200px] sm:max-w-none">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-black text-lg mb-1">{item.name}</h2>
                  <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                    {typeof item.description === "string"
                      ? item.description
                      : "Freshly prepared and full of flavor."}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center border rounded-md border-gray-300 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => decrementItem(item.id)}
                        className="px-3 py-1.5 hover:bg-gray-100 text-black transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 py-1.5 font-semibold text-black border-x border-gray-300 min-w-12 text-center">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => incrementItem(item.id)}
                        className="px-3 py-1.5 hover:bg-gray-100 text-black transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:bg-red-50 p-2 rounded transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                      <span className="font-bold text-black tabular-nums">
                        RS {item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xl font-bold text-black">
              Subtotal:{" "}
              <span className="text-[#FF4D30]">Rs {subtotal}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/order"
                className="inline-flex justify-center bg-white border border-gray-200 text-[#2d2a26] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Add more
              </Link>
              <Link
                href="/checkout"
                className="inline-flex justify-center bg-[#FF5232] text-white px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </main>

    </>
  );
}
