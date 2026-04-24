import Image from "next/image";
import { getBranchByIndex } from "@/app/data/branchLocations";
import LocationAddressBadge from "./LocationAddressBadge";
import DeliveryMapGraphic from "./DeliveryMapGraphic";
import OrderStoreSectionDivider from "./OrderStoreSectionDivider";

type OrderLocationStoreHeroProps = {
  branchIndex: number;
};

export default function OrderLocationStoreHero({ branchIndex }: OrderLocationStoreHeroProps) {
  const branch = getBranchByIndex(branchIndex);
  const area =
    branch.id === "lake-city"
      ? "Lake City"
      : branch.id === "dha"
        ? "DHA"
        : branch.id === "pia"
          ? "PIA"
          : branch.id === 'gullbery'
            ? "Gulberg"
            : "Karachi";

  return (
    <section className="relative w-full min-h-[min(520px,80vh)] overflow-hidden bg-neutral-900">
      <div className="absolute inset-0 z-0">
        <Image
          src={branch.image}
          alt={branch.title}
          fill
          className="object-cover"
          style={{ objectPosition: branch.focal }}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-[#1a0a00]/40" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1470px] flex-col gap-10 px-4 pb-0 pt-12 md:px-10 md:pt-16 lg:pt-20">
        <p className="text-center text-sm font-medium text-white/95 md:text-base">
          We deliver within 7KM of branch.
        </p>

        <div className="flex flex-col items-stretch justify-between gap-10 md:flex-row md:items-end">
          <div className="flex-1 min-w-0">
            <LocationAddressBadge
              branchName={branch.title}
              address={branch.addressBadge}
              mapUrl={branch.mapUrl}
            />
          </div>
          <div className="flex flex-1 justify-end md:justify-end">
            <DeliveryMapGraphic areaLabel={area} />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 w-full">
        <OrderStoreSectionDivider />
      </div>
    </section>
  );
}
