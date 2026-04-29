import Image from 'next/image';
import about from '../../images/about/img1.png'
import { Poppins } from 'next/font/google';
import MainAboutSection from './mainAboutSection';
import Link from 'next/link';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700']
});

export default function About() {
    return (
        <>
            <div className="relative w-full overflow-hidden bg-[#f95233] px-4 py-10 md:p-[60px]">
                <div className={`${poppins.className} mx-auto flex w-full max-w-[1330px] flex-col-reverse items-center gap-10 md:flex-row lg:items-center md:justify-between`}>
                    {/* Left Content */}
                    <div className="flex w-full min-w-0 flex-col gap-8 lg:max-w-[55%]">
                        <div className="flex w-full flex-col gap-4 text-white">
                            <p className="text-[18px] leading-[28px] md:text-[20px]">Craving&apos;s Story</p>
                            <div className="capitalize leading-tight ">
                                <p className="mb-0 text-[clamp(2rem,8vw,5rem)] font-[700] leading-[1.1] lg:text-[4.8vw] md:text-[5vw] lg:leading-[90px] md:leading-[60px]">{`Savour the `}</p>
                                <p className={`${poppins.className} mb-0 text-[clamp(2rem,8vw,5rem)] font-[700] leading-[1.1] lg:text-[4.8vw] md:text-[5vw] lg:leading-[90px] md:leading-[60px]`}>Shawarma Stop</p>
                                <p className="text-[clamp(2rem,8vw,5rem)] font-[700] leading-[1.1] lg:text-[4.8vw] md:text-[5vw] lg:leading-[90px] md:leading-[60px]">Difference</p>
                            </div>
                            <p className="max-w-xl lg:max-w-[590px] lg:text-[19px] md:text-[17px] text-[15px] leading-[26px] md:leading-[28px]">
                                Dive into a world of delicious flavors and ethical sourcing practices. Our commitment to quality ensures every bite is as good as it looks.
                            </p>
                        </div>
                        <div className="flex w-full justify-start">
                            <div className="flex h-[56px] w-full lg:max-w-[289px] md:max-w-[220px] max-w-[400px] items-center justify-center rounded-[30px] bg-white lg:px-8 md:px-5 md:py-4 lg:h-[60px] md:h-[50px]">
                                <Link href="/contact" className="text-center text-[18px] font-medium not-italic text-[#f95233] md:text-[20px] cursor-pointer">Contact Us</Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Phone Mockup Composition */}
                    <div className="flex w-full max-w-md justify-center lg:max-w-none lg:justify-end">
                        <Image
                            src={about}
                            alt="about"
                            // width={538}
                            height={654}
                            className="h-auto w-full object-contain lg:w-[34vw]"
                        />
                    </div>
                </div>
            </div>
            <div className={`${poppins.className} mx-auto grid w-full max-w-[1487px] grid-cols-2 gap-6 px-4 text-center lg:mt-20 md:mt-16 lg:mb-[118px] md:mb-[80px] sm:mb-[50px] mb-[40px] md:grid-cols-4 md:gap-4 md:leading-[50px] lg:leading-[80px]`}>

                <div>
                    <h1 className='lg:text-[84px] md:text-[70px] sm:text-[50px] text-[40px] text-[#F95233] font-bold'>10+</h1>
                    <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] text-[#F95233]'>YEARS OF EXPERIENCE</p>
                </div>

                <div>
                    <h1 className='lg:text-[84px] md:text-[70px] sm:text-[50px] text-[40px] text-[#F95233] font-bold'>500+</h1>
                    <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] text-[#F95233]'>ORDER HANDLE</p>
                </div>

                <div>
                    <h1 className='lg:text-[84px] md:text-[70px] sm:text-[50px] text-[40px] text-[#F95233] font-bold'>04</h1>
                    <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] text-[#F95233]'>RESTAURANTS BRANCHES</p>
                </div>

                <div>
                    <h1 className='lg:text-[84px] md:text-[70px] sm:text-[50px] text-[40px] text-[#F95233] font-bold'>100%</h1>
                    <p className='lg:text-[20px] md:text-[18px] sm:text-[16px] text-[12px] text-[#F95233]'>SATISFIED CUSTOMER</p>
                </div>

            </div>
            <MainAboutSection />
        </>
    );
}
