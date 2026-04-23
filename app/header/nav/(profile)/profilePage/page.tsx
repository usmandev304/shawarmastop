"use client";

import { useState, useCallback } from "react";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

const MEMBER_SINCE = "Customer since April 2026";

const initialProfile = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+92123456789",
  address: "123 Main Street, Punjab Small Industry",
};

type ProfileData = typeof initialProfile;

export default function ProfilePage() {
  const { itemCount, subtotal } = useCart();
  const [saved, setSaved] = useState<ProfileData>(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<ProfileData>(initialProfile);

  const startEdit = useCallback(() => {
    setForm({ ...saved });
    setIsEditing(true);
  }, [saved]);

  const cancelEdit = useCallback(() => {
    setForm({ ...saved });
    setIsEditing(false);
  }, [saved]);

  const saveEdit = useCallback(() => {
    setSaved({ ...form });
    setIsEditing(false);
  }, [form]);

  const inputClass =
    "mt-0.5 w-full max-w-md rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-bold text-[#1a1a1a] outline-none focus:border-[#FF5232] focus:ring-1 focus:ring-[#FF5232]";

  return (
    <main className="px-4 pt-15 pb-10 max-w-[987px] mx-auto">
      <h1 className="lg:text-[24px] text-xl font-bold text-[#000000] mb-6">Profile</h1>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <div className="bg-[#FF5232] px-6 py-8 md:px-8 md:py-10">
          <div className="flex items-center gap-4 md:gap-6">
            <div
              className="flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-full border-2 border-white/90 bg-white/10"
              aria-hidden
            >
              <User className="h-8 w-8 md:h-10 md:w-10 text-white" strokeWidth={1.5} />
            </div>
            <div className="min-w-0 flex-1">
              {isEditing ? (
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full max-w-sm rounded-lg border border-white/50 bg-white/15 px-3 py-2 text-lg font-bold text-white placeholder:text-white/60 md:text-2xl outline-none focus:bg-white/25 focus:ring-2 focus:ring-white/40"
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
              ) : (
                <p className="text-xl md:text-2xl font-bold text-white">{saved.name}</p>
              )}
              <p className="mt-1 text-sm md:text-base text-white/90">{MEMBER_SINCE}</p>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 md:px-8 md:py-8 space-y-6">
          <div className="flex gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100"
              aria-hidden
            >
              <Mail className="h-5 w-5 text-gray-600" strokeWidth={1.8} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500">Email</p>
              {isEditing ? (
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className={inputClass}
                  autoComplete="email"
                />
              ) : (
                <p className="text-sm font-bold text-[#1a1a1a] mt-0.5">{saved.email}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100"
              aria-hidden
            >
              <Phone className="h-5 w-5 text-gray-600" strokeWidth={1.8} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500">Phone</p>
              {isEditing ? (
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                  className={inputClass}
                  autoComplete="tel"
                />
              ) : (
                <p className="text-sm font-bold text-[#1a1a1a] mt-0.5">{saved.phone}</p>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100"
              aria-hidden
            >
              <MapPin className="h-5 w-5 text-gray-600" strokeWidth={1.8} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-gray-500">Delivery Address</p>
              {isEditing ? (
                <textarea
                  value={form.address}
                  onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                  rows={3}
                  className={`${inputClass} resize-y min-h-20 font-bold`}
                  autoComplete="street-address"
                />
              ) : (
                <p className="text-sm font-bold text-[#1a1a1a] mt-0.5 leading-relaxed">
                  {saved.address}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {isEditing ? (
              <>
                <button
                  type="button"
                  onClick={saveEdit}
                  className="inline-flex items-center justify-center rounded-full bg-[#FF5232] px-8 py-2.5 text-sm font-medium text-white hover:opacity-95 transition-opacity"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-8 py-2.5 text-sm font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={startEdit}
                className="inline-flex items-center justify-center rounded-full bg-[#FF5232] px-8 py-2.5 text-sm font-medium text-white hover:opacity-95 transition-opacity"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white py-8 px-4 text-center shadow-sm">
          <p className="text-3xl md:text-4xl font-bold text-[#FF5232] tabular-nums">
            {itemCount}
          </p>
          <p className="mt-2 text-sm text-gray-500">Total Orders</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white py-8 px-4 text-center shadow-sm">
          <p className="text-3xl md:text-4xl font-bold text-[#FF5232] tabular-nums">
            Rs {subtotal}
          </p>
          <p className="mt-2 text-sm text-gray-500">Total Spent</p>
        </div>
      </div>
    </main>
  );
}
