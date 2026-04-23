import Footer from "../home/footer";
// import OrderLocationStoreHero from "../order/components/OrderLocationStoreHero";
import lake from '../../images/lakecity/lake.png'
import Image from "next/image";
import Shawarmastop from '../../images/lakecity/Shawarmastop.png'
import { Poppins } from 'next/font/google';
import Main from "./components/main";
import SectionHeader from "../home/components/sectionHeader";
import props from '../../images/home-mainSection/props.png';
import MainSection from "./main";
 

const poppins = Poppins({ subsets: ['latin'], weight: ['600'] });

export default function LakeCityStorePage() {
  return (
    <>
      <Image src={lake} alt="Lake City" className="h-full w-full object-contain" priority />
      <div className={`${poppins.className} mx-auto flex max-w-[840px] flex-col items-center px-4`}>
        <Main
          logo={Shawarmastop}
          title="Lake City Welcomes a Flavor Destination"
          description="Shawarma Stop brings its signature taste to Lake City's Commercial Area, offering a perfect blend of quality, flavor, and convenience. Designed for food lovers, this branch serves freshly made shawarmas prepared with premium ingredients, authentic spices, and unmatched taste. With its quick service, inviting ambiance, and consistent quality, it's the ideal destination for casual dining, family visits, and grab-and-go cravings. Whether you're stopping by for a quick bite or a satisfying meal, Shawarma Stop promises a delicious experience every time."
          ctaLabel="Order Now"
          ctaHref="/order"
          openingHoursTitle="Opening Hours"
          openingHoursText="Monday - Sunday: 12: 30 PM - 2:00 AM"
          phoneTitle="Phone Number"
          phoneText="For Order call at: 0314 4445074"
        />
      </div>
      <div>
        <SectionHeader
          badgeImage={props}
          title="Our Food Gallery"
          description={
            < div className={`${poppins.className} font-[400] text-[16px] leading-[19.8px] font-[200] text-black max-w-[780px] px-4`}>
              <p className="font-[200]">Explore our Gallery and discover our freshly made favorites. For more delicious updates, follow us on Instagram{" "}
                <span className="text-[#FF5733] font-[500]">
                  <a href="https://www.instagram.com/shawarmastop/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @shawarmastop.
                  </a>
                </span>
              </p>
            </div>
          }
        />
      <MainSection />
      </div>
      {/* < branchIndex={lakeCityBranchIndex} /> */}
      <Footer />
    </>
  );
}
