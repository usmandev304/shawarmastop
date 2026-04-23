'use client';
import Image from 'next/image';
import menu from '../../images/download/menu.svg'
export default function DownloadMenu() {
    return (
        <>
    <section className="bg-[#F95233] flex justify-center items-center py-[70px] px-4">
  <div className="relative w-full max-w-[1200px]">
    <Image
      src={menu}
      alt="menu"
      className="w-full h-auto object-contain"
    />
  </div>
</section>
        </>
    )
}